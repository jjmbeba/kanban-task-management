import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { Button } from "./ui/button";

const DisplaySidebarButton = () => {
  return (
    <Button
      className={cn(`hidden md:block absolute left-0 bottom-[20dvh] rounded-l-none`)}
    >
      <Eye />
    </Button>
  );
};

export default DisplaySidebarButton;
