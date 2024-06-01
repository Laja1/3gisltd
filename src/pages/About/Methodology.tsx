import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Methodology() {
  return (
    
    <div className="w-[330px] md:w-[600px] lg:w-[1000px]"><Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="open-sans">Clarify</AccordionTrigger>
        <AccordionContent className="open-sans leading-loose">
         An essential part of the process, this is where we learn about your company, how you work, and your short and long-term goals whilst making ourselves aware of all factors that can affect your business needs. We work closely with you to agree business objectives and how these will be met. We'll also define the project scope, the budget and how the success of the project will be measured. We'll be your business consultants.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="open-sans">Specify</AccordionTrigger>
        <AccordionContent className="open-sans leading-loose">
        <p className="open-sans"> Having agreed to your business objectives, the next stage involves establishing exactly what your solution will be and we build this into a detailed specification, encompassing the target audiences, functionality, technical deliverables and creative design. We would expect to discuss and refine it until a solution is arrived at that suits your requirements.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="open-sans">Design and Build</AccordionTrigger>
        <AccordionContent className="open-sans leading-loose">
          Working from the specification, we design and build the solution, developing the brand, and functionality of your project. Quality Assurance will be evaluated on the work done, and this will allow users and client to view the progress throughout the stage of the design. When you are satisfied with the design of the basic structure we can move onto the next stage.
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-4">
        <AccordionTrigger className="open-sans">Implement</AccordionTrigger>
        <AccordionContent className="open-sans leading-loose">
          We now build the final product, marrying all the parts into one complete solution. If required, we can integrate the solution into your own in-house systems ready for the launch. The project deliverables are all thoroughly tested and quality assured again before the launch and you'll receive any training required managing and maintaining it.
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-5">
        <AccordionTrigger className="open-sans">Enhance</AccordionTrigger>
        <AccordionContent className="open-sans leading-loose">
          This stage is all about reviewing and improving the product. Following the launch we'll assess the completed project against the initial success criteria we agreed in the Clarify stage. We can help you design and implement an on-line marketing campaign, provide any additional training required and provide support when required. We'll also recommend possibilities for the next phase of the project so you can continually grow and improve this core area of your company.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}
