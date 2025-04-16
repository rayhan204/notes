"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { deleteNote, editNote, Note } from "../store/slices/noteSlice";

export default function NoteItem({ note }: { note: Note }) {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleSave = () => {
    const updatedNote = {
      id: note.id,
      title,
      content,
      updatedAt: new Date().toISOString(), 
    };
  
    dispatch(editNote(updatedNote));
    setIsEditing(false);
  };
  

  return (
    <>
      <div className="bg-white p-4 rounded shadow border flex flex-col justify-between h-full">
        <h2 className="font-bold text-lg mb-1 text-black">{note.title}</h2>
        <p className="text-gray-700 flex-1">{note.content || "Konten kosong..."}</p>
        <p className="text-sm text-gray-500 mt-2">
            {note.createdAt ? new Date(note.createdAt).toLocaleString() : "Tanggal tidak tersedia"} <br />
        </p>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:underline"
          >
            ✏️ Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:underline"
          >
            🗑 Hapus
          </button>
        </div>
      </div>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4 text-gray-700">Edit Catatan</h2>
            <label htmlFor="note-title" className="sr-only">Judul</label>
            <input
              id="note-title"
              className="w-full border p-2 rounded mb-3 text-gray-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul"
            />
            <label htmlFor="note-content" className="sr-only">Isi</label>
            <textarea
              id="note-content"
              className="w-full border p-2 rounded mb-3 text-gray-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Isi"
              rows={5}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
