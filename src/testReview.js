option = {
  title: {
    left: "center",
    text: "第一套题错题情况",
  },
  dataset: [
    {
      dimensions: ["number", "frequent"],
      source: [
        ["09", 1],
        ["16", 1],
        ["28", 1],
        ["32", 1],
        ["33", 2],
        ["40", 1],
        ["41", 2],
        ["42", 2],
        ["48", 1],
        ["51", 2],
        ["63", 2],
        ["66", 1],
        ["67", 1],
        ["69", 1],
        ["71", 1],
        ["72", 1],
        ["75", 2],
      ],
    },
    {
      transform: {
        type: "sort",
        config: { dimension: "frequent", order: "desc" },
      },
    },
  ],
  xAxis: {
    type: "category",
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: "bar",
    encode: { x: "number", y: "frequent" },
    datasetIndex: 1,
  },
};

/////////////////////////////////////////////////////

option = {
  title: {
    left: "center",
    text: "第二套题错题情况",
  },
  dataset: [
    {
      dimensions: ["number", "frequent"],
      source: [
        ["79", 1],
        ["86", 1],
        ["87", 1],
        ["96", 1],
        ["97", 1],
        ["104", 1],
        ["107", 1],
        ["109", 2],
        ["112", 1],
        ["113", 1],
        ["120", 1],
        ["124", 1],
        ["125", 1],
        ["126", 1],
        ["127", 1],
        ["130", 1],
        ["131", 1],
        ["135", 2],
        ["136", 1],
        ["137", 1],
        ["138", 1],
        ["140", 1],
        ["141", 1],
        ["145", 2],
      ],
    },
    {
      transform: {
        type: "sort",
        config: { dimension: "frequent", order: "desc" },
      },
    },
  ],
  xAxis: {
    type: "category",
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: "bar",
    encode: { x: "number", y: "frequent" },
    datasetIndex: 1,
  },
};

/////////////////////////////////////////////////////

option = {
  title: {
    left: "center",
    text: "第三套题错题情况",
  },
  dataset: [
    {
      dimensions: ["number", "frequent"],
      source: [
        ["152", 1],
        ["155", 1],
        ["159", 1],
        ["160", 1],
        ["164", 1],
        ["165", 1],
        ["166", 1],
        ["169", 1],
        ["170", 1],
        ["171", 1],
        ["174", 1],
        ["177", 1],
        ["181", 1],
        ["184", 1],
        ["186", 1],
        ["189", 1],
        ["195", 1],
        ["202", 1],
        ["204", 1],
        ["207", 1],
        ["209", 1],
        ["213", 1],
        ["217", 1],
        ["219", 1],
        ["223", 1],
      ],
    },
    {
      transform: {
        type: "sort",
        config: { dimension: "frequent", order: "desc" },
      },
    },
  ],
  xAxis: {
    type: "category",
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: "bar",
    encode: { x: "number", y: "frequent" },
    datasetIndex: 1,
  },
};