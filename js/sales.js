'use strict';

//Business Hours
var business_hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];


//objects hold the info for the 5 stores
var pike_store = {
  location: 'Pike Place',
  min_customers: 23,
  max_customers: 65,
  avg_cookies_per_sale: 6.3,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour,
  hourly_sales: print_hourly_sales
};

var seatac_store = {
  location: 'SeaTac',
  min_customers: 3,
  max_customers: 24,
  avg_cookies_per_sale: 1.2,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour,
  hourly_sales: print_hourly_sales
};

var seattle_center_store = {
  location: 'Seattle Center',
  min_customers: 11,
  max_customers: 38,
  avg_cookies_per_sale: 3.7,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour,
  hourly_sales: print_hourly_sales
};

var capitol_hill_store = {
  location: 'Capitol Hill',
  min_customers: 20,
  max_customers: 38,
  avg_cookies_per_sale: 2.3,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour,
  hourly_sales: print_hourly_sales
};

var alki_store = {
  location: 'Alki',
  min_customers: 2,
  max_customers: 16,
  avg_cookies_per_sale: 4.6,
  hours: business_hours,
  cookies_per_hour: [],
  total_cookies_sold: 0,
  calculate_sales: sales_per_hour,
  hourly_sales: print_hourly_sales
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
    var cookies_per_hour = Math.round(customers_per_hour * this.avg_cookies_per_sale);
    this.cookies_per_hour.push(cookies_per_hour);
    this.total_cookies_sold += cookies_per_hour;
  }
}

//display cookie sales per hour
//list hourly increments including am/pm
function print_hourly_sales() {
  //remove all whitespace syntax found on Stack Overflow: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text/6623263
  var get_parent_element = document.getElementById(this.location.toLowerCase().replace(/\s/g, ''));
  var cookies_per_hour_list = document.createElement('ul');
  get_parent_element.append(cookies_per_hour_list);


  for (var i = 0; i < this.hours.length; i++) {
    var am_pm;
    if (i < 6) { am_pm = 'am'; } else { am_pm = 'pm'; } //this will cause problems if the hours change.
    var add_hourly = document.createElement('li');
    add_hourly.textContent = `${this.hours[i]}${am_pm}: ${this.cookies_per_hour[i]} cookies`;
    cookies_per_hour_list.append(add_hourly);
  }
}

//function to print given store to the page
function add_store_to_sales_list(store) {
  var get_parent_element = document.getElementById('sales-list');
  var add_store_li = document.createElement('li');
  //remove all whitespace syntax found on Stack Overflow: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text/6623263
  add_store_li.setAttribute('id', store.location.toLowerCase().replace(/\s/g, ''));
  add_store_li.setAttribute('class', 'store');
  get_parent_element.append(add_store_li);

  var store_header = document.createElement('h2');
  store_header.textContent = store.location;
  add_store_li.append(store_header);
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

pike_store.hourly_sales();
seatac_store.hourly_sales();
seattle_center_store.hourly_sales();
capitol_hill_store.hourly_sales();
alki_store.hourly_sales();
