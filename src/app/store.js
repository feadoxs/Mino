import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../api/todoApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import TodoSlice from "../reducers/TodoSlice";

export const store = configureStore({
    reducer:{
        todo:TodoSlice,
        [todoApi.reducerPath]:todoApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(todoApi.middleware)
})

setupListeners(store.dispatch)
