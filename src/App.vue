<template>
    <div id="app">
        <div>
            <select v-model="selectedView">
                <option>month</option>
                <option>day</option>
                <option>week</option>
            </select>
            <button @click="changeThemeMonth">changeThemeMonth</button>
            <button @click="changeThemeWeek">changeThemeWeek</button>
            <button @click="changeDisableDblClick">changeDisableDblClick</button>
            <button @click="changeIsReadOnly">changeIsReadOnly</button>
            <button @click="popTimezone">popTimezone</button>
            <button @click="pushTimezone">pushTimezone</button>
            <button @click="changeTheme">changeTheme</button>
            <button @click="monthVisibleWeeksCount">month.visibleWeeksCount</button>
            <button @click="weekChange">week</button>
            <button @click="changeTaskView">changeTaskView</button>
            <button @click="changeScheduleView">changeScheduleView</button>
            <button @click="addSchedule">addSchedule</button>
            <button @click="removeSchedule">removeSchedule</button>
            <button @click="addCategory">addCategory</button>
        </div>
        <div>
            <button v-for="method in methods" :key="method.name" @click="methodInvoke(method)">
                {{ method.name }}
            </button>
            <p>Function Result : {{ message }}</p>
        </div>
        <calendar style="height: 800px"
            id="cal"
            ref="tuiCal"
            :useDetailPopup="useDetailPopup"
            :view="selectedView"
            :calendars="calendarList"
            :schedules="scheduleList"
            :theme="theme"
            :template="template"
            :taskView="true"
            :scheduleView="['time']"
            :month="month"
            :week="week"
            :timezones="timezones"
            :disableDblClick="disableDblClick"
            :isReadOnly="isReadOnly"
            @afterRenderSchedule="onAfterRenderSchedule"
            @beforeCreateSchedule="onBeforeCreateSchedule"
            @beforeDeleteSchedule="onBeforeDeleteSchedule"
            @beforeUpdateSchedule="onBeforeUpdateSchedule"
            @clickDayname="onClickDayname"
            @clickSchedule="onClickSchedule"
            @clickTimezonesCollapseBtn="onClickTimezonesCollapseBtn"
        />
    </div>
</template>

<script>
import 'tui-calendar/dist/tui-calendar.css'
import { Calendar } from '@toast-ui/vue-calendar';

// require('tui-calendar/dist/tui-calendar.css');
// const toastui = require('@toast-ui/vue-calendar');
// const Calendar = toastui.Calendar;

const startDate= new Date(2018, 9, 15, 10, 1);
const endDate= new Date(2018, 9, 15, 10, 10);

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}

