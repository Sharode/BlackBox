import React, { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { authorizations } from '../constants';
import { WSAEHOSTUNREACH } from 'constants';

const Card = ({ title, desc, bg, credentials }) => {
	const clipboard = useClipboard({ copiedTimeout: 3000 });

	const [ state, setState ] = useState();

	const handleClick = () => {
		clipboard.copy('');
	};
	return (
		<div
			className={`w-60 h-56 text-white ${bg} flex flex-col px-6 pb-8 relative font-bold rounded-lg shadow-lg m-2 cursor-pointer`}
			onClick={() => handleClick()}
		>
			{clipboard.copied ? (
				<div>
					{/* <h1 className="text-4xl py-4">Copied</h1> */}
					<h1 className="text-2xl py-4">Email: {credentials.email}</h1>
					<h1 className="text-2xl py-4">Password: {credentials.pw}</h1>
				</div>
			) : (
				<div>
					<h1 className="text-4xl py-2">{title}</h1>
					<h2 className="text-base ">{desc}</h2>
				</div>
			)}
		</div>
	);
};

// text-white leading-4 base rounded shadow-lg h-40 w-64 font-normal select-none relative

export const ScrollingCard = () => {
	const authorization = authorizations[0];
	return (
		<section className="flex flex-col sm:flex-row  m-auto">
			<Card
				title="NETFLIX"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-red-700"
				credentials={authorization.Netflix}
			/>
			<Card title="HULU" desc="Unlimited Movies and Tv Shows" bg="hulu" credentials={authorization.Hulu} />
			<Card
				title="Disney+"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-blue-700"
				credentials={authorization.Disney}
			/>
			<Card
				title="YouTubeTv"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-blue-700"
				credentials={authorization.YoutubeTv}
			/>
			<Card
				title="Starz"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-gray-900"
				credentials={authorization.Starz}
			/>
			<Card title="HBO" desc="Unlimited Movies and Tv Shows" bg="bg-black" credentials={authorization.Hbo} />
		</section>
	);
};
