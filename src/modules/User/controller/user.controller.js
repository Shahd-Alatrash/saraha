import userModel from "../../../../DB/model/user.model.js";
import cloudinary from "../../../services/cloudinary.js";


export const profile = (req, res) => {
   
        return res.json({message: "profile"}); /** auth.middelware.js الي موجودة في ملف  req.id  */
   
}


// export const PROFILEpic=(req,res)=>{
//         if(!req.file){   /** headersوما انسى ابعت التوكن في ال  ،  value ثم يحمل الصورة في ال ، form-data  ثم  body  ادا اليوزر ما بعتلي صورة في الفرونت ايند ، في البوستمان بدي اجبره يبعت صورة عن طريق يضغط ع  */
//                 return res.status(400).json({message:"file is required"});
//         }

//         return res.json(req.file);
// }


export const PROFILEpic=async(req,res)=>{
        if(!req.file){   /** headersوما انسى ابعت التوكن في ال  ،  value ثم يحمل الصورة في ال ، form-data  ثم  body  ادا اليوزر ما بعتلي صورة في الفرونت ايند ، في البوستمان بدي اجبره يبعت صورة عن طريق يضغط ع  */
                return res.status(400).json({message:"file is required"});
        }

     //   const imageUrl =req.file.destination + "/" + req.file.filename;  /**  عملت كونكاتينيشن بين اسم المجلد واسم الصورة عشان في اجهزة الماك بضرب بسبب الباك سلاش  */
        // res.json(req.id);
      //  const user=await userModel.updateOne({_id:req.id},{profilePic:imageUrl}) /**  وضيف اسم المجلد مع اسم الصورة ، وهيك قدرت اخزن اسم الصورة في الداتا بيس حسب طريقة المدرسة رقم تنين  profilePic الي ضفتها ع الداتا بيس بتكون مش موجودة لانه ما عملتها ريكويراد ف هون حكيتله بناءا ع ال اي دي تبعت اليوزر عدلي ع خانة ال  profilePic ال */

    // const cloud= await cloudinary.uploader.upload(req.file.path,{folder:'saraha/user'}); /**   ، طريقة المدرسة التالتة انشأت مجلد اسمه صراحه جواته مجلد اسمه يوزر ورح يخزن الصورة جوا مجلد اليوزر*/
    // return res.json(cloud);
    const {secure_url}= await cloudinary.uploader.upload(req.file.path,{folder:`saraha/user/${req.id}`}); 
    const user=await userModel.updateOne({_id:req.id},{profilePic:secure_url}) /**  المدرسة رقم تلات*/
        return res.status(200).json({message:"profile updated successfuly"});
}
