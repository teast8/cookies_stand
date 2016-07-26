
var firstAndPike = document.createElement('h1');
firstAndPike.textContent = '1st and Pike';
document.body.appendChild(firstAndPike);

var hours = ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' ,'12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm'];

//1st and Pike
var firstAndPike = {
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

firstAndPike.render = function() {
  //This method will take the array of hourly cookie sales and display the data as the undordered list
  this.calcCookiesEachHour();
  //Code to make the list starts here
  seaTacAirport.render = function() {
    var seaTacList = document.getElementById('seatac');
    for (var i = 0; i < hours.length; i++){
      var listElementOne = document.createElement('li');
      listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
      seaTacList.appendChild(listElementOne);
    }
    var totalElementOne = document.createElement('li');
    totalElementOne.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    seaTacList.appendChild(totalElementOne);
  };

  SeaTacAirport.render();
};
firstAndPike.render();

firstAndPike.render = function() {
  //This method will take the array of hourly cookie sales and display the data as the undordered list
  this.calcCookiesEachHour();
  //Code to make the list starts here
  seaTacAirport.render = function() {
    var seaTacList = document.getElementById('seatac');
    for (var i = 0; i < hours.length; i++){
      var listElementOne = document.createElement('li');
      listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
      seaTacList.appendChild(listElementOne);
    }
    var totalElementOne = document.createElement('li');
    totalElementOne.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    seaTacList.appendChild(totalElementOne);
  };

  SeaTacAirport.render();
};
firstAndPike.render();
