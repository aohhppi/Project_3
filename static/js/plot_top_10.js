let plotname = 'Top 10 Counties with the Highest Total Immigration Population'


let counties = ["Gwinnett County, Georgia","Fulton County, Georgia", "DeKalb County, Georgia","Cobb County, Georgia", "Forsyth County, Georgia ", "Clayton County, Georgia","Hall County, Georgia", "Cherokee County, Georgia", "Whitfield County, Georgia", "Chatham County, Georgia "]

let totalpop = [235889, 135531, 119914, 117804, 39966, 38264,32403, 21849, 19455, 18319]

let trace1 = {
  x: counties,
  y: totalpop,
  type: 'bar'
};

let data = [trace1];

let layout = {
  title: plotname
};
console.log(data)
Plotly.newPlot("plot", data, layout);
