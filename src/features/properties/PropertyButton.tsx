const PropertyTypeSelector = ({ selectedType, setSelectedType }: { selectedType: string; setSelectedType: (type: string) => void }) => {
    const propertyTypes = ["Apartment", "Villa House", "Penthouse"];
  
    return (
      <div className="flex space-x-2 mb-4 justify-center">
        {propertyTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 lg:py-3  rounded-md text-white duration-100 ease-out lg:min-w-[150px] ${
              selectedType === type ? "bg-main" : "bg-myblack"
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    );
  };
  
  export default PropertyTypeSelector;
  