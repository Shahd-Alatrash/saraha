import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    profilePic:{
      type:String,   /**   هون بخزن اسم الصورة ، اسم الصورة عبارة عن سترنج */
    }
  },
  {
    timestamps: true,
  }
);
const userModel =mongoose.model.user || model("User", userSchema);  /**  هاي معناها انه ادا كان في جدول اسمه يوزر خلص برجع ترو ومش رح يدخل ع التانية  ، بستخدمها عشان اتجنب الاخطاء لانه لو خليت بس القسم التاني ولما اضل اعمل ريكوست يممن يفهمها انه في جدول تاني اسمه يوزر */

export default userModel;
