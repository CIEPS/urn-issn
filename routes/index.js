const express = require('express');
const router = express.Router();
const uri = require('uri-js');

/* GET home page. */
router.get('/', function (request, response) {
  response.render('index', { title: 'URN ISSN Resolver' });
});

router.get(/\/urn:issn:(\d{4}-\d{3}[\dX])$/i, function (request, response, next) {
  const urn = uri.parse(request.originalUrl.substring(1));
  const issn = urn.nss;
  if (urn.query === '+issnl') {
    response.redirect(`https://portal.issn.org/resource/ISSN-L/${issn}`);
  } else {
    response.redirect(`https://portal.issn.org/resource/ISSN/${issn}`);
  }
});

module.exports = router;
