export default function VideoPlaceholder() {
    return (
      <div className="relative w-full max-w-[600px] mx-auto px-3">
       
        <div className="w-full h-56 rounded-lg shadow-lg flex items-center justify-center overflow-hidden bg-cover bg-center object-cover" style={{backgroundImage: "url('/images/video-frame.jpg')"}}>
        
        </div>  
  
      
        <button
         
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <span className="text-main text-2xl">▶</span>
          </div>
        </button>
      </div>
    );
  }
  