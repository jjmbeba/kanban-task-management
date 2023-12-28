import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const Board = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center prose dark:prose-invert">
      <h2 className="text-center text-[1.125rem] leading-normal font-bold text-secondary">
        This board is empty. Create a new column to get started.
      </h2>
      <Button className="mt-[1.56rem]">
        <Plus/>
        Add New Column
      </Button>
    </div>
  );
};

export default Board;
