

export default function Dropmenu() {
const menuItems = [
        {
            "item": "Home",
            "url": "/"
        },
        {
            "item": "Properties",
            "url": "/"
        },
        {
            "item": "Property Details",
            "url": "/"
        },
        {
            "item": "Contact Us",
            "url": "/"
        }
    ]


  return (
    <div className="px-5 font-poppins absolute z-[9999] w-full ">
     
          <div className=" max-w-[600px] h-auto mx-auto bg-white">
            {menuItems.map((items, index) => (
                <div key={index} className="text-center border-t py-3">
                    <p>{items.item}</p>
                </div>
            ))}
          </div>

        
       
      </div>
  )
}
