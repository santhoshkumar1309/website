"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, Code, Lightbulb, Users, Zap, ChevronRight, Brain, LineChart } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"

// Add imports for our new animation components
import { AnimatedSection } from "@/components/animated-section"
import { Card3D } from "@/components/card-3d"

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const whyUsRef = useRef(null)
  const ctaRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isServicesInView = useInView(servicesRef, { once: true })
  const isWhyUsInView = useInView(whyUsRef, { once: true })
  const isCtaInView = useInView(ctaRef, { once: true })

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const services = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "IT Solutions",
      description:
        "Custom software development, web & mobile applications, and enterprise solutions tailored to your business needs.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI & ML Solutions",
      description:
        "Leverage the power of artificial intelligence and machine learning to automate processes and gain valuable insights.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to deliver innovative solutions that drive business growth.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Our team of experienced professionals brings deep expertise across various technology domains.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Rapid Delivery",
      description: "We follow agile methodologies to ensure quick turnaround times without compromising quality.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Data-Driven Approach",
      description:
        "Our solutions are backed by data analytics to provide measurable results and continuous improvement.",
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
  <section
  ref={heroRef}
  className="pt-22 md:pt-30 min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-100px)] flex items-center"
>

        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block text-5xl md:text-6xl lg:text-7xl gradient-text mb-2 drop-shadow-sm">
                  Evai Technologies
                </span>
                Innovating the Future with Technology
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We deliver cutting-edge IT solutions, AI/ML services, and cloud computing to transform your business for
                the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
              <div className="flex gap-4">
 
<Button asChild variant="fire" size="xl">
  <Link href="/services">Get Started</Link>
</Button>

  <Button asChild variant="outline" size="xl">
  <Link href="/services">
    Learn More
  </Link>
</Button>
</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/405/181/small_2x/3d-robot-orange-character-png.png?q=80&w=2078&auto=format&fit=crop"
                    alt="Digital Transformation"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to <span className="gradient-text">Evai Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a leading technology company specializing in innovative IT solutions, artificial intelligence,
              machine learning, and cloud computing services. Our mission is to help businesses leverage cutting-edge
              technology to achieve their goals and stay ahead in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-sm border"
            >
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in providing innovative technology solutions that empower businesses to thrive
                in the digital era. We envision a world where technology enhances human potential and drives sustainable
                growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-sm border"
            >
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <p className="text-muted-foreground">
                We combine technical expertise with a deep understanding of business needs to deliver solutions that
                drive real value. Our collaborative approach ensures that we work closely with clients to understand
                their unique challenges and develop tailored solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive range of technology services designed to help your business innovate, grow, and
              stay competitive in today's digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
          <Card3D className="bg-card rounded-lg p-6 shadow-sm border service-card">
  <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">{service.icon}</div>
  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
  <p className="text-muted-foreground mb-4">{service.description}</p>
      <div className="text-center mt-12">
      <AnimatedButton
        href="/services"
        variant="glass"
        size="xl"
        className="border-black text-black dark:border-white dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
        withArrow
      >
        Learn More
      </AnimatedButton>
    </div>
</Card3D>

              </AnimatedSection>
            ))}
          </div>

        <div className="text-center mt-12">
<AnimatedButton
  href="/services"
  variant="glass"
  size="xl"
  className="border-black text-black dark:border-white dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
  withArrow
>
  Explore Our Services
</AnimatedButton>


</div>

        </div>
      </section>

   {/* Products Showcase Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Our <span className="gradient-text">Products</span>
      </h2>
      <p className="text-lg text-muted-foreground">
        Discover our innovative AI-powered solutions designed to transform your business operations and drive growth.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <AnimatedSection direction="up" delay={0.1}>
        <div className="bg-card rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tUdFs2QVS7PYZXT2pQ681w.jpeg"
              alt="EVAI-Vision Billing System"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-3 gradient-text">EVAI-Vision Billing System</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              AI-powered automated billing system with high-accuracy image processing for streamlined invoicing.
            </p>
               <div className="text-center mt-12">
      <AnimatedButton
        href="/products"
        variant="glass"
        size="xl"
        className="border-black text-black dark:border-white dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
        withArrow
      >
        Learn More
      </AnimatedButton>
    </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.2}>
        <div className="bg-card rounded-lg overflow-hidden border shadow-sm h-full flex flex-col">
          <div className="relative h-48 w-full">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              alt="EVAI-VisionGuard"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-3 gradient-text">EVAI-VisionGuard</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Real-time security monitoring with AI-driven behavior analysis for enhanced theft prevention.
            </p>
            <div className="text-center mt-12">
      <AnimatedButton
        href="/products"
        variant="glass"
        size="xl"
        className="border-black text-black dark:border-white dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
        withArrow
      >
        Learn More
      </AnimatedButton>
    </div>
          </div>
        </div>
      </AnimatedSection>
    </div>

    <div className="text-center mt-12">
      <AnimatedButton
        href="/products"
        variant="glass"
        size="xl"
        className="border-black text-black dark:border-white dark:text-white hover:bg-black/10 dark:hover:bg-white/10"
        withArrow
      >
        Explore Our Products
      </AnimatedButton>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section ref={whyUsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isWhyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">Evai Technologies</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical excellence with business acumen to deliver solutions that drive real value. Our
                team of experts is committed to your success.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.1 + 0.3} direction="left">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full p-2 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isWhyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src="https://t3.ftcdn.net/jpg/06/61/18/08/360_F_661180845_sFtlH9nkiRhr1Gfaq7hYMLVIHrxGVLjt.jpg?q=80&w=2070&auto=format&fit=crop"
                    alt="Why Choose Us"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <AnimatedSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8">
                Get in touch with our experts today for a free consultation and discover how our technology solutions
                can help your business grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton
                  href="/consultation"
                  variant="fire"
                  size="xl"
                  className="bg-white text-primary hover:bg-white/90"
                  withArrow
                >
                  Get a Free Consultation
                </AnimatedButton>
                <AnimatedButton
                  href="/services"
                  variant="glass"
                  size="xl"
                  className="border-white text-white hover:bg-white/10"
                  withArrow
                >
                  Explore Our Services
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

