"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Accordion({
  image,
  name,
  position,
  description,
  period,
  href,
}: any) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [open]);
  return (
    <div className="mb-5 pb-3 border-b-2 border-dashed">
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col sm:flex-row items-start justify-between cursor-pointer group"
      >
        <div className="flex items-center gap-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary border shrink-0">
            <Image
              src={image}
              alt="karya"
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <h1 className="font-medium">{name}</h1>
              <ChevronRight
                size="16"
                className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                  open ? "rotate-90" : ""
                }`}
              />
            </div>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground ml-16 mt-1 sm:mt-0 sm:ml-0">
          {period}
        </p>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 leading-relaxed ml-16 mt-1 text-sm"
      >
        {description}
        {href && (
          <p className="mt-3 text-sky-500 hover:underline">
            <Link href={href} target="_blank">
              {href}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
