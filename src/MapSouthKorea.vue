<template>
    <div id="map">
        <chart
        ref="tuiChart"
        :data="chartData"
        :options="chartOptions"
        :theme="chartTheme"
        map="south-korea"
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
import { mapChart } from '@toast-ui/vue-chart';
import common from './common.js';

const data = {
    series: [
        {
            code: 'KR-SU',
            data: 12.5
        },
        {
            code: 'KR-BS',
            data: 14.7
        },
        {
            code: 'KR-DG',
            data: 14.1
        },
        {
            code: 'KR-IC',
            data: 12.1
        },
        {
            code: 'KR-GJ',
            data: 13.8
        },
        {
            code: 'KR-DJ',
            data: 13.0
        },
        {
            code: 'KR-US',
            data: 14.1
        },
        {
            code: 'KR-GG',
            data: 11.6
        },
        {
            code: 'KR-GW',
            data: 11.3
        },
        {
            code: 'KR-NC',
            data: 11.7
        },
        {
            code: 'KR-SC',
            data: 11.9
        },
        {
            code: 'KR-NJ',
            data: 12.8
        },
        {
            code: 'KR-SJ',
            data: 13.6
        },
        {
            code: 'KR-SG',
            data: 14.2
        },
        {
            code: 'KR-JJ',
            data: 15.5
        },
        {
            code: 'KR-SE',
            data: 11.8
        }
    ]
};
const options = {
    chart: {
        width: 500,
        height: 680,
        title: 'Average annual temperature of South Korea (°C)'
    },
    map: 'south-korea',
    legend: {
        align: 'right'
    },
    tooltip: {
        suffix: '°C'
    }
};
const theme = {
    series: {
        startColor: '#ffefef',
        endColor: '#ac4142',
        overColor: '#75b5aa'
    }
};

export default {
    name: 'MapChart',
    components: {
        'chart': mapChart
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
