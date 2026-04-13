import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Miracle Content Studio?",
      answer: "Miracle Content Studio is a Seoul-based startup that provides AI-assisted content creation tools, templates, and workflows specifically designed for small businesses in the food and hospitality industry. We help cafés, restaurants, and small businesses create professional social media content affordably and efficiently.",
    },
    {
      question: "Who is this service for?",
      answer: "Our service is designed for small business owners, particularly cafés, restaurants, and hospitality businesses in Seoul who want to improve their social media presence but lack the time, budget, or expertise to create professional content consistently.",
    },
    {
      question: "Do I need marketing experience to use your service?",
      answer: "No! That's the whole point. Our structured workflows and templates are designed to be simple and easy to follow, even if you've never done content creation before. The AI-assisted tools help generate ideas, and our step-by-step guidance walks you through the creation process.",
    },
    {
      question: "What makes your approach different?",
      answer: "We combine practical, tested frameworks from real Seoul businesses with AI-assisted ideation tools. Unlike generic marketing tools, our templates and workflows are specifically designed for food and hospitality content, based on what actually works in the Seoul market.",
    },
    {
      question: "How does the AI assistance work?",
      answer: "We use AI as a supportive tool to help with content ideation, planning, and organization. It helps generate creative concepts, suggests content ideas, and streamlines the planning process. However, the creative direction and execution remain human-centered and authentic to your brand.",
    },
    {
      question: "What types of content can I create?",
      answer: "You can create various types of social media content including Instagram posts, Stories, Reels, and other short-form video content. Our frameworks cover visual storytelling, product showcases, behind-the-scenes content, and trend-driven posts.",
    },
    {
      question: "Do you provide actual content creation services?",
      answer: "We offer both tools/templates for self-service content creation and customized content consulting packages. For businesses that need hands-on support, we provide personalized consulting and premium creative services.",
    },
    {
      question: "How quickly can I get started?",
      answer: "Once you sign up, you get immediate access to our content templates, AI ideation tools, and structured workflows. You can start planning and creating content right away.",
    },
    {
      question: "What if I have specific needs for my business?",
      answer: "We offer customized content consulting and premium packages for businesses with specific requirements. Contact us to discuss your needs and we'll create a tailored solution.",
    },
    {
      question: "Can I see examples of your work?",
      answer: "Yes! Check out our Customers page to see the businesses we've worked with, including @kervankorea, @kervancafe, @alpedobalery, @saravanaabhavankorea, @chakraa_hannam, and @chakraa_busan on Instagram.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Miracle Content Studio
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full bg-white border-2 border-gray-100 rounded-xl p-6 text-left hover:border-indigo-200 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-100"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help. Get in touch and we'll answer any questions you have.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
