import SectionDivider from "../components/ui/SectionDivider";
import FeatureCard from "../shared/FeaturedCard";
import InfoCard from "../shared/InfoCard";

export default function Featured() {
  return (
    <main id="featured" className="px-3 pt-20 ">
      <section className="lg:flex lg:px-10 gap-5">
        <div className="ml-[5rem]">
          <div className="relative max-w-[500px] h-auto mx-auto ">
            <img src="/images/featured.jpg" alt="featured" className="w-full " />
            <div className="bg-main size-[110px] rounded-full absolute  bottom-0 left-0 translate-x-[-50%] translate-y-[50%]  flex items-center justify-center">
              <img
                className="w-1/2 h-1/2 ml-2"
                src="/images/featured-icon.png"
                alt="icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* SECTION LABEL */}
        <div className="mt-28 px-3 max-w-[700px] mx-auto lg:mt-0 ">
          <SectionDivider name="featured" />
          <h1 className="text-myblack font-bold text-[2.6rem] w-2/3 mt-5">
            Best Appartment & Sea view
          </h1>
          <div className="mt-7">
            <InfoCard />
          </div>
        </div>
        <div className="mt-20 max-w-[700px] min-w-[270px]  mx-auto lg:mt-0">
          <FeatureCard />
        </div>
      </section>
    </main>
  );
}
