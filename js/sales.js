'use strict';


var business_hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cookie_store(location, min_customers, max_customers, avg_cookies_per_sale) {
  this.location = location;
  this.min_customers = min_customers;
  this.max_customers = max_customers;
  this.avg_cookies_per_sale = avg_cookies_per_sale;
  this.hours = business_hours;
  this.cookies_per_hour = [];
  this.total_cookies_sold = 0;
  //remove all whitespace syntax found on Stack Overflow: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text/6623263
  this.id_name = this.location.toLowerCase().replace(/\s/g, '');
}

//generate random number of customers per hour
//calculate cookie sales for the hour
//add cookies sold per hour to the store's cookies_per_hour array
//update total cookies sold for the day
Cookie_store.prototype.calculate_sales_per_hour = function() {
  for (var i = 0; i < this.hours.length; i++) {
    //syntax for Math.random from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var max = Math.floor(this.max_customers);
    var min = Math.ceil(this.min_customers);
    var customers_per_hour = Math.floor(Math.random() * (max - min)) + min;
    var cookies_per_hour = Math.round(customers_per_hour * this.avg_cookies_per_sale);
    this.cookies_per_hour.push(cookies_per_hour);
    this.total_cookies_sold += cookies_per_hour;
  }
};

//function to render given store to the page
Cookie_store.prototype.add_store_to_sales_list = function() {
  ////add tds for each hour of sales

  var get_parent_element = document.getElementById('sales-list-body');
  var add_store_row = document.createElement('tr');
  add_store_row.setAttribute('id', this.id_name);
  add_store_row.setAttribute('class', 'store');

  var store_name = document.createElement('th');
  store_name.textContent = this.location;

  add_store_row.appendChild(store_name);

  for (var i = 0; i < this.hours.length; i++) {
    var add_hourly_sales = document.createElement('td');
    add_hourly_sales.textContent = this.cookies_per_hour[i];
    add_store_row.appendChild(add_hourly_sales);
  }

  get_parent_element.appendChild(add_store_row);
};

//TODO: add a function to populate the header with the business hours

var pike_store = new Cookie_store('Pike Place', 23, 65, 6.3);
var seatac_store = new Cookie_store('SeaTac', 3, 24, 1.2);
var seattle_center_store = new Cookie_store('Seattle Center', 11, 38, 3.7);
var capitol_hill_store = new Cookie_store('Capitol Hill', 20, 38, 2.3);
var alki_store = new Cookie_store('Alki', 2, 16, 4.6);

pike_store.calculate_sales_per_hour();
seatac_store.calculate_sales_per_hour();
seattle_center_store.calculate_sales_per_hour();
capitol_hill_store.calculate_sales_per_hour();
alki_store.calculate_sales_per_hour();

pike_store.add_store_to_sales_list();
seatac_store.add_store_to_sales_list();
seattle_center_store.add_store_to_sales_list();
capitol_hill_store.add_store_to_sales_list();
alki_store.add_store_to_sales_list();

console.log(pike_store);
console.log(seatac_store);
console.log(seattle_center_store);
console.log(capitol_hill_store);
console.log(alki_store);
