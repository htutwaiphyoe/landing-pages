import { Button } from "@/components/atoms/Button";
import { btnClasses } from "@/enums/index";

export function Contact(): JSX.Element {
  return (
    <section id="contact" className="py-20 text-white bg-bookmark-purple">
      <div className="container">
        <div className="mx-auto sm:w-3/4 lg:w-1/2">
          <p className="mb-4 font-light text-center uppercase">
            35,000+ ALREADY JOINED
          </p>
          <h3 className="text-3xl text-center ">
            Stay up-to-date with what we are doing
          </h3>
          <form className="flex flex-col gap-6 mt-8 sm:flex-row">
            <input
              type="text"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-black rounded-md focus:outline-none"
            />
            <Button text="Contact Us" classes={btnClasses.red} type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
