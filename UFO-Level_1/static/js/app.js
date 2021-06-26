// from data.js
var tableData = data;

// Select the table body 
var tbody = d3.select("tbody")

// Loop through data and append rows to the table body.
// Use d3 to update each cell's text with UFO report values (Date, City, State, Country, Shape, Duration, Comment).

tableData.forEach(function(ufo){            // Two ways: declaring a function or using arrow =>.
    var row = tbody.append("tr");           // example: data.forEach((ufo) => {}
    
    // use append method to insert table data for each row
    
    Object.entries(ufo).forEach(function([key,value]){
        // console.log(key, value);         // Verify the print of each key&value for UFO report.
        
        // Function to create the table:
        // Use append to insert a cell for each value in the UFO Report.
        // Use text to insert data to each cell.

        var cell = row.append("td").text(value);    
    });
});

// Select the button and create function

