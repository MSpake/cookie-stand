'use strict';
/*
TODO: Display the values of each array as unordered lists in the browser
Calculating the sum of these hourly totals; your output for each location should look like this:

1st and Pike

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
8pm: 29 cookies
Total: 657 cookies
DONE: Display the lists on sales.html. We will be adding features to this application and working with its layout throughout the week.
*/

//Business Hours
var business_hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];


//objects hold the info for the 5 stores
var pike_store = {
  location: 'Pike',
  min_customers: 23,
  max_customers: 65,
  avg_cookies_per_sale: 6.3,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour
};

var seatac_store = {
  location: 'SeaTac',
  min_customers: 3,
  max_customers: 24,
  avg_cookies_per_sale: 1.2,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour
};

var seattle_center_store = {
  location: 'Seattle Center',
  min_customers: 11,
  max_customers: 38,
  avg_cookies_per_sale: 3.7,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour
};

var capitol_hill_store = {
  location: 'Capitol Hill',
  min_customers: 20,
  max_customers: 38,
  avg_cookies_per_sale: 2.3,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour
};

var alki_store = {
  location: 'Alki',
  min_customers: 2,
  max_customers: 16,
  avg_cookies_per_sale: 4.6,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour
};

//print to page
//make it a function
var add_store_to_sales_list = function(store) {
  var get_parent_element = document.getElementById('sales-list');
  var add_store = document.createElement('h2');
  //remove all whitespace syntax found on Stack Overflow: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text/6623263
  add_store.setAttribute('id', store.location.toLowerCase().replace(/\s/g, ''));
  console.log(add_store);
  add_store.textContent = store.location;
  get_parent_element.append(add_store);
};

//generate random number of customers per hour
//calculate cookie sales for the hour
//add cookies sold per hour to the store's cookies_per_hour array
//update total cookies sold for the day
function sales_per_hour() {
  for (var i = 0; i < this.hours.length; i++) {
    //syntax for Math.random from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var max = Math.floor(this.max_customers);
    var min = Math.ceil(this.min_customers);
    var customers_per_hour = Math.floor(Math.random() * (max - min)) + min;
    var cookies_per_hour = customers_per_hour * this.avg_cookies_per_sale;
    this.cookies_per_hour.push(cookies_per_hour);
    this.total_cookies_sold += cookies_per_hour;
  }
}



add_store_to_sales_list(pike_store);
add_store_to_sales_list(seatac_store);
add_store_to_sales_list(seattle_center_store);
add_store_to_sales_list(capitol_hill_store);
add_store_to_sales_list(alki_store);

pike_store.calculate_sales();
seatac_store.calculate_sales();
seattle_center_store.calculate_sales();
capitol_hill_store.calculate_sales();
alki_store.calculate_sales();
