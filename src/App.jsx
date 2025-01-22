import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./ui/components/body/dashboard";
import { Home } from "./ui/components/body/home";
import { MyProvider } from "./ui/components/body/service";
import {
	Accomodation,
	Food,
	Shopping,
	SortAmtAsc,
	SortAmtDec,
	SortDateAsc,
	SortDateDec,
	Table,
} from "./ui/components/body/table";

function App() {
	return (
		<MyProvider>
			<div className="size-full border border-black rounded-[1rem] py-8">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/add-expense" element={<Home />} />
						<Route path="/table" element={<Table />} />
						<Route path="/shopping" element={<Shopping />} />
						<Route path="/food" element={<Food />} />
						<Route path="/accomodation" element={<Accomodation />} />
						<Route path="/date-ascending" element={<SortDateAsc />} />
						<Route path="/date-descending" element={<SortDateDec />} />
						<Route path="/amt-ascending" element={<SortAmtAsc />} />
						<Route path="/amt-descending" element={<SortAmtDec />} />
					</Routes>
				</BrowserRouter>
			</div>
		</MyProvider>
	);
}

export default App;
