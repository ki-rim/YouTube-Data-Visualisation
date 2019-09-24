fetch("data.json")
.then(response => response.json())
.then(json =>{
var keys = [];
let selectedData = document.getElementById('selector').value;
console.log(selectedData);
var file = eval("json.".concat(selectedData));
console.log(file);
for(var i = 0;i<file.length;i++)
{
  Object.keys(file[i]).forEach(function(key){
      if(keys.indexOf(key) == -1)
      {
          keys.push(key);
      }
  });
}
var values = [];
for(var i = 0;i<file.length;i++)
{
  Object.values(file[i]).forEach(function(value){
      if(values.indexOf(value) == -1)
      {
          values.push(value);
      }
  });
}
  let myChart = document.getElementById('myChart').getContext('2d');
  let dataChart = new Chart(myChart,{

    type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:keys,
      datasets:[{
        label:'Queries',
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
        text:'David Youtube Data',
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
          left:50,
          right:0,
          bottom:0,
          top:50
        }
      },
      tooltips:{
        enabled:true
      }
    }
  });
});
