<template>
    <Card>
        <template #header="exts" v-if="props.title">
            <h3 :class="exts.headerClass">{{props.title}}</h3>
        </template>
        <template #content>
            <canvas ref="canvas" :style="Style"/>
        </template>
        <template #footer="exts" v-if="props.showRefresh!=null&&props.showRefresh!=undefined&&props.showRefresh">
            <ButtonRefresh v-bind="exts" v-on:click="Refresh"/>
        </template>
    </Card>
</template>

<script lang="ts">
    import { watch, computed, onMounted, ref,inject } from 'vue';
    import Card from '../layout/card.vue';
    import ButtonRefresh from './button-refresh.vue';
    import 'jquery';
    import {ChartTypes,ChartLegendPositions} from '../enums';
    import { useChartJS } from '../shared';
import { loadNonEs6Module } from '../utilities';
</script>

<script lang="ts" setup>
    const chartURL = `${useChartJS(inject)}chart.umd.min.js`;

    const canvas = ref<any>(null);

    const props = withDefaults(defineProps<{
        labels?:string[], 
        datasets:unknown[], 
        type?:ChartTypes, 
        title?:string, 
        showRefresh?:boolean, 
        width?:number, 
        height?:number, 
        legendPosition?:ChartLegendPositions, 
        scales?:unknown[], 
        tooltips?:unknown
    }>(),{
        legendPosition:ChartLegendPositions.right
    });
    const emit = defineEmits<{
        legendItemClick: [chart:unknown,legendItem:unknown]
    }>();

    let chart : any|null = null;

    const Refresh = () => {
        if (chart != null)
            chart.update();
    };
    const Style = computed(() => {
        var ret = '';
        if (props.width) {
            ret = `width:${props.width}px;`;
        }
        if (props.height) {
            ret += `height:${props.height}px;`;
        }
        return ret;
    });

    watch([props.type], (val) => {
        if (chart != null)
            chart.type = (val == null ? 'line' : val);
    });
    watch([props.labels],
        (value) => {
            if (chart != null) {
                chart.data.labels = value;
                if (props.showRefresh == null || !props.showRefresh) {
                    Refresh();
                }
            }
        },
        { deep: true }
    );
    watch([props.datasets],
        (value) => {
            if (chart != null) {
                chart.data.datasets = value;
                if (props.showRefresh == null || !props.showRefresh) {
                    Refresh();
                }
            }
        },
        { deep: true }
    );

    onMounted(async () => {
        let opts :any = {
            responsive: true,
            animation: {
                duration: 100
            },
            plugins: {
                legend: {
                    position: `${props.legendPosition}`,
                    labels: {
                        filter: (item, chrt) => {
                            return item.text != undefined;
                        }
                    },
                    onClick: function (e, legendItem) {
                        emit('legendItemClick',chart,legendItem);
                    }
                }
            }
        };

        if (props.scales!= null && props.scales != undefined) {
            opts.scales = props.scales;
        }
        if (props.tooltips != null && props.tooltips != undefined) {
            opts.tooltips = props.tooltips;
        }
        const { Chart } = await loadNonEs6Module(chartURL,['Chart']);
        chart = new Chart(canvas.value.getContext('2d'), {
            type: (props.type == null ? 'line' : props.type),
            data: {
                datasets: props.datasets,
                labels: props.labels
            },
            options: opts
        });
        chart.update();
    });
</script>