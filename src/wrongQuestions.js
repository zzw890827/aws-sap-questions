import * as echarts from "echarts";

var chartDom = document.getElementById("main");
var myChart = echarts.init(chartDom);
var option;
option = {
  title: {
    left: "center",
    text: "模拟测试错题直方图",
  },
  yAxis: {
    type: "category",
    data: [
      9, 16, 28, 32, 33, 40, 41, 42, 48, 51, 63, 66, 67, 69, 71, 72, 75, 79, 86,
      87, 96, 97, 104, 107, 109, 112, 113, 120, 124, 125, 126, 127, 130, 131,
      135, 136, 137, 138, 140, 141, 145,
    ],
  },
  xAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        1, 1, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2,
      ],
      type: "bar",
    },
  ],
};

option && myChart.setOption(option);
