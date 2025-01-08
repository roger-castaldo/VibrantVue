<template>
    <div>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-expanded" :name="props.name" :id="props.name" type="text" v-model="value" :placeholder="'DD-MM-YYYY'+(props.includeTime ? ' HH:mm' : '')" :disabled="props.disabled">
            <span class="icon is-small is-left is-clickable" @click="calendarClicked">
                <Icon icon="calendar-alt"/>
            </span>
            <span class="icon is-small is-right is-clickable" @click="cancelClicked">
                <Icon icon="window-close"/>
            </span>
        </div>
        <div class="modal" :class="{'is-active':showInterface}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="panel is-primary is-dateselect">
                    <div class="panel-heading">
                        <div class="columns card-header-title">
                            <div class="column"><icon icon="arrow-circle-left" @click="MoveMonth(-1)"/></div>
                            <div class="column has-text-centered">{{MonthName}} {{calendar.Year}}</div>
                            <div class="column has-text-right"><icon icon="arrow-circle-right" @click="MoveMonth(1)"/></div>
                        </div>
                    </div>
                    <div class="panel-block">
                        <table class="table is-striped has-text-centered">
                            <thead>
                                <tr>
                                    <th>{{Messages.Sun}}</th>
                                    <th>{{Messages.Mon}}</th>
                                    <th>{{Messages.Tue}}</th>
                                    <th>{{Messages.Wed}}</th>
                                    <th>{{Messages.Thu}}</th>
                                    <th>{{Messages.Fri}}</th>
                                    <th>{{Messages.Sat}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="week in Weeks">
                                    <td v-for="day in week" :class="['is-unselectable',(day.Disabled ? 'has-text-primary-dark has-background-primary-light' : 'is-clickable'),(day.isToday ? 'has-background-primary-dark' : ''),(day.isSelected ? 'has-background-success-dark' : '')]" @click="selectDate(day)">
                                        {{day.Number}}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot v-if="props.includeTime">
                                <tr>
                                    <td colspan="100%" class="has-text-centered">
                                        <Time :ref="time" :name="`${props.name}-time`" :disabled="props.disabled" @valueChanged="processTimeChange"/>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="panel-block">
                        <ButtonOkay addonclass="card-footer-item" :disabled="!isValid" @click="showInterface=false"/>
                        <ButtonCancel addonclass="card-footer-item" @click="cancel"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {addDays,format,padLeft} from './dates';
    import { ref, reactive, watch, readonly,computed,inject } from 'vue';
    import { Icon, ButtonOkay, ButtonCancel } from '../common/';
    import Time from './time.vue';
    import translate from '../../messages/messages.js';
    import { ValueChangedEvent } from './typeDefinitions';
    import { coreFieldProps } from './common';
    import { useLanguage } from '../shared';

    const regDate = RegExp('^(\\d{2})-(\\d{2})-(\\d{4})$');
    const regDateTime = RegExp('^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$');

    type CalendarDay = {
        Number:number,
        Disabled: boolean,
        isToday: boolean,
        isSelected:boolean
    };

    interface fieldProps extends coreFieldProps {
        /**
         * Label to use
         */
        label:string;
        /**
         * Indicates if this is for a date and time or just a date
         */
        includeTime?:boolean;
    }
</script>

<script lang="ts" setup>
/**
 * A date input used in a form
 * 
 * @displayName Date
 */
    const time = ref(null);

    const props = withDefaults(defineProps<fieldProps>(),{
        disabled:false
    });

    const emit = defineEmits<{
        /**
         * Emitted when the value has changed
         * 
         * @param data ValueChangedEvent
         */
         valueChanged:[data:ValueChangedEvent]
    }>();

    const showInterface = ref<boolean>(false);
    const value = ref<string|null>(null);
    const preValue = ref<string|null>(null);
    const calendar = reactive({
        Month: new Date().getMonth(),
        Year: new Date().getFullYear(),
        Today: new Date().getDay()
    });

    const Language = useLanguage(inject);

    const Messages = readonly({
        Sun: computed(()=>(translate('Date.Weekdays.Sun',Language))),
        Mon: computed(()=>(translate('Date.Weekdays.Mon',Language))),
        Tue: computed(()=>(translate('Date.Weekdays.Tue',Language))),
        Wed: computed(()=>(translate('Date.Weekdays.Wed',Language))),
        Thu: computed(()=>(translate('Date.Weekdays.Thu',Language))),
        Fri: computed(()=>(translate('Date.Weekdays.Fri',Language))),
        Sat: computed(()=>(translate('Date.Weekdays.Sat',Language))),
    });

    const isValid = computed<boolean>(() => {
        return value.value!==null 
            && (props.includeTime ? regDateTime : regDate).test(value.value);
    });

    const getValue= ():Date|null=> {
        if (value.value == null || value.value == '') {
            return null;
        } else {
            if (!regDateTime.test(value.value) && props.includeTime) {
                return null;
            } else if (!props.includeTime && !regDate.test(value.value)) {
                return null;
            } else if (regDate.test(value.value) && props.includeTime) {
                return null;
            }
            let tmp = (props.includeTime ? regDateTime.exec(value.value) : regDate.exec(value.value));
            return new Date(parseInt(tmp[3]), parseInt(tmp[2]) - 1, parseInt(tmp[1]),
                (props.includeTime ? parseInt(tmp[4]) : 0),
                (props.includeTime ? parseInt(tmp[5]) : 0), 0, 0);
        }
    };

    watch(value, (val) => {
        if (val == null) {
            emit('valueChanged', { name: props.name, value: null });
            calendar.Month = new Date().getMonth();
            calendar.Year = new Date().getFullYear();
        } else {
            if (!regDate.test(val) && !regDateTime.test(val)) {
                val = val.replaceAll(/[^0-9]/g, '');
                var tmp = [];
                for (var x = 0; x < val.length; x += 2) {
                    if (x == 4) {
                        tmp.push(val.substring(x, Math.min(val.length - x, 4) + x));
                        x += 2;
                    } else {
                        tmp.push(val.substring(x, Math.min(val.length - x, 2) + x));
                    }
                }
                if (tmp.length > 0) {
                    if (!/^([0-1]|(0[1-9])|(1[0-2]))$/.test(tmp[0]))
                        tmp.splice(0);
                    if (tmp.length > 1) {
                        if (!/^[0-3]/.test(tmp[1])) {
                            tmp.splice(1);
                        } else {
                            if (/^(01|03|05|07|08|10|12)$/.test(tmp[0])) {
                                if (!/^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(tmp[1])) {
                                    tmp.splice(1);
                                }
                            } else if (/^(02|04|06|09|11)$/.test(tmp[0])) {
                                if (!/^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(tmp[1])) {
                                    tmp.splice(1);
                                }
                            } else if (!/^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(tmp[1])) {
                                tmp.splice(1);
                            }
                        }
                    }
                    if (tmp.length > 3) {
                        if (!/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(tmp[3])) {
                            tmp.splice(3);
                        }
                    }
                    if (tmp.length > 4) {
                        if (!/^[0-5][0-9]?$/.test(tmp[4])) {
                            tmp.splice(4);
                        }
                    }
                }
                val = tmp.join('');
                if (!props.includeTime && val.length > 8) {
                    val = val.substring(0, 8);
                }
                if (val.length >= 2) {
                    val = val.substring(0, 2) + '-' + (val.length > 2 ? val.substring(2) : '');
                }
                if (val.length >= 5) {
                    val = val.substring(0, 5) + '-' + (val.length > 5 ? val.substring(5) : '');
                }
                if (val.length >= 9 && props.includeTime) {
                    val = val.substring(0, 9) + ' ' + (val.length > 9 ? val.substring(9) : '');
                }
                if (val.length >= 11) {
                    val = val.substring(0, 11) + ':' + (val.length > 11 ? val.substring(11) : '');
                }
                value.value = val;
            } else {
                var d = getValue();
                if (isValid) {
                    emit('valueChanged', { name: props.name, value: d });
                }
                calendar.Month = d.getMonth();
                calendar.Year = d.getFullYear();
            }
        }
    });

    const MonthName = computed<string>(() => format(new Date(calendar.Year, calendar.Month, 1),Language,"MMMM"));
    const Weeks = computed<CalendarDay[][]>(() => {
        var ret:CalendarDay[][] = [];
        var date = new Date(calendar.Year, calendar.Month, 1);
        date = addDays(date,date.getDay() * -1);
        var curVal = getValue();
        var stopMonth = addDays(new Date(calendar.Year, calendar.Month, 1),32).getMonth();
        while (date.getMonth() != stopMonth) {
            var week = [];
            for (var x = 0; x < 7; x++) {
                week.push({
                    Number: date.getDate(),
                    Disabled: date.getMonth() != calendar.Month,
                    isToday: format(date,Language,'yyyy-MM-dd') == format(new Date(),Language,'yyyy-MM-dd'),
                    isSelected: (curVal != null && format(date,Language,'yyyy-MM-dd') == format(curVal,Language,'yyyy-MM-dd'))
                });
                date = addDays(date,1);
            }
            ret.push(week);
        }
        return ret;
    });

    const setValue = function (val:Date|null) {
        if (val == null) {
            value.value = null;
        } else {
            value.value = format(val,Language,'dd-MM-yyyy' + (props.includeTime ? ' HH:mm' : ''));
        }
    };

    defineExpose({ 
        /**
         * Gets the current value 
         */
        getValue, 
        /**
         * Sets the current value
         * 
         * @param value Date|null
         * @returns void
         */
        setValue 
    });

    const processTimeChange = (event:ValueChangedEvent):void=> {
        if (event.value == null) {
            if (value.value != null) {
                value.value = value.value.split(' ')[0];
            }
        } else {
            if (value.value != null) {
                value.value = value.value.split(' ')[0] + ' ' + event.value;
            } else {
                value.value = 
                    `${padLeft((calendar.Month == new Date().getMonth() ? new Date().getDate() : 1).toString(),'0',2)}-${padLeft((calendar.Month + 1).toString(),'0',2)}-${calendar.Year} ${event.value}`;
            }
        }
    };
    const selectDate = (day:CalendarDay):void=>{
        if (!day.Disabled && !day.isSelected) {
            if (value.value === null) {
                value.value = `${padLeft(day.Number.toString(),'0',2)}-${padLeft((calendar.Month+1).toString(),'0',2)}-${calendar.Year}`
                    + (props.includeTime ? (time.value.getValue() == null ? '' : ' ' + time.value.getValue()) : '');
            } else {
                var tmp = value.value.split(' ');
                tmp[0] = `${padLeft(day.Number.toString(),'0',2)}-${padLeft((calendar.Month+1).toString(),'0',2)}-${calendar.Year}`
                value.value = `${tmp[0]}${(tmp.length > 1 ? ' ' + tmp[1] : '')}`;
            }
        }
    };
    const cancel = ():void=>{
        value.value = preValue.value;
        showInterface.value = false;
    };
    const calendarClicked = ():void=>{
        if (!props.disabled){
            preValue.value=value.value;
            showInterface.value=true;
        }
    };
    const cancelClicked = ():void=> {
        if (!props.disabled) {
            value.value=null;
        }
    };
    const MoveMonth = (direction:number):void=>{
        if (calendar.Month + direction == -1) {
            calendar.Year = calendar.Year - 1;
            calendar.Month = 11;
        } else if (calendar.Month + direction == 12) {
            calendar.Year = calendar.Year + 1;
            calendar.Month = 0;
        } else {
            calendar.Month += direction;
        }
    };
</script>

<style>
.is-dateselect{
    width: 355px;
    margin-left: 130px;
}

.is-dateselect>.panel-block,
.is-dateselect>.panel-heading{
    padding:0;
}
</style>