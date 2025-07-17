import ReviewCard from "./ReviewCard";

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

//register gsap plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761739/people-1_xvtzd7.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: "https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761741/people-2_b8wx2j.jpg",
    company: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: "https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761725/people-3_z3xaua.jpg",
    company: "CodeCraft",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    imgSrc: "https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761727/people-4_cvb66d.jpg",
    company: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: "https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761729/people-5_v6glhy.jpg",
    company: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "https://res.cloudinary.com/dcdc4hj6v/image/upload/v1752761736/people-6_hbciaj.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  useGSAP(()=>{
    gsap.to('.scrub-slide',{
        scrollTrigger : {
          trigger : ".scrub-slide",
          start : "-200% 80%",
          end : "400% 80%",
          scrub  : true

        },
        x : "-1000"
    })
  })
  return (
    
      <section id="reviews" className="container section overflow-hidden">
        <div className="">
          <h2 className="headline-2 mb-8 reveal-up">What my clients say</h2>

          <div className="flex items-stretch gap-3 w-fit scrub-slide">
            {reviews.map(({ content, name, imgSrc, company }, key) => (
              <ReviewCard
              key={key}
                content={content}
                name={name}
                imgSrc={imgSrc}
                company={company}
              />
            ))}
          </div>
        </div>
      </section>
    
  );
};

export default Review;
