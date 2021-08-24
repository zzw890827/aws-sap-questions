option = {
  title: {
    left: "center",
    text: "模拟测试准确率推移",
  },
  xAxis: {
    type: "category",
    data: [
      "8/2",
      "8/4",
      "8/5",
      "8/8",
      "8/9",
      "8/10",
      "8/12",
      "8/13",
      "8/15",
      "8/18",
      "8/19",
      "8/20",
      "8/22",
      "8/23",
      "8/23",
      "8/24",
      "8/24",
    ],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}%",
    },
  },
  series: [
    {
      data: [
        84, 84, 72, 92, 66.67, 85.33, 89.33, 70.67, 93.33, 60.0, 68.0, 69.33,
        82.67, 57.67, 77.33, 51.47, 82.35,
      ],
      type: "line",
      markLine: {
        symbol: ["none", "none"],
        label: { show: true },
        data: [{ yAxis: 75 }],
      },
    },
  ],
};
