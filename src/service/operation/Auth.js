import { authEndPoinds } from "../api";
import { apiConnector } from "../apiConnector";


const {
    LOGIN_API,
    SENDOTP_API,
    SIGNUP_API,
    UNIQUE_USERNAME_API
} = authEndPoinds


export async function sendOtp(email,) {
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
    }
    
}


export async function checkUsername(data,setError) {
    let result
    try {
      const response = await apiConnector("POST", UNIQUE_USERNAME_API, data)
      console.log("usrname API RESPONSE............", response)
      result = response.data
      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
    } catch (error) {
      console.log("username API ERROR............", error)
      setError(true)
    }
    return result
}


export async function signup(data) {
  let result
  try {
    const response = await apiConnector("POST", SIGNUP_API, data)
    console.log("signup API RESPONSE............", response)
    result = response.data
    console.log(response.data.success)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
  } catch (error) {
    console.log("signup API ERROR............", error)
  }
  return result
}


export async function login(data) {
  let result
  try {
    const response = await apiConnector("POST", LOGIN_API, data)
    console.log("login API RESPONSE............", response)
    result = response.data
    console.log(response.data.success)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
  } catch (error) {
    console.log("login API ERROR............", error)
  }
  return result
}