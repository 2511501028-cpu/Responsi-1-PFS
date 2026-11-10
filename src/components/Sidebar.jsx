import React from "react";
import { LayoutDashboard, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-lockup">
        <span className="brand-star">✦</span>
        <div>
          <div className="brand-name">Universitas 'Aisyiyah Yogyakarta</div>
        </div>
      </div>

      <div className="sidebar-caption">MENU UTAMA</div>

      <a className="side-link active" href="#dashboard">
        <LayoutDashboard size={18} />
        Dashboard
      </a>

      <a className="side-link" href="#mahasiswa">
        <Users size={18} />
        Data Mahasiswa
      </a>

      <div className="sidebar-bottom">
        <div className="sidebar-note">
          <span>✧</span>
          <p>Every student has a story worth celebrating.</p>
        </div>
      </div>

      <div className="sidebar-footer">© 2026 Akademik UNISA</div>
    </aside>
  );
}
