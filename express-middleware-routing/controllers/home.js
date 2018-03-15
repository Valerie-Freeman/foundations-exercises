const path = require('path');

module.exports.viewHomepage = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
}