"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useBoardStore } from "@/store/boardStore";
import { ChevronDown, LayoutDashboard, MoreVertical, Plus } from "lucide-react";
import { useState } from "react";
import BoardTitle from "./BoardTitle";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [openBoardModal, setOpenBoardModal] = useState(false);

  const { boards, activeBoard, setActiveBoard } = useBoardStore();

  return (
    <div className="flex items-center justify-between bg-white dark:bg-[#2B2C37] md:border-b md:border-b-dark">
      <div className="[&>*]:py-4 px-4 flex items-center">
        <Logo className="md:border-r border-r-dark md:pr-[1.53rem]" />
        <div className="ml-4 flex items-center gap-2">
          <Button
            variant={"ghost"}
            onClick={() => setOpenBoardModal((prev) => !prev)}
            className="md:hidden"
          >
            <h1 className="text-[1.125rem] font-bold leading-normal">
              {activeBoard}
            </h1>
            <ChevronDown
              className={`text-primary transition-all duration-700 ${
                openBoardModal ? "rotate-180" : ""
              }`}
            />
          </Button>
          <h1 className="hidden md:block text-[1.125rem] font-bold leading-normal">
            {activeBoard}
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <Button>
          <Plus />
          <span className="hidden md:block text-[0.9375rem] leading-normal font-bold">Add New Task</span>
        </Button>
        <Button variant={"ghost"} size={"icon"} className="text-[#828FA3]">
          <MoreVertical />
        </Button>
        <Dialog open={openBoardModal} onOpenChange={setOpenBoardModal}>
          <DialogContent className="max-w-[16.5rem] rounded-[0.5rem] bg-white dark:bg-background border-none">
            <DialogHeader>
              <DialogTitle className="pl-6 text-left text-secondary text-[0.75rem] leading-[0.15rem] tracking-[0.15rem] font-bold">
                ALL BOARDS ({boards.length})
              </DialogTitle>
              <div className="pt-[1.19rem] text-left text-[0.9375rem] font-bold leading-normal">
                {boards.map((title) => (
                  <div
                    key={title as string}
                    className={`p-1 pl-6 flex items-center gap-3 rounded-r-[6.25rem] ${
                      activeBoard === title
                        ? "bg-primary text-primary-foreground"
                        : "text-secondary"
                    }`}
                    onClick={() => {
                      setActiveBoard(title);
                      setOpenBoardModal(false);
                    }}
                  >
                    <LayoutDashboard />
                    <BoardTitle title={title} />
                  </div>
                ))}
                <div
                  className={`p-1 pl-6 flex items-center gap-3 rounded-r-[6.25rem]} text-primary`}
                >
                  <LayoutDashboard />
                  +Create New Board
                </div>
              </div>
            </DialogHeader>
            <DialogFooter className="pl-6">
              <ThemeToggle />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
