import { Button } from "./button";
import { MoveUpRight } from "lucide-react";

export default function BlogCard() {
  return (
    <div className="p-5 border rounded-lg cursor-pointer hover:bg-card transition-all group relative">
      <h1 className="font-medium">IoT Website cocok untuk tugas akhir</h1>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quos?
        Iste laboriosam doloremque, consectetur repellat nihil exercitationem
        sed nostrum quaerat quam voluptatibus commodi ullam repellendus maxime
        aliquam quos libero! Eveniet.
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
      >
        <MoveUpRight />
      </Button>
    </div>
  );
}
