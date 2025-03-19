"use client";


const PropertyCard = ({ property }: { property: any }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 border ">
      {/* Image */}
      <img
        src={property.image}
        alt={property.type}
        width={400}
        height={250}
        className="w-full h-52 object-cover rounded-lg"
      />

    
      <div className="p-4">
        <span className="bg-main text-white text-xs px-3 py-1 rounded-full">
          {property.type}
        </span>
        <h3 className="text-main font-bold text-lg mt-2">{property.price}</h3>
        <p className="text-gray-700 text-sm">{property.address}</p>

    
        <div className="flex justify-between text-gray-500 text-sm mt-3">
          <span>{property.bedrooms} bedrooms</span>
          <span>{property.bathrooms} bathrooms</span>
        </div>
        <div className="flex justify-between text-gray-500 text-sm mt-1">
          <span>Area: {property.area}</span>
          <span>Parking: {property.parking}</span>
        </div>

       
        <button className="mt-4 w-full bg-myblack text-white py-2 rounded-full hover:bg-gray-800 transition">
          Schedule a visit
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
