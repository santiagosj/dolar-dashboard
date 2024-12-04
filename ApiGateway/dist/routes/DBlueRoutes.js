"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DBlueController_1 = require("../controllers/DBlueController");
const dolarBlueRouter = (0, express_1.Router)();
dolarBlueRouter.get('/blue', DBlueController_1.getDolarBlue);
exports.default = dolarBlueRouter;
