"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NoteItem from "./NoteItem";

export default function NoteList() {
  const notes = useSelector((state: RootState) => state.notes.notes);

  if (notes.length === 0) {
    return <p className="text-center text-gray-500 mt-6">Belum ada catatan.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
