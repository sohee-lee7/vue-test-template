const common = {
    data() {
        return {
            message: '',
            methodNames: [
                'resize',
                'animateChart',
                'selectLegend',
                'reset',
                'removeCategory',
                'addCategory'
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
            } else if (methodName === 'reset' || methodName === 'removeCategory' || methodName === 'addCategory') {
                this[methodName]();
            } else if (methodName === 'selectLegend') {
                this.message = this.$refs.tuiChart.invoke(methodName, 1);
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
        },
        reset() {
            this.chartData = {
                categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov'],
                series: [
                    {
                        name: 'Budget',
                        data: [30, 50, 70, 60, 40]
                    },
                    {
                        name: 'Income',
                        data: [1000, 7000, 2000, 5000, 3000]
                    }
                ]
            };
        },
        removeCategory() {
            if (this.chartData.categories) {
                this.chartData.categories.splice(0,1);
            }
            this.chartData.series.forEach(item => {
                if (typeof item.data === 'number') {
                    item.data -= 10;
                } else {
                    item.data.splice(0,1);
                }
            });
        },
        addCategory() {
            if (this.chartData.categories) {
                this.chartData.categories.push("newCategory");
            }
        }
    }
};

export default common;
