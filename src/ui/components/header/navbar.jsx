import { Wallet } from "lucide-react";
import React from "react";

export const Navbar = () => {
	return (
		<>
			<div className="w-[100%] bg-[#c1c0c0] flex items-center">
				<div className="w-8 h-8 border border-r-black text-center">
					<Wallet color="blue" />
				</div>
				<div className="ml-4 text-sm">Expenses</div>
			</div>
		</>
	);
};
