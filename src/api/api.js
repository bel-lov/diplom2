import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const url = "https://netology-trainbooking.netoservices.ru/";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://netology-trainbooking.netoservices.ru/",
    }),
    endpoints: (builder) => ({
        getCities: builder.query({
            query: (arg) => `routes/cities?name=${arg}`,
            providesTags: (result, error, arg) => [{ type: "Cities", id: arg }],
        }),
        getRoutes: builder.query({
            query: (args) => `routes?${args}`,
            providesTags: (result, error, args) => [{ type: "Routes", id: args }],
        }),
        getLastRoutes: builder.query({
            query: () => `routes/last`,
            providesTags: (result, error) => [{ type: "LastRoutes" }],
        }),
        getSeats: builder.query({
            query: (args) => {
                let path = `routes/${args.id}/seats`;
                for (let key in args) {
                    if (typeof args[key] == "boolean" && key !== "id") {
                        path = path + `?${key}=${args[key]}`;
                    }
                }
                return path;
            },
            providesTags: (result, error, args) => [{ type: "Seats", id: args }],
        }),
        addNewOrder: builder.mutation({
            query: (payload) => ({
                url: 'order',
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Order'],
        }),
    }),
});


// подписка на рассылку новостей в футере

const postEmail = (email) => {
    let formData = new FormData();
    formData.append('email', email)
    fetch("https://netology-trainbooking.netoservices.ru/subscribe?",
        {
            body: formData,
            method: "post",
            "Content-Type": "application/x-www-form-urlencoded"
        }).then(response => response.json())
        .then(data => { data.status ? alert('Вы подписаны на рассылку') : alert('Ошибка. Что-то пошло не так') })
}

export const { useGetRoutesQuery, useGetCitiesQuery, useGetLastRoutesQuery, useGetSeatsQuery, useAddNewOrderMutation } = api;
export { postEmail }