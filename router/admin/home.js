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

/**获取banner模块 */
router.get("/banner/getList", (req, res) => {
    let sql = "SELECT*FROM miniprogram_picture_resource WHERE customType=? AND status=1";
    sqlConnect.query(sql, [], (err, result, fields) => {
        if (err) {
            res.json({ code: 500, msg: err });
            return;
        };
        res.json({ code: 200, data: result, msg: "success" });
    })
});

/**保存banner模块 */
router.post("/banner/save", (req, res) => {
    req.on("data", (data) => {
        let str = data.toString(),
            obj = JSON.parse(str),
            sql = "",
            params = [];
        if (obj.id) {
            sql = "UPDATE miniprogram_interfaceGroup SET title=? WHERE gid=?";
            params = [obj.title, obj.id];
        } else {
            sql = "INSERT INTO miniprogram_interfaceGroup VALUES(null,?)";
            params = [obj.title];
        }
        sqlConnect.query(sql, params, (err, result, fields) => {
            if (err) {
                res.json({ code: 500, msg: err });
                return;
            };
            if (result.affectedRows > 0) {
                res.json({ code: 200, msg: "success" });
            } else {
                res.json({ code: 500, msg: "error" });
            }
        });
    })
});



module.exports = router;