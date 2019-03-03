const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.countriesData = [];
  this.regions = [];
};

Countries.prototype.getData = function(){
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get().then((data) => {
    this.countriesData = data;
    PubSub.publish('Countries:countries-ready', this.countriesData);
  });
}

module.exports = Countries;
