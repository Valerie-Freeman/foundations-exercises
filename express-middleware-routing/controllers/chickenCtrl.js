const path = require('path');

module.exports.showChickens = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'see-our-chickens.html'));
};