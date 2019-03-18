// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

console.log(data);

// // Step 1: Loop Through `data` and console.log each ufosighting object
function buildTable(data){
tbody.html("");
  
 // Populate data 
 data.forEach((ufosighting) => {
   var row = tbody.append("tr");
   console.log(row);
   Object.entries(ufosighting).forEach(([key, value]) => {
     var cell = tbody.append("td");
     cell.text(value);
    
   });
 });
}
 // Select the submit button
var submit = d3.select("#filter-btn");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
d3.event.preventDefault();
// var row=tbody.append("tr");




  // Select the input element and get the raw HTML node
  var inputElement=d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // console.log(inputvalue);
  // console.log(tabledata)

  // Use the form input to filter the data by datetime
var filterData= tableData.filter(row=>row.datetime===inputValue);


filterData.forEach(function (ufosighting) {
  console.log(ufosighting);
  row = tbody.append("tr");

  Object.entries(ufosighting).forEach(function ([key, value]) {
      console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
  });
  buildTable(filterData);
});

});

buildTable(tableData);