import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userReduser'
import competitionRedux from './competitionRedux'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    competitions: competitionRedux
  },
})