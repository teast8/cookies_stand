'use strict';

var hours = [' ', '6:00am' , '7:00am' , '8:00am' , '9:00am' , '10:00am' , '11:00am' ,'12:00pm' , '1:00pm' , '2:00pm' , '3:00pm' , '4:00pm' , '5:00pm' , '6:00pm' , '7:00pm' , '8:00pm', 'TOTAL'];

var storeLocations = [];

function StoreLocation(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookiesSale = 0;
  this.stringsForDisplayInLists = [];
  this.calcCustEachHour();
  this.calcCookiesEachHour();
  storeLocations.push(this);
}; // END OF CONSTRUCTOR

// This method will generate a random of customers for each hour and push them into a array.
StoreLocation.prototype.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
  console.log(this.custEachHourArray);
};

// This method will use the array of customers for each hour, multiply each of the those hourly values by the
// average cookies per customer, and generate an array of hourly cookie sales...
StoreLocation.prototype.calcCookiesEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookiesSale += singleHourCookies;
  }
  this.stringsForDisplayInLists.push('Total: ' + this.totalDailyCookiesSale + ' cookies');
};

// Stores that run through the CONSTRUCTOR
var pike = new StoreLocation('First And Pike' , 23 , 65 , 6.3);
var seatac = new StoreLocation('SeaTac Airport' , 3 , 24 , 1.2);
var center = new StoreLocation('Seattle Center' , 11 , 38 , 3.7);
var capitol = new StoreLocation('Capitol Hill' , 20 , 38 , 2.3);
var alkibeach = new StoreLocation('Alki' , 2 , 16 , 4.6);

// CREATE THE TABLE HEADER
function makeHeaderRow() {
  // GRAB THE TABLE ID FROM THE HTML
  var table = document.getElementById('storeTable');
  // CREATE THE TABLE ROW ELEMENT
  var tableRow = document.createElement('tr');
  // CREATE A TABLE HEADER FOR EVER ITEM IN HOURS ARRAY
  for (var i = 0; i < hours.length; i++) {
    // CREATE THE TABLE HEADER FOR DATES
    var tableHeader = document.createElement('th');
    // FILL IN THE TABLE HEADER CONTENT
    tableHeader.textContent = hours[i];
    // APPEND THE TABLE HEADER TO THE ROW
    tableRow.appendChild(tableHeader);
  };
  // APPEND THE TABLE ROW TO THE TABLE
  table.appendChild(tableRow);
};
makeHeaderRow();

// FILL IN THE BODY OF THE TABLE WITH DATA
function makeAllStoreRows() {
  // GO THROUGH THE STORE LOCATIONS ARRAY AND FILL IN THE TABLE
  for (var j = 0; j < storeLocations.length; j++) {
    // GRAB THE TABLE ID FROM THE HTML
    var table = document.getElementById('storeTable');
    // CREATE A TABLE ROW ELEMENT
    var tableRow = document.createElement('tr');
    // CREATE A TABLE DATA HEADER (TD) FOR THE STORE NAME
    var tableName = document.createElement('th');
    // FILL IN THE TABLE DATA FOR THE TABLE NAME
    tableName.textContent = storeLocations[j].storeName;
    // APPEND THE TABLE DATA TO THE ROW
    tableRow.appendChild(tableName);
    // CREATES TABLE DATA FOR EACH ITEM IN 'cookiesEachHourArray' ARRAY
    for (var i = 0; i < (hours.length - 2); i++) {
      // CREATE A TABLE DATA ELEMENT
      var tableData =  document.createElement('td');
      // FILL IN THE COOKIES EACH HOUR INTO THE TABLE
      tableData.textContent = storeLocations[j].cookiesEachHourArray[i];
      // APPEND THE TABLE DATA TO THE TABLE ROW
      tableRow.appendChild(tableData);
    };
    // CREATE A TABLE DATA ELEMENT
    var tableTotal =  document.createElement('td');
    // FILL IN THE TOTAL DAILY COOKIES TO THE TABLE`
    tableTotal.textContent = storeLocations[j].totalDailyCookiesSale;
    // APPEND THE TOTAL TABLE DATA TO THE TABLE ROW
    tableRow.appendChild(tableTotal);
    // FINALLY APPENDING THE WHOLE TABLE ROW TO THE TABLE
    table.appendChild(tableRow);
  }
};
makeAllStoreRows();

// function makeTotalsRow () {
//   for (var store = 0; store < storeLocations.length; store++) {
//       totalForEachHour = totalForEachHour + storeLocation[store].cookiesSoldEachHour[i];
//       globalDailyTotal += myStores[store].cookiesSoldEachHour[i];
//     }
// 
// }

  //
  // var tableRow = document.createElement('tr');
  // var thElement = document.createElement('th');
  // tableRow.appendChild(thElement);
  // for (var i = 0; i < hours.length; i++ ) {
  //   thElement = document.createElement('th');
  //   thElement.textContent = hours[i];
  //   tableRow.appendChild(thElement);
  // };
  // thElement = document.createElement('th');
  // thElement.textContent = 'Daily Location Total:';
  // tableRow.appendChild(thElement);
  // storeTable.appendChild(tableRow);
// }
//
// function makeAllStoreRows() {
//   for (var store = 0; store < storeLocations.length; store++ ){
//     var tableRow = document.createElement('tr');
//     var tdElement = document.createElement('td');
//     tdElement.textContent = storeLocations[store].name;
//     tableRow.appendChild(tdElement);
//     for (var i = 0; i < hours.length; i++) {
//       tdElement = document.createElement('td');
//       tdElement.textContent = storeLocations[store].cookiesSoldEachHour[i];
//       tableRow.appendChild(tdElement);
//     }
//     tdElement = document.createElement('td');
//     tdElement.textContent = storeLocations[store].totalCookies;
//     tableRow.appendChild(tdElement);
//     storeTable.appendChild(tableRow);
//   }
// };
//
// function makeTotalsRow() {
//   var footerRow = document.createElement('tfoot');
//   storeTable.appendChild(footerRow);
//   var tableRow = document.createElement('tr');
//   tableRow.textContent = 'Totals';
//   footerRow.appendChild(tableRow);
//   var globalDailyTotal = 0;
//   for (var i = 0; i < hours.length; i++) {
//     var totalForEachHour = 0;
//     for (var store = 0; store < myStores.length; store++) {
//       totalForEachHour = totalForEachHour + myStores[store].cookiesEachHourArray[i];
//       globalDailyTotal += myStores[store].cookiesEachHourArray[i];
//     }
//     var tdElement = document.createElement('td');
//     tdElement.textContent = totalForEachHour;
//     tableRow.appendChild(tdElement);
//   }
//   tdElement = document.createElement('td');
//   tdElement.textContent = globalDailyTotal;
//   tableRow.appendChild(tdElement);
// }
// makeHeaderRow();
// makeAllStoreRows();

// function handleNewLocationSubmit(event){
