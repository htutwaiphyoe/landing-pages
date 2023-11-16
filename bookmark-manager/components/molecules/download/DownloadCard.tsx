import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { btnClasses } from "@/enums/index";
import { IDownloadCard } from "@/interfaces/index";

export function DownloadCard({
  alt,
  src,
  title,
  subtitle,
  m,
}: IDownloadCard): JSX.Element {
  return (
    <div className={`flex flex-col rounded-md shadow-md ${m}`}>
      <div className="flex flex-col items-center gap-2 p-6">
        <Image width="100" height="100" alt={alt} src={src} />
        <h3 className="text-lg text-bookmark-blue">{title}</h3>
        <p className="text-sm font-light text-bookmark-grey">{subtitle}</p>
      </div>
      <hr className="border-b border-bookmark-white" />
      <div className="flex justify-center p-6">
        <Button
          text="Add & Install Extension"
          classes={btnClasses.purple}
          type="button"
        />
      </div>
    </div>
  );
}
