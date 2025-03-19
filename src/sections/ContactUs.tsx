import SectionDivider from "@/components/ui/SectionDivider";
import ContactCard from "@/shared/ContactCard";
import ContactForm from "@/shared/ContactForm";
import MapComponent from "@/shared/MapComponent";

export default function ContactUs() {
  return (
    <div className="mt-20">
      <div
        className="pt-20 bg-no-repeat object-cover  px-4"
        style={{ backgroundImage: "url('/images/video-bg.jpg')" }}
      >
        <div className="flex justify-center ">
          <SectionDivider name="contact us" />
        </div>
        <h1 className="text-center w-4/5  mx-auto font-bold text-4xl mt-5 text-white">
          Get In Touch With Our Agents
        </h1>

        <div className="mt-18">
          <MapComponent />
        </div>

        <div className="mt-16">
          <ContactCard />
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
