import * as echarts from "echarts";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    left: "center",
    text: "每日练习正确率推移",
  },
  xAxis: {
    type: "category",
    data: ["8/1", "8/2", "8/3", "8/4", "8/5", "8/6"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [45, 40, 50, 45, 60, 75],
      type: "line",
    },
  ],
};

option && myChart.setOption(option);
