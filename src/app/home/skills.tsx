"use client";

import Image from "next/image";
import { DATA } from "@/data/resume";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

export default function Skills() {
  const splideOptions = {
    type: "loop",
    pagination: false,
    arrows: false,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: false,
      rewind: true,
      speed: 0.7,
    },
    autoWidth: true,
    gap: "16px",
    breakpoints: {
      768: {
        fixedWidth: "100px",
      },
    },
  };

  return (
    <div className="mt-32">
      <h1 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
        Skills and Expertise
      </h1>
      <p className="mt-5 leading-loose font-[family-name:var(--font-geist-mono)] text-muted-foreground">
        I’m deeply in love with creating innovative, scalable, and efficient web
        applications. With years of experience in full-stack development, I
        specialize in building reliable solutions using modern frameworks and
        technologies.
      </p>
      <div className="relative overflow-hidden mt-5">
        <Splide options={splideOptions} extensions={{ AutoScroll }}>
          {DATA.tech.map((item, i) => (
            <SplideSlide key={i}>
              <div className="max-w-none flex justify-center items-center gap-x-2 cursor-default border-2 border-dashed px-4 py-1.5 rounded-lg bg-card hover:bg-secondary transition-all">
                <Image
                  src={item.logo || "/vercel.svg"}
                  alt="logo"
                  width={20}
                  height={20}
                  className="rounded"
                />
                <p className="font-medium">{item.name}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
