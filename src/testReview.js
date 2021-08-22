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
        ["152", 2],
        ["153", 1],
        ["155", 1],
        ["159", 1],
        ["160", 2],
        ["161", 2],
        ["162", 1],
        ["163", 1],
        ["164", 2],
        ["165", 2],
        ["166", 2],
        ["169", 2],
        ["170", 1],
        ["171", 1],
        ["172", 1],
        ["175", 2],
        ["176", 1],
        ["174", 1],
        ["177", 2],
        ["181", 2],
        ["184", 2],
        ["186", 1],
        ["189", 1],
        ["194", 1],
        ["195", 1],
        ["202", 1],
        ["204", 1],
        ["207", 2],
        ["208", 1],
        ["209", 1],
        ["210", 1],
        ["211", 2],
        ["213", 3],
        ["214", 2],
        ["216", 2],
        ["217", 1],
        ["219", 3],
        ["222", 1],
        ["223", 2],
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

/////////////////////////////////////////////////////

option = {
  title: {
    left: "center",
    text: "第五套题错题情况",
  },
  dataset: [
    {
      dimensions: ["number", "frequent"],
      source: [
        ["301", 2],
        ["302", 1],
        ["304", 2],
        ["305", 1],
        ["307", 2],
        ["315", 1],
        ["316", 1],
        ["319", 1],
        ["320", 1],
        ["322", 1],
        ["323", 1],
        ["325", 1],
        ["326", 1],
        ["327", 2],
        ["328", 2],
        ["331", 3],
        ["332", 3],
        ["333", 3],
        ["338", 2],
        ["339", 2],
        ["340", 2],
        ["341", 1],
        ["342", 1],
        ["343", 1],
        ["344", 2],
        ["345", 1],
        ["346", 1],
        ["348", 1],
        ["350", 1],
        ["351", 1],
        ["353", 1],
        ["354", 3],
        ["357", 1],
        ["360", 3],
        ["362", 3],
        ["364", 3],
        ["367", 2],
        ["368", 2],
        ["369", 1], 
        ["370", 2],
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
    text: "第六套题错题情况",
  },
  dataset: [
    {
      dimensions: ["number", "frequent"],
      source: [
        ["376", 1],
        ["379", 1],
        ["382", 1],
        ["394", 1],
        ["395", 1],
        ["397", 1],
        ["402", 1],
        ["403", 1],
        ["405", 1],
        ["407", 1],
        ["397", 1],
        ["402", 1],
        ["403", 1],
        ["405", 1],
        ["407", 1],
        ["408", 1],
        ["410", 1],
        ["412", 1],
        ["413", 1],
        ["414", 1],
        ["416", 1],
        ["417", 1],
        ["421", 1],
        ["424", 1],
        ["427", 1],
        ["428", 1],
        ["431", 1],
        ["432", 1],
        ["434", 1],
        ["437", 1],
        ["439", 1],
        ["442", 1],
        ["443", 1],
        ["446", 1],
        ["447", 1],
        ["449", 1],
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

