// c:/Users/pinch/Music/cashme_tanzania/components/FAQ.tsx
"use client"

import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for production.",
  },
  {
    question: "How do I create a new page?",
    answer: "Create a new file in the `pages` directory.",
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 wow animate__fadeInDown">Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-8 wow animate__fadeInUp"
            data-wow-delay={`${index * 0.2}s`}
          >
            <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
