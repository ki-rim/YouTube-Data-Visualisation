fetch("data.json")
.then(response => response.json())
.then(json =>{
  var keys = [];
  let selectedData = document.getElementById('selector').value;
  let graphTitle= selector.options[selector.selectedIndex].text;
  let graphTitle2= selector2.options[selector2.selectedIndex].text;//type of graph
  let padding = 0;
  console.log(selectedData);
  var file = eval("json.".concat(selectedData));
  console.log(file);
  var label;
  if(graphTitle.includes("Watch")){
    label = "Videos watched";
  }
  else{
    label= "Searches made";
  }
  let selectedData2 = document.getElementById('selector2').value;
  console.log(selectedData2);
  document.getElementById("wrapper").style.height = '128px';

  var names = [];
  for(var i =0;i<file.length;i++){
    names.push(file[i].name);
  }
  var values = [];
  for(var i =0;i<file.length;i++){
    values.push(file[i].value);
  }
  Chart.defaults.global.defaultFontColor = 'black';
  Chart.defaults.global.defaultFontSize = 20;
  Chart.defaults.global.defaultFontFamily = 'Overpass Mono';
  let myChart = document.getElementById('myChart').getContext('2d');
  let dataChart = new Chart(myChart,{

    type:selectedData2, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:names,
      datasets:[{
        label:label,
        data:values,
        //backgroundColor:'green',
        backgroundColor:[
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)'
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
        text:graphTitle2+" Graph of "+graphTitle +" (2014 - 2019)",
        fontSize:25,
        responsive: true,
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
});
