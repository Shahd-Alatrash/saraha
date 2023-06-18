/**   مشان اعطي صلاحيات انه ما يدخل ع صفحة معينة بلا ما يكون عامل تسجيل دخول */

import {verifyToken} from "../services/generateAndVerifyToken.js";
import userModel from "../../DB/model/user.model.js";

export const auth = async (req, res, next) => {
    try {

        const {authorization} = req.headers; /**headers مشان ابعت التوكن بال */
        if (!authorization ?. startsWith(process.env.BEARER_KEY)) {
            return res.json({message: "bearer key is required"});
        }
        const token = authorization.split(process.env.BEARER_KEY)[1]; /** bearerمشان ارجع التوكن لحالها بدون ال  */
        if (! token) {
            return res.json({message: "token is required"});
        }
        const decoded = verifyToken(token); /* ،  id عشان افك تشفير التوكن واوخد منه فقط ال  */
        const authUser = await userModel.findById(decoded.id).select("userName email"); /**   ، رح يضل مسموح يدخل ع الصفحات  هاي الخطوة مشان امنع يبعت ريكوست ادا كان اليوزر محدوف من الداتا بيس ، headerdمشان ادا حدفت اليوزر من الداتا بيس وكنت عاملة كوبي للتوكن وارسلتها بال */
        if (! authUser) {
            return res.status(401).json({message: "user not registered account"});
        }

        req.id = decoded.id;
        next();
    } catch (error) {
        return res.json({message: "error catch", error: error.stack});
    }


};

