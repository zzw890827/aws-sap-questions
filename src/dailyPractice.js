option = {
  title: {
    left: "center",
    text: "每日练习正确率推移",
  },
  xAxis: {
    type: "category",
    data: ["8/1", "8/2", "8/3", "8/4", "8/5", "8/6", "8/7", "8/8", "8/9", "8/10"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}%",
    },
  },
  series: [
    {
      data: [45, 40, 50, 45, 60, 75, 55, 55, 40, 55],
      type: "line",
    },
  ],
};

///////////////////////////////////////////

option = {
  title: {
    left: "center",
    text: "模拟测试准确率推移",
  },
  xAxis: {
    type: "category",
    data: ["8/2", "8/4", "8/5", "8/8", "8/9", "8/10"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value}%",
    },
  },
  series: [
    {
      data: [84, 84, 72, 92, 66.67, 85.33],
      type: "line",
      markLine: {
        symbol: ["none", "none"],
        label: { show: true },
        data: [{ yAxis: 72 }],
      },
    },
  ],
};
