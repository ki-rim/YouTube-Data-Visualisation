fetch("data.json")
.then(response => response.json())
.then(json =>{
var keys = [];
let selectedData = document.getElementById('selector').value;
let graphTitle= selector.options[selector.selectedIndex].text;
let graphTitle2= selector2.options[selector2.selectedIndex].text;
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


var names = [];
for(var i =0;i<file.length;i++){
  names.push(file[i].name);
}
var values = [];
for(var i =0;i<file.length;i++){
  values.push(file[i].value);
}
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
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      title:{
        display:true,
        text:graphTitle2+" Graph of "+graphTitle +" (2014 - 2019)",
        fontSize:25
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
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
  });
});

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
