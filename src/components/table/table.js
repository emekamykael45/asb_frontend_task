import React from "react";
import moment from "moment";

import Status from "../status/status";
import Risk from "../status/risk";
import DropDown from "../dropdown/dropdown";

import { chevronCircleIcon } from "../../assets/svg";

import "./table.scss";

const Table = ({ headers, data }) => {
	return (
		<React.Fragment>
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							{headers.map((header, i) => (
								<th key={i}>{header}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data?.map((item, i) => {
							const card_expiry = moment(item.card_expiration, "MM/YY");
							const today_date = moment(new Date());
							var duration = moment.duration(card_expiry.diff(today_date));
							var days = duration.asDays();
							const isCardExpired = days >= 1 ? false : true;

							return (
								<tr key={i}>
									<td>
										<div className="stacked">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
											/>
											<img
												src={chevronCircleIcon}
												className="chevron_icon"
												alt=""
											/>
										</div>
									</td>
									<td>{`${item.firstName} ${item.lastName}`}</td>
									<td>
										<div className="stacked">
											<h6>{item?.city}</h6>
											<p>{`${item?.buildingNumber} ${item?.streetName}, ${item?.streetAddress}`}</p>
										</div>
									</td>
									<td>
										<Status
											type={isCardExpired ? "warning" : "success"}
											text={isCardExpired ? "1 Issue" : "No Issue"}
										/>
									</td>
									<td>
										<div className="stacked">
											<h6>
												<span></span> {`${2} Unique Entries`}
											</h6>
											<p>{"new"}</p>
										</div>
									</td>
									<td>
										<Risk type={"low"} />
									</td>
									<td>
										<DropDown>
											<button className="dropdown-item">View</button>
										</DropDown>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
};

export default Table;
