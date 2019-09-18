import firebase from 'firebase'

export const signIn = (credentials) => {
  return (dispatch, getState) => {

    // const signIn = (credentials) => {
    //   return (
    //     dispatch, getState, { getFireBase }) => {
    //     const firebase = getFireBase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR' }, err)
    })
  }
}

export default signIn

