/* GET Home Page */

module.exports = {
  index: function(req, res){
    res.render('index',  {title: 'Express'});
  },
  main: function(req, res){
    res.render('index',  {title: 'Express'});
  }
}
