/*********************************************************   ملف لرفع الصور والملفات ******************************************************** */

import multer from 'multer';   /***  filename AND  destination التي تحتوي على  diskStorage  تحتوي على شغلتين ، الاولى  multer */


export const HME=(err,req,res,next)=>{  /**  هون بدي اخليه يطبعلي الايرور نفسه  ، invalid fprmat هاد الفنكشن مشان اامسك الايرور في حال متلا اليوزر بعت ملف بي دي اف بدل صورة ، بدل ما يوقع السيرفر ويطبعلي  */
    if(err){
        return res.status(400).json({message:"multer error",err});
    }
    else{
        next();
    }
}


/**************    ، فاضية diskStorage لأنه ما بحتاج اعمل مجلد ويتخزننن فيه الصور  لازم اخلي ال  cloudinary هاد الفنكشن ما في اله داعي في طريقة المدرسة التالتة  ************** */
// function fileUpload(){
//     const storage=multer.diskStorage({
//         destination:(req,res,cb)=>{     /**    بتوخد بالعادة شغلتين ، الاولى الايرور والتانية اسم المجلد الي بدي اخزن فيه الصور والملفات  call back    معناها  cb ،     المكان الي بدي اخزن فيه الصور والملفات  destination */
//             cb(null,'uploads');
//         },
//         filename:(req,file,cb)=>{/**        معلومات عن الملف الي بدنا نرفعه  file */
//       //  cb(null,file.originalname);      /*uploads  بدي اخزنها في مجلد  flower.ong    على فرض اليوزر رفع صورة اسمها  */    /**   يعني بس جبلي اسم الملف originalname */
//       //cb(null,Math.random()+"_"+ file.originalname);   /**  عشان ادا رفعت صورتين بنفس الاسم ما يضرب ايرور ، استخدمت مكتبة الماث عشان يحط ارقام عشوائية قبل اسم الصورة  */
//       cb(null,Date.now()+"_"+Math.random()+"_"+ file.originalname);     /** بعمل انستول الها وبستخدمها ، بصير قبل اسم الصورة يحط حروف وارقام عشوائية بدل التاريخ ورقم عشوائي nano id  بقدر اشفر عن طريق  */
//     }
//     })


function fileUpload(){
    const storage=multer.diskStorage({})
    function fileFilter(req,file,cb){  /**  هاد الفنكشن عشان اجبره يدخل فقط صور من هاد النوع وامنعه يدخل ملف بي دي اف او بوربوينت او اي شي اخر  */
   if(['image/jpeg','image/png'].includes(file.mimetype)){
    cb(null,true)
   }
   else{
        cb("invalid fprmat",false)
    }
}

//const upload = multer({storage:storage});  /**  وهيي عبارة عن الي مكتوبة فوق سطر 6 value   التانية هاي عبارة عن ال  storageبينما ال  key الاولى هاي عبارة عن ال  storage ال */
const upload = multer({fileFilter:fileFilter,storage:storage});
return upload;

}


    // function fileFilter(req,file,cb){  /**  هاد الفنكشن عشان اجبره يدخل فقط صور من هاد النوع وامنعه يدخل ملف بي دي اف او بوربوينت او اي شي اخر  */
    //     if(file.mimetype=='image/jpeg'||file.mimetype=='image/png'){
    //         cb(null,true)
    //     }else{
    //         cb("invalid fprmat",false)
    //     }
    // }

/**  نفس الكود السابق بس حطيت انواع الصور داخل اريي  */
    

export default fileUpload;