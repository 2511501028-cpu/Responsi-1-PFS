import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const emptyForm = {
  nim: "",
  name: "",
  major: "Informatika",
  gpa: "",
  status: "Aktif",
};

export default function StudentModal({ show, student, onClose, onSave }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(
      student ? { ...student, gpa: String(student.gpa) } : { ...emptyForm },
    );
    setError("");
  }, [student, show]);

  useEffect(() => {
    if (!show) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [show, onClose]);

  if (!show) return null;

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();

    if (!form.nim.trim() || !form.name.trim() || form.gpa === "") {
      setError("Semua kolom wajib diisi.");
      return;
    }

    const gpa = Number(form.gpa);
    if (!Number.isFinite(gpa) || gpa < 0 || gpa > 4) {
      setError("IPK harus berada di antara 0.00 sampai 4.00.");
      return;
    }

    onSave({
      ...form,
      nim: form.nim.trim(),
      name: form.name.trim(),
      gpa,
    });
  };

  return (
    <div
      className="modal-layer"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="student-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-heading">
          <div>
            <span className="eyebrow">DATA AKADEMIK</span>
            <h2 id="modal-title">
              {student ? "Edit Mahasiswa" : "Tambah Mahasiswa"}
            </h2>
            <p>Lengkapi informasi mahasiswa di bawah ini.</p>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Tutup formulir"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={submit}>
          <div className="form-grid">
            <label className="field-group">
              <span>NIM</span>
              <input
                name="nim"
                value={form.nim}
                onChange={update}
                placeholder="Contoh: 2511501001"
                required
              />
            </label>

            <label className="field-group">
              <span>Nama lengkap</span>
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Nama mahasiswa"
                required
              />
            </label>

            <label className="field-group">
              <span>Program studi</span>
              <select name="major" value={form.major} onChange={update}>
                <option>Arsitektur</option>
                <option>Bioteknologi</option>
                <option>Teknologi Informasi</option>
                <option>Manajemen</option>
                <option>Akuntansi</option>
                <option>Ilmu Komunikasi</option>
              </select>
            </label>

            <label className="field-group">
              <span>IPK (0.00–4.00)</span>
              <input
                name="gpa"
                type="number"
                min="0"
                max="4"
                step="0.01"
                value={form.gpa}
                onChange={update}
                placeholder="3.75"
                required
              />
            </label>

            <label className="field-group field-full">
              <span>Status mahasiswa</span>
              <select name="status" value={form.status} onChange={update}>
                <option>Aktif</option>
                <option>Cuti</option>
                <option>Tidak Aktif</option>
              </select>
            </label>
          </div>

          {error && (
            <div className="form-error" role="alert">
              {error}
            </div>
          )}

          <div className="modal-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Batal
            </button>
            <button type="submit" className="btn btn-primary-custom">
              {student ? "Simpan Perubahan" : "Tambah Mahasiswa"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
