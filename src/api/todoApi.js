import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => 'turkish',
        }),
        getTodoN: builder.query({
            query: () => 'nationation',
        }),
        getTodoB: builder.query({
            query: () => 'burger',
        }),
        getTodoPl: builder.query({
            query: () => 'plow',
        }),

        getUser: builder.query({
            query: () => 'user',
        }),

        postUser: builder.mutation({
            query: (user) => ({
                url: 'user',
                method: 'POST',
                body: user,
            }),
        }),
        cartTodo: builder.mutation({
            query: (user) => ({
                url: `user/${user.id}`,
                method: 'PUT',
                body: user,
            }),
        })

    })
})

export const { useGetTodoQuery, useGetTodoNQuery, useGetTodoBQuery, useGetTodoPlQuery, useGetUserQuery, usePostUserMutation, useCartTodoMutation } = todoApi;
