import {configureStore} from '@reduxjs/toolkit'
import UserLoggedReducer from './UserLoggedSlice'

const store = configureStore({
    reducer:{
        userControl: UserLoggedReducer
    }
})

export default store