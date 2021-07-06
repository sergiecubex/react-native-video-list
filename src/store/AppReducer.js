const AppReducer = (state, action) => {
    switch (action.type) {
      case 'SET_FAVOURITE':
        return {
          ...state,
          currentUser: action?.currentUser || action?.payload,
        };
      default:
        return state;
    }
  };
  
  export default AppReducer;
  