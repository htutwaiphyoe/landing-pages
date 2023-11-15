import Image from "next/image";
import { Cta } from "@/components/molecules/hero/Cta";
import { RoundedRectangle } from "@/components/atoms/RoundedRectangle";

export function Hero(): JSX.Element {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse items-center gap-12 lg:flex-row mt-14 lg:mt-28">
        <div className="flex flex-col items-center flex-1 lg:items-start">
          <Cta />
        </div>
        <div className="z-10 flex justify-center flex-1 mb-0 md:mb-16 lg:mb-0">
          <div className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full">
            <Image
              width="580"
              height="380"
              alt="Hero"
              src="/imgs/hero-bg.png"
            />
          </div>
        </div>
      </div>
      <RoundedRectangle type="right" />
    </section>
  );
}
