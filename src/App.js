import React from 'react';
import { ScrollingCard } from './components/ScrollingCard';
import Navbar from './components/Navbar';
import { authorizations } from './constants';

function App() {
	const keys = Object.entries(authorizations[0]);
	return (
		<div className="bg-gray-100 w-screen h-screen">
			<Navbar />
			<div className="px-2 sm:px-8 w-full  flex justify-center items-center flex-col py-4">
				<h1 className="text-lg font-bold sm:text-2xl uppercase py-4">
					Watch all of your favorite movies and shows on the best streaming services for free
				</h1>
				<h3 className="text-lg text-gray-600"> Click on the card to reveal login credentials</h3>
				<div className="flex flex-col ">
					<ScrollingCard />
					<div className="flex flex-col sm:flex-row flex-wrap justify-between">
						{keys.map((item, index) => (
							<div className="flex flex-col border-b border-black mx-2">
								<h1 className="p-1">{item[0]}</h1>
								<h1 className="p-1">
									<span className="mr-1">Start Date</span>
									{item[1].startDate}
								</h1>
								<h1 className="p-1">
									<span className="mr-1">Expires</span>
									{item[1].expires}
								</h1>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
