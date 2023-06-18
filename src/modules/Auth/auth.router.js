/** auth الي الهم علاقة بال  end points  ملف يحتوي على جميع ال  */
import { Router } from "express";
import * as authController from './controller/auth.controller.js'
import {asyncHandler} from '../../services/errorHandling.js'
import validation from "../../Middleware/validation.js";
import * as validator from './Auth.validation.js'

const router=Router();

router.post('/signUp',validation(validator.signUpSchema),asyncHandler(authController.signUp));
router.post('/logIn',validation(validator.logInSchema),asyncHandler(authController.logIn));  /**  req,res اي فنكشن بستدعيه في الايند بوينت لازم يكون ماخد  */
router.get('/confirmEmail/:token',authController.confirmEmail);

export default router;