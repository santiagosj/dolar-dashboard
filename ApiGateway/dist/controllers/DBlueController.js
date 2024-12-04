"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDolarBlue = void 0;
const DBlueServices_1 = require("../services/DBlueServices");
const getDolarBlue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dolarBlueData = yield (0, DBlueServices_1.fetchDolarBlue)();
        //res.send(dolarBlueData)
        res.json(dolarBlueData);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: error.message });
    }
});
exports.getDolarBlue = getDolarBlue;
