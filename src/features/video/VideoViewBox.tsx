import SectionDivider from "@/components/ui/SectionDivider";
import VideoPlaceholder from "./VideoPlaceHolder";

export default function VideoViewBox() {
  return (
    <div
      className="object-cover bg-center bg-no-repeat h-[550px] mx-3 flex flex-col justify-between items-center py-10 pt-12 "
      style={{ backgroundImage: "url('/images/video-bg.jpg')" }}
    >
     
       
          <div className="flex flex-col items-center gap-3 ">
            <SectionDivider name="Video view" />
            <h1 className="text-white font-bold text-4xl text-center  leading-tight">
              Get Closer View & Different Feeling
            </h1>
          </div>
          <div className="w-full lg:mt-20">
            <VideoPlaceholder />
          </div>

   
    </div>
  );
}
