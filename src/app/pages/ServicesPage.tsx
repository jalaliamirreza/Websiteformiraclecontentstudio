import { motion } from "motion/react";
import { AlertCircle, CheckCircle, Lightbulb, FileText, Camera, TrendingUp, Users, DollarSign } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import pic4 from "../../imports/Picture_number_4.jpeg";
import pic5 from "../../imports/Picture_number_5.jpeg";

export function ServicesPage() {
  const services = [
    {
      title: "Content Strategy & Planning Templates",
      description: "Structured frameworks to organize your content calendar and campaign planning",
      icon: FileText,
    },
    {
      title: "AI-Assisted Content Ideation",
      description: "Generate creative concepts and content ideas tailored to your business",
      icon: Lightbulb,
    },
    {
      title: "Social Media Post & Reel Creation",
      description: "Step-by-step guidance for creating engaging posts and short-form video content",
      icon: Camera,
    },
    {
      title: "Visual Storytelling Frameworks",
      description: "Proven methods for crafting compelling brand narratives through imagery",
      icon: TrendingUp,
    },
    {
      title: "Customized Content Consulting",
      description: "Personalized consulting for cafés, restaurants, and hospitality businesses",
      icon: Users,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Access Content Ideas and Templates",
      description: "Get immediate access to our library of tested templates and AI-powered ideation tools",
    },
    {
      number: "02",
      title: "Follow Simple Guidance to Create Content",
      description: "Use our structured workflows to create professional content without marketing expertise",
    },
    {
      number: "03",
      title: "Publish and Improve Performance Over Time",
      description: "Launch your content and refine your approach based on results and feedback",
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
            <h1 className="text-5xl font-bold mb-6">The Problem, Our Solution & Services</h1>
            <p className="text-xl text-gray-600">
              Addressing the content creation challenges faced by small businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={pic4}
                  alt="Content challenges"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm mb-4">
                The Challenge
              </div>

              <h2 className="text-4xl font-bold mb-6">The Problem</h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Many small businesses struggle to maintain a consistent and effective social
                  media presence.
                </p>

                <p>
                  Limited time, lack of clear content strategy, and insufficient creative
                  resources often prevent them from growing their online visibility and
                  attracting new customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm mb-4">
                Our Approach
              </div>

              <h2 className="text-4xl font-bold mb-6">Our Solution</h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We provide a simple and structured content creation system that combines
                  AI-assisted idea generation with practical, easy-to-follow workflows.
                </p>

                <p>
                  Our AI-supported system helps businesses develop content ideas, plan their
                  visuals, and improve consistency across social media platforms.
                </p>

                <p>
                  This allows businesses to create professional-quality content without requiring
                  marketing expertise, large budgets, or dedicated creative teams.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={pic5}
                  alt="Our solution"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Practical content solutions designed for small businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
              >
                <service.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-indigo-50 rounded-xl"
          >
            <p className="text-gray-700 leading-relaxed">
              We use AI as a supportive tool to enhance creativity, speed up ideation, and improve
              content planning efficiency, while maintaining a human-centered creative approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your content creation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 h-full">
                  <div className="text-6xl font-bold text-indigo-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-indigo-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
                  alt="Business planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-indigo-600 mb-4">
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold">Pricing Model</span>
              </div>

              <h2 className="text-4xl font-bold mb-6">Business Model</h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our model is based on subscription-based access to content tools, templates,
                  and structured workflows.
                </p>

                <p>
                  We also provide customized content consulting and premium creative packages for
                  businesses with specific needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
