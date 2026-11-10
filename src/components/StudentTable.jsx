import React from "react";
import { Edit3, Trash2, GraduationCap } from "lucide-react";

export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover student-table align-middle mb-0" aria-label="Daftar data mahasiswa">
        <thead>
          <tr>
            <th scope="col">MAHASISWA</th>
            <th scope="col">NIM</th>
            <th scope="col">PROGRAM STUDI</th>
            <th scope="col">IPK</th>
            <th scope="col">STATUS</th>
            <th scope="col" className="text-end">AKSI</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="6">
                <div className="empty-state">
                  <GraduationCap size={30} />
                  <strong>Data tidak ditemukan</strong>
                  <span>Coba ubah kata kunci atau filter pencarian.</span>
                </div>
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="student-name-cell">
                    <div className="student-avatar" aria-hidden="true">
                      {student.name.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase()}
                    </div>
                    <strong>{student.name}</strong>
                  </div>
                </td>
                <td className="nim-cell">{student.nim}</td>
                <td>{student.major}</td>
                <td><span className="gpa-value">{Number(student.gpa).toFixed(2)}</span></td>
                <td>
                  <span className={`status-pill ${
                    student.status === "Aktif"
                      ? "status-active"
                      : student.status === "Cuti"
                        ? "status-leave"
                        : "status-inactive"
                  }`}>
                    <i />
                    {student.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      type="button"
                      className="action-btn edit-btn"
                      onClick={() => onEdit(student)}
                      title="Edit data"
                      aria-label={`Edit data ${student.name}`}
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      type="button"
                      className="action-btn delete-btn"
                      onClick={() => onDelete(student.id)}
                      title="Hapus data"
                      aria-label={`Hapus data ${student.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
