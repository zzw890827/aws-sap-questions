import * as echarts from "echarts";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    left: "center",
    text: "模拟测试错题直方图",
  },
  xAxis: {
    type: "category",
    data: [9, 16, 28, 32, 33, 40, 41, 42, 48, 51, 63, 66, 67, 69, 71, 72, 75],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 1, 2],
      type: "bar",
    },
  ],
};

option && myChart.setOption(option);
