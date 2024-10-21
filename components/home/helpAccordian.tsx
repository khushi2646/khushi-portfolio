"use client";

import Image from 'next/image';
import { useState } from 'react';

const accordionData = [
  {
    title: "BRAND IDENTITY",
    content: `
      Your brand is more than just a logo—it's the essence of your business and how your audience perceives you. If you're looking to establish a strong and memorable brand identity that resonates with your target market, I can help craft a cohesive visual and narrative presence that sets you apart.`,
    points: [
      "Logo Design",
      "Visual Identity Systems",
      "Typography & Color Palette Development",
      "Brand Guidelines",
      "Brand Messaging & Tone of Voice",
      "Business Cards & Stationery Design",
      "Marketing Collaterals",
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"]
  },
  {
    title: "DIGITAL PRODUCTS",
    content: `
      In a world where digital experiences shape customer decisions, having a user-friendly product is crucial. 
      If you need to develop a digital product that not only meets user needs but also delights them, 
      I can assist in designing intuitive interfaces and engaging user experiences that turn your ideas into impactful solutions.
    `,
    points: [
      "UX Research & User Flow Design",
      "Wireframing & Prototyping",
      "UI Design for Mobile & Web Apps",
      "Interaction Design & Micro-Interactions",
      "Design Systems & Component Libraries",
      "Usability Testing & Feedback Integration",
      "Product Conceptualization & Development Support"
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"]
  },
  {
    title: "WEBSITES",
    content: `
      Your website is often the first point of contact between you and your customers—it should leave a lasting impression. 
      If you're seeking a website that is both visually appealing and highly functional, 
      I can design and develop responsive, user-friendly sites that effectively communicate your brand and drive engagement.
    `,
    points: [
      "Responsive Web Design",
      "Landing Pages",
      "E-commerce Website Design",
      "Interactive Features",
      "SEO-Optimized Design",
      "Website Maintenance & Updates",
      "Performance & Usability Optimization"
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"]
  },
  {
    title: "DESIGN STRATEGY",
    content: `
    Achieving your business goals requires a clear and effective design roadmap. 
    If you need a strategic approach to align your design efforts with your objectives, 
    I can provide comprehensive design strategies that integrate branding, 
    user experience, and market insights to ensure your projects reach their full potential.
  `,
  points: [
    "Design Audits & Consultations",
    "Brand Positioning & Strategy",
    "UX/UI Strategy & Planning",
    "Competitor & Market Analysis",
    "Roadmapping & Design Sprint Planning",
    "Cross-Platform Design Strategy",
    "Long-Term Design & Development Support"
  ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"]
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full"> {/* Ensuring full width for the accordion container */}
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-grey-200 w-full"> {/* Ensuring each accordion item takes full width */}
          {/* Accordion Header */}
          <div 
            className="flex justify-between items-center cursor-pointer py-11 w-full"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-3xl font-clashGrotesk font-semibold w-full">{item.title}</h2> {/* Full width header */}
            <div className="w-9 h-9">
              {openIndex === index ? (
                // Minus icon when open
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              ) : (
                // Plus icon when closed
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              )}
            </div>
          </div>
          
          {/* Accordion Content */}
          {openIndex === index && (
            <div className="pb-11 w-full flex justify-between h-full">
                <div className="w-2/5 flex flex-col justify-between text-left">
              <p className="text-grey-500 font-aileron font-normal text-xs">{item.content}</p>
              <div className="">
              <p className="text-grey-700 font-aileron font-normal text-xs list-disc pb-3">What I can do:</p>
              <ul className="text-grey-700 font-aileron font-normal text-xs list-disc pl-5">
                {item.points.map((point, i) => (
                  <li className='pb-1' key={i}>{point}</li>
                ))}
              </ul>
              </div>
              </div>
              <div className="w-3/5 flex justify-end space-x-2 h-full items-end object-right">
  {item.images.map((image, i) => (
    <div key={i} className="flex items-end">
      <Image
        src={image}
        alt={`Image ${i + 1}`}
        width={320}
        height={320}
        className="object-fill"
      />
    </div>
  ))}
</div>

            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
