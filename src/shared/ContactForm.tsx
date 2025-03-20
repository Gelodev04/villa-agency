const ContactForm = () => {
    return (
      <div className="w-full mx-auto bg-white py-9 px-8 shadow-md rounded-2xl border">
        <form className="space-y-8">
          {/* Full Name */}
          <div>
            <label className="block text-myblack ">Full Name</label>
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full p-3 mt-1 rounded-xl bg-gray-100 border-none outline-main text-sm"
            />
          </div>
  
          {/* Email Address */}
          <div>
            <label className="block text-myblack ">Email Address</label>
            <input
              type="email"
              placeholder="Your E-mail..."
              className="w-full p-3 mt-1 rounded-xl bg-gray-100 border-none outline-main text-sm"
            />
          </div>
  
          {/* Subject */}
          <div>
            <label className="block text-myblack ">Subject</label>
            <input
              type="text"
              placeholder="Subject..."
              className="w-full p-3 mt-1 rounded-xl bg-gray-100 border-none outline-main"
            />
          </div>
  
          {/* Message */}
          <div>
            <label className="block text-myblack ">Message</label>
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 mt-1 rounded-xl bg-gray-100 border-none outline-main text-sm resize-none"
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 bg-myblack text-white font-medium py-3 rounded-full hover:bg-main duration-100 ease-out transition mt-5 text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  