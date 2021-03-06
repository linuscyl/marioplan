const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("LOGIN_ERROR")
      return {
        ...state,
        authError: 'Login fail'
      }
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS")
      return {
        ...state,
        authError: null
      }
    default:
      return {
        ...state
      }
  }
}

export default authReducer
