/* GET 'home' page */
module.exports.homelist = function (req, res){
  res.render('locations-list', {title: "Home"});
};
/* GET 'Locations Info' page */
module.exports.locationInfo = function(req, res){
  res.render('index', {title: "Location Info"});
};
/* GET 'Add Review' page*/
module.exports.addReview = function(req, res){
  res.render('index', {title: "Add review"})
};


/*
module.exports = {
  index: function(req, res){
    res.render('index',  {title: 'Express'});
  },
  main: function(req, res){
    res.render('index',  {title: 'Express'});
  }
}
*/
