"use client";
import dynamic from "next/dynamic";

const InfiniteMovingCards = dynamic(
    () => import('@/components/ui/infinite-moving-cards').then((mod) => mod.InfiniteMovingCards),
    { ssr: false }
);

type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

interface TestimonialItem {
    quote: string;
    name: string;
    title: string;
}

interface TestimonialGroup {
    items: TestimonialItem[];
    direction: Direction;
    speed: Speed;
}

const testimonials: TestimonialGroup[] = [
    {
        items: [
            {
                quote: "The service was absolutely exceptional! I managed to launch my website in record time, and the result exceeded my expectations.",
                name: "Andrei Popescu",
                title: "Entrepreneur",
            },
            {
                quote: "I collaborated with them to create a custom platform, and I can say the team was professional and dedicated throughout the entire project.",
                name: "Elena Marinescu",
                title: "IT Manager",
            },
            {
                quote: "Highly recommend! The design is modern, and the functionality is flawless. Thank you for the support provided after the launch!",
                name: "Radu Vasile",
                title: "Financial Consultant",
            },
            {
                quote: "The team helped me transform my idea into a digital reality. Communication was excellent, and the results are visible!",
                name: "Ioana Mihalache",
                title: "Startup Founder",
            },
            {
                quote: "I’ve received positive feedback from clients thanks to the new website. Everything is intuitive and easy to use. Thank you to the team for your professionalism!",
                name: "Marius Dumitru",
                title: "Online Store Owner",
            },
        ],
        direction: "right",
        speed: "slow",
    },
    {
        items: [
            {
                quote: "I am impressed by their creativity and attention to detail. They turned a simple idea into a stunning digital experience.",
                name: "Adriana Ionescu",
                title: "Marketing Specialist",
            },
            {
                quote: "Their team provided constant updates and made sure I was happy with every step of the process. Exceptional service!",
                name: "Cristian Toma",
                title: "Software Developer",
            },
            {
                quote: "The professionalism and dedication shown by this team are unmatched. My website is now faster and more user-friendly than ever.",
                name: "Ana Drăghici",
                title: "Freelance Writer",
            },
            {
                quote: "They not only delivered the project on time but also offered valuable suggestions to enhance the functionality. Outstanding work!",
                name: "Sorin Petrescu",
                title: "Small Business Owner",
            },
            {
                quote: "From design to execution, everything was flawless. I’ve received numerous compliments on the new website, thanks to their hard work.",
                name: "Monica Radu",
                title: "Photographer",
            },
        ],
        direction: "right",
        speed: "normal",
    },
];

export default function MiddlePage() {
    return (
        <div>
            <div
                className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden"
            >
                {testimonials.map((testimonial, index) => (
                    <InfiniteMovingCards
                        key={index}
                        items={testimonial.items}
                        direction={testimonial.direction}
                        speed={testimonial.speed}
                    />
                ))}
            </div>
        </div>
    );
}
