import React, { useState, useEffect } from "react";

import Spinner from "../../components/spinner/spinner";
import Navbar from "../../components/navbar/navbar";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import OverviewInfo from "../../components/overview-info/overview-info";
import DivisionSummary from "../../components/division-summary/division-summary";
import ModuleHistory from "../../components/module-history/module-history";
import Table from "../../components/table/table";

import api from "../../api";

import {
	metrics,
	summaryDetails,
	historyDetails,
	tableHeaders,
} from "../../data/divisionsData";

import "./divisions.scss";

const DivisionsPage = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [persons, setPersons] = useState(null);

	useEffect(() => {
		getPersons();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const successStatusCode = 200 || 201;

	const getPersons = async () => {
		setIsFetching(true);
		try {
			const res = await api.get(
				`/custom?firstName=firstName&lastName=lastName&city=city&buildingNumber=buildingNumber&streetName=streetName&streetAddress=streetAddress&card_expiration=card_expiration`
			);
			if ((res.status = successStatusCode)) {
				setIsFetching(false);
				setPersons(res.data.data);
			}
		} catch (err) {
			const error = err?.response;
			setIsFetching(false);
			console.log(error);
		}
	};

	return (
		<React.Fragment>
			{isFetching && <Spinner />}
			<Navbar />
			<div className="section divisions_page">
				<Breadcrumbs
					routes={[
						{ to: "/divisions", label: "Divisions" },
						{ to: "/module", label: "Module" },
					]}
				/>
				<div className="metrics_overview">
					{metrics.map((metric, i) => (
						<OverviewInfo key={i} metric={metric} />
					))}
				</div>
				<div className="bottom_div">
					<div className="summary_history_section">
						<DivisionSummary summaryDetails={summaryDetails} />

						<ModuleHistory historyDetails={historyDetails} />
					</div>

					<Table headers={tableHeaders} data={persons} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default DivisionsPage;
