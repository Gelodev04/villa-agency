"use client";
import { useState, useEffect } from "react";

const PropertyDetails = ({ selectedType }: { selectedType: string }) => {
 
  const [counts, setCounts] = useState({
    space: 0,
    floor: 0,
    rooms: 0,
  });

  // Data based on property type
  const properties = {
    Apartment: { space: 185, floor: 26, rooms: 4 },
    "Villa House": { space: 250, floor: 2, rooms: 6 },
    Penthouse: { space: 320, floor: 30, rooms: 5 },
  };

  useEffect(() => {
    // Simple counting effect
    const duration = 1000; // 1 sec
    const intervalTime = 30; // 30ms per update
    let frame = 0;
    const totalFrames = duration / intervalTime;

    const interval = setInterval(() => {
      frame++;
      const propertyKey = selectedType as keyof typeof properties;
      setCounts({
        space: Math.round((frame / totalFrames) * properties[propertyKey].space),
        floor: Math.round((frame / totalFrames) * properties[propertyKey].floor),
        rooms: Math.round((frame / totalFrames) * properties[propertyKey].rooms),
      });

      if (frame >= totalFrames) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [selectedType]);

  return (
    <div className="w-full  mx-auto  bg-white rounded-lg  ">
    
      

 
      <div className="max-w-[700px] mx-auto w-auto py-5 shadow-[1px_0px_23px_3px_rgba(0,_0,_0,_0.1)] px-5 mt-10">
        <DetailRow  label="Total Flat Space" value={`${counts.space} m2`} />
        <DetailRow label="Floor number" value={`${counts.floor}th`} />
        <DetailRow label="Number of rooms" value={counts.rooms} />
        <DetailRow label="Parking Available" value="Yes" />
        <DetailRow label="Payment Process" value="Bank" />
      </div>
    </div>
  );
};

// Reusable Row Component
const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex justify-between border-b py-6 text-gray-700 last:border-none">
    <span>{label}</span>
    <strong className="text-myblack text-xl">{value}</strong>
  </div>
);

export default PropertyDetails;
