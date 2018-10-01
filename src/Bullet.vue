<template>
    <div id="bullet">
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
import { chartBullet } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    categories: ['July', 'August'],
    series: [{
        name: 'Budget',
        data: 25,
        markers: [28, 2, 15],
        ranges: [[-1, 10], [10, 20], [20, 30]]
    }, {
        name: 'Hello',
        data: 11,
        markers: [20],
        ranges: [[0, 8], [8, 15]]
    }, {
        name: 'World',
        data: 30,
        markers: [25],
        ranges: [[0, 10], [10, 19], [19, 28]]
    }, {
        name: 'Income',
        data: 23,
        markers: [],
        ranges: [[19, 25], [13, 19], [0, 13]]
    }]
};
const options = {
    chart: {
        width: 1160,
        height: 500,
        title: 'Monthly Revenue',
        format: '1,000'
    },
    legend: {
        visible: true
    },
    xAxis: {
        max: 35
    },
    series: {
        showLabel: true,
        vertical: false
    }
};
const theme = {
    series: {
        ranges: [{ color: 'gray', opacity: 0.7 },
            null,
            { color: 'purple' }
        ]
    }
};

export default {
    name: 'Bullet',
    components: {
        'chart': chartBullet
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
