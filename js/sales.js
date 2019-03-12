'use strict';

//Cookie store constructor
//takes store location, minimun customers per day, maximum customers per day, and average number of cookies sold per customer
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

//method to generate random number of customers per hour
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

//method to render the store sales to the page
Cookie_store.prototype.render_store_to_sales_list = function() {
  var get_parent_element = document.getElementById('sales-list-body');
  var store_row = document.createElement('tr');
  store_row.setAttribute('id', this.id_name);
  store_row.setAttribute('class', 'store');

  var store_name = document.createElement('th');
  store_name.textContent = this.location;
  store_row.appendChild(store_name);

  for (var i = 0; i < this.hours.length; i++) {
    var hourly_sales = document.createElement('td');
    hourly_sales.textContent = this.cookies_per_hour[i];
    store_row.appendChild(hourly_sales);
  }

  var daily_total = document.createElement('td');
  daily_total.textContent = this.total_cookies_sold;
  store_row.appendChild(daily_total);

  get_parent_element.appendChild(store_row);
};


//populate the header of the table with the business hours
function header() {
  var table_head = document.getElementById('sales-list-head');
  var place_holder = document.createElement('th');
  table_head.appendChild(place_holder);

  for (var i = 0; i < business_hours.length; i++) {
    var hour = document.createElement('th');
    hour.textContent = business_hours[i];
    table_head.appendChild(hour);
  }
}

//populate the footer of the table with the daily totals
function footer() {
  var table_foot = document.getElementById('sales-list-foot');
  var totals_row = document.createElement('th');
  totals_row.textContent = 'Totals';
  table_foot.appendChild(totals_row);

  var total_all_stores = 0;

  for (var i = 0; i < business_hours.length; i++) {
    var total = document.createElement('td');
    var hourly_total = 0;
    for (var j = 0; j < stores.length; j++) {
      hourly_total += (stores[j].cookies_per_hour[i]);
    }
    total_all_stores += hourly_total;
    total.textContent = hourly_total;
    table_foot.appendChild(total);
  }

  var total_total = document.createElement('td');
  total_total.textContent = total_all_stores;
  table_foot.appendChild(total_total);
}

//--------------------------------

//hours the cookie stores are open
var business_hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//list of stores
var stores = [
  new Cookie_store('Pike Place', 23, 65, 6.3),
  new Cookie_store('SeaTac', 3, 24, 1.2),
  new Cookie_store('Seattle Center', 11, 38, 3.7),
  new Cookie_store('Capitol Hill', 20, 38, 2.3),
  new Cookie_store('Alki', 2, 16, 4.6)
];

//calculate daily sales for each store
//render store sales to the page
for (var i = 0; i < stores.length; i++) {
  stores[i].calculate_sales_per_hour();
  stores[i].render_store_to_sales_list();
}

console.log(stores);

//render header (business hours)
//render footer (hourly sales)
header();
footer();
