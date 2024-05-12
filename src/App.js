import React from 'react';
import './theme/global.css';
import { useAlbums } from './hooks/useUsers';
import ProductCard from './components/product-card';

const App = () => {
	const { isLoading, isError, data: users } = useAlbums();
	console.log({ users })
	if (isLoading)
		return <div>Loading...</div>
	return <main>
		{(users).map(user => <ul key={user.id} className="divide-y divide-gray-200 px-4">
			<ProductCard user={user} />
		</ul>
		)}
	</main>
};

export default App;
