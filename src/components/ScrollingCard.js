import React from 'react';

const Card = ({ title, desc, bg }) => {
	return (
		<div
			className={`w-56 h-56 text-white ${bg} flex flex-col px-6 py-12 relative font-bold rounded-lg shadow-lg my-2`}
		>
			<h1 className="text-4xl py-4">{title}</h1>
			<h2 className="text-base">{desc}</h2>
		</div>
	);
};

// text-white leading-4 base rounded shadow-lg h-40 w-64 font-normal select-none relative

export const ScrollingCard = () => {
	return (
		<section className="flex flex-col sm:flex-row sm:justify-around">
			<Card title="NETFLIX" desc="Unlimited Movies and Tv Shows" bg="bg-red-700" />
			<Card title="HULU" desc="Unlimited Movies and Tv Shows" bg="hulu" />
			<Card title="Disney+" desc="Unlimited Movies and Tv Shows" bg="bg-blue-700" />
			<Card title="YouTubeTv" desc="Unlimited Movies and Tv Shows" bg="bg-blue-700" />
			<Card title="Starz" desc="Unlimited Movies and Tv Shows" bg="bg-gray-900" />
			<Card title="HBO" desc="Unlimited Movies and Tv Shows" bg="bg-black" />
		</section>
	);
};
