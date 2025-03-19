import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      type: "Luxury Villa",
      price: "$2,264,000",
      address: "18 Now Street Miami, OR 97219",
      bedrooms: 4,
      bathrooms: 3,
      area: "185m²",
      parking: "6 spots",
      image: "/images/property-01.jpg", 
    },
    {
      id: 2,
      type: "Luxury Villa",
      price: "$1,180,000",
      address: "54 Mid Street Florida, OR 27001",
      bedrooms: 3,
      bathrooms: 2,
      area: "185m²",
      parking: "8 spots",
      image: "/images/property-02.jpg",
    },
    {
      id: 3,
      type: "Luxury Villa",
      price: "$1,460,000",
      address: "26 Old Street Miami, OR 38540",
      bedrooms: 4,
      bathrooms: 3,
      area: "285m²",
      parking: "10 spots",
      image: "/images/property-03.jpg",
    },
    {
      id: 4,
      type: "Apartment",
      price: "$554,500",
      address: "12 New Street Miami, OR 16540",
      bedrooms: 2,
      bathrooms: 1,
      area: "250m²",
      parking: "2 spots",
      image: "/images/property-04.jpg",
    },
    {
      id: 5,
      type: "Penthouse",
      price: "$925,600",
      address: "34 Beach Street Miami, OR 42880",
      bedrooms: 3,
      bathrooms: 2,
      area: "250m²",
      parking: "2 spots",
      image: "/images/property-05.jpg",
    },
    {
      id: 6,
      type: "Apartment",
      price: "$450,000",
      address: "22 New Street Portland, OR 16540",
      bedrooms: 2,
      bathrooms: 1,
      area: "250m²",
      parking: "2 spots",
      image: "/images/property-06.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {properties.map((property: any) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
