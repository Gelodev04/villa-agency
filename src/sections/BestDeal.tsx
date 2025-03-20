import SectionDivider from "../components/ui/SectionDivider";
import PropertyDetails from "../features/properties/PropertyDetails";
import ScheduleButton from "../components/ui/ScheduleButton";
import PropertyTypeSelector from "@/features/properties/PropertyButton";
import { useState } from "react";

export default function BestDeal() {
  const [selectedType, setSelectedType] = useState("Apartment");

  return (
    <main id="deal" className="mt-44 px-5">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center">
        <div className="lg:flex lg:items-center lg:justify-between max-w-[75rem] w-full">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2">
            <SectionDivider name="best deal" />
            <h1 className="text-myblack text-4xl font-bold text-center lg:text-start mt-8 w-4/5 lg:text-5xl">
              Find Your Best Deal Right Now!
            </h1>
          </div>

          {/* Right Section - Property Type Selector */}
          <div className="mt-8  lg:w-1/2 flex justify-center lg:justify-end">
            <PropertyTypeSelector
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          </div>
        </div>

        {/* Property Details + Image */}
        <div className="lg:flex lg:justify-between lg:items-center max-w-[75rem] w-full mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Left - Property Details */}
          <div className="w-full lg:w-1/2">
            <PropertyDetails selectedType={selectedType} />
          </div>

          {/* Right - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[600px] rounded-lg"
              src="/images/deal-01.jpg"
              alt="deal"
              loading="lazy"
            />
          </div>
        </div>

        {/* Extra Info Section */}
        <div className="text-[#4A4A4A] max-w-[60rem] mx-auto mt-14">
          <h2 className="text-myblack font-semibold my-8">
            Extra Info About Property
          </h2>
          <div className="text-sm space-y-7">
            <p>
              Each villa in our collection is carefully selected to offer the
              perfect blend of luxury, comfort, and modern living. From stunning
              oceanfront retreats to private countryside estates, our properties
              feature high-end finishes, state-of-the-art amenities, and
              breathtaking views.
            </p>
            <p>
              Whether you're looking for a vacation home, a rental investment, or
              a permanent residence, our team is here to guide you through every
              step of the process. Contact us today to explore exclusive listings
              tailored to your lifestyle and preferences.
            </p>
          </div>
          <div className="mt-5 flex ">
            <ScheduleButton />
          </div>
        </div>
      </div>
    </main>
  );
}
