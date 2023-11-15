import { RoundedRectangle } from "@/components/atoms/RoundedRectangle";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { btnClasses } from "@/enums/index";
import { IFeatureCardProps } from "@/interfaces/index";

export function FeatureCard({
  src,
  alt,
  title,
  description,
  type,
  mt,
  direction,
}: IFeatureCardProps): JSX.Element {
  return (
    <div className={`relative mt-20 lg:mt-${mt}`}>
      <div
        className={`container flex flex-col items-center justify-center ${direction} gap-x-24`}
      >
        <div className="z-10 flex justify-center flex-1 mb-10 md:mb-36 lg:mb-0">
          <div className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full">
            <Image width="480" height="380" alt={alt} src={src} />
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 lg:items-start">
          <h3 className="text-3xl text-center text-bookmark-blue lg:text-left">
            {title}
          </h3>
          <p className="my-4 text-center text-bookmark-grey lg:text-left sm:w-3/4 lg:w-full">
            {description}
          </p>
          <Button type="button" classes={btnClasses.purple} text="More Info" />
        </div>
      </div>
      <RoundedRectangle type={type} />
    </div>
  );
}
