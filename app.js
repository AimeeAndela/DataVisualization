function sampleChart(sample) {

    var id = d3.select("#selDataset")

    d3.json("../samples.json").then((importedData) => {
    
        var data = importedData.samples;
        var filterDataArray = data.filter(dataSample => dataSample.id == sample)
        var filteredData = filterDataArray[0]
        var sampleValues = filteredData.sample_values
        var otuID = filteredData.otu_ids
        var otuLabel = filteredData.otu_labels

        var barData = [{
              x: sampleValues.slice(0, 10).reverse(),
              y: otuID.slice(0, 10).reverse(),
              type: "bar",
              orientation: "h"
            }];
            
            var barLayout = {
              title: "'Top 10 OTU"
            };
            
        Plotly.newPlot("bar", barData, barLayout);
    
    console.log(filteredData);



// var selection = d3.select("#selDataset");
//     d3.json("../samples.json").then((importData) => {
//         var names = importData.names;
//         names.forEach((name) => {
//         selection
//             .append("option")
//             .text(name)
//             .property("value", sample);

            

        var bubbleData = {
            x: otuID,
            y: sampleValues,
            mode: 'markers',
            marker: {
                size: sampleValues
                }
              };
              
        var data = [bubbleData];
              
        var layout = {
            title: 'Marker Size',
            showlegend: false,
            height: 600,
            width: 600
              };
              
            Plotly.newPlot('myDiv', data, layout);

        

        });

//     });
    
// sampleChart(names[0]);
// })
// }
var selector = d3.select("#selDataset");
d3.json("samples.json").then((data) => {
 //console.log(data);
 var sampleNames = data.names;
 sampleNames.forEach((sample) => {
  selector
   .append("option")
   .text(sample)
   .property("value", sample);
 });
 var first = sampleNames[0];
 sampleChart(first);
});
}



function optionChanged(sample) {
	sampleChart(sample)
}