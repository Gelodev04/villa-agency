export default function FeatureCard() {
    const features = [
      {
        icon: "/images/info-icon-01.png", 
        title: "250 m2",
        description: "Total Flat Space",
      },
      {
        icon: "/images/info-icon-02.png",
        title: "Contract",
        description: "Contract Ready",
      },
      {
        icon: "/images/info-icon-03.png",
        title: "Payment",
        description: "Payment Process",
      },
      {
        icon: "/images/info-icon-04.png",
        title: "Safety",
        description: "24/7 Under Control",
      },
    ];
  
    return (
      <div className="bg-white p-6 rounded-2xl shadow-[1px_0px_23px_3px_rgba(0,_0,_0,_0.1)] ">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-5 py-8 border-b last:border-none ">
            <img src={feature.icon} alt="icon"/>
            <div>
              <h3 className="font-semibold text-2xl text-myblack">{feature.title}</h3>
              <p className="text-[#AAAAAA] text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  