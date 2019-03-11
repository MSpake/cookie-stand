'use strict';

//object hold the info for the pike st. store
var pike_store = {
  location: 'pike',
  min_customers: 23,
  max_customers: 65,
  avg_cookies_per_sale: 6.3
};
var hold_parent_element = document.getElementById('first-list');
console.log(hold_parent_element);

var pike_entry = document.createElement('li');
pike_entry.textContent = pike_store.location;

hold_parent_element.append(pike_entry);
