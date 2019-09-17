export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getStore }) => {
    //make async call to database
    dispatch({ type: 'CREATE_PROJECT', project: project });
  }
};