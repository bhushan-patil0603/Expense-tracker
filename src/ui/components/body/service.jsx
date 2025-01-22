import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const DataContext = createContext();
export const MyProvider = ({ children }) => {
	const [objArray, setObjArray] = useState([]);
	const [savings, setSavings] = useState(1000);
	const [expend, setExpend] = useState(0);
	return (
		<DataContext.Provider
			value={{ objArray, setObjArray, savings, setSavings, expend, setExpend }}
		>
			{children}
		</DataContext.Provider>
	);
};
