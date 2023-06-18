import joi from 'joi'

export const signUpSchema = {
    body: joi.object(
        {
            userName: joi.string().alphanum().min(2).max(20).required().messages(
                { /**   ،  مشان اغير رسالة الايرور الي رح تظهر في البوستمان . حددت انه اقل شي بدي يكون الاسم حرفين واكتر شي عشرين حرف  messages ،  بتقبل احرف وارقام فقط ، ما بتقبل رموز alphanum */
                    'any.required': 'userName is required',
                    'string.empty': 'userName is not allowed to be empty'
                }
            ),
            email: joi.string().email(
                {
                    maxDomainSegments: 3,
                    tlds: {
                        allow: ['com', 'net']
                    }
                }
            ).required(), /**  الاشياء الي مسموح ادخلها بعد الجيميل tlds ، " @gmail"  عدد السيجمانت الي بسمح فيهن يكنن ورا ال maxDomainSegments */
            password: joi.string().required(),
            cPassword: joi.string().valid(joi.ref('password')).required(),
            /** required  عشان تقبل  valid  عشان هيك حطيتها داخل  ،  required ما بتقبل  ref  */
            // age:joi.number().integer().min(20).max(80),   /**  عشان اجبره يدخل فقط ارقام بدون كسور  integer */
            // gender:joi.string().alphanum().valid('female','male').required(),  /**  عشان اجبر اليوزر يدخل انثى ام ذكر فقط بهاي الصيغة */
        }
    ).required(),
    query: joi.object(
        {test: joi.boolean().required()}
    ).required()

}


export const logInSchema = {
    body: joi.object(
        {email: joi.string().email().required(), password: joi.string().required()}
    ).required()
}
