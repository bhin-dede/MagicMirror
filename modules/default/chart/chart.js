Module.register("chart", {
    defaults: {
        chartType: 'line',
        chartData: {
            labels: ['일', '월', '화', '수', '목', '금', '토'],
            values: [120, 200, 150, 80, 70, 110, 130]
        },
    },

    start() {
        // ECharts 스크립트를 동적으로 로드
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.3.3/echarts.min.js";
        script.onload = () => {
            this.loaded = true;
            this.updateDom();
        };
        document.head.appendChild(script);
    },

    getDom() {
        const wrapper = document.createElement("div");
        wrapper.style.width = '100%';
        wrapper.style.height = '400px';
        wrapper.id = 'echart-container';

        if (this.loaded) {
            const myChart = echarts.init(wrapper);

            const option = {
                title: {
                    text: '주간 데이터'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: this.config.chartData.labels
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name: '값',
                    type: this.config.chartType,
                    data: this.config.chartData.values
                }]
            };

            myChart.setOption(option);
            this.myChart = myChart;
        }

        return wrapper; 
    },

    notificationReceived(notification, payload, sender) {
        if (notification === "RESIZE") {
            if (this.myChart) {
                this.myChart.resize();
            }
        }
    }
});