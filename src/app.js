const Countries = require('./models/countries.js');
const CountryListView = require('./views/country_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#country-list');
  const countryListView = new CountryListView(listContainer);
  countryListView.bindEvents();

  const countries = new Countries;
  countries.getData();
});
