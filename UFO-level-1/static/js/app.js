// from data.js
var tableData = data;

// YOUR CODE HERE!
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
// appends a table to your web page and then adds new rows of data for each UFO sighting.
// Select the button
var button = d3.select('button');

// Select the form
var form = d3.select('#form');

// Select the table body
var table = d3.select('tbody');

// Create event handlers 
fillTable(tableData);
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events
// and search through the date/time column to find rows that match user input.

  // Table function
function fillTable(data) {
  table.html("");

  data.forEach(dataRow => {
      var row = table.append('tr');

      Object.values(dataRow).forEach(val => {
          var cell = row.append('td');

          cell.text(val);
        });
    });
};


// Click handler

function runEnter() {
  d3.event.preventDefault();

  var date = d3.select('input').property('value');
  var filteredData = tableData;

  if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
  };

  d3.select('input').property('value', '');
  fillTable(filteredData);
}

