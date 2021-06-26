// from data.js
var tableData = data;

// Get a reference to the table body 
var tbody = d3.select("tbody")

// Loop through data and append rows to the table body.
// Use d3 to update each cell's text with UFO report values (Date, City, State, Country, Shape, Duration, Comment).

tableData.forEach(function(ufo){            // Two ways: declaring a function or using arrow =>.
    var row = tbody.append("tr");           // example: data.forEach((ufo) => {}
    
    // Iterate through each row for key and values.
    
    Object.entries(ufo).forEach(function([key,value]){
        // console.log(key, value);         // Verify the print of each key&value from UFO report.
        
        // Function to add the "td" in each row to create the table:
        // Use append to insert a cell for each value in the UFO Report.
        // Use text to insert data to each cell.

        var cell = row.append("td").text(value);
    });
});

// Select the button and create function
var button = d3.select("#filter-btn");

button.on("click", function(){
    
    // Select the input element and get the html node
    var inputElement = d3.select(".form-control");
    
    // Get the value property of the input element
    var inputDate = inputElement.property("value");
    console.log(inputDate)
    
    // filter data for the date value to get data that is searched for
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    //console.log(filteredData);

    // select the table body to insert table rows and cells
    var tbody = d3.select("tbody")
    // clean the table body to insert selected date values
    tbody.html("");

    // loop through filtered data to insert rows and cells for each object
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});
