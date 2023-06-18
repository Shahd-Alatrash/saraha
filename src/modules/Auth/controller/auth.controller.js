import userModel from "../../../../DB/model/user.model.js";
import {generateToken, verifyToken} from "../../../services/generateAndVerifyToken.js";
import {hash, compare} from "../../../services/hashAndCompare.js";
import { sendEmail } from "../../../services/sendEmail.js";
import { logInSchema, signUpSchema } from "../Auth.validation.js";

export const signUp = async (req, res) => {
    // const validationResult=signUpSchema.validate(req.body,{abortEarly:false}); /** signUpSchema متل ما انا كاتبة في   userName, email, password,cPaswword   عشان يعرضلي كل الاخطاء وليس فقط اول ايرور ، عشان اجبر اليوزر يدخل     abortEarly */
    // if(validationResult.error){
    //    return res.json(validationResult);
    // }
    const {userName, email, password} = req.body;
    const user = await userModel.findOne({email}); 
    if (user) {
        return res.status(409).json({message: "email is already exist"}); 
    }
    const hashPassword = hash(password);


const token=generateToken({email},process.env.EMAIL_TOKEN);  /**   لفنكشن تسجيل الدخول ولفنكشنارسال الايميل ،مشان ادا نعرفت وحدة ما تنعرف التانية ، من ناحية الامان احسن signitcre  الاصح انه اعمل   */

    const link=`http://localhost:3000/auth/confirmEmail/${token}`;
    await sendEmail(email,'confirm email',`<a href = "${link}"> verify your email</a>`);                             /** ايميل الشخص الي عامل تسجيل في الموقع ، الي بضيفه من خلال البوستمان     */
    const createUser = await userModel.create({userName, email, password: hashPassword});

    return res.status(201).json({message: "Done", user: createUser._id}); /**  create معناها   status(201) */
};


export const confirmEmail= async (req,res)=>{   /** من فولس الى ترو confirmEmail فنكشن لتحويل ال  */
    const {token}=req.params;
    const decoded=verifyToken(token,process.env.EMAIL_TOKEN);
    // if(!decoded){
    //     return res.json({message:"invalid token"});
    // }

    const user =await userModel.updateOne({email:decoded.email},{confirmEmail:true});  /** بدي اعدل اليوزر من خلال ايميله وليس من خلال ال اي دي تبعه  ،هاد السطر معناه انه بدي ادل الكونفيرم ايميل من فولس احولها الى ترو   */
 //   return res.json({message:"your email is confirmed , your can login"});

return res.redirect('http://www.facebook.com');  /**  متلا لو بدي اياه دغري ينقله الى صفحة اللوج ان بعد ما يعمل تأكيد للايميل تبعه ، هون حطيته ينقله ع صفحة الفيس بوك  */
}


export const logIn = async (req, res) => {
    // const validationResult=logInSchema.validate(req.body,{abortEarly:false});
    // if(validationResult.error){
    //     return res.json(validationResult);
    //  }
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    if (! user) {
        return res.status(404).json({message: "email not found"});
    } else {
        if(!user.confirmEmail){
            return res.json({message:"please verify your email"});
        }
        const match = compare(password, user.password);
        if (! match) {
            return res.json({message: "invalid password"});
        } else {
            const token = generateToken({id: user._id});
            return res.status(200).json({message: "Done", token});
        }
    }
};

