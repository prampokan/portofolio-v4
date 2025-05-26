import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
      <div className="relative text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-jacquard mt-7 sm:mt-0">
          Sup, Prampokan's Here🤘
        </h1>
        <p className="text-lg mt-3 max-w-[30rem] font-[family-name:var(--font-geist-mono)] text-muted-foreground">
          A passionate{" "}
          <span className="italic text-primary">web developer</span> who
          crafting dynamic and interactive web applications
        </p>
        <div className="mt-5 sm:mt-0 sm:absolute -bottom-20 -right-32 -rotate-6 flex flex-col items-center">
          <svg
            width="30"
            height="27"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clipPath="url(#clip0_2_40)">
              {" "}
              <path
                d="M27.916 31.4568C20.0191 25.1909 13.7896 18.0721 10.031 8.49523M10.031 8.49523C12.5436 8.84916 15.2028 8.99688 17.7457 8.92371M10.031 8.49523C8.84116 12.6182 8.41809 15.8177 8.49744 20.0916"
                stroke="#0891B2"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
            <defs>
              {" "}
              <clipPath id="clip0_2_40">
                {" "}
                <rect
                  width="24"
                  height="32"
                  fill="white"
                  transform="matrix(0.428577 -0.903505 -0.903505 -0.428577 28.9122 36.3566)"
                ></rect>{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>
          <p className="text-sm text-muted-foreground mt-5">
            My name is Pramudya Diagusta btw.
          </p>
        </div>
      </div>
      {/* rounded-[60%_40%_30%_70%/60%_30%_70%_40%] */}
      <div className="w-40 h-40 overflow-hidden rounded-full bg-secondary border-2 border-muted-secondary">
        <Image
          src="/images/face2.jpg"
          alt="i"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
