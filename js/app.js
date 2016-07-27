
// var firstAndPike = document.createElement('h1');
// firstAndPike.textContent = '1st and Pike';
// document.body.appendChild(firstAndPike);

var hours = ['6:00am' , '7:00am' , '8:00am' , '9:00am' , '10:00am' , '11:00am' ,'12:00pm' , '1:00pm' , '2:00pm' , '3:00pm' , '4:00pm' , '5:00pm' , '6:00pm' , '7:00pm' , '8:00pm'];
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

  this.calcCustEachHour = function() {
    // This method will generate a random of customers for each hour and push them into a array.
    for (i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.custEachHourArray.push(singleHourCust);
    }
    console.log(this.custEachHourArray);
  };

  this.calcCookiesEachHour = function() {
    //This method will use the array of customers for each hour, multiply each of the those hourly values by the average cookies per customer, and generate an array of hourly cookie sales
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookiesSale += singleHourCookies;
    }
    this.stringsForDisplayInLists.push('Total: ' + this.totalDailyCookiesSale + ' cookies');
  };

  this.render = function() {
    var seattleCenterList = document.getElementById('pike');
    for (var i = 0; i < hours.length; i++){
      var listElementOne = document.createElement('li');
      listElementOne.textContent = hours[i] + ': ' + this.cookiesEachHourArray[i] + ' cookies';
      seattleCenterList.appendChild(listElementOne);
    }
    // document.body.appendChild(seattleCenterList);
    var seattleCenterTotal = document.createElement('li');
    seattleCenterTotal.textContent = 'Total: ' + this.totalDailyCookiesSale + ' cookies';
    seattleCenterList.appendChild(seattleCenterTotal);
  };

  this.calcCustEachHour();
  this.calcCookiesEachHour();
  this.render();
  storeLocations.push(this);
};

var pike = new StoreLocation('First And Pike' , 23 , 65 , 6.3);
var seatac = new StoreLocation('SeaTac Airport' , 3 , 24 , 1.2);
var center = new StoreLocation('Seattle Center' , 11 , 38 , 3.7);
var capitol = new StoreLocation('Capitol Hill' , 20 , 38 , 2.3);
var alkibeach = new StoreLocation('Alki' , 2 , 16 , 4.6);
