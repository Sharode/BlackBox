import React from 'react';
import { ScrollingCard } from './components/ScrollingCard';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="px-8">
			<Navbar />
			<h1 className="text-lg font-bold sm:text-2xl uppercase py-4">
				Watch all of your favorite movies and shows on the best streaming services for free
			</h1>
			<div className="flex w-full sm:flex-col  ">
				<ScrollingCard />

				<div>
					<h3>Access to the top streaming services</h3>
					<h1> starz hulu youtubetv hbo netflix disney Plus</h1>
					<h1>Maybe list</h1>
					(Amazon Prime) Bet Plus
				</div>
			</div>
		</div>
	);
}

export default App;
