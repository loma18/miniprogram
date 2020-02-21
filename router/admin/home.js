/* eslint-disable */
let express = require("express");
let router = express.Router();
const qs = require("querystring");
const sqlConnect = require('../../sqlConnect');
const request = require('request');
var fs = require('fs');
var formidable = require('formidable');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var utils = require('../../utils');
let app = express();
app.use(multipart({ uploadDir: '/attachment' }))



module.exports = router;