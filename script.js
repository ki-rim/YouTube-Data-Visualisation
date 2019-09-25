const json = {
  "watch":{
    "months":[
      {"name":"Jan","value":1793},
      {"name":"Feb","value":1633},
      {"name":"Mar","value":1314},
      {"name":"Apr","value":2185},
      {"name":"May","value":1757},
      {"name":"Jun","value":2429},
      {"name":"Jul","value":1760},
      {"name":"Aug","value":1910},
      {"name":"Sep","value":2184},
      {"name":"Oct","value":2139},
      {"name":"Nov","value":1667},
      {"name":"Dec","value":2401}
    ],
    "dow":[
      {"name":"Mon","value":3324},
      {"name":"Tue","value":3732},
      {"name":"Wed","value":3134},
      {"name":"Thu","value":3294},
      {"name":"Fri","value":3185},
      {"name":"Sat","value":3287},
      {"name":"Sun","value":3216}
    ],
    "time":[
      {"name":"00:00","value":103},
      {"name":"01:00","value":20},
      {"name":"02:00","value":6},
      {"name":"03:00","value":5},
      {"name":"04:00","value":5},
      {"name":"05:00","value":34},
      {"name":"06:00","value":152},
      {"name":"07:00","value":521},
      {"name":"08:00","value":1221},
      {"name":"09:00","value":1403},
      {"name":"10:00","value":1447},
      {"name":"11:00","value":1351},
      {"name":"12:00","value":1275},
      {"name":"13:00","value":1169},
      {"name":"14:00","value":1205},
      {"name":"15:00","value":1296},
      {"name":"16:00","value":1440},
      {"name":"17:00","value":1671},
      {"name":"18:00","value":1799},
      {"name":"19:00","value":2088},
      {"name":"20:00","value":1960},
      {"name":"21:00","value":1590},
      {"name":"22:00","value":964},
      {"name":"23:00","value":447}
    ]
  },
  "search":{
    "months":[
      {"name":"Jan","value":420},
      {"name":"Feb","value":335},
      {"name":"Mar","value":260},
      {"name":"Apr","value":459},
      {"name":"May","value":323},
      {"name":"Jun","value":457},
      {"name":"Jul","value":419},
      {"name":"Aug","value":439},
      {"name":"Sep","value":473},
      {"name":"Oct","value":570},
      {"name":"Nov","value":373},
      {"name":"Dec","value":407}
    ],
    "dow":[
      {"name":"Mon","value":769},
      {"name":"Tue","value":708},
      {"name":"Wed","value":657},
      {"name":"Thu","value":699},
      {"name":"Fri","value":680},
      {"name":"Sat","value":743},
      {"name":"Sun","value":679}
    ],
    "time":[
      {"name":"00:00","value":30},
      {"name":"01:00","value":11},
      {"name":"02:00","value":4},
      {"name":"03:00","value":0},
      {"name":"04:00","value":1},
      {"name":"05:00","value":4},
      {"name":"06:00","value":27},
      {"name":"07:00","value":87},
      {"name":"08:00","value":195},
      {"name":"09:00","value":263},
      {"name":"10:00","value":275},
      {"name":"11:00","value":230},
      {"name":"12:00","value":304},
      {"name":"13:00","value":230},
      {"name":"14:00","value":267},
      {"name":"15:00","value":203},
      {"name":"16:00","value":291},
      {"name":"17:00","value":353},
      {"name":"18:00","value":450},
      {"name":"19:00","value":490},
      {"name":"20:00","value":472},
      {"name":"21:00","value":403},
      {"name":"22:00","value":220},
      {"name":"23:00","value":125}
    ]
  }
}



var keys = [];
var gloLabels = [];
var gloValues = [];
let selectedData = document.getElementById('selector').value;
let graphTitle= selector.options[selector.selectedIndex].text;
let graphTitle2= selector2.options[selector2.selectedIndex].text;//type of graph
var padding =0;
let cacheType;
let cacheLabel = 'Videos watched';
let cacheTitle;
console.log(selectedData);
var file = eval("json.".concat(selectedData));
console.log(file);

let selectedData2 = document.getElementById('selector2').value;
console.log(selectedData2);
document.getElementById("wrapper").style.height = '128px';

