import { SectionHeading } from "@/components/molecules/shared/SectionHeading";
import { DownloadCard } from "@/components/molecules/download/DownloadCard";
import { IDownloadCard } from "@/interfaces/index";
import { downloads } from "@/data/index";

export function Download(): JSX.Element {
  return (
    <section className="py-20" id="download">
      <SectionHeading
        title="Download the extension"
        description="We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize."
      />
      <div className="container grid max-w-screen-lg grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {downloads.map(
          (download: IDownloadCard, i: number): JSX.Element => (
            <DownloadCard key={i} {...download} />
          )
        )}
      </div>
    </section>
  );
}
