"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const PORT = 4000;
App_1.default.listen(PORT, () => {
    console.log(`Api Gatetway is running on port ${PORT}`);
});
