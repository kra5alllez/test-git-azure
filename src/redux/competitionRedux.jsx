import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    competitions: []
}

export const competitionSlice = createSlice({
    name: 'competitions',
    initialState,
    reducers: {
        addCompetitions: (state, action) => {
            action.payload.id = state.competitions.length > 0 ? state.competitions[state.competitions.length - 1].id + 1 : 1;  
            state.competitions = [...state.competitions, action.payload] 
        }
    }
})

export const getCompetitions = (state) => state.competitions.competitions

export const { addCompetitions } = competitionSlice.actions

export default competitionSlice.reducer