
// const url="http://127.0.0.1:5000/api/get-result1";
d3.json('http://127.0.0.1:5000/api/getresult1').then(function(data){
    console.log(data);
    console.log("testtest");
    console.log(data[0][0]);
// columns names:'County'/'State'/'ImmCountRounded'/'Origin'/'OriginTooltip'/
//               CountyPercentbyOrigin'/'ImmCount'/'TotalImmPopRounded'/'TotalImm'
    var County=[];
    var Immcount=[];
    var Origin=[];

    for(var i = 0; i < data.length-1; i++){
         if (data[i][0]!=data[i+1][0]){
            County.push(data[i][0]);
        }
    }
    // for bar chart
    for(var j = 0; j < County.length; j++){
        var tempArray_immcount=[];
        var tempArray_origin=[];
        for(var i = 0; i < data.length; i++){
               if (data[i][0]==County[j]){
                tempArray_immcount.push(data[i][6]);
                tempArray_origin.push(data[i][3]);  
              };
       }
       Immcount.push(tempArray_immcount);
       Origin.push(tempArray_origin);
       
   }

    console.log("test");
    console.log(County); 
    console.log(County[5]);
    console.log(Immcount[0]);
    console.log(Origin);
   

    // for demographic info
    Asia_Imm=[];
    Europe_Imm=[];
    Africa_Imm=[];
    CentralAme_Imm=[];
    SouthAme_Imm=[];
    for(var i = 0; i < data.length-1; i++){
        if (data[i][3]=="Asia"){
            Asia_Imm.push(data[i][6]);
            }
        else if(data[i][3]=="Europe"){
            Europe_Imm.push(data[i][6]);
           }
        else if(data[i][3]=="Africa"){
            Africa_Imm.push(data[i][6]);
           } 
        else if(data[i][3]=="Central America"){
            CentralAme_Imm.push(data[i][6]);
           } 
        else if(data[i][3]=="South America"){
            SouthAme_Imm.push(data[i][6]);
           } 
    }
    console.log(Asia_Imm);

    function init(){
            let trace1 = {
            x: Origin[0],
            y: Immcount[0],
            // text: Origin[0],
            type: "bar",
         
            // orientation: "h"
             };
        let traceData = [trace1];
        let layout = {
            title:"Immigrants Counts for Each Race in GA 2015-2019",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
                }
            };

        Plotly.newPlot("bar", traceData, layout);
                // for demographic info
        let infotable=d3.select('#sample-metadata').append("table")
        inforow=infotable.append('tr')
        infodata=inforow.append('td')
        let origin=infodata.text('Origin: '+'Immigrants Count')
        inforow=infotable.append('tr')
        infodata=inforow.append('td')
        let asian=infodata.text('Asia: '+Asia_Imm[0])
        inforow=infotable.append('tr')
        infodata=inforow.append('td')
        let Europe=infodata.text('Europe: '+Europe_Imm[0])
        inforow=infotable.append('tr')
        infodata=inforow.append('td')
        let Africa=infodata.text('Africa: '+Africa_Imm[0])
        inforow=infotable.append('tr')
        infodata=inforow.append('td')
        let CentralAme=infodata.text('Central America: '+CentralAme_Imm[0])
        inforow=infotable.append('tr')
        infodata=inforow.append('td')
        let SouthAme=infodata.text('South America: '+SouthAme_Imm[0])
        inforow=infotable.append('tr')
        infodata=inforow.append('td')

        }

   console.log(County);
    var idValues=County;
idValues.forEach(id=>d3.select('#selDataset').append('option').text(id).property("value",id));
// var currentID = d3.selectAll("#selDataset").node().value;
d3.selectAll("#selDataset").on("change", updatePlotly);
function updatePlotly() {
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
    //     // Initialize an empty array 
    let x = [];
    let y=[];
    // let text=[];
    for(var row = 0; row < County.length; row++){
        console.log(County[row]+" dataset "+dataset);
       if(County[row]==dataset) {
           x=Origin[row];
           y=Immcount[row];
        //    text=Origin[row];
           break;
        }
    }
 //function to update the chart
Plotly.restyle("bar", "x", [x]);
Plotly.restyle("bar", "y", [y]);
// Plotly.restyle("bar", "text", [text]);
        // for demographic info
var SelectedRow=-1;

for(var j= 0; j < County.length; j++){
    if(County[j]==dataset){
        SelectedRow=j;
        break;
    }
}

     d3.selectAll('tr').remove()
     let infotable=d3.select('#sample-metadata').append("table")
     inforow=infotable.append('tr')
     infodata=inforow.append('td')
     let origin=infodata.text('Origin: '+'Immigrants Count')
      inforow=infotable.append('tr')
      infodata=inforow.append('td')
      let asian=infodata.text('Asia: '+Asia_Imm[SelectedRow])
      inforow=infotable.append('tr')
      infodata=inforow.append('td')
      let Europe=infodata.text('Europe: '+Europe_Imm[SelectedRow])
      inforow=infotable.append('tr')
      infodata=inforow.append('td')
      let Africa=infodata.text('Africa: '+Africa_Imm[SelectedRow])
      inforow=infotable.append('tr')
      infodata=inforow.append('td')
      let CentralAme=infodata.text('Central America: '+CentralAme_Imm[SelectedRow])
      inforow=infotable.append('tr')
      infodata=inforow.append('td')
      let SouthAme=infodata.text('South America: '+SouthAme_Imm[SelectedRow])
      inforow=infotable.append('tr')
      infodata=inforow.append('td')


}
init();

})



