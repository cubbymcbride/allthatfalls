const initialState = {
    email: '',
    password: '',
    id: 0
  };
  
  const UPDATE_ADMIN = "UPDATE_ADMIN";
  const CLEAR_ADMIN = "CLEAR_ADMIN";
  
  export function updateAdmin(admin) {
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
        return { ...state, email, id: user_id  };
      case CLEAR_ADMIN:
        return { ...state, ...initialState };
      default:
        return state;
    }
  }