"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, Calendar, CheckCircle, Clock, Users, Briefcase, MessageSquare } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function ConsultationPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const benefitsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isFormInView = useInView(formRef, { once: true })
  const isBenefitsInView = useInView(benefitsRef, { once: true })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

 const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    })

    const result = await res.json()

    if (result.success) {
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      })

      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      alert("Failed to send email. Please try again later.")
    }
  } catch (error) {
    console.error(error)
    alert("An error occurred. Please try again later.")
  } finally {
    setIsSubmitting(false)
  }
}


  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Consultation",
      description:
        "Get personalized advice from our team of AI and technology experts tailored to your business needs.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Custom Solutions",
      description: "Discover how our services can be customized to address your specific business challenges.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Response",
      description: "Receive a detailed proposal within 48 hours of your consultation request.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "No Obligation",
      description: "Our consultation is completely free with no obligation to purchase any services.",
    },
  ]

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
              Get a Free <span className="gradient-text">Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Schedule a free consultation with our experts to discuss your business needs and discover how our
              technology solutions can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Schedule a Consultation?</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <div className="bg-card rounded-lg p-6 shadow-sm border text-center h-full">
                  <div className="bg-primary/10 rounded-full p-4 inline-flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section ref={formRef} className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection direction="up">
              <div className="bg-card rounded-lg p-8 shadow-md border">
                <h2 className="text-2xl font-bold mb-6 text-center">Request Your Free Consultation</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-center space-x-3 mb-6"
                  >
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <p>Thank you for your message! We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name*
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
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address*
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        Project Type*
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      >
                        <option value="">Select a project type</option>
                        <option value="IT Solutions">IT Solutions</option>
                        <option value="AI & ML Solutions">AI & ML Solutions</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                        placeholder="Provide details to help us prepare for the consultation..."
                      />
                    </div>

                    <div className="text-sm text-muted-foreground">* Required fields</div>

                    <Button type="submit" variant="gradient" className="w-full" disabled={isSubmitting}>
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
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Calendar className="mr-2 h-5 w-5" />
                          Schedule Consultation
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Prefer to Contact Us Directly?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                You can also reach out to us through the following channels:
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg">+91-6369628052</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg">info@evaitech.com</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
