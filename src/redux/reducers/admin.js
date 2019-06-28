const initialState = {
    email: '',
    password: '',
    user_id: 0
  };
  
  const UPDATE_ADMIN = "UPDATE_ADMIN";
  const CLEAR_ADMIN = "CLEAR_ADMIN";
  
  export function updateAdmin(admin) {
    console.log('update admin', admin)
    return {
      type: UPDATE_ADMIN,
      payload: admin
    };
  }
  
  export function clearAdmin() {
    return {
      type: CLEAR_ADMIN
    };
  }
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case UPDATE_ADMIN:
        
        const { email, user_id } = action.payload;
        console.log('WHYYYYYYY', email, user_id)
        return { ...state, email, user_id };
        // return { ...state, email, id: user_id };
      case CLEAR_ADMIN:
        return { ...state, ...initialState };
      default:
        return state;
    }
  }