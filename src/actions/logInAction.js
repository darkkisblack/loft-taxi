export const LOG_IN = "LOG_IN"
export const LOG_IN_FAIL = "LOG_IN_FAIL"
export const LOG_IN_FAIL_CLOSE = "LOG_IN_FAIL_CLOSE"

export const logIn = (token) => ({type: LOG_IN, payload: token});
export const logInFail = (error) => ({type: LOG_IN_FAIL, payload: error});
export const logInFailClose = () => ({type: LOG_IN_FAIL_CLOSE});
