"use client";


const PropertyCard = ({ property }: { property: any }) => {
  return (
    <div className="bg-white  rounded-lg overflow-hidden p-4  max-w-[400px] w-full  mx-auto">
      {/* Image */}
      <img
        src={property.image}
        alt={property.type}
        width={400}
        height={250}
        className="w-full h-52 object-cover rounded-lg"
      />

    
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="bg-[#FBD9CF] text-myblack text-sm px-3 py-1 rounded-sm">
            {property.type}
          </span>
          <h3 className="text-main font-bold text-lg mt-2">{property.price}</h3>
        </div>
        <p className="text-myblack font-bold text-lg my-4">{property.address}</p>

    
        <div className="flex justify-between text-gray-500 text-sm mt-3">
          <span>{property.bedrooms} bedrooms</span>
          <span>{property.bathrooms} bathrooms</span>
        </div>
        <div className="flex justify-between text-gray-500 text-sm mt-1">
          <span>Area: {property.area}</span>
          <span>Parking: {property.parking}</span>
        </div>

       
        <button className="mt-8 w-full bg-myblack text-white py-2 rounded-full hover:bg-main transition duration-100 ease-out cursor-pointer">
          Schedule a visit
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
