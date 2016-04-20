/* jshint node:true */
'use strict';

module.exports = {
  name: 'ember-cli-swiper',

  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/Swiper/dist/css/swiper.css');
    app.import(app.bowerDirectory + '/Swiper/dist/js/swiper.js');
  }

};
