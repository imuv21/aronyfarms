import React, { useState } from 'react'
import faq1 from '../../assets/faq1.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";


const Faq = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqData = [
        {
            id: 0,
            question: "Why choose Arony Farm for managed farmland?",
            answer: "Arony Farm makes farmland ownership simple and stress-free. We provide plantation, irrigation, workforce and complete farm care. You own the land, Arony Farm manages the farming professionally. So you enjoy returns, peace, and nature without daily work."
        },
        {
            id: 1,
            question: "Is Arony Farm a trusted company?",
            answer: "Arony Farm has transparent documentation and land with clear titles. We offer verified agricultural land in prime farming belts. Our team is experienced in plantation & farm development. Trust, clarity, and long-term value define Arony Farm."
        },
        {
            id: 2,
            question: " What makes Arony farmland investment safe?",
            answer: "Arony Farm provides properly surveyed and legally approved farmland.You receive 100% clear title and registered ownership in your name.We maintain full transparency in plans, pricing and process. Your investment is secured with Arony Farm's managed model"
        },
        {
            id: 3,
            question: "Do I need farming experience",
            answer: "No experience is required when you invest with Arony Farm.We take care of plantation, soil care, irrigation and security.You simply visit, enjoy your farm and watch it grow. Arony Farm handles the work, you enjoy the benefits"
        },
        {
            id: 4,
            question: "Can I build a farmhouse on my plot?",
            answer: "Yes, all Arony Farm projects are farmhouse-ready.ou can design your weekend stay or vacation home easily.We guide with layout, utilities and construction support. Arony Farm makes your nature-living dream practical and simple"
        },
        {
            id: 5,
            question: "How is the plantation maintained?",
            answer: "Our expert plantation team monitors growth at every stage .Arony Farm manages watering, pruning, nutrition and protection.You receive progress updates from our farm supervision team. Your farm stays healthy and thriving under Arony Farm care."
        },
        {
            id: 6,
            question: "Will I get regular updates?",
            answer: "Yes, Arony Farm provides timely reports and plantation updates. You stay informed about crop growth, weather and maintenance. We ensure full visibility even if you live in the city. Your farm grows, and you stay connected at every step"
        },
        {
            id: 7,
            question: "Why choose Arony Farm over other farmland companies?",
            answer: "Arony Farm combines experience, transparency and real farm expertise. We do not just sell land  we manage it responsibly.Your investment grows in value and greenery together  Arony Farm focuses on long-term sustainability, not just sales."
        },
        {
            id: 8,
            question: "Is Arony Farm suitable for weekend getaways?",
            answer: "Yes, our projects are in beautiful and peaceful nature zones. You can visit your land anytime to relax and unwind. Fresh air, greenery and quiet surroundings create true calm.  Arony Farm gives you land and peace together."
        },
        {
            id: 9,
            question: "What is the long-term benefit of Arony Farm?",
            answer: "Your farmland grows in value as plantations mature. You receive yearly crop income and future harvest returns. Plus, you own a natural asset for life. Arony Farm creates peace, prosperity and a legacy for your family"
        }
    ];

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    // Split FAQs into two columns
    const leftColumnFaqs = faqData.slice(0, 5);
    const rightColumnFaqs = faqData.slice(5);

    return (
        <div className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center">

                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">FAQs</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[70px] font-medium text-gray-900 leading-tight mb-6">
                            Everything you<br />
                            need to know.
                        </h2>

                        <p className="text-[#585858] text-[16px] font-normal leading-relaxed max-w-lg">
                            Explore answers to the most common queries we receive from farmers, partners, and innovators around the world.
                        </p>
                    </div>

                    {/* Right - Professional Image */}
                    <div className="relative mx-auto w-[95%] sm:w-[90%] lg:w-[85%] rounded-md overflow-hidden shadow-2xl h-64 sm:h-[360px] lg:h-[420px]">
                        <img
                            src={faq1}
                            alt="Professional"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center space-x-3">
                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Driven</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Rooted</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Impactful</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* FAQ Grid - Two Columns */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Left Column FAQs */}
                    <div className="space-y-4">
                        {leftColumnFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`
                  ${openFaq === faq.id ? 'bg-[#035925]' : 'bg-white'}
                  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                `}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white' : 'text-gray-900'}
                    font-semibold text-[20px] font-semibold transition-colors
                  `}>
                                        {faq.question}
                                    </span>
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white rotate-45' : 'text-gray-700'}
                    text-2xl font-light transition-all duration-300 flex-shrink-0
                  `}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white text-[16px]  font-normal leading-tight">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column FAQs */}
                    <div className="space-y-4">
                        {rightColumnFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`
                  ${openFaq === faq.id ? 'bg-[#035925]' : 'bg-white'}
                  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                `}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white' : 'text-gray-900'}
                    font-semibold text-base sm:text-lg transition-colors
                  `}>
                                        {faq.question}
                                    </span>
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white rotate-45' : 'text-gray-700'}
                    text-2xl font-light transition-all duration-300 flex-shrink-0
                  `}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    )
}

export default Faq