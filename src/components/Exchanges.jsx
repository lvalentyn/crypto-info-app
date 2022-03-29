import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const Exchanges = () => {
	// const { data } = useGetCryptosQuery(5);
	const { data } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: 12 });
	console.log(data.value)
	return (
		<div>Exchanges</div>
	)
}

export default Exchanges