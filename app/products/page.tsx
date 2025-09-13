"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Server, Shield, Brain, Database, LineChart, Users } from "lucide-react"

export default function ProductsPage() {
  const heroRef = useRef(null)
  const productsRef = useRef(null)
  const featuresRef = useRef(null)
  const testimonialsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isProductsInView = useInView(productsRef, { once: true })
  const isFeaturesInView = useInView(featuresRef, { once: true })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true })

const products = [
  {
    name: "EVAI-Vision Billing System",
    description:
      "An AI-powered automated billing system that uses image processing to extract and process billing details with high accuracy. Designed for businesses to streamline invoicing, reduce manual errors, and improve efficiency.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Automated invoice data extraction",
      "High accuracy image processing",
      "Integration with existing accounting systems",
      "Real-time data validation",
      "Customizable workflow automation",
    ],
  },
  {
    name: "EVAI-VisionGuard",
    description:
      "An AI-driven behavior analysis system for theft control using advanced image processing. It detects suspicious activities in real-time, enhancing security for retail stores, warehouses, and public spaces.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Real-time suspicious activity detection",
      "Advanced behavior analysis algorithms",
      "Integration with existing security systems",
      "Customizable alert thresholds",
      "Comprehensive reporting and analytics",
    ],
  },
  {
    name: "EVAI-FabricVision",
    description:
      "AI-powered solutions for the textile industry, enhancing quality control, fabric analysis, and predictive maintenance to optimize textile production and reduce losses.",
    image: "/Gemini_Generated_Image_6l765v6l765v6l76 (1).png",
    features: [
      "Automatically identifying weaving defects, stains, holes, or misprints on fabrics.",
      "Ensuring consistent color quality in dyed fabrics using cameras and AI.",
      "AI classifies fabric types, textures, and complex patterns for automated sorting and inventory management.",
      "AI monitors machines and processes to prevent downtime and optimize textile manufacturing.",
    ],
  },
];


  const keyFeatures = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI-Powered",
      description:
        "Our products leverage advanced artificial intelligence to deliver smarter, more efficient solutions.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure by Design",
      description: "Security is built into every layer of our products, ensuring your data and systems are protected.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Scalable Architecture",
      description: "Our solutions grow with your business, scaling seamlessly to meet increasing demands.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "User-Friendly",
      description: "Intuitive interfaces and experiences designed for ease of use and quick adoption.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Integration",
      description: "Seamlessly connect with your existing data sources and systems for comprehensive insights.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description: "Powerful analytics capabilities that transform raw data into valuable business intelligence.",
    },
  ]

  const testimonials = [
    {
      quote:
        "EvaiNLP has transformed how we understand customer feedback. The sentiment analysis has helped us improve our products and increase customer satisfaction by 45%.",
      author: "David Chen",
      company: "RetailPlus Inc.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "VisionAI's object detection capabilities have revolutionized our quality control process. We've reduced defects by 60% and improved production efficiency significantly.",
      author: "Lisa Johnson",
      company: "Manufacturing Excellence",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "The MLOps Platform has streamlined our AI deployment process. What used to take weeks now happens in hours, and our models are performing better than ever.",
      author: "Robert Williams",
      company: "FinTech Solutions",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
  ]

  return (
    <div className="pt-70px md:pt-45px">
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
                Our <span className="gradient-text">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Innovative software solutions designed to transform your business operations and drive growth in the
                digital era.
              </p>
              <p className="text-muted-foreground mb-8">
                At Evai Technologies, we develop cutting-edge products that leverage AI, cloud computing, and advanced
                analytics to solve complex business challenges. Our solutions are designed to be secure, scalable, and
                user-friendly, providing immediate value and long-term benefits.
              </p>
     <Link href="/contact">
  <Button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition">
    Request a Demo
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
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Products"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Product Suite</h2>
            <p className="text-lg text-muted-foreground">
              Discover our range of innovative products designed to address specific business challenges and drive
              digital transformation.
            </p>
          </motion.div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl font-bold mb-4 gradient-text">{product.name}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
  <Button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition">
    Request a Demo
  </Button>
</Link>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>

                <div className={`relative h-[300px] md:h-[400px] w-full ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section ref={featuresRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-lg text-muted-foreground">
              All our products are built with these core principles in mind, ensuring quality, security, and
              performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border service-card"
              >
                <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Customer Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how our products have helped businesses across industries achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border testimonial-card"
              >
                <p className="text-lg text-muted-foreground mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

