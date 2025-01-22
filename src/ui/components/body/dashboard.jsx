import { IndianRupee } from "lucide-react";
import React from "react";
import { useContext } from "react";
import { Body } from "./body";
import { DataContext } from "./service";

export const Dashboard = () => {
	const { savings, setSavings } = useContext(DataContext);
	const { expend } = useContext(DataContext);
	let savValue;
	const getValue = (e) => {
		savValue = e.target.value;
	};
	const setValue = () => {
		if (savValue != null) {
			setSavings(savings + Number.parseInt(savValue));
		}
	};
	return (
		<Body string={"Dashboard"}>
			<div
				className="flex flex-col gap-8 md:w-[70%] p-4 shadow-xl mt-4 mx-auto"
				action=""
			>
				<div className="grid grid-cols-2">
					<div className="flex items-center">
						<label htmlFor="savings" className="font-bold">
							Total Savings:
						</label>
					</div>
					<div className="text-2xl">
						<div
							id="date"
							className=" flex items-center font-semibold w-full p-2"
						>
							{savings}
							<IndianRupee />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2">
					<div className="flex items-center">
						<label htmlFor="expenditure" className="font-bold">
							Total Expenditure:
						</label>
					</div>
					<div className="text-2xl">
						<div className="flex items-center font-semibold w-full p-2">
							{expend}
							<IndianRupee />
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-4 mt-10">
				<input
					className="font-semibold border border-black p-2"
					onChange={getValue}
					type="number"
					placeholder="Enter amount to add in savings"
				/>
				<button
					className="text-white bg-[#ee616f] hover:bg-[#f73c4e] text-center p-2"
					onClick={setValue}
					type="button"
				>
					Add
				</button>
			</div>
		</Body>
	);
};
