import React from "react";
import { Bell, Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="topbar navbar">
      <button
        type="button"
        className="mobile-menu icon-button"
        onClick={onMenuClick}
        aria-label="Buka menu navigasi"
      >
        <Menu size={20} />
      </button>

      <div className="breadcrumb-text">
        <span></span>
        <strong>Dashboard Akademik</strong>
      </div>

      <div className="topbar-right">
        <span className="academic-year">TAHUN AKADEMIK 2026/2027</span>
        <button
          type="button"
          className="icon-button notification"
          aria-label="Notifikasi"
        >
          <Bell size={18} />
          <i />
        </button>
        <div className="profile-avatar" aria-hidden="true">
          AD
        </div>
        <div className="profile-copy">
          <strong>Admin Akademik</strong>
          <small>Administrator</small>
        </div>
      </div>
    </header>
  );
}
