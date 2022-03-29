import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
	'X-RapidAPI-Key': '9b1a281770msh6b3e4d5c7ea0cd7p102db6jsnb1e4db1f6d5e'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		// getCryptoHistory: builder.query({
		// 	query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
		// }),

	})
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;


// const { data } = useGetCryptosQuery(5);
// import { useGetCryptosQuery } from '../services/cryptoApi';