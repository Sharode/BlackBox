import React from 'react';

function Navbar() {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal p-6">
			<div className="flex items-center flex-no-shrink text-black mr-6">
				<img className="h-8 w-8 mr-2" src="../../../blackbox.svg" alt="Black Box" />

				<span className="font-semibold text-xl tracking-tight">Black Box</span>
			</div>
		</nav>
	);
}

export default Navbar;
