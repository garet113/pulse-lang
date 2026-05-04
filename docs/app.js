const ctx=document.getElementById("chart").getContext("2d");
const chart=new Chart(ctx,{type:"line",data:{labels:[],datasets:[{label:"Comfort",data:[]},{label:"Mood",data:[]},{label:"Arousal",data:[]}]}});

async function update(){
 const res=await fetch("http://localhost:8000/signals");
 const d=await res.json();
 const t=new Date().toLocaleTimeString();
 chart.data.labels.push(t);
 chart.data.datasets[0].data.push(d.comfort);
 chart.data.datasets[1].data.push(d.mood);
 chart.data.datasets[2].data.push(d.arousal);
 if(chart.data.labels.length>20){
  chart.data.labels.shift();
  chart.data.datasets.forEach(x=>x.data.shift());
 }
 chart.update();
}
setInterval(update,500);
