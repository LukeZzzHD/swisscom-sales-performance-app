const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CONFIG = require('../config');
const mongoose = require('mongoose');
const salesperformanceModel = require('../models/salesperformance.model');

const userController = {
    signUp: (req, res) => {
        const {
            username,
            password,
            password2,
            image,
            firstName,
            lastName,
            oeDescription,
        } = req.body;

        // Does user allready exist?
        userModel
            .findOne({ username })
            .then(user => {
                if (!user) {
                    console.log(
                        `Success, there is currently no user with username: ${username}`,
                    );
                }
            })
            .catch(err => {
                console.error(err);
            });

        // Validate provided username and password
        const errors = [];
        if (username.length < 4) {
            errors.push({
                message:
                    'The provided username is too short, it must be at least 4 characters long.',
            });
        }
        if (username.length > 20) {
            errors.push({
                message:
                    'The provided username is too long, it can only be 20 characters long.',
            });
        }
        if (password !== password2) {
            errors.push({ message: "The two passwords don't match." });
        }

        // Check if there are errors
        if (errors.length > 0) {
            return res.json({
                ok: false,
                message: 'User credentials not valid, check errors property.',
                errors,
            });
        } else {
            //Create password hash with bcrypt
            bcrypt.hash(password, 10).then(hash => {
                const newUser = new userModel({
                    username,
                    password: hash,
                    firstName,
                    lastName,
                    image: image ? image : null,
                    oeDescription,
                });

                // Create a jwt with the usernem firstName and lastName that expires in one hour
                const token = jwt.sign(
                    { username, firstName, lastName, isAdmin: false },
                    CONFIG.SECRET,
                    {
                        expiresIn: '1h',
                    },
                );

                // Save the user to the database
                newUser
                    .save()
                    .then(user => {
                        console.log(JSON.stringify(user));

                        createSalesperformanceFields(user).then(
                            console.log('Created spo fields for user in db'),
                        );

                        user.password = null;

                        return res.json({
                            ok: true,
                            message: `Succesfully created user ${user.username}!`,
                            token,
                            user,
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        return res.json({
                            ok: false,
                            message:
                                'Error while creating user!\n' + err.message,
                        });
                    });
            });
        }
    },

    signIn: (req, res) => {
        const { username, password, rememberMe } = req.body;

        // Check db if user with username and password exists
        userModel
            .findOne({ username })
            .then(user => {
                bcrypt
                    .compare(password, user.password)
                    .then(result => {
                        if (result == true) {
                            console.log('Signin succesful!');
                            const token = jwt.sign(
                                {
                                    username,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    isAdmin: user.isAdmin,
                                },
                                CONFIG.SECRET,
                                rememberMe ? {} : { expiresIn: '1h' },
                            );

                            user.password = null;

                            return res.json({
                                ok: true,
                                message: `Sign in succesful for user ${username}`,
                                token,
                                user,
                            });
                        } else {
                            return res.json({
                                ok: false,
                                message: 'Invalid credentials!',
                            });
                        }
                    })
                    .catch(err => console.log('Bcrypt compare failed: ' + err));
            })
            .catch(err => {
                console.error(err);
            });
    },

    verify: (req, res) => {
        const { token } = req.body;
        jwt.verify(token, CONFIG.SECRET, (err, decoded) => {
            if (err) {
                console.log('verify -> ' + err.message);
                return res.json({
                    ok: false,
                    message: "User couldn't be verified, please log in!",
                });
            } else {
                return res.json({
                    ok: true,
                    message: `User ${decoded.username} verified succesfully!`,
                });
            }
        });
    },

    verifyAdmin: (req, res) => {
        const { token } = req.body;
        jwt.verify(token, CONFIG.SECRET, (err, decoded) => {
            if (err) {
                console.error(err);
                return res.json({
                    ok: false,
                    message: "User couldn't be verified, please log in!",
                });
            } else {
                if (decoded.isAdmin == true) {
                    return res.json({
                        ok: true,
                        message: `${decoded.username} has been succesfully verified as an admin!`,
                    });
                } else {
                    return res.json({
                        ok: false,
                        message: `${decoded.username} has insufficient permissions!`,
                    });
                }
            }
        });
    },
};

async function createSalesperformanceFields(user) {
    let values = [
        { name: 'mobile', goalWeekly: 4, goalMonthly: 16, goalYearly: 192 },
        { name: 'dslandtv', goalWeekly: 7, goalMonthly: 28, goalYearly: 5416 },
        {
            name: 'accessory',
            goalWeekly: 1354,
            goalMonthly: 5416,
            goalYearly: 64992,
        },
        { name: 'aoit', goalWeekly: 372, goalMonthly: 1488, goalYearly: 17856 },
        {
            name: 'internetsecurity',
            goalWeekly: 0,
            goalMonthly: 0,
            goalYearly: 0,
        },
        { name: 'myserviceabo', goalWeekly: 0, goalMonthly: 0, goalYearly: 0 },
        {
            name: 'protectionplus',
            goalWeekly: 0,
            goalMonthly: 0,
            goalYearly: 0,
        },
    ];

    values.forEach(obj => {
        let tempModel = new salesperformanceModel({
            user,
            name: obj.name,
            goalWeekly: obj.goalWeekly,
            goalMonthly: obj.goalMonthly,
            goalYearly: obj.goalYearly,
            performances: [],
        });

        tempModel
            .save()
            .then(spo => {
                console.log(`Created spo: ${JSON.stringify(spo)}`);
            })
            .catch(err => console.log(err));
    });
}

module.exports = userController;
