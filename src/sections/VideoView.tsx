import StatsSection from "../shared/StatBox";
import VideoViewBox from "@/features/video/VideoViewBox";

export default function VideoView() {
  return (
    <div className="mt-20">
      <VideoViewBox />
      <div className="mt-20">
        <StatsSection />
      </div>
    </div>
  );
}
