import { motion } from "motion/react";
import pic5 from "../../imports/Picture_number_5.jpeg";
import pic6 from "../../imports/Picture_number_6.jpeg";
import pic7 from "../../imports/Picture_number_7.jpeg";
import pic8 from "../../imports/Picture_number_8.jpeg";
import pic9 from "../../imports/Picture_number_9.jpeg";
import pic10 from "../../imports/Picture_number_10.jpeg";

export function CustomersPage() {
  const customerImages = [pic5, pic6, pic7, pic8, pic9, pic10];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Customers</h1>
            <p className="text-xl text-gray-600">
              Supporting cafés, restaurants, and hospitality businesses across Seoul
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Examples of our content creation work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={`Customer work ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Professional Content Creation</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our structured content system and AI-assisted workflows help businesses create
              consistent, engaging social media content that attracts both offline and online
              audiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From Instagram Stories to trend-driven Reels, we develop content that works across
              food, beauty, and lifestyle industries, helping small businesses build their digital
              presence affordably and effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start creating professional content for your business today
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
