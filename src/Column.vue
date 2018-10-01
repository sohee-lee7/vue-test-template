<template>
    <div id="column">
        <chart
        ref="tuiChart"
        :data="chartData"
        :options="chartOptions"
        :theme="chartTheme"
        @load="onLoad"
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
import { chartColumn } from '@toast-ui/vue-chart';
import common from './common.js';

var data = {
    categories: ['June, 2015', 'July, 2015', 'August, 2015', 'September, 2015', 'October, 2015', 'November, 2015', 'December, 2015'],
    series: [
        {
            name: 'Budget',
            data: [5000, 3000, 5000, 7000, 6000, 4000, 1000]
        },
        {
            name: 'Income',
            data: [8000, 1000, 7000, 2000, 6000, 3000, 5000]
        },
        {
            name: 'Expenses',
            data: [4000, 4000, 6000, 3000, 4000, 5000, 7000]
        },
        {
            name: 'Debt',
            data: [6000, 3000, 3000, 1000, 2000, 4000, 3000]
        }
    ]
};

var options = {
    chart: {
        width: 1160,
        height: 650,
        title: 'Monthly Revenue',
        format: '1,000'
    },
    yAxis: {
        title: 'Amount',
        min: 0,
        max: 9000
    },
    xAxis: {
        title: 'Month'
    },
    legend: {
        align: 'top'
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
    name: 'Column',
    components: {
        'chart': chartColumn
    },
    mixins: [common],
    data() {
        return {
            chartData: data,
            chartOptions: options,
            chartTheme: theme
        };
    }
};
</script>
