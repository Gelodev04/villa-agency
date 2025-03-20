import SectionDivider from "@/components/ui/SectionDivider";
import ContactCard from "@/shared/ContactCard";
import ContactForm from "@/shared/ContactForm";
import MapComponent from "@/shared/MapComponent";

export default function ContactUs() {
  return (
    <main id="contact"  className="mt-20">
      <div
        className="pt-20 bg-no-repeat object-cover  px-4 lg:px-16"
        style={{ backgroundImage: "url('/images/video-bg.jpg')" }}
      >
        <div className="flex justify-center ">
          <SectionDivider name="contact us" />
        </div>
        <h1 className="text-center w-4/5  mx-auto font-bold text-4xl mt-5 text-white lg:text-5xl lg:w-1/2">
          Get In Touch With Our Agents
        </h1>

        <div className="mt-18 lg:flex gap-5 ">
          <div className="lg:w-2/3">
            <MapComponent />
            <div className="mt-16  mx-auto lg:mx-0 w-full max-w-[620px] lg:max-w-full">
              <ContactCard />
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 max-w-[700px] mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
