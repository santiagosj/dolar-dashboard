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
exports.getDolarOficial = void 0;
const DOficialServices_1 = require("../services/DOficialServices");
const getDolarOficial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dolarOficial = yield (0, DOficialServices_1.fetchDolarOficial)();
        res.json(dolarOficial);
    }
    catch (error) {
        console.error('Error fetching Dolar Oficial:', error);
        res.status(500).send('Error fetching Dolar Oficial');
    }
});
exports.getDolarOficial = getDolarOficial;
