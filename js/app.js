
// var firstAndPike = document.createElement('h1');
// firstAndPike.textContent = '1st and Pike';
// document.body.appendChild(firstAndPike);

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


  // this.render = function() {
  //
  //   var seattleCenterList = document.getElementById('pike');
  //
  //   var seattleCenterList = document.getElementById('seattleCenter');
  //
  //   for (var i = 0; i < hours.length; i++){
  //     var listElementOne = document.createElement('li');
  //     listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
  //     seattleCenterList.appendChild(listElementOne);
  //   }
  //
  //   // document.body.appendChild(seattleCenterList);
  //
  //   document.body.appendChild(seattleCenterList);
  //
  //   var seattleCenterTotal = document.createElement('li');
  //   seattleCenterTotal.textContent = 'Total: ' + this.totalDailyCookiesSale + ' cookies';
  //   seattleCenterList.appendChild(seattleCenterTotal);
  // };

  this.calcCustEachHour();
  this.calcCookiesEachHour();

  // this.render();
  storeLocations.push(this);
}; // END OF CONSTRUCTOR


// This method will generate a random of customers for each hour and push them into a array.
StoreLocation.prototype.calcCustEachHour = function () {
  for (i = 0; i < hours.length; i++) {
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

this.calcCookiesEachHour = function() {
};




// Stores that run through the CONSTRUCTOR
var pike = new StoreLocation('First And Pike' , 23 , 65 , 6.3);
var seatac = new StoreLocation('SeaTac Airport' , 3 , 24 , 1.2);
var center = new StoreLocation('Seattle Center' , 11 , 38 , 3.7);
var capitol = new StoreLocation('Capitol Hill' , 20 , 38 , 2.3);
var alkibeach = new StoreLocation('Alki' , 2 , 16 , 4.6);






function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thElement = document.createElement('th');
  tableRow.appendChild(thElement);
  for (var i = 0; i < hours.length; i++ ) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
  };
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total:';
  tableRow.appendChild(thElement);
  storeTable.appendChild(tableRow);
}

function makeAllStoreRows() {
  for (var store = 0; store < storeLocations.length; store++ ){
    var tableRow = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = storeLocations[store].name;
    tableRow.appendChild(tdElement);
    for (var i = 0; i < hours.length; i++) {
      tdElement = document.createElement('td');
      tdElement.textContent = storeLocations[store].cookiesSoldEachHour[i];
      tableRow.appendChild(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = storeLocations[store].totalCookies;
    tableRow.appendChild(tdElement);
    storeTable.appendChild(tableRow);
  }
};

function makeTotalsRow() {
  var footerRow = document.createElement('tfoot');
  storeTable.appendChild(footerRow);
  var tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  footerRow.appendChild(tableRow);
  var globalDailyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var totalForEachHour = 0;
    for (var store = 0; store < myStores.length; store++) {
      totalForEachHour = totalForEachHour + myStores[store].cookiesEachHourArray[i];
      globalDailyTotal += myStores[store].cookiesEachHourArray[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalForEachHour;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = globalDailyTotal;
  tableRow.appendChild(tdElement);
}
// makeHeaderRow();
// makeAllStoreRows();

// function handleNewLocationSubmit(event){
