<template>
    <div id="radial">
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
import { chartRadial } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    categories: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
    series: [
        {
            name: 'Budget',
            data: [5000, 3000, 5000, 7000, 6000, 4000]
        },
        {
            name: 'Income',
            data: [8000, 8000, 7000, 2000, 5000, 3000]

        },
        {
            name: 'Expenses',
            data: [4000, 4000, 6000, 3000, 4000, 5000]
        },
        {
            name: 'Debt',
            data: [6000, 3000, 3000, 1000, 2000, 4000]
        }
    ]
};
const options = {
    chart: {
        title: 'Annual Incomes',
        width: 700,
        height: 700
    },
    series: {
        showDot: false,
        showArea: false
    },
    plot: {
        type: 'circle'
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
    name: 'Radial',
    components: {
        'chart': chartRadial
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
