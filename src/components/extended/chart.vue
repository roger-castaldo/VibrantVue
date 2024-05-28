<template>
    <Card>
        <template #header="exts" v-if="props.title">
            <h3 :class="exts.header_class">{{props.title}}</h3>
        </template>
        <template #content>
            <canvas ref="canvas" :style="Style"/>
        </template>
        <template #footer="exts" v-if="props.show_refresh!=null&&props.show_refresh!=undefined&&props.show_refresh">
            <ButtonRefresh :class="exts.addon_class" @click="Refresh"/>
        </template>
    </Card>
</template>

<script lang="ts">
    import { watch, computed, onMounted, ref,inject,MaybeRef } from 'vue';
    import Card from '../layout/card.vue';
    import ButtonRefresh from '../common/button-refresh.vue';
    import 'jquery';
    import {ChartTypes,ChartLegendPositions} from '../../enums';
    import { useChartJS } from '../shared';
import { loadNonEs6Module } from '../utilities';
</script>

<script lang="ts" setup>
/**
 * Used to create a ChartJS chart
 * 
 * @displayName Chart
 * @link https://www.chartjs.org/
 * @link_title Chart JS
 */
    const chartURL = `${useChartJS(inject)}chart.umd.min.js`;

    const canvas = ref<any>(null);

    const props = withDefaults(defineProps<{
        /**
         * The labels to use
         */
        labels?:string[], 
        /**
         * The data sets to supply
         */
        datasets:unknown[], 
        /**
         * The type of chart to render
         */
        type?:ChartTypes, 
        /**
         * The title for the chart
         */
        title?:string, 
        /**
         * Inidicates if a Refresh button should be supplied
         */
        show_refresh?:boolean, 
        /**
         * The width for the chart
         */
        width?:number, 
        /**
         * The height for the chart
         */
        height?:number, 
        /**
         * The position of the chart legend
         */
        legend_position?:ChartLegendPositions, 
        /**
         * The scales to supply to the chart
         */
        scales?:unknown[], 
        /**
         * The tooltips to supply to the chart
         */
        tooltips?:unknown
    }>(),{
        legend_position:ChartLegendPositions.right
    });
    const emit = defineEmits<{
        /**
         * Emitted when a legend item is clicked.  Supplies both the chart object and the legend item clicked
         */
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

    watch(()=>props.type, (val) => {
        if (chart != null)
            chart.type = (val == null ? 'line' : val);
    });
    watch(()=>props.labels,
        (value) => {
            if (chart != null) {
                chart.data.labels = value;
                if (props.show_refresh == null || !props.show_refresh) {
                    Refresh();
                }
            }
        },
        { deep: true }
    );
    watch(()=>props.datasets,
        (value) => {
            if (chart != null) {
                chart.data.datasets = value;
                if (props.show_refresh == null || !props.show_refresh) {
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
                    position: `${props.legend_position}`,
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