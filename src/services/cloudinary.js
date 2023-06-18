/**********************************************************   ، وبهاي الطريقة بقلل عدد الركويست على السيرفر تبعي ، هاي طريقة المدرسة التالتة  cludinary سيرفر يستخدم لرفع الصور والملفات ، بدل ما الوزر يبعت ريكويست على السيرفر تبعي عشان يشوف الصورة ، بصير يبعت الريكويست على السيرفر الي اسمه       ************************************************************************ */
import * as dotenv from 'dotenv'
dotenv.config()
import cloudinary from 'cloudinary'


// cloudinary.v2.config({   /**  لانه اي حدا بعرفهم بصير بقدر يرفع ع الحساب تبعي  .env  من خلال هدول المعلومات الي تحت بقدر يعرف مين انا ، مش منطق اخزنهن هون ف بحطهن بملف  */
//     cloud_name: 'dwsyk2jeh', 
//     api_key: '495897958416351', 
//     api_secret: 'qFsi_UjAVDqk5aG7IN-kTj8itmQ' 
//   });


cloudinary.v2.config({   
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });

  export default cloudinary.v2;