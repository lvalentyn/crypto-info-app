import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
	'X-BingApis-SDK': 'true',
	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
	'X-RapidAPI-Key': '9b1a281770msh6b3e4d5c7ea0cd7p102db6jsnb1e4db1f6d5e'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
		})
	})
});

export const {
	useGetCryptoNewsQuery
} = cryptoNewsApi;