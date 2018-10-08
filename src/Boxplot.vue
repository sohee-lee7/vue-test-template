<template>
    <div id="boxplot">
        <chart
        ref="tuiChart"
        :data="chartData"
        :options="chartOptions"
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
import { boxplotChart } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    categories: ['Budget', 'Income', 'Expenses', 'Debt'],
    series: [{
        name: '2015',
        data: [
            [1000, 2500, 3714, 5500, 7000],
            [1000, 2750, 4571, 5250, 8000],
            [3000, 4000, 4714, 6000, 7000],
            [1000, 2250, 3142, 4750, 6000]
        ],
        outliers: [
            [0, 14000],
            [2, 10000],
            [3, 9600]
        ]
    }, {
        name: '2016',
        data: [
            [2000, 4500, 6714, 11500, 13000],
            [3000, 5750, 7571, 8250, 9000],
            [5000, 8000, 8714, 9000, 10000],
            [7000, 9250, 10142, 11750, 12000]
        ],
        outliers: [
            [1, 14000]
        ]
    }]
};
const options = {
    chart: {
        width: 900,
        height: 540,
        title: 'Monthly Revenue',
        format: '1,000'
    },
    yAxis: {
        title: 'Amount',
        min: 0,
        max: 15000
    },
    xAxis: {
        title: 'Month'
    },
    legend: {
        align: 'bottom'
    }
};
const theme = {
    series: {
        colors: [
            '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
            '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
        ]
    }
};

export default {
    name: 'boxplot',
    components: {
        'chart': boxplotChart
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
