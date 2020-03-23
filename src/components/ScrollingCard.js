import React from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { authorizations } from '../constants';

const Card = ({ title, desc, bg, credentials }) => {
	const clipboard = useClipboard({ copiedTimeout: 600 });
	return (
		<div
			className={`w-60 h-56 text-white ${bg} flex flex-col px-6 pb-8 relative font-bold rounded-lg shadow-lg m-2 `}
			// onClick={() => clipboard.copy(credentials.pw)}
		>
			{clipboard.copied ? (
				<h1 className="text-4xl py-4">Copied</h1>
			) : (
				<div>
					<h1 className="text-4xl py-2">{title}</h1>
					<h2 className="text-base ">{desc}</h2>

					<div className="flex justify-around pt-6">
						<button
							className="rounded bg-white text-black p-2 font-bold shadow-lg cursor-pointer"
							onClick={() => clipboard.copy(credentials.email)}
						>
							Email
						</button>
						<button
							className="rounded bg-white text-black font-bold p-2 shadow-lg cursor-pointer"
							onClick={() => clipboard.copy(credentials.pw)}
						>
							Password
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

// text-white leading-4 base rounded shadow-lg h-40 w-64 font-normal select-none relative

export const ScrollingCard = () => {
	return (
		<section className="flex flex-col sm:flex-row  m-auto">
			<Card
				title="NETFLIX"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-red-700"
				credentials={authorizations.Netflix}
			/>
			<Card title="HULU" desc="Unlimited Movies and Tv Shows" bg="hulu" credentials={authorizations.Hulu} />
			<Card
				title="Disney+"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-blue-700"
				credentials={authorizations.Disney}
			/>
			<Card
				title="YouTubeTv"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-blue-700"
				credentials={authorizations.YoutubeTv}
			/>
			<Card
				title="Starz"
				desc="Unlimited Movies and Tv Shows"
				bg="bg-gray-900"
				credentials={authorizations.Starz}
			/>
			<Card title="HBO" desc="Unlimited Movies and Tv Shows" bg="bg-black" credentials={authorizations.Hbo} />
		</section>
	);
};
