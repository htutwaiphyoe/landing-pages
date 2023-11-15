import { IFaqAccordion } from "@/interfaces/index";

export function FaqAccordion({ summary, details }: IFaqAccordion): JSX.Element {
  return (
    <div className="my-2">
      <details className="flex justify-between p-6 rounded-md shadow-md">
        <summary className="font-bold cursor-pointer text-bookmark-blue">
          {summary}
        </summary>
        <p className="pt-2 text-bookmark-blue">{details}</p>
      </details>
    </div>
  );
}
