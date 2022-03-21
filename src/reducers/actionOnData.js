const actionOnData = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return action.data;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
export default actionOnData;
