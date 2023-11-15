import { Button } from "@/components/atoms/Button";
import { btnClasses } from "@/enums/index";

export function Cta(): JSX.Element {
  return (
    <>
      <h1 className="mb-6 text-3xl text-center text-bookmark-blue md:text-4xl lg:text-5xl lg:text-left">
        Manage your bookmark easily
      </h1>
      <p className="mb-6 text-lg text-center md:w-3/4 md:mx-auto lg:mx-0 lg:w-full text-bookmark-grey lg:text-left">
        A clean and simple interface to organize your favorite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        <Button
          type="button"
          classes={btnClasses.purple}
          text="Get it on Chrome"
        />
        <Button
          type="button"
          classes={btnClasses.white}
          text="Get it on Firefox"
        />
      </div>
    </>
  );
}