var names = [];
for(var i =0;i<json.watch.months.length;i++){
  names.push(json.watch.months[i].name);
}
var values = [];
for(var i =0;i<json.watch.months.length;i++){
  values.push(json.watch.months[i].value);
}
Chart.defaults.global.defaultFontColor = 'rgba(116,10,22, 0.7)';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontFamily = 'Baloo';
Chart.defaults.global.defaultColor = 'rgba(199,32,39,0.7)';
let myChart = document.getElementById('myChart').getContext('2d');
let dataChart = new Chart(myChart,{

  type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:names,
    datasets:[{
      label:cacheLabel,
      data:values,
      //backgroundColor:'green',rgb(29,15,40)
      backgroundColor:[
        'rgba(170,76,38,0.9)',
        'rgba(202,166,56, 0.9)',
        'rgba(46,120,147, 0.9)',
        'rgba(186,79,35, 0.9)',
        'rgba(116,10,22, 0.9)',
        'rgba(170,76,38,0.9)',
        'rgba(202,166,56, 0.9)',
        'rgba(46,120,147, 0.9)',
        'rgba(186,79,35, 0.9)',
        'rgba(116,10,22, 0.9)',
        'rgba(170,76,38,0.9)',
        'rgba(202,166,56, 0.9)',
        'rgba(46,120,147, 0.9)',
        'rgba(186,79,35, 0.9)',
        'rgba(116,10,22, 0.9)',
        'rgba(170,76,38,0.9)',
        'rgba(202,166,56, 0.9)',
        'rgba(46,120,147, 0.9)',
        'rgba(186,79,35, 0.9)',
        'rgba(116,10,22, 0.9)',
        'rgba(170,76,38,0.9)',
        'rgba(202,166,56, 0.9)',
        'rgba(46,120,147, 0.9)',
        'rgba(186,79,35, 0.9)',
        'rgba(116,10,22, 0.9)',
        'rgba(170,76,38,0.9)',
        'rgba(202,166,56, 0.9)',
        'rgba(46,120,147, 0.9)',
        'rgba(186,79,35, 0.9)',
        'rgba(116,10,22, 0.9)'
      ],
      borderWidth:3,
      borderColor:[
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 99, 132, 0.3)'
      ],
      hoverBorderWidth:5,
      hoverBorderColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ]
    }]
  },
  options:{
    title:{
      display:true,
      text:graphTitle2+" Graph of "+graphTitle +" (2013 - 2019)",
      fontSize:25,
      responsive: false,
      maintainAspectRatio: true
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:padding,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

function updateChart(){
  let newLabels = [];
  let newValues = [];
  if(document.getElementById("selector").value == "watch.months"){
    for(var i = 0; i< json.watch.months.length; i++){
      newValues.push(json.watch.months[i].value);
      newLabels.push(json.watch.months[i].name);
      newTag = 'Videos watched';
    }
  }
  else  if(document.getElementById("selector").value == "watch.time"){
    for(var i = 0; i< json.watch.time.length; i++){
      newValues.push(json.watch.time[i].value);
      newLabels.push(json.watch.time[i].name);
      newTag = 'Videos watched';
    }
  }
  else  if(document.getElementById("selector").value == "watch.dow"){
    for(var i = 0; i< json.watch.dow.length; i++){
      newValues.push(json.watch.dow[i].value);
      newLabels.push(json.watch.dow[i].name);
      newTag = 'Videos watched';
    }
  }
  else  if(document.getElementById("selector").value == "search.months"){
    for(var i = 0; i< json.search.months.length; i++){
      newValues.push(json.search.months[i].value);
      newLabels.push(json.search.months[i].name);
      newTag = 'Searches made';
    }
  }
  else  if(document.getElementById("selector").value == "search.time"){
    for(var i = 0; i< json.search.time.length; i++){
      newValues.push(json.search.time[i].value);
      newLabels.push(json.search.time[i].name);
      newTag = 'Searches made';
    }
  }
  else{
    for(var i = 0; i< json.search.dow.length; i++){
      newValues.push(json.search.dow[i].value);
      newLabels.push(json.search.dow[i].name);
      newTag = 'Searches made';
    }
  }
  graphTitle= selector.options[selector.selectedIndex].text;
  graphTitle2= selector2.options[selector2.selectedIndex].text;//type of graph
//  gloLabels = newLabels;
//  gloValues = newValues;
  // dataChart.data.labels = newLabels;
  // dataChart.data.datasets[0].data = newValues;
  // dataChart.update();
  let newType;
if(document.getElementById("selector2").value == "line"){
newType = 'line';
document.documentElement.style.setProperty("--widthvalue", "1400px");
}
else if(document.getElementById("selector2").value == "bar"){
  newType = 'bar';
  document.documentElement.style.setProperty("--widthvalue", "1400px");
}
else if(document.getElementById("selector2").value == "radar"){
  newType = 'radar';
  document.documentElement.style.setProperty("--widthvalue", "700px");
}
else if(document.getElementById("selector2").value == "doughnut"){
  newType = 'doughnut';
  document.documentElement.style.setProperty("--widthvalue", "700px");
}
else{
  newType = 'polarArea';
  document.documentElement.style.setProperty("--widthvalue", "700px");
}
dataChart.destroy();
  dataChart = new Chart(myChart,{

    type:newType, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:newLabels,
      datasets:[{
        label:newTag,
        data:newValues,
        //backgroundColor:'green',rgb(29,15,40)
        backgroundColor:[
          'rgba(170,76,38,0.7)',
          'rgba(202,166,56, 0.7)',
          'rgba(46,120,147, 0.7)',
          'rgba(186,79,35, 0.7)',
          'rgba(116,10,22, 0.7)',
          'rgba(170,76,38,0.7)',
          'rgba(202,166,56, 0.7)',
          'rgba(46,120,147, 0.7)',
          'rgba(186,79,35, 0.7)',
          'rgba(116,10,22, 0.7)',
          'rgba(170,76,38,0.7)',
          'rgba(202,166,56, 0.7)',
          'rgba(46,120,147, 0.7)',
          'rgba(186,79,35, 0.7)',
          'rgba(116,10,22, 0.7)',
          'rgba(170,76,38,0.7)',
          'rgba(202,166,56, 0.7)',
          'rgba(46,120,147, 0.7)',
          'rgba(186,79,35, 0.7)',
          'rgba(116,10,22, 0.7)',
          'rgba(170,76,38,0.7)',
          'rgba(202,166,56, 0.7)',
          'rgba(46,120,147, 0.7)',
          'rgba(186,79,35, 0.7)',
          'rgba(116,10,22, 0.7)',
          'rgba(170,76,38,0.7)',
          'rgba(202,166,56, 0.7)',
          'rgba(46,120,147, 0.7)',
          'rgba(186,79,35, 0.7)',
          'rgba(116,10,22, 0.7)'
        ],
        borderWidth:3,
        borderColor:[
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132, 0.3)'
        ],
        hoverBorderWidth:5,
        hoverBorderColor:[
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ]
      }]
    },
    options:{
      title:{
        display:true,
        text:graphTitle2+" Graph of "+graphTitle +" (2013 - 2019)",
        fontSize:25,
        responsive: false,
        maintainAspectRatio: true
      },
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor:'#000'
        }
      },
      layout:{
        padding:{
          left:0,
          right:0,
          bottom:padding,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
  }); dataChart.update();
}

function updateGraph(){
  let newLabels = [];
  let newValues = [];
  let newTag;
  if(document.getElementById("selector").value == "watch.months"){
    for(var i = 0; i< json.watch.months.length; i++){
      newValues.push(json.watch.months[i].value);
      newLabels.push(json.watch.months[i].name);
      newTag = 'Videos watched';
    }
  }
  else  if(document.getElementById("selector").value == "watch.time"){
    for(var i = 0; i< json.watch.time.length; i++){
      newValues.push(json.watch.time[i].value);
      newLabels.push(json.watch.time[i].name);
      newTag = 'Videos watched';
    }
  }
  else  if(document.getElementById("selector").value == "watch.dow"){
    for(var i = 0; i< json.watch.dow.length; i++){
      newValues.push(json.watch.dow[i].value);
      newLabels.push(json.watch.dow[i].name);
      newTag = 'Videos watched';
    }
  }
  else  if(document.getElementById("selector").value == "search.months"){
    for(var i = 0; i< json.search.months.length; i++){
      newValues.push(json.search.months[i].value);
      newLabels.push(json.search.months[i].name);
      newTag = 'Searches made';
    }
  }
  else  if(document.getElementById("selector").value == "search.time"){
    for(var i = 0; i< json.search.time.length; i++){
      newValues.push(json.search.time[i].value);
      newLabels.push(json.search.time[i].name);
      newTag = 'Searches made';
    }
  }
  else{
    for(var i = 0; i< json.search.dow.length; i++){
      newValues.push(json.search.dow[i].value);
      newLabels.push(json.search.dow[i].name);
      newTag = 'Searches made';
    }
  }
//  gloLabels = newLabels;
//  gloValues = newValues;
dataChart.options.title.text = graphTitle2+" Graph of "+selector.options[selector.selectedIndex].text +" (2013 - 2019)";
  dataChart.data.labels = newLabels;
  dataChart.data.datasets[0].data = newValues;
  dataChart.data.datasets[0].label = newTag;
  cacheLabel = newTag;
  dataChart.update();
}
