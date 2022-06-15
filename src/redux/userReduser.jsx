import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      action.payload.id = state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1;  
      state.users = [...state.users, action.payload] 
    }, 
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    }
  },
})

export const setUser = (state) => state.users.users

export const { addUser, removeUser } = usersSlice.actions

export default usersSlice.reducer