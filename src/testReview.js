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
        ["81", 1],
        ["84", 1],
        ["86", 1],
        ["87", 1],
        ["91", 1],
        ["96", 1],
        ["97", 1],
        ["99", 1],
        ["104", 1],
        ["107", 1],
        ["109", 3],
        ["112", 1],
        ["113", 2],
        ["120", 1],
        ["124", 1],
        ["125", 1],
        ["126", 1],
        ["127", 1],
        ["130", 2],
        ["131", 1],
        ["135", 3],
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
        ["161", 1],
        ["162", 1],
        ["163", 1],
        ["164", 1],
        ["165", 1],
        ["166", 1],
        ["169", 1],
        ["170", 1],
        ["171", 1],
        ["175", 1],
        ["174", 1],
        ["177", 2],
        ["181", 1],
        ["184", 2],
        ["186", 1],
        ["189", 1],
        ["195", 1],
        ["202", 1],
        ["204", 1],
        ["207", 1],
        ["209", 1],
        ["211", 1],
        ["213", 2],
        ["214", 1],
        ["216", 1],
        ["217", 1],
        ["219", 2],
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

/////////////////////////////////////////////////////

option = {
  title: {
    left: "center",
    text: "第四套题错题情况",
  },
  dataset: [
    {
      dimensions: ["number", "frequent"],
      source: [
        ["226", 1],
        ["232", 1],
        ["243", 1],
        ["244", 1],
        ["247", 1],
        ["249", 1],
        ["252", 1],
        ["257", 1],
        ["260", 1],
        ["266", 1],
        ["267", 1],
        ["270", 1],
        ["271", 1],
        ["275", 1],
        ["281", 2],
        ["282", 1],
        ["283", 2],
        ["290", 1],
        ["293", 2],
        ["295", 1],
        ["296", 1],
        ["297", 1],
        ["298", 1],
        ["299", 1],
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