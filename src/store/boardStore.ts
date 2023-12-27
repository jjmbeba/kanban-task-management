import { create } from "zustand";

interface BoardState{
    boards:String[],
    addBoard:(newBoard:String) => void;
    activeBoard:String;
    setActiveBoard:(board:String) => void;
}

export const useBoardStore = create<BoardState>()((set) => ({
  boards: ["Platform launch", "Marketing Plan", "Roadmap"],
  activeBoard:"Platform launch",
  addBoard: (newBoard) =>
    set((state) => ({
      boards: [...state.boards, newBoard],
    })),
    setActiveBoard:(board) => set(({
      activeBoard:board
    }))
}));