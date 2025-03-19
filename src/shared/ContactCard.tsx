import { Phone, Mail } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="flex flex-col gap-7">
      {/* Phone Card */}
      <div className="flex items-center gap-5 p-4 bg-white shadow-md rounded-2xl border py-7 px-7">
        <Phone className="text-main" size={45} />
        <div>
          <p className="font-semibold text-myblack text-xl">010-020-0340</p>
          <p className="text-[#AAAAAA] text-sm">Phone Number</p>
        </div>
      </div>

      {/* Email Card */}
      <div className="flex items-center gap-5 p-4 bg-white shadow-md rounded-2xl border py-7 px-7">
        <Mail className="text-main" size={45} />
        <div>
          <p className="font-semibold text-myblack text-xl">info@villa.co</p>
          <p className="text-[#AAAAAA] text-sm">Business Email</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
