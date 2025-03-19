import SectionDivider from "../components/ui/SectionDivider";
import PropertyDetails from "../features/properties/PropertyDetails";
import ScheduleButton from "../components/ui/ScheduleButton";

export default function BestDeal() {
  return (
    <div className=" mt-44 px-5">
      <div className="flex flex-col justify-center items-center">
        <SectionDivider name="best deal" />
        <h1 className="text-myblack text-4xl font-bold text-center mt-8 w-4/5">
          Find Your Best Deal Right Now!
        </h1>
        <div className="mt-15 w-full">
          <PropertyDetails />
        </div>
        <img
          className="w-full max-w-[600px]  mt-10"
          src="/images/deal-01.jpg"
          alt="deal"
        />
      </div>

      <div className=" text-[#4A4A4A] ">
        <h2 className="text-myblack font-semibold my-8">
          Extra Info About Property
        </h2>
        <div className="text-sm space-y-7 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
            tempor pack incididunt ut labore et dolore magna aliqua quised ipsum
            suspendisse.
          </p>
          <p>
            When you need free CSS templates, you can simply type TemplateMo in
            any search engine website. In addition, you can type TemplateMo
            Portfolio, TemplateMo One Page Layouts, etc.
          </p>
        </div>

        <div className="mt-5">
          <ScheduleButton />
        </div>
      </div>
    </div>
  );
}
