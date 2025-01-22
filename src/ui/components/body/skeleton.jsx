import React from "react";
export const Skeleton = ({ obj }) => {
	return (
		<div className="w-full p-5 shadow-xl">
			<table className="w-full text-center border-1">
				<thead>
					<tr>
						<th>Sr.No.</th>
						<th>Date</th>
						<th>Category</th>
						<th>Amount</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{obj.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.dt}</td>
							<td>{item.ctgry}</td>
							<td>{item.amt}</td>
							<td>{item.dscr}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
