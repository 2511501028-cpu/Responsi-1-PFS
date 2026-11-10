import React from "react";

export default function StatCard({ label, value, detail, icon, accent }) {
  return (
    <div className={`stat-card card shadow-sm rounded-4 col-12 col-md-4 ${accent || ""}`}>
      <div className="stat-top">
        <span>{label}</span>
        <span className="stat-icon" aria-hidden="true">{icon}</span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-detail">{detail}</div>
    </div>
  );
}
