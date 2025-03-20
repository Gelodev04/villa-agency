import PropertyList from "../features/properties/PropertyList";
import SectionDivider from "../components/ui/SectionDivider";

export default function Properties() {
  return (
    <main id="property" className="mt-40 px-3">
      <div className="flex justify-center">
        <SectionDivider name="properties" />
      </div>
      <h1 className="text-center md:w-1/2 mx-auto text-myblack font-bold text-4xl mt-7 lg:text-5xl">
        We Provide The Best Property You Like
      </h1>

      <div className="mt-22">
        <PropertyList />
      </div>
    </main>
  );
}
