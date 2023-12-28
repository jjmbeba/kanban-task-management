import { create } from "zustand";

interface Board {
  id: number;
  title: string;
  columns: String[];
}

interface BoardState {
  boards: Board[];
  addBoard: (newBoard: Board) => void;
  activeBoard: Board;
  setActiveBoard: (board: Board) => void;
}

//"Platform launch", "Marketing Plan", "Roadmap"

export const useBoardStore = create<BoardState>()((set) => ({
  boards: [
    {
      id: 1,
      title: "Platform Launch",
      columns: ["todo", "in-progress", "completed"],
    },
    {
      id: 2,
      title: "Marketing Plan",
      columns: [],
    },
    {
      id: 3,
      title: "Roadmap",
      columns: [],
    },
  ],
  activeBoard: {
    id: 1,
    title: "Platform Launch",
    columns: ["todo", "in-progress", "completed"],
  },
  addBoard: (newBoard) =>
    set((state) => ({
      boards: [...state.boards, newBoard],
    })),
  setActiveBoard: (board) =>
    set({
      activeBoard: board,
    }),
}));
