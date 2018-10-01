<template>
    <div id="combo">
        <chart
        ref="tuiChart"
        :data="chartData"
        :options="chartOptions"
        :theme="chartTheme"
        @load="onLoad"
        @selectLegend="onSelectLegend"
        @selectSeries="onSelectSeries"
        @unselectSeries="onUnselectSeries"
        @beforeShowTooltip="onBeforeShowTooltip"
        @afterShowTooltip="onAfterShowTooltip"
        @beforeHideTooltip="onBeforeHideTooltip"
        @zoom="onZoom"
        />
        <div>
            <h3>Function Test Buttons</h3>
            <button v-for="method in methodNames" :key="method" @click="methodInvoke(method)">
                {{ method }}
            </button>
            <p>Function Result : {{ message }}</p>
        </div>
    </div>
</template>
<script>
import { chartCombo } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    categories: ['Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
    series: {
        column: [
            {
                name: 'Seoul',
                data: [11.3, 17.0, 21.0, 24.4, 25.2, 20.4, 13.9]
            },
            {
                name: 'NewYork',
                data: [9.9, 16.0, 21.2, 24.2, 23.2, 19.4, 13.3]

            },

            {
                name: 'Sydney',
                data: [18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6]
            },
            {
                name: 'Moskva',
                data: [4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2]
            }
        ],
        line: [
            {
                name: 'Average',
                data: [11, 15.1, 17.8, 19.7, 19.5, 16.5, 12.3]
            }
        ]
    }
};
const options = {
    chart: {
        width: 1160,
        height: 540,
        title: '24-hr Average Temperature'
    },
    yAxis: [{
       title: 'Temperature (Celsius)',
       chartType: 'column',
       labelMargin: 15
    }, {
       title: 'Average',
       chartType: 'line',
       labelMargin: 15
    }],
    xAxis: [{
        title: 'Month'
    }],
    series: {
        line: {
            showDot: true
        }
    },
    tooltip: {
        grouped: true,
        suffix: '°C'
    }
};
const theme = {
    series: {
        column: {
            colors: [
                '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399'
            ]
        },
        line: {
            colors: ['#333']
        }
    }
};

export default {
    name: 'ComboChart',
    components: {
        'chart': chartCombo
    },
    mixins: [common],
    data() {
        return {
            chartData: data,
            chartOptions: options,
            chartTheme: theme
        }
    }
};
</script>
