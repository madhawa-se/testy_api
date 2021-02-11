"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientRouter = void 0;
var express_1 = __importDefault(require("express"));
exports.ingredientRouter = express_1.default.Router({
    strict: true
});
// router.post('/', (req: Request, res: Response) => {
//     userController.create(req, res);
// });
exports.ingredientRouter.get('/test', function (req, res) {
    console.log("hello");
    res.json({ message: 'GET /user request received' });
    // userController.read(req, res);
});
// router.patch('/', (req: Request, res: Response) => {
//     userController.update(req, res);
// });
// router.delete('/', (req: Request, res: Response) => {
//     userController.delete(req, res);
// });
exports.default = exports.ingredientRouter;
