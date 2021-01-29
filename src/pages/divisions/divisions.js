import React from "react";

import Navbar from "../../components/navbar/navbar";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import OverviewInfo from "../../components/overview-info/overview-info";
import DivisionSummary from "../../components/division-summary/division-summary";
import ModuleHistory from "../../components/module-history/module-history";
import Table from "../../components/table/table";

import {
  metrics,
  summaryDetails,
  historyDetails,
  tableHeaders,
  tableData,
} from "../../data/divisionsData";

import "./divisions.scss";

const DivisionsPage = () => (
  <React.Fragment>
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

        <Table headers={tableHeaders} data={tableData} />
      </div>
    </div>
  </React.Fragment>
);

export default DivisionsPage;
