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
          Each villa in our collection is carefully selected to offer the perfect blend of luxury, comfort, and modern living. From stunning oceanfront retreats to private countryside estates, our properties feature high-end finishes, state-of-the-art amenities, and breathtaking views.
          </p>
          <p>
          Whether you're looking for a vacation home, a rental investment, or a permanent residence, our team is here to guide you through every step of the process. Contact us today to explore exclusive listings tailored to your lifestyle and preferences.
          </p>
        </div>

        <div className="mt-5">
          <ScheduleButton />
        </div>
      </div>
    </div>
  );
}
