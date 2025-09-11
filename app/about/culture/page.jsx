"use client"

import { useRef } from "react"
import Image from "next/image"
import { AnimatedButton } from "@/components/animated-button"
import { motion, useInView } from "framer-motion"
import { Heart, Users, Lightbulb, Award, Zap, BookOpen, Smile } from "lucide-react"

export default function CulturePage() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const environmentRef = useRef(null)
  const growthRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isValuesInView = useInView(valuesRef, { once: true })
  const isEnvironmentInView = useInView(environmentRef, { once: true })
  const isGrowthInView = useInView(growthRef, { once: true })

  const coreValues = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Passion",
      description:
        "We're passionate about AI and technology, and we bring that enthusiasm to every project we undertake.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve extraordinary results.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new ideas to stay at the forefront of AI advancements.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client interactions.",
    },
  ]

  const workEnvironment = [
    {
      title: "Flexible Work Arrangements",
      description:
        "We offer remote and hybrid work options to ensure work-life balance and accommodate different working styles.",
    },
    {
      title: "Collaborative Spaces",
      description: "Our office features open collaborative areas as well as quiet zones for focused work.",
    },
    {
      title: "Regular Team Events",
      description: "From hackathons to social gatherings, we create opportunities for team bonding and creativity.",
    },
    {
      title: "Wellness Initiatives",
      description: "We prioritize physical and mental wellbeing through various wellness programs and benefits.",
    },
  ]

  const growthOpportunities = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Continuous Learning",
      description: "Access to online courses, conferences, and workshops to keep your skills sharp and up-to-date.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Challenging Projects",
      description:
        "Work on complex, cutting-edge projects that push your technical abilities and problem-solving skills.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Mentorship",
      description: "Learn from experienced team members through our structured mentorship program.",
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Career Advancement",
      description: "Clear paths for growth and advancement within the company based on your interests and strengths.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Culture</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                At Evai Technologies, our culture is the foundation of our success. We've built an environment that
                fosters innovation, collaboration, and continuous growth.
              </p>
              <p className="text-muted-foreground mb-8">
                We believe that great technology comes from great people working together in an environment where they
                can thrive. Our culture reflects our commitment to excellence, innovation, and the well-being of our
                team members.
              </p>
              <AnimatedButton href="/careers" variant="fire" size="lg" withArrow>
                Join Our Team
              </AnimatedButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Culture"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These values guide everything we do, from how we develop our products to how we interact with our clients
              and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-card rounded-lg p-6 shadow-sm border text-center"
              >
                <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Environment Section */}
      <section ref={environmentRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isEnvironmentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Work <span className="gradient-text">Environment</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We've created a workspace that inspires creativity, fosters collaboration, and supports well-being.
              </p>

              <div className="space-y-6">
                {workEnvironment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isEnvironmentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="bg-card rounded-lg p-4 shadow-sm border"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isEnvironmentInView ? { opacity: 1, x: 0 } : {}}
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
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Work Environment"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Opportunities Section */}
      <section ref={growthRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isGrowthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Growth Opportunities</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to helping our team members grow professionally and personally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isGrowthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">{opportunity.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                    <p className="text-muted-foreground">{opportunity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl opacity-90 mb-8">
              If our culture resonates with you, we'd love to have you join our team of passionate innovators.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton
                href="/careers"
                size="xl"
                variant="default"
                className="bg-white text-primary hover:bg-white/90"
                withArrow
              >
                View Open Positions
              </AnimatedButton>
              <AnimatedButton
                href="/contact"
                size="xl"
                variant="outline"
                className="border-white text-primary hover:bg-white/10"
                withArrow
              >
                Contact Us
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

