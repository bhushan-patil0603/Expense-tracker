import React from "react";
import { useContext } from "react";
import { Body } from "./body";
import { DataContext } from "./service";
import { Skeleton } from "./skeleton";

export const getData = () => {
	const { objArray } = useContext(DataContext);
	return objArray;
};
export const Table = () => {
	const objArray = getData();
	console.log(objArray);
	return (
		<Body string={"All Categories"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};

export const Shopping = () => {
	let objArray = getData();
	objArray = objArray.filter((item) => {
		return item.ctgry === "Shopping";
	});
	console.log(objArray);
	return (
		<Body string={"Shopping"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};

export const Food = () => {
	let objArray = getData();
	objArray = objArray.filter((item) => {
		return item.ctgry === "Food";
	});
	console.log(objArray);
	return (
		<Body string={"Food"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};

export const Accomodation = () => {
	let objArray = getData();
	// const dates=[];
	// objArray.map((item)=>(
	//   dates.push(item.dt)
	// ))
	// console.log(dates);
	// dates.sort((a, b) => a - b);
	// console.log("dates are: ",dates);

	objArray = objArray.filter((item) => {
		return item.ctgry === "Accomodation";
	});
	console.log(objArray);
	return (
		<Body string={"Accomodation"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};

export const SortDateAsc = () => {
	const objArray = getData();
	objArray.sort((a, b) => {
		return a.dtspc - b.dtspc;
	});
	console.log(objArray);
	return (
		<Body string={"Ascending Dates"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};

export const SortDateDec = () => {
	const objArray = getData();
	objArray.sort((a, b) => {
		return b.dtspc - a.dtspc;
	});
	console.log(objArray);
	return (
		<Body string={"Descending Dates"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};

export const SortAmtDec = () => {
	const objArray = getData();
	objArray.sort((a, b) => {
		return b.amt - a.amt;
	});
	console.log(objArray);
	return (
		<Body string={"Descending Amount"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};

export const SortAmtAsc = () => {
	const objArray = getData();
	objArray.sort((a, b) => {
		return a.amt - b.amt;
	});
	console.log(objArray);
	return (
		<Body string={"Ascending Amounts"}>
			<Skeleton obj={objArray} />
		</Body>
	);
};
