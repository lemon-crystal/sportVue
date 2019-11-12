var express = require("express");
var router = express.Router();
var crud = require("./crud.js");
var path_url = require("./api.js");

// 跨域处理
// router.all("*", function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1');
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// })

// 注册
router.post(path_url.reg, function(req, res) {
	// 接受参数
	var phonenumber = req.body.phonenumber;
	var password = req.body.password;
	var iconname = req.body.iconname;
	var sql = "insert into userinfo(iconname,phonenumber,password) values (?,?,?)";
	var insertArr = [iconname, phonenumber, password];
	var check = "select * from userinfo where phonenumber=?";
	var checkArr = [phonenumber];
	crud.sqlCRUD(check, checkArr, function(result) {
		if (result.length > 0) {
			res.json(200, {
				msg: "此手机号已存在，请登录",
				code: "0"
			});
		} else {
			crud.sqlCRUD(sql, insertArr, function(insertRe) {
				if (insertRe.affectedRows) {
					res.json(200, {
						msg: "注册成功，跳转主页",
						code: "1"
					});
				} else {
					res.json(200, {
						msg: "注册失败",
						code: "-1"
					})
				}
			});
		}
	});
});

// 登录
router.post(path_url.login, function(req, res) {

	var phonenumber = req.body.phonenumber;
	var password = req.body.password;
	// 当前的一条数据
	var sql = "select * from userinfo where phonenumber=? and password=? ";
	var selectArr = [phonenumber, password];
	crud.sqlCRUD(sql, selectArr, function(result) {
		if (result.length > 0) {
			res.json(200, result);
		} else {
			res.json(200, {
				msg: "用户名或密码错误",
				code: "400"
			})
		}
	})
});

// 查詢 
router.post(path_url.query, function(req, res) {

	var phonenumber = req.body.phonenumber;
	// 当前的一条数据
	var sql = "select * from userinfo where phonenumber=?";
	var selectArr = [phonenumber];
	crud.sqlCRUD(sql, selectArr, function(result) {
		if (result.length > 0) {
			res.json(200, result);
		} else {
			res.json(200, {
				msg: "无此用户，请登录",
				code: "400"
			})
		}
	})
});

//更新个性签名
router.post(path_url.updateSign, function(req, res) {
	var signature = req.body.signature;
	var phonenumber = req.body.phonenumber;
	var sql = "UPDATE userinfo SET signature = ? WHERE phonenumber = ?";
	var selectArr = [signature, phonenumber];
	crud.sqlCRUD(sql, selectArr, function(result) {
		if (result.affectedRows == 1) {
			res.json(200, result);
		} else {
			res.json(200, {
				msg: "更新失败",
				code: "400"
			})
		}
	})
})

module.exports = router;