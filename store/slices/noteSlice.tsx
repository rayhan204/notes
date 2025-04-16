import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
        const timestamp = new Date().toISOString();
        state.notes.push({
          ...action.payload,
          createdAt: timestamp,
          updatedAt: timestamp,
        });
      },
    editNote: (state, action) => {
        const { id, title, content } = action.payload;
        const note = state.notes.find((note) => note.id === id);
        if (note) {
          note.title = title;
          note.content = content;
          note.updatedAt = new Date().toISOString();
        }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    },     
  },
});

export const { addNote, deleteNote, updateNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
