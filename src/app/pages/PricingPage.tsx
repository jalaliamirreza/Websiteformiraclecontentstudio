import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { Link } from "react-router";

export function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "₩999,000",
      description: "Perfect for small businesses just starting their content journey",
      features: [
        "Access to content templates",
        "AI-assisted content ideation",
        "Basic social media planning tools",
        "Email support",
        "Monthly content calendar template",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "₩2,000,000",
      description: "For established businesses ready to scale their content",
      features: [
        "Everything in Starter",
        "Advanced AI content generation",
        "Custom template creation",
        "Priority support",
        "Quarterly strategy sessions",
        "Performance tracking tools",
      ],
      highlighted: true,
    },
    {
      name: "Custom",
      price: "Contact Us",
      description: "Tailored solutions for specific business needs",
      features: [
        "Everything in Professional",
        "Dedicated content consultant",
        "Custom workflow development",
        "On-site content creation",
        "Unlimited strategy sessions",
        "Direct support channel",
      ],
      highlighted: false,
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
            <h1 className="text-5xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-600">
              Affordable content solutions for businesses of all sizes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white border-4 border-indigo-600 shadow-xl scale-105"
                    : "bg-white border-2 border-gray-100"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-4 py-1 bg-yellow-400 text-indigo-900 rounded-full text-sm font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      Popular
                    </div>
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>

                <p
                  className={`mb-6 ${
                    plan.highlighted ? "text-indigo-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-indigo-200" : "text-green-500"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-indigo-100" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-white text-indigo-600 hover:bg-gray-100"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Subscription-Based Access
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our model is based on subscription-based access to content tools, templates, and
              structured workflows. We also provide customized content consulting and premium
              creative packages for businesses with specific needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a small café just starting out or an established restaurant looking
              to elevate your digital presence, we have a solution that fits your budget and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our FAQ page or get in touch with us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
              >
                View FAQ
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
