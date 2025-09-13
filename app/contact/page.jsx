"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Send, CheckCircle } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedSection } from "@/components/animated-section"

export default function ContactPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const mapRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isFormInView = useInView(formRef, { once: true })
  const isMapInView = useInView(mapRef, { once: true })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formState),
});

    const result = await response.json();
    if (result.status === "success") {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to submit. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
     <div className="pt-[70px]">
      {/* Hero Section */}
      <section ref={heroRef} className="py-0 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions or ready to start your AI journey? Our team is
              here to help. Reach out to us through any of the channels below.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">+91-6369628052</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">
                   info@evaitech.com 
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 flex justify-center">
        <div className="container mx-auto px-4 max-w-lg">
          <AnimatedSection direction="left">
            <div className="bg-card rounded-lg p-8 shadow-md border">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-center space-x-3 mb-6"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <p>
                    Thank you for your message! We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                      placeholder="Tell us more about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to discuss your technology needs and discover
              how our services can help your business thrive in the digital
              age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton
                href="/consultation"
                size="xl"
                variant="default"
                className="bg-white text-primary hover:bg-white/90"
                withArrow
              >
                Get a Free Consultation
              </AnimatedButton>
              <AnimatedButton
                href="/products"
                size="xl"
                variant="outline"
                className="border-white text-primary hover:bg-white/10"
                withArrow
              >
                Explore Our Products
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
