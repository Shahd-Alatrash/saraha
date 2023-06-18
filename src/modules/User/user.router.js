import { Router } from "express";
import * as userController from './controller/user.controller.js'
import {auth} from '../../Middleware/auth.middleware.js'
import {asyncHandler} from '../../services/errorHandling.js'
import fileUpload, { HME } from "../../services/multer.js";


const router=Router();

router.get('/profile',auth,asyncHandler(userController.profile));
router.patch('/profilePic',auth,fileUpload().single('image'),HME,userController.PROFILEpic); /** ادا صار ايرور لما رفعت الملف ، متلا بهاي الحالة رفعت ملف بي دي اف بدل صورة امتداد معين ، هاد بمسكها HME*/ /******* لانه لازم يكون مسجل دخوله من قبل  auth  ، fileUpload لانه اليوزر بكون عامل حساب وبس بده يضيف صورة  اول ما يدخل ع هاي الايند بوينت بدخل ع الفنكشن الي اسمه post   وليس   patch  ******* */

export default router;