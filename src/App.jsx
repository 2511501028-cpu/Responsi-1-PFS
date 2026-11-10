import React, { useEffect, useMemo, useState } from "react";
import $ from "jquery";
import {
  Plus,
  Search,
  SlidersHorizontal,
  UserCheck,
  UserX,
  Coffee,
  ChevronDown,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import StudentTable from "./components/StudentTable";
import StudentModal from "./components/StudentModal";

const initialStudents = [
  {
    id: 1,
    nim: "2511501011",
    name: "Shafa Nalaratih",
    major: "Ilmu Komunikasi",
    gpa: 4.00,
    status: "Aktif",
  },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua Status");
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const keyword = search.toLowerCase();
      const matchesSearch =
        student.nim.toLowerCase().includes(keyword) ||
        student.name.toLowerCase().includes(keyword) ||
        student.major.toLowerCase().includes(keyword);

      const matchesStatus =
        statusFilter === "Semua Status" || student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [students, search, statusFilter]);

  // JavaScript: menghitung ringkasan berdasarkan status mahasiswa.
  const activeCount = students.filter(
    (student) => student.status === "Aktif",
  ).length;
  const inactiveCount = students.filter(
    (student) => student.status === "Tidak Aktif",
  ).length;
  const leaveCount = students.filter(
    (student) => student.status === "Cuti",
  ).length;

  useEffect(() => {
    const $table = $("#student-table-wrapper");
    $table.stop(true, true).hide().fadeIn(280);

    return () => {
      $table.stop(true, true);
    };
  }, [filteredStudents.length, search, statusFilter]);

  const openAdd = () => {
    setSelectedStudent(null);
    setShowModal(true);
  };

  const openEdit = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  // Validasi NIM berlaku saat tambah maupun edit.
  const saveStudent = (form) => {
    const duplicateNim = students.some(
      (student) =>
        student.nim === form.nim && student.id !== selectedStudent?.id,
    );

    if (duplicateNim) {
      alert("NIM sudah terdaftar. Gunakan NIM yang berbeda.");
      return;
    }

    if (selectedStudent) {
      setStudents((current) =>
        current.map((student) =>
          student.id === selectedStudent.id
            ? { ...form, id: student.id }
            : student,
        ),
      );
    } else {
      setStudents((current) => [{ ...form, id: Date.now() }, ...current]);
    }

    setShowModal(false);
  };

  const deleteStudent = (id) => {
    const student = students.find((item) => item.id === id);

    if (window.confirm(`Hapus data ${student?.name}?`)) {
      setStudents((current) => current.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="app-shell">
      <div
        className={`sidebar-backdrop ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div
        className={
          sidebarOpen ? "sidebar-holder sidebar-visible" : "sidebar-holder"
        }
      >
        <Sidebar />
      </div>

      <main className="main-area">
        <Navbar onMenuClick={() => setSidebarOpen((open) => !open)} />

        <div className="page-content container-fluid">
          <section
            className="welcome-row"
            id="dashboard"
            aria-labelledby="page-title"
          >
            <div>
              <div className="eyebrow">
                SELAMAT DATANG KEMBALI, ADMIN <span>✦</span>
              </div>
              <h1 id="page-title">
                Dashboard <em>Akademik</em>
              </h1>
              <p>
                Kelola informasi mahasiswa dan pantau perkembangan akademik
                dalam satu tempat.
              </p>
            </div>

            <div className="date-chip">✧ &nbsp; Semester Ganjil 2026/2027</div>
          </section>

          {/* Bootstrap Grid: row, col-md-4; setiap kartu memakai card. */}
          <section className="stats-grid row g-3" aria-label="Status mahasiswa">
            <StatCard
              label="Mahasiswa Aktif"
              value={activeCount}
              detail="Mahasiswa berstatus aktif"
              icon={<UserCheck size={19} />}
              accent="stat-active"
            />
            <StatCard
              label="Tidak Aktif"
              value={inactiveCount}
              detail="Mahasiswa tidak aktif"
              icon={<UserX size={19} />}
              accent="stat-inactive"
            />
            <StatCard
              label="Mahasiswa Cuti"
              value={leaveCount}
              detail="Mahasiswa sedang cuti"
              icon={<Coffee size={19} />}
              accent="stat-leave"
            />
          </section>

          <section
            className="content-card card shadow-sm rounded-4"
            id="mahasiswa"
            aria-labelledby="student-heading"
          >
            <div className="section-heading">
              <div>
                <span className="eyebrow">DATABASE AKADEMIK</span>
                <h2 id="student-heading">Daftar Mahasiswa</h2>
                <p>Informasi lengkap mahasiswa yang terdaftar.</p>
              </div>

              <button
                type="button"
                className="btn btn-primary-custom add-button shadow-sm"
                onClick={openAdd}
              >
                <Plus size={17} />
                Tambah Mahasiswa
              </button>
            </div>

            <div className="toolbar">
              <div className="search-box">
                <Search size={17} />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Cari nama, NIM, atau program studi..."
                  aria-label="Cari mahasiswa"
                />
              </div>

              <div className="toolbar-right">
                <div className="filter-box">
                  <SlidersHorizontal size={16} />
                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    aria-label="Filter status mahasiswa"
                  >
                    <option>Semua Status</option>
                    <option>Aktif</option>
                    <option>Cuti</option>
                    <option>Tidak Aktif</option>
                  </select>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>

            <div id="student-table-wrapper">
              <StudentTable
                students={filteredStudents}
                onEdit={openEdit}
                onDelete={deleteStudent}
              />
            </div>

            <div className="table-footer">
              <span>
                Menampilkan <strong>{filteredStudents.length}</strong> dari{" "}
                <strong>{students.length}</strong> mahasiswa
              </span>
            </div>
          </section>

          <footer className="page-footer">
            © 2026 UNISA <span>•</span> Akademik UNISA
          </footer>
        </div>
      </main>

      <StudentModal
        show={showModal}
        student={selectedStudent}
        onClose={() => setShowModal(false)}
        onSave={saveStudent}
      />
    </div>
  );
}
