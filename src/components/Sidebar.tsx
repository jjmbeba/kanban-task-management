import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet";
import { EyeOffIcon } from "lucide-react";
import BoardList from "./BoardList";
import DisplaySidebarButton from "./DisplaySidebarButton";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const Sidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <DisplaySidebarButton />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[16.25rem] border-none pl-0">
          <SheetHeader className="pl-[1.62rem]">
            <Logo />
          </SheetHeader>
          <BoardList className="pt-[3.38rem]" />
          <SheetFooter className="w-full flex md:flex-col items-center absolute bottom-[10dvh] left-1/3 translate-x-[-50%]">
            <ThemeToggle />
            <SheetClose asChild>
              <div className="flex items-center gap-[0.63rem] text-secondary text-[0.9375rem] leading-normal font-bold cursor-pointer">
                <EyeOffIcon size={16} />
                Hide Sidebar
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
