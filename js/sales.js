'use strict';

//Business Hours
// var business_hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];

function Cookie_store(location, min_customers, max_customers, avg_cookies_per_sale) {
  this.location = location;
  this.min_customers = min_customers;
  this.max_customers = max_customers;
  this.avg_cookies_per_sale = avg_cookies_per_sale;
  this.hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
  this.cookies_per_hour = [];
  this.total_cookies_sold = 0;
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

console.log(pike_store);
console.log(seatac_store);
console.log(seattle_center_store);
console.log(capitol_hill_store);
console.log(alki_store);



// //display cookie sales per hour
// //list hourly increments including am/pm
// function print_hourly_sales() {
//     //remove all whitespace syntax found on Stack Overflow: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text/6623263
//     var get_parent_element = document.getElementById(this.location.toLowerCase().replace(/\s/g, ''));
//     var cookies_per_hour_list = document.createElement('ul');
//     get_parent_element.appendChild(cookies_per_hour_list);


//   for (var i = 0; i < this.hours.length; i++) {
//     var am_pm;
//     if (i < 6) { am_pm = 'am'; } else { am_pm = 'pm'; } //this will cause problems if the hours change.
//     var add_hourly = document.createElement('li');
//     add_hourly.textContent = `${this.hours[i]}${am_pm}: ${this.cookies_per_hour[i]} cookies`;
//     cookies_per_hour_list.appendChild(add_hourly);
//   }
// }

// //function to render given store to the page
// function add_store_to_sales_list(store) {
//   var get_parent_element = document.getElementById('sales-list');
//   var add_store_li = document.createElement('li');
//   //remove all whitespace syntax found on Stack Overflow: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text/6623263
//   add_store_li.setAttribute('id', store.location.toLowerCase().replace(/\s/g, ''));
//   add_store_li.setAttribute('class', 'store');
//   get_parent_element.appendChild(add_store_li);

//   var store_header = document.createElement('h2');
//   store_header.textContent = store.location;
//   add_store_li.appendChild(store_header);
// }


// add_store_to_sales_list(pike_store);
// add_store_to_sales_list(seatac_store);
// add_store_to_sales_list(seattle_center_store);
// add_store_to_sales_list(capitol_hill_store);
// add_store_to_sales_list(alki_store);


// pike_store.hourly_sales();
// seatac_store.hourly_sales();
// seattle_center_store.hourly_sales();
// capitol_hill_store.hourly_sales();
// alki_store.hourly_sales();
