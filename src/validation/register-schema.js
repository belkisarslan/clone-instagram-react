import Yup from "./validation"

export const RegisterSchema = Yup.object().shape({
    email: Yup.string()
    .required()
    .email(),
    full_name: Yup.string()
    .required(),
	username: Yup.string()
		.required()
        .test({
          message: 'Lütfen geçerli bir kullanıcı adı girin',
          test: str => /^[a-z0-9._]+$/i.test(str)
        }),
	password: Yup.string()
		.required()
})