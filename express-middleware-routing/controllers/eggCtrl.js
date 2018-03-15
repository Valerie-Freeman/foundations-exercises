const path = require('path');

module.exports.showEggs = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'see-our-eggs.html'));
};