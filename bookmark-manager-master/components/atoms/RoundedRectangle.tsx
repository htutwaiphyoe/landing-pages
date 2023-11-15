import { IRectProps } from "@/interfaces/index";

export function RoundedRectangle({ type }: IRectProps): JSX.Element {
  return type === "left" ? (
    <div className="absolute left-0 hidden w-1/2 overflow-hidden rounded-r-full top-32 md:block bg-bookmark-purple h-80 lg:-bottom-28 lg:-left-36"></div>
  ) : (
    <div className="absolute right-0 hidden w-1/2 overflow-hidden rounded-l-full top-32 md:block bg-bookmark-purple h-80 lg:-bottom-28 lg:-right-36"></div>
  );
}
