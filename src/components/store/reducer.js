const initialState = {
    loginStatus : false,
    loginOrRegisterState: false,
    formType: 0,
    user_id: ""
};

const reducer = (state= initialState,action) => {
    switch (action.type) {
        case "login or register":
            return {
                ...state,
                loginOrRegisterState: true,
                formType: action.fType
            }
        case "loginOrRegisterState": 
            return {
                ...state,
                loginOrRegisterState:false,
                formType: 0
            }
        case "logoutHandler": 
            return {
                ...state,
                loginStatus:false
            }
        case "loginHandler": 
            return {
                ...state,
                loginStatus:true,
                user_id: action.userId
            }
        default:return state;
    }
};
export default reducer;