/* eslint-disable */
const http = require("http");
const express = require("express");
const path = require('path');

let app = express();

const router = require("./router");
const adminHome = require('./router/admin/home');
const home = require('./router/home');
const interfaces = require('./router/admin/interface');
app.use(router);
app.use(adminHome);
app.use(home);
app.use(interfaces);
app.use('/attachment', express.static(path.join(__dirname, './attachment')));
app.use('/introduce', express.static(path.join(__dirname, './introduce-webPage')));
app.use(express.static(path.join(__dirname, './public/build')));
app.use(/(\/.*)?/, express.static(path.join(__dirname, './public/build')));


let server = http.createServer(app);
server.listen(8081);




