<template>
    <div id="treemap">
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
import { treemapChart } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    series: [
        {
            label: 'Asia',
            children: [
                {
                    label: 'South Korea',
                    value: 99909,
                    colorValue: 499.81
                },
                {
                    label: 'Japan',
                    value: 364485,
                    colorValue: 335.61
                },
                {
                    label: 'Jordan',
                    value: 88802,
                    colorValue: 86.07
                },
                {
                    label: 'Iraq',
                    value: 437367,
                    colorValue: 81.60
                }
            ]
        }, {
            label: 'Europe',
            children: [
                {
                    label: 'UK',
                    value: 241930,
                    colorValue: 262.84
                },
                {
                    label: 'France',
                    value: 640427,
                    colorValue: 117.83
                },
                {
                    label: 'Hungary',
                    value: 89608,
                    colorValue: 106.54
                },
                {
                    label: 'Portugal',
                    value: 91470,
                    colorValue: 115.35
                }
            ]
        }, {
            label: 'America',
            children: [
                {
                    label: 'Panama',
                    value: 74340,
                    colorValue: 52.81
                },
                {
                    label: 'Honduras',
                    value: 111890,
                    colorValue: 75.15
                },
                {
                    label: 'Uruguay',
                    value: 175015,
                    colorValue: 19.60
                },
                {
                    label: 'Cuba',
                    value: 109820,
                    colorValue: 101.47
                }
            ]
        }, {
            label: 'Africa',
            children: [
                {
                    label: 'Malawi',
                    value: 94080,
                    colorValue: 146.09
                },
                {
                    label: 'Ghana',
                    value: 227533,
                    colorValue: 113.13
                },
                {
                    label: 'Togo',
                    value: 54385,
                    colorValue: 126.28
                },
                {
                    label: 'Benin',
                    value: 114305,
                    colorValue: 96.61
                }
            ]
        }
    ]
};
const options = {
    chart: {
        width: 900,
        height: 500,
        title: 'Population density of World',
        format: '1,000'
    },
    series: {
        showLabel: true,
        useColorValue: true,
        zoomable: false,
        useLeafLabel: true
    },
    tooltip: {
        suffix: '㎢'
    },
    legend: {
        align: 'top'
    }
};
const theme = {
    series: {
        startColor: '#ffefef',
        endColor: '#ac4142',
        overColor: '#75b5aa',
        borderColor: '#F4511E'
    }
};

export default {
    name: 'TreeMap',
    components: {
        'chart': treemapChart
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
