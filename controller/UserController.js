const path = require("path");
const users = require("../model/UserModel");

exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname + "../views/user/create.html"));
};

exports.saveUser = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const user = {
        name,
        age,
    };
    users.push(user);
    res.status(201).json({
        success: true,
        users,
    });
};
