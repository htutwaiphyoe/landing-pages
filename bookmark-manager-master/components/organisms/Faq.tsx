import { SectionHeading } from "@/components/molecules/shared/SectionHeading";
import { FaqAccordion } from "@/components/molecules/faq/FaqAccordion";
import { IFaqAccordion } from "@/interfaces/index";
import { Button } from "@/components/atoms/Button";
import { btnClasses } from "@/enums/index";
import { faqs } from "@/data/index";

export function Faq(): JSX.Element {
  return (
    <section className="py-20 bg-bookmark-white" id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <div className="flex flex-col px-4 mx-auto mt-6 sm:w-3/4 lg:w-5/12 lg:px-0">
        {faqs.map((faq: IFaqAccordion, i) => (
          <FaqAccordion key={i} {...faq} />
        ))}
        <div className="flex justify-center mt-4">
          <Button text="Load More" classes={btnClasses.purple} type="button" />
        </div>
      </div>
    </section>
  );
}
