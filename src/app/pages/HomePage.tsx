import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import pic1 from "../../imports/Picture_number_1.jpeg";

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                AI-Assisted Content Creation
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Miracle Content Studio
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Most small businesses lack the budget, time, and professional expertise to create
                high-quality and effective content. As a result, they struggle to grow their online
                presence and attract new customers.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Miracle Content Studio provides an AI-assisted content system and structured templates,
                tested across cafés, restaurants, and small businesses in Seoul, to help businesses
                create consistent and engaging social media content in an affordable way.
              </p>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                We help you attract not only offline customers, but also online audiences, increasing
                visibility and turning attention into real business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={pic1}
                  alt="Content creation workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <TrendingUp className="w-8 h-8 text-green-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <Zap className="w-8 h-8 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured workflows designed specifically for Seoul's small business community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Assisted Creation",
                description: "Leverage AI tools to generate content ideas and streamline your creative process",
                icon: Sparkles,
              },
              {
                title: "Proven Templates",
                description: "Use tested frameworks from successful cafés and restaurants across Seoul",
                icon: TrendingUp,
              },
              {
                title: "Affordable & Fast",
                description: "Professional content without the high costs or time investment",
                icon: Zap,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join Seoul's small businesses creating professional content with our AI-assisted system
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
