import create from '@ant-design/icons/lib/components/IconFont';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createApiHeaders = {
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	'X-RapidAPI-Key': '9b1a281770msh6b3e4d5c7ea0cd7p102db6jsnb1e4db1f6d5e'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: createApiHeaders })

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => createRequest('/coins')
		})
	})
});
// var options = {
// 	method: 'GET',
// 	url: 'https://coinranking1.p.rapidapi.com/exchanges',
// 	headers: {
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
// 		'X-RapidAPI-Key': '9b1a281770msh6b3e4d5c7ea0cd7p102db6jsnb1e4db1f6d5e'
// 	}
// };

export const {
	useGetCryptosQuery
} = cryptoApi;