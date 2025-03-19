import PropertyList from "../features/properties/PropertyList";
import SectionDivider from "../components/ui/SectionDivider";

export default function Properties() {
  return (
    <div className="mt-40 px-3">
      <div className="flex justify-center">
        <SectionDivider name="properties" />
      </div>
      <h1 className="text-center text-myblack font-bold text-4xl mt-7">
        We Provide The Best Property You Like
      </h1>

      <div className="mt-22">
        <PropertyList />
      </div>
    </div>
  );
}
