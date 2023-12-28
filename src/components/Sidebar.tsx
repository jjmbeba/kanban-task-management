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
          <SheetFooter className="flex md:flex-col bottom-0">
            <ThemeToggle />
            <SheetClose asChild>
              <div className="pl-[1.62rem] flex items-center gap-[0.63rem] text-secondary text-[0.9375rem] leading-normal font-bold cursor-pointer">
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
