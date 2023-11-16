import { SectionHeading } from "@/components/molecules/shared/SectionHeading";
import { IFeatureCardProps } from "@/interfaces/index";
import { FeatureCard } from "@/components/molecules/features/FeatureCard";

export function Features(): JSX.Element {
  const features: IFeatureCardProps[] = [
    {
      src: "/imgs/illustration-features-tab-1.png",
      alt: "feature 1",
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your  favorite sites.",
      mt: "24",
      type: "left",
      direction: "lg:flex-row",
    },
    {
      src: "/imgs/illustration-features-tab-2.png",
      alt: "feature 2",
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no  time at all. No need to crawl through all of your bookmarks.",
      mt: "36",
      type: "right",
      direction: "lg:flex-row-reverse",
    },
    {
      src: "/imgs/illustration-features-tab-3.png",
      alt: "feature 3",
      title: "Share your bookmarks",
      description:
        " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      mt: "36",
      type: "left",
      direction: "lg:flex-row",
    },
  ];

  return (
    <section
      className="pt-20 mt-20 pb-36 bg-bookmark-white lg:mt-60"
      id="features"
    >
      <SectionHeading
        title="Features"
        description="Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      {features.map(
        (feature: IFeatureCardProps, i: number): JSX.Element => (
          <FeatureCard
            key={i}
            src={feature.src}
            alt={feature.alt}
            mt={feature.mt}
            type={feature.type}
            direction={feature.direction}
            description={feature.description}
            title={feature.title}
          />
        )
      )}
    </section>
  );
}
