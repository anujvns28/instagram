const BASE_URL = process.env.REACT_APP_BASE_URL


export const authEndPoinds = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    UNIQUE_USERNAME_API : BASE_URL + "/auth/checkUsername"
}