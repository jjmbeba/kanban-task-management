"use client";

import { ChevronDown, MoreVertical, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Navbar = () => {
  const [openBoardModal, setOpenBoardModal] = useState(false);

  return (
    <div className="p-4 flex items-center justify-between bg-white">
      <div className="flex items-center">
        <Image src={"/logo.svg"} alt="logo" width={24} height={24} />
        <div className="ml-4 flex items-center gap-2">
          <Button
            variant={"ghost"}
            onClick={() => setOpenBoardModal((prev) => !prev)}
          >
            <h1 className="text-[1.125rem] font-bold leading-normal">
              Platform launch
            </h1>
            <ChevronDown
              className={`text-primary transition-all duration-700 ${
                openBoardModal ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>
      <div className="flex items-center">
        <Button className="opacity-25">
          <Plus />
        </Button>
        <Button variant={"ghost"} size={"icon"} className="text-[#828FA3]">
          <MoreVertical />
        </Button>
        <Dialog open={openBoardModal} onOpenChange={setOpenBoardModal}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
