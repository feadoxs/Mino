import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
    name:'todo',
    initialState:{
        search:""
},
    reducers:{
        setSearch:(state,action)=>{
            state.search=action.payload;
        }
    }
})

export const {setSearch}=TodoSlice.actions;

export default TodoSlice.reducer;