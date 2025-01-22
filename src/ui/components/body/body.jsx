import React from "react";
import { Link } from "react-router";
import { Navbar } from "../header/navbar";
import { NavContent } from "./nav-content";

export const Body = ({ children, string }) => {
	return (
		<div className="size-full">
			<Navbar />
			<div className="grid grid-cols-6 h-[95%] border border-b-black">
				<NavContent />
				<div className="col-span-5 p-4">
					<h1 className="font-bold text-center">{string}</h1>
					{children}
				</div>
			</div>
		</div>
	);
};
