import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isConnected: false,
    errorLogin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.token = action.payload.token
            state.statusLogin = action.payload.status
            state.isConnected = true
            state.errorLogin = false
        },
        userLoginError: (state, action) => {
            state.LoginError = action.payload
            state.errorLogin = true
        },
        userLogout: () => {
            return initialState
        },
        userProfile: (state, action) => {
            state.profileUser = action.payload.profileUser
            state.statusProfileUser = action.payload.status
        },
        changeUserName: (state, action) => {
            state.newUserName = action.payload
        }
    }
})

export const {userLogin, userLogout, userProfile, userLoginError, changeUserName} = userSlice.actions

export default userSlice.reducer