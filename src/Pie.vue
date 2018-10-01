<template>
    <div id="pie">
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
import { chartPie } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    categories: ['Browser'],
    series: [
        {
            name: 'Chrome',
            data: 46.02
        },
        {
            name: 'IE',
            data: 20.47
        },
        {
            name: 'Firefox',
            data: 17.71
        },
        {
            name: 'Safari',
            data: 5.45
        },
        {
            name: 'Opera',
            data: 3.10
        },
        {
            name: 'Etc',
            data: 7.25
        }
    ]
};
const options = {
    chart: {
        width: 660,
        height: 560,
        title: 'Usage share of web browsers'
    },
    tooltip: {
        suffix: '%'
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
    name: 'PieChart',
    components: {
        'chart': chartPie
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
