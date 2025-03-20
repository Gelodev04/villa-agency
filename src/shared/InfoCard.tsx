import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function InfoCard() {

  const info = [
    {
      title: "What services does Villa Agency offer?",
      content:
        "Villa Agency specializes in luxury real estate, offering a curated selection of high-end villas for sale and rent. We provide personalized property consultations, virtual tours, and expert guidance to help clients find their dream home. Additionally, we offer property management services for villa owners looking to maximize their investment.",
    },
    {
      title: "How can I book a property?",
      content:
        "Booking a villa with Villa Agency is simple. Browse our listings, select a property, and submit an inquiry through our website. Our team will contact you to schedule a viewing or virtual tour. Once you’ve made your decision, we assist with the paperwork, secure the deposit, and finalize the booking for a seamless experience.",
    },
    {
      title: "Why should I choose Villa Agency?",
      content:
        "With years of experience in the luxury real estate market, Villa Agency is known for its exclusive properties, personalized customer service, and deep industry expertise. We prioritize transparency, provide expert market insights, and ensure that every transaction is smooth and secure. Our team is dedicated to helping you find the perfect villa, whether for investment, vacation, or permanent residence.",
    },
  ];
  

  return (
    <Accordion type="single" collapsible className="w-full bg-gray-50 rounded-lg">
    {info.map((item, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`} className="px-3 ">
        <AccordionTrigger className="text-lg text-myblack">{item.title}</AccordionTrigger>
        {item.content && <AccordionContent className="text-myblack max-w-[600px]">{item.content}</AccordionContent>}
      </AccordionItem>
    ))}
  </Accordion>
  )
}