export default {
    name: 'App',
    components: {
        'calendar': Calendar
    },
    data() {
        return {
            message: '',
            methods: [
                {
                    name: 'prev',
                    args: []
                },
                {
                    name: 'next',
                    args: []
                },
                {
                    name: 'today',
                    args: []
                },
                {
                    name: 'getDate',
                    args: []
                },
                {
                    name: 'getOptions',
                    args: []
                },
                {
                    name: 'getElement',
                    args: ['0', '0']
                }
            ],
            selectedView: 'month',
            calendarList: [{
                id: '0',
                name: 'my'
            }],
            scheduleList: [
                {
                    id: '1',
                    calendarId: '1',
                    title: 'my schedule',
                    category: 'time',
                    dueDateClass: '',
                    start: '2018-10-18T22:30:00+09:00',
                    end: '2018-10-19T02:30:00+09:00'
                },
                {
                    id: '2',
                    calendarId: '1',
                    title: 'second schedule',
                    category: 'time',
                    dueDateClass: '',
                    start: '2018-10-18T17:30:00+09:00',
                    end: '2018-10-19T17:31:00+09:00',
                    isReadOnly: true    // schedule is read-only
            }],
            timezones: [{
                timezoneOffset: 540,
                displayLabel: 'GMT+09:00',
                tooltip: 'Seoul'
            }, {
                timezoneOffset: -420,
                displayLabel: 'GMT-08:00',
                tooltip: 'Los Angeles'
            }],
            theme: {
                'month.dayname.height': '30px',
                'month.dayname.borderLeft': '1px solid #ff0000',
                'month.dayname.textAlign': 'center',
                'month.holidayExceptThisMonth.color': 'rgba(255, 64, 64, 0.4)',
                'week.today.color': '#333',
                'week.daygridLeft.width': '100px',
                'week.timegridLeft.width': '100px'
            },
            template: {
                milestone: function(schedule) {
                    return `<span style="color:red;">${schedule.title}</span>`;
                },
                milestoneTitle: function() {
                    return '마일스톤';
                },
            },
            month: {
                visibleWeeksCount: 6,
                startDayOfWeek: 1
            },
            week: {
                narrowWeekend: true,
                showTimezoneCollapseButton: true,
                timezonesCollapsed: false
            },
            taskView: true,
            scheduleView: true,
            useDetailPopup: true,
            disableDblClick: true,
            isReadOnly: false,
            sid: 1,
            cid: 0
        };
    },
    methods: {
        changeThemeMonth() {
            this.theme['month.dayname.height'] = '10px';
            this.theme['month.dayname.textAlign'] = 'left';
        },
        changeThemeWeek() {
            this.theme['week.today.color'] = '#f00';
            this.theme['week.today.backgroundColor'] = '#fee';
        },
        changeIsReadOnly() {
            this.isReadOnly = !this.isReadOnly;
        },
        changeDisableDblClick() {
            this.disableDblClick = !this.disableDblClick;
        },
        popTimezone() {
            this.timezones.pop();
        },
        pushTimezone() {
            this.timezones.push({
                timezoneOffset: -120,
                displayLabel: 'GMT-20:00',
                tooltip: 'Los Angeles'
            });
        },
        changeTheme() {
            this.theme = Object.assign({}, this.theme, {
                'common.dayname.color': '#0f0'
            });
        },
        monthVisibleWeeksCount() {
            this.month.visibleWeeksCount = 2;
            this.month.startDayOfWeek = 3;
        },
        weekChange() {
            this.week.narrowWeekend = !this.week.narrowWeekend;
            this.week.showTimezoneCollapseButton = !this.week.showTimezoneCollapseButton;
            this.week.timezonesCollapsed = !this.week.timezonesCollapsed;
        },
        changeTaskView() {
            if (typeof this.taskView === 'boolean') {
                if (this.taskView) {
                    this.taskView = !this.taskView;
                } else {
                    this.taskView = ['milestone', 'task'];
                }
            } else if (this.taskView.length > 0) {
                if (this.taskView.length === 2)  {
                    this.taskView.pop();
                } else if (this.taskView[0] === 'milestone') {
                    this.taskView.splice(0, 1, 'task');
                } else {
                    this.taskView = true;
                }
            } 
        },
        changeScheduleView() {
            if (typeof this.scheduleView === 'boolean') {
                if (this.scheduleView) {
                    this.scheduleView = !this.scheduleView;
                } else {
                    this.scheduleView = ['allday', 'time'];
                }
            } else if (this.scheduleView.length > 0) {
                if (this.scheduleView.length === 2)  {
                    this.scheduleView.pop();
                } else if (this.scheduleView[0] === 'allday') {
                    this.scheduleView.splice(0, 1, 'time');
                } else {
                    this.scheduleView = true;
                }
            } 
        },
        addSchedule() {
            this.scheduleList.push({
                id: ++this.sid,
                calendarId: '0',
                title: 'new Action ' + this.sid,
                category: 'time',
                start: addDays(startDate, this.sid),
                end: addDays(endDate, this.sid)
            })
        },
        removeSchedule() {
            this.scheduleList.pop();
        },
        addCategory() {
            this.calendarList.push({
                id: ++this.cid,
                name: 'category '+ this.cid
            });
        },
        methodInvoke(method) {
            this.message = this.$refs.tuiCal.invoke(method.name, ...method.args);
        },
        onAfterRenderSchedule(e) {
            console.log('onAfterRenderSchedule');
            console.dir(e);
        },
        onBeforeCreateSchedule(e) {
            console.log('onBeforeCreateSchedule');
            console.dir(e);
            e.id = ++this.sid;
            e.category = e.isAllDay ? 'allday' : 'time';
            this.scheduleList.push(e);
        },
        onBeforeDeleteSchedule(e) {
            console.log('onBeforeDeleteSchedule');
            console.dir(e);
            this.scheduleList.splice(e.schedule.id, 1);
        },
        onBeforeUpdateSchedule(e) {
            console.log('onBeforeUpdateSchedule');
            console.dir(e);
            e.schedule.start = e.start;
            e.schedule.end = e.end;
            // this.$refs.tuiCal.invoke('updateSchedule', e.schedule.id, e.schedule.calendarId, e.schedule);
            this.scheduleList.splice(e.schedule.id, 1, e.schedule);
        },
        onClickDayname(e) {
            console.log('onClickDayname');
            console.dir(e);
        },
        onClickSchedule(e) {
            console.log('onClickSchedule');
            console.dir(e);
        },
        onClickTimezonesCollapseBtn(e) {
            console.log('onClickTimezonesCollapseBtn');
            console.dir(e);
            if (e) {
                this.theme['week.timegridLeft.width'] = '100px';
                this.theme['week.daygridLeft.width'] = '100px';
            } else {
                this.theme['week.timegridLeft.width'] = '50px';
                this.theme['week.daygridLeft.width'] = '50px';
            }
        }
    }
};
</script>
<style>
</style>
