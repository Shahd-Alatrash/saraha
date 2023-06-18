/****************************************************************** ملف خاص بارسال الايميلات ************************************* */

import nodemailer from "nodemailer";


export async function sendEmail(to,subject,html) {               /**  معلومات المستقبل  : info ،  معلومات المرسل  : transporter   ارسال الايميل يحتوي ع شغلتين ، الاولى  */
  let transporter = nodemailer.createTransport({
    service:'gmail',  /**   من ايش رح ابعت الرسالة  service */
    auth: {
    //   user: 'shahdalatrash00@gmail.com', // الايميل تبعي
    //   pass: 'dfazdqpamvmolovg'  /** الباسوورد الي اخدتها من حسابي الجيميل لما عملت خطوة التحقق بامان وضفت تطبيق اسمه صراحة وهاي كلمة السر الي هوي اعطاني اياها والخاصة فقط بالتطبيق ما بزبط ادخل من خلالها ع الايميل تبعي  */
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
},
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ` NODE JS " <${process.env.EMAIL}>`, // sender address   /**  معلومات المرسل  */
    // to: "shhdatrash@gmail.com", // list of receivers   /**  ايميل المستقبل  */
    // subject: "confirm email ✔", // Subject line
    // html: "<b>confirm your email</b>", // html body

    to,
    subject,
    html,   /**   ببعتهن هون ك باراميتر  ، signUp  عشان بدي اياهن ييجين لما اعمل عملية ال  */
  });
}