import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function InfoCard() {

  const info = [
    {
      title: "Best useful links ?",
      content: "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
    },
    {
      title: "How does this work ?",
      content: "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
    },
    {
      title: "Why is Villa Agency the best ?",
      content: "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full bg-gray-50 rounded-lg">
    {info.map((item, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`} className="px-3 ">
        <AccordionTrigger className="text-lg text-myblack">{item.title}</AccordionTrigger>
        {item.content && <AccordionContent className="text-myblack">{item.content}</AccordionContent>}
      </AccordionItem>
    ))}
  </Accordion>
  )
}
