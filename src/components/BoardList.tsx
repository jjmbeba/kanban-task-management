"use client";

import { useBoardStore } from "@/store/boardStore";
import { LayoutDashboard } from "lucide-react";
import React, { HTMLAttributes } from "react";
import BoardTitle from "./BoardTitle";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  customTitle?:boolean
}

const BoardList = ({className,customTitle,  ...props}:Props) => {
  const { boards, activeBoard, setActiveBoard } = useBoardStore();

  return (
    <div
      className={cn(
        `text-left text-[0.9375rem] font-bold leading-normal `,
        className
      )}
    >
      {!customTitle && (
        <h2 className="pl-6 text-left text-secondary text-[0.75rem] leading-[0.15rem] tracking-[0.15rem] font-bold">
          ALL BOARDS({boards.length})
        </h2>
      )}
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
    </div>
  );
};

export default BoardList;
