import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    homePage: true,
    loginPage: false,
    signinPage: false,
}

export const UserLoggedSlice = createSlice({
    name: "user controller",
    initialState,
    reducers:{
        homeIcon: (state, action) =>{
            state.homePage = true;
            state.loginPage = false;
            state.signinPage = false
        },
        loginFunc: (state, action) =>{
            state.homePage = false;
            state.loginPage = true;
            state.signinPage = false
        },
        signupFunc: (state, action) =>{
            state.homePage = false;
            state.loginPage = false;
            state.signinPage = true
        }
    }
})

export default UserLoggedSlice.reducer

export const {homeIcon, loginFunc, signupFunc} = UserLoggedSlice.actions