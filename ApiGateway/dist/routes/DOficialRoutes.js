"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DOficialControllers_1 = require("../controllers/DOficialControllers");
const dolarOficialRouter = (0, express_1.Router)();
dolarOficialRouter.get('/oficial', DOficialControllers_1.getDolarOficial);
exports.default = dolarOficialRouter;
