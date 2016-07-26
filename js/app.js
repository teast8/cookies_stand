
// var firstAndPike = document.createElement('h1');
// firstAndPike.textContent = '1st and Pike';
// document.body.appendChild(firstAndPike);

var hours = ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' ,'12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm'];

//1st and Pike
var firstAndPike = {
  //properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookiesSale: 0 //lets use += later};
};

firstAndPike.calcCustEachHour = function() {
  // This method will generate a random of customers for each hour and push them into a array.
  for (i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
  console.log(this.custEachHourArray);
};

firstAndPike.calcCookiesEachHour = function() {
   //This method will use the array of customers for each hour, multiply each of the those hourly values by the average cookies per customer, and generate an array of hourly cookie sales
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookiesSale += singleHourCookies;
  }
};

firstAndPike.calcCookiesEachHour();
  //This method will take the array of hourly cookie sales and display the data as the undordered list

  //Code to make the list starts here
firstAndPike.render = function() {
  var pikeList = document.getElementById('pike');
  for (var i = 0; i < hours.length; i++){
    var listElementOne = document.createElement('li');
    listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    pikeList.appendChild(listElementOne);
  }
  document.body.appendChild(pikeList);
  var pikeTotal = document.createElement('li');
  pikeTotal.textContent = 'Total: ' + this.totalDailyCookiesSale + ' cookies';
  pikeList.appendChild(pikeTotal);
};

firstAndPike.render();

var seaTacAirport = {
  //properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookiesSale: 0 //lets use += later};
};

seaTacAirport.calcCustEachHour = function() {
  // This method will generate a random of customers for each hour and push them into a array.
  for (i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
  console.log(this.custEachHourArray);
};

seaTacAirport.calcCookiesEachHour = function() {
   //This method will use the array of customers for each hour, multiply each of the those hourly values by the average cookies per customer, and generate an array of hourly cookie sales
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookiesSale += singleHourCookies;
  }
};

seaTacAirport.calcCookiesEachHour();
  //This method will take the array of hourly cookie sales and display the data as the undordered list

  //Code to make the list starts here
seaTacAirport.render = function() {
  var seatacList = document.getElementById('seatac');
  for (var i = 0; i < hours.length; i++){
    var listElementOne = document.createElement('li');
    listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    seatacList.appendChild(listElementOne);
  }
  document.body.appendChild(seatacList);
  var seatacTotal = document.createElement('li');
  seatacTotal.textContent = 'Total: ' + this.totalDailyCookiesSale + ' cookies';
  seatacList.appendChild(seatacTotal);
};

seaTacAirport.render();

var seattleCenter = {
  //properties
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookiesSale: 0 //lets use += later};
};

seattleCenter.calcCustEachHour = function() {
  // This method will generate a random of customers for each hour and push them into a array.
  for (i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
  console.log(this.custEachHourArray);
};

seattleCenter.calcCookiesEachHour = function() {
   //This method will use the array of customers for each hour, multiply each of the those hourly values by the average cookies per customer, and generate an array of hourly cookie sales
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookiesSale += singleHourCookies;
  }
};

seattleCenter.calcCookiesEachHour();
  //This method will take the array of hourly cookie sales and display the data as the undordered list

  //Code to make the list starts here
seattleCenter.render = function() {
  var seattleCenterList = document.getElementById('seattleCenter');
  for (var i = 0; i < hours.length; i++){
    var listElementOne = document.createElement('li');
    listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    seattleCenterList.appendChild(listElementOne);
  }
  document.body.appendChild(seattleCenterList);
  var seattleCenterTotal = document.createElement('li');
  seattleCenterTotal.textContent = 'Total: ' + this.totalDailyCookiesSale + ' cookies';
  seattleCenterList.appendChild(seattleCenterTotal);
};

seattleCenter.render();

var capitolHill = {
  //properties
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookiesSale: 0 //lets use += later};
};

capitolHill.calcCustEachHour = function() {
  // This method will generate a random of customers for each hour and push them into a array.
  for (i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
  console.log(this.custEachHourArray);
};

capitolHill.calcCookiesEachHour = function() {
   //This method will use the array of customers for each hour, multiply each of the those hourly values by the average cookies per customer, and generate an array of hourly cookie sales
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookiesSale += singleHourCookies;
  }
};

capitolHill.calcCookiesEachHour();
  //This method will take the array of hourly cookie sales and display the data as the undordered list

  //Code to make the list starts here
capitolHill.render = function() {
  var capitolHillList = document.getElementById('capitolHill');
  for (var i = 0; i < hours.length; i++){
    var listElementOne = document.createElement('li');
    listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    capitolHillList.appendChild(listElementOne);
  }
  document.body.appendChild(capitolHillList);
  var capitolHillTotal = document.createElement('li');
  capitolHillTotal.textContent = 'Total: ' + this.totalDailyCookiesSale + ' cookies';
  capitolHillList.appendChild(capitolHillTotal);
};

capitolHill.render();

var alki = {
  //properties
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHourArray: [],
  cookiesEachHourArray: [],
  totalDailyCookiesSale: 0 //lets use += later};
};

alki.calcCustEachHour = function() {
  // This method will generate a random of customers for each hour and push them into a array.
  for (i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
  console.log(this.custEachHourArray);
};

alki.calcCookiesEachHour = function() {
   //This method will use the array of customers for each hour, multiply each of the those hourly values by the average cookies per customer, and generate an array of hourly cookie sales
  this.calcCustEachHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookiesSale += singleHourCookies;
  }
};

alki.calcCookiesEachHour();
  //This method will take the array of hourly cookie sales and display the data as the undordered list

  //Code to make the list starts here
alki.render = function() {
  var alkiList = document.getElementById('alki');
  for (var i = 0; i < hours.length; i++){
    var listElementOne = document.createElement('li');
    listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
    alkiList.appendChild(listElementOne);
  }
  document.body.appendChild(alkiList);
  var alkiTotal = document.createElement('li');
  alkiTotal.textContent = 'Total: ' + this.totalDailyCookiesSale + ' cookies';
  alkiList.appendChild(alkiTotal);
};

alki.render();
