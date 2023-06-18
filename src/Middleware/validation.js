/** مشان ما اضل اكرر الكود بكل فنكشن  ، signUp/logIn قبل ما يدخل ع فنكشن  validation   بعمل فنكشن مشان اتأكد من ال */

import {logInSchema} from "../modules/Auth/Auth.validation.js"

// export const validation=(req,res,next)=>{
//     const validationResult=logInSchema.validate(req.body,{abortEarly:false});

//     if(validationResult.error){
//         return res.json(validationResult);
//     } else{
//        return next();

//     }
// }

// export default validation;
/******************************************************************************************************************************************************************** */
// export const validation=(schema)=>{   /** signUp/logIn  اما هون حسب شو السكيما الي ببعتها ، سواء بعتت  ،  logIn بينما الفنكشن الفوق خاص ب  */
//     return (req,res,next)=>{
//     const validationResult=schema.validate(req.body,{abortEarly:false});

//     if(validationResult.error){
//         return res.json(validationResult);
//     } else{
//        return next();

//     }
// }
// }
// export default validation;

/****************************************************************************************************************************************************************************** */

// export const validation=(schema)=>{   /** signUp/logIn  اما هون حسب شو السكيما الي ببعتها ، سواء بعتت  ،  logIn بينما الفنكشن الفوق خاص ب  */
//     return (req,res,next)=>{
//         const validationArray=[];
//     const validationResult=schema.body.validate(req.body,{abortEarly:false});  /** params  وليس    body مشان احدلله انه يعمل فاليديشن على البينات الي في  */
//     const validationResultQuery=schema.query.validate(req.query,{abortEarly:false});
//     if(validationResult.error){
//         validationArray.push(validationResult)
//     }
//     if(validationResultQuery.error){
//         validationArray.push(validationResultQuery)
//     }
//     if(validationArray.length>0){
//         return res.json({message:"validation error",validationArray});
//     }
//     else{
//        return next();

//     }
// }
// }
// export default validation;


/******************************************************************************************************************************* */


// export const validation=(schema)=>{   /** signUp/logIn  اما هون حسب شو السكيما الي ببعتها ، سواء بعتت  ،  logIn بينما الفنكشن الفوق خاص ب  */
//     return (req,res,next)=>{
//         const validationArray=[];

//         if(schema.body){
//             const validationResult=schema.body.validate(req.body,{abortEarly:false});  /** params  وليس    body مشان احدلله انه يعمل فاليديشن على البينات الي في  */
//             if(validationResult.error){
//                 validationArray.push(validationResult)
//             }
//         }

//         if(schema.query){
//             const validationResultQuery=schema.query.validate(req.query,{abortEarly:false});

//             if(validationResultQuery.error){
//                 validationArray.push(validationResultQuery)
//             }
//         }
//     if(validationArray.length>0){
//         return res.json({message:"validation error",validationArray});
//     }
//     else{
//        return next();

//     }
// }
// }
// export default validation;

/************************************************************************************************************************************** */

const dataMehodes = ['body', 'query', 'params'];

export const validation = (schema) => { /** signUp/logIn  اما هون حسب شو السكيما الي ببعتها ، سواء بعتت  ،  logIn بينما الفنكشن الفوق خاص ب  */
    return(req, res, next) => {
        const validationArray = []; /*  اريي بدي اجمع فيها الايرور كلهن */
        dataMehodes.forEach(key => { // console.log(key);  // 'body','query','params'بطبعلي
            if (schema[key]) { // console.log(key);
                const validationResult = schema[key].validate(req[key], {abortEarly: false});
                if (validationResult.error) {
                    validationArray.push(validationResult);
                }
            }
        })

        if (validationArray.length > 0) {
            return res.json({message: "validation error",validationArray});
        } else {
            next();
        }

    }
}
export default validation;

