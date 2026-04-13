import { motion } from "motion/react";
import { Sparkles, User, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import pic2 from "../../imports/Picture_number_2.jpeg";
import pic3 from "../../imports/Picture_number_3.jpeg";

export function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600">
              A content-focused startup supporting all business community in Korea
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Studio */}
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
                  src={pic2}
                  alt="Team collaboration"
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
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Our Mission</span>
              </div>

              <h2 className="text-4xl font-bold mb-6">About Miracle Content Studio</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Miracle Content Studio is a content-focused startup based in Seoul, designed to
                support small businesses in improving their digital presence.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We provide a structured and AI-assisted workflow that simplifies the process of
                planning, creating, and publishing social media content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 text-indigo-600 mb-4">
                <User className="w-5 h-5" />
                <span className="font-semibold">Leadership</span>
              </div>

              <h2 className="text-4xl font-bold mb-6">Founder</h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm Fatima and I have experience creating content for food and hospitality brands in Seoul.
                  While my portfolio is primarily focused on food content, my skills in creative
                  photography, styling, and visual storytelling are highly transferable across
                  beauty and lifestyle industries.
                </p>

                <p>
                  As a content creator, I specialize in fast-paced digital production, including
                  Instagram Stories and trend-driven short-form videos such as Reels.
                </p>

                <p>
                  I focus on producing visually engaging content that combines storytelling,
                  aesthetics, and current social media trends to enhance engagement and online
                  visibility.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={pic3}
                  alt="Founder Fatima"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Human creativity enhanced by AI efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Excellence",
                description: "Professional photography, styling, and visual storytelling rooted in real-world experience",
              },
              {
                title: "AI-Enhanced",
                description: "Using AI as a supportive tool to speed up ideation and improve planning efficiency",
              },
              {
                title: "Practical Solutions",
                description: "Structured workflows and templates tested with actual businesses in Seoul",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl border-2 border-gray-100"
              >
                <Target className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
