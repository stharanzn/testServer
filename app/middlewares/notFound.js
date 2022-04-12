const path = require('path');

var notFoundHtml = path.join(__dirname,"..", "../public/frontEnd/notFound.html");
const notFound = (req, res)=> res.status(404).sendFile(notFoundHtml)

module.exports = notFound;