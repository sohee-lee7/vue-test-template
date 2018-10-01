const common = {
    data() {
        return {
            message: '',
            methodNames: [
                'resize',
                'animateChart'
            ]
        }
    },
    methods: {
        methodInvoke(methodName) {
            if (methodName === 'resize') {
                this.message = this.$refs.tuiChart.invoke(methodName, {
                    width: 500, 
                    height: 500
                });
            } else {
                this.message = this.$refs.tuiChart.invoke(methodName);
            }
        },
        onLoad() {
            console.log('load');
        },
        onSelectLegend(value) {
            console.log(`selectLegend ${value}`);
        },
        onSelectSeries(value) {
            console.log(`selectSeries ${value}`);
        },
        onUnselectSeries(value) {
            console.log(`unselectSeries ${value}`);
        },
        onBeforeShowTooltip(value) {
            console.log(`beforeShowTooltip ${value}`);
        },
        onAfterShowTooltip(value) {
            console.log(`afterShowTooltip ${value}`);
        },
        onBeforeHideTooltip(value) {
            console.log('beforeHideTooltip');
        },
        onZoom(value) {
            console.log(`zoom ${value}`);
        }
    }
};

export default common;
