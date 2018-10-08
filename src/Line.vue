<template>
    <div id="line">
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
            <button @click="addData">
                addData
            </button>
            <p>Function Result : {{ message }}</p>
        </div>
    </div>
</template>
<script>
import { lineChart, columnChart } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    categories: ['2015', '2016', '2017', '2018'],
    series: [
        {
            name: 'Seoul',
            data: [-3.5, -1.1, 4.0, 11.3]
        },
        {
            name: 'Seattle',
            data: [3.8, 5.6, 7.0, 9.1]
        },
        {
            name: 'Sydney',
            data: [22.1, 22.0, 20.9, 18.3]
        },
        {
            name: 'Moskva',
            data: [-10.3, -9.1, -4.1, 4.4]
        },
        {
            name: 'Jungfrau',
            data: [-13.2, -13.7, -13.1, -10.3]
        }
    ]
};
const options = {
    chart: {
        width: 500,
        height: 540,
        title: '24-hr Average Temperature'
    },
    yAxis: {
        title: 'Temperature (Celsius)',
        pointOnColumn: true
    },
    xAxis: {
        title: 'Years'
    },
    series: {
        showDot: false,
        zoomable: true
    },
    tooltip: {
        suffix: '°C'
    }
};
const theme = {
    series: {
        colors: [
            '#ff00ff', '#ffff00', '#00ff00', '#00ffff', '#0000ff'
        ]
    },
    legend: {
        label: {
            fontSize: 20
        }
    }
};

export default {
    name: 'LineChart',
    components: {
        'chart': lineChart
    },
    mixins: [common],
    data() {
        return {
            chartData: data,
            chartOptions: options,
            chartTheme: theme
        }
    },
    methods: {
        changeData1() {
            this.chartData = {
                categories: ['2015', '2016', '2017', '2018', '2019'],
                series: [
                    {
                        name: 'Seoul',
                        data: [-3.5, -1.1, 4.0, 11.3, 1]
                    },
                    {
                        name: 'Seattle',
                        data: [3.8, 5.6, 7.0, 9.1, 2]
                    },
                    {
                        name: 'Sydney',
                        data: [22.1, 22.0, 20.9, 18.3, 3]
                    },
                    {
                        name: 'Moskva',
                        data: [-10.3, -9.1, -4.1, 4.4, 4]
                    },
                    {
                        name: 'Jungfrau',
                        data: [-13.2, -13.7, -13.1, -10.3, 5]
                    }
                ]
            }
        },
        addData() {
            this.$refs.tuiChart.invoke('addData', '2019', [1,2,3,4,5]);
        }
    }
};
</script>
