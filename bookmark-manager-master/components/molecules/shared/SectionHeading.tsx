import { ISectionHeading } from "@/interfaces/index";

export function SectionHeading({
  title,
  description,
}: ISectionHeading): JSX.Element {
  return (
    <div className="px-4 mx-auto sm:w-3/4 md:w-3/5 lg:w-5/12">
      <h2 className="text-3xl text-center text-bookmark-blue">{title}</h2>
      <p className="mt-4 text-center text-bookmark-grey">{description}</p>
    </div>
  );
}
