const asyncHandler = require('express-async-handler')

const register = require("./register");

const login = require("./login");

const getCurrent = require("./getCurrent");

const logout = require("./logout");

const updateSubscription = require("./updateSubscription");

module.exports = {
    register: asyncHandler(register),
    login: asyncHandler(login),
    getCurrent: asyncHandler(getCurrent),
    logout: asyncHandler(logout),
    updateSubscription,
};