"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Code, Brain, Database, Smartphone, Globe, LineChart, Layers, Users } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"

// Add imports for our new animation components
import { AnimatedSection } from "@/components/animated-section"
import { Card3D } from "@/components/card-3d"

export default function ServicesPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })
  const isProcessInView = useInView(processRef, { once: true })

  const mainServices = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "IT Solutions",
      description: "Comprehensive IT solutions tailored to your business needs.",
      subServices: [
        {
          icon: <Layers className="h-6 w-6 text-primary" />,
          title: "Software Development",
          description:
            "Custom software solutions designed to address your specific business challenges and requirements.",
        },
        {
          icon: <Globe className="h-6 w-6 text-primary" />,
          title: "Web Development",
          description:
            "Responsive, user-friendly websites and web applications that deliver exceptional user experiences.",
        },
        {
          icon: <Smartphone className="h-6 w-6 text-primary" />,
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android devices.",
        },
      ],
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI & ML Solutions",
      description: "Harness the power of artificial intelligence and machine learning.",
      subServices: [
        {
          icon: <Database className="h-6 w-6 text-primary" />,
          title: "Data Analytics",
          description: "Transform your data into actionable insights with advanced analytics and visualization.",
        },
        {
          icon: <Users className="h-6 w-6 text-primary" />,
          title: "Natural Language Processing",
          description: "Implement NLP solutions for chatbots, sentiment analysis, and text classification.",
        },
        {
          icon: <LineChart className="h-6 w-6 text-primary" />,
          title: "Predictive Analytics",
          description: "Forecast trends and behaviors with machine learning models to make data-driven decisions.",
        },
      ],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business, goals, and challenges to identify the right technology solutions.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our experts develop a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We implement the solution using agile methodologies, ensuring quality, efficiency, and regular communication.",
    },
    {
      number: "04",
      title: "Support",
      description:
        "We provide ongoing support and maintenance to ensure your solution continues to deliver value over time.",
    },
  ]

  return (
     <div className="pt-70px md:pt-50px">
      {/* Hero Section */}
      <section ref={heroRef} className="py-0 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Comprehensive technology solutions designed to transform your business and drive growth in the digital
                era.
              </p>
              <p className="text-muted-foreground mb-8">
                At Evai Technologies, we offer a wide range of services across IT and AI/ML. Our expert team works
                closely with you to understand your unique challenges and deliver tailored solutions that meet your
                specific needs.
              </p>
           <Link href="/consultation" passHref>
  <Button asChild variant="gradient" size="lg">
    <span>Get a Free Consultation</span>
  </Button>
</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Services"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Comprehensive Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer a wide range of technology services to help your business innovate, grow, and stay competitive in
              today's digital landscape.
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className="space-y-8">
                <AnimatedSection direction="up" delay={index * 0.1}>
                  <Card3D className="flex flex-col md:flex-row items-center gap-6 bg-card rounded-lg p-8 shadow-sm border">
                    <div className="bg-primary/10 rounded-full p-4 shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-center md:text-left">{service.title}</h3>
                      <p className="text-muted-foreground text-center md:text-left">{service.description}</p>
                    </div>
                  </Card3D>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-0 md:pl-16">
                  {service.subServices.map((subService, subIndex) => (
                    <AnimatedSection key={subIndex} direction="up" delay={index * 0.1 + 0.3 + subIndex * 0.1}>
                      <Card3D className="bg-card rounded-lg p-6 shadow-sm border service-card">
                        <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">{subService.icon}</div>
                        <h4 className="text-xl font-semibold mb-3">{subService.title}</h4>
                        <p className="text-muted-foreground">{subService.description}</p>
                      </Card3D>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section ref={processRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              We follow a structured process to ensure successful delivery of our services and maximum value for our
              clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <div className="bg-card rounded-lg p-6 shadow-sm border relative">
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to discuss your technology needs and discover how our services can help your business
              thrive in the digital age.
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

