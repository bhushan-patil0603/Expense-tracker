import React from "react";
import { Link } from "react-router";

export const NavContent = () => {
	return (
		<div className="flex flex-col items-center col-span-1 md:w-full">
			<div className="text-white bg-[#EA6A77] w-[100%] text-center p-2">
				Expenses
			</div>
			<div className=" bg-[#343944] w-[100%] h-[100%]">
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/" }}>
						<p className="hover:underline">Dashboard</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/add-expense" }}>
						<p className="hover:underline">Add Expense</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/table" }}>
						<p className="hover:underline">All Category</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/shopping" }}>
						<p className="hover:underline">Shopping</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/food" }}>
						<p className="hover:underline">Food</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/accomodation" }}>
						<p className="hover:underline">Accomodation</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/date-ascending" }}>
						<p className="hover:underline">Date Ascending</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/date-descending" }}>
						<p className="hover:underline">Date Descending</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/amt-ascending" }}>
						<p className="hover:underline">Amount Ascending</p>
					</Link>
				</div>
				<div className="text-center text-neutral-400 text-sm p-2 border-b border-neutral-500">
					<Link to={{ pathname: "/amt-descending" }}>
						<p className="hover:underline">Amount Descending</p>
					</Link>
				</div>
			</div>
		</div>
	);
};
