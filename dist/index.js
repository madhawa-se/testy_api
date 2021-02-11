"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ingredient_route_1 = require("./src/routes/ingredient.route");
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// app.get('/', (req, res) => {
//     res.send('Hello from express and typescript');
// });
app.use('/', ingredient_route_1.ingredientRouter);
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("App listening on PORT " + port); });
