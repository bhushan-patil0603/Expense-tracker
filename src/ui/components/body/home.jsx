import React from "react";
import { useContext } from "react";
import { Navbar } from "../header/navbar";
import { NavContent } from "./nav-content";
import { DataContext } from "./service";

export const Home = () => {
	const { objArray, setObjArray, savings, setSavings, expend, setExpend } =
		useContext(DataContext);
	const obj = {};
	const getDate = (e) => {
		obj.dt = e.target.value;
		obj.dtspc = new Date(e.target.value);
	};
	const getCtgy = (e) => {
		obj.ctgry = e.target.value;
	};
	const getAmt = (e) => {
		obj.amt = e.target.value;
	};
	const getDscr = (e) => {
		obj.dscr = e.target.value;
	};

	if (objArray.length > 0) {
		obj.id = objArray.length + 1;
	} else {
		obj.id = 1;
	}
	const getdata = (e) => {
		e.preventDefault();

		if (obj.dt === "" || obj.amt === "" || obj.ctgy === "") {
			alert("Specify required things");
		} else {
			setObjArray((objArray) => [...objArray, obj]);
			alert("Expense Added Successfully");
			console.log(Number.parseInt(obj.amt));
			setExpend(expend + Number.parseInt(obj.amt));
			// setExpend((expend)=>{
			//   expend+(Number.parseInt(obj.amt))
			// });
			const sav = savings;
			const ex = expend;
			setSavings(sav - ex);
		}
	};

	return (
		<div className="size-full">
			<Navbar />
			<div className="grid md:grid-cols-6 h-[95%] border border-b-black">
				<NavContent />
				<div className="col-span-5 overflow-auto">
					<div className="p-1">
						<h1 className="font-semibold">Add Expense</h1>
					</div>
					<hr />
					<div className="flex items-center justify-center py-11 md:px-11">
						<form
							className="flex flex-col gap-8 md:w-[70%] p-4 shadow-xl"
							action=""
						>
							<div className="grid grid-cols-2">
								<div>
									<label htmlFor="date" className="font-bold">
										Date:
									</label>
								</div>
								<div>
									<input
										id="date"
										className="font-semibold border border-black w-full p-2"
										onInput={getDate}
										type="date"
										required
									/>
								</div>
							</div>
							<div className="grid grid-cols-2">
								<div>
									<label htmlFor="ctgry" className="font-bold">
										Category:
									</label>
								</div>
								<div>
									<select
										id="ctgry"
										onInput={getCtgy}
										className="font-semibold border border-black w-full p-2"
										required
									>
										<option value="0">Select Category</option>
										<option value="Shopping">Shopping</option>
										<option value="Food">Food</option>
										<option value="Accomodation">Accomodation</option>
									</select>
								</div>
							</div>
							<div className="grid grid-cols-2">
								<div>
									<label htmlFor="amt" className="font-bold">
										Amount:
									</label>
								</div>
								<div>
									<input
										id="amt"
										onInput={getAmt}
										className="font-semibold border border-black w-full p-2"
										type="number"
										min={0}
										required
									/>
								</div>
							</div>
							<div className="grid grid-cols-2">
								<div>
									<label htmlFor="dscr" className="font-bold">
										Description:
									</label>
								</div>
								<div>
									<textarea
										id="dscr"
										onInput={getDscr}
										className="font-semibold border border-black size-full p-2"
									/>
								</div>
							</div>
							<button
								className="text-white bg-[#EA6A77] hover:bg-[#f73c4e] text-center p-2"
								type="submit"
								onClick={getdata}
							>
								submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
