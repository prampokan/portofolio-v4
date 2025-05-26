"use client";

import Image from "next/image";
import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-5">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-x-4 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary border">
          <Image
            src="/images/karyasuperdev.png"
            alt="karya"
            width={100}
            height={100}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <h1 className="font-medium">Karya Super Dev</h1>
          <p className="text-sm text-muted-foreground">Software Engineer</p>
        </div>
      </div>
      <p
        className={`mt-3 leading-relaxed transition-all ${
          open ? "h-[10rem]" : "h-0 invisible"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa
        ipsam expedita libero labore exercitationem vitae corrupti soluta, illo
        unde, sequi totam repellat veritatis laboriosam. Optio quos dolores
        blanditiis officiis.
      </p>
    </div>
  );
}
