'use strict';

//object hold the info for the pike st. store
var pike_store = {
  location: 'Pike',
  min_customers: 23,
  max_customers: 65,
  avg_cookies_per_sale: 6.3
};

var seatac_store = {
  location: 'SeaTac',
  min_customers: 3,
  max_customers: 24,
  avg_cookies_per_sale: 1.2
};

var seattle_center_store = {
  location: 'Seattle Center',
  min_customers: 11,
  max_customers: 38,
  avg_cookies_per_sale: 3.7
};

var capitol_hill_store = {
  location: 'Capitol Hill',
  min_customers: 20,
  max_customers: 38,
  avg_cookies_per_sale: 2.3
};

var alki_store = {
  location: 'Alki',
  min_customers: 2,
  max_customers: 16,
  avg_cookies_per_sale: 4.6
};

//print to page
//make it a function
var add_store_to_sales_list = function(store) {
  var get_parent_element = document.getElementById('sales-list');
  var add_store = document.createElement('li');
  add_store.textContent = store.location;
  get_parent_element.append(add_store);
};

add_store_to_sales_list(pike_store);
add_store_to_sales_list(seatac_store);
add_store_to_sales_list(seattle_center_store);
add_store_to_sales_list(capitol_hill_store);
add_store_to_sales_list(alki_store);
