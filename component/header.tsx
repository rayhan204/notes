"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addNote } from "../store/slices/noteSlice";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    dispatch(addNote(newNote));
    setTitle("");
    setContent("");
    setShowForm(false);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">📒 My Notes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition"
        >
          {showForm ? "Batal" : "Tambah Catatan"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 rounded text-black">
          <input
            type="text"
            placeholder="Judul Catatan"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 mb-2 rounded"
            required
          />
          <textarea
            placeholder="Isi Catatan"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-2 mb-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Simpan
          </button>
        </form>
      )}
    </header>
  );
}
