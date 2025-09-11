"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Rocket,
  Zap,
  Award,
  Brain,
  Database,
  Code,
  Microscope,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { AnimatedButton } from "@/components/animated-button"

export default function AboutPage() {
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const teamRef = useRef(null)
  const journeyRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isMissionInView = useInView(missionRef, { once: true })
  const isTeamInView = useInView(teamRef, { once: true })
  const isJourneyInView = useInView(journeyRef, { once: true })

  const teamStructure = [
    {
      name: "AI and Machine Learning Engineers",
      icon: <Brain className="h-10 w-10 text-primary" />,
      description: "Experts in developing and implementing cutting-edge AI and ML algorithms and models.",
    },
    {
      name: "Data Scientists",
      icon: <Database className="h-10 w-10 text-primary" />,
      description: "Specialists in analyzing and interpreting complex data to drive insights and decision-making.",
    },
    {
      name: "Software Engineers",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Skilled professionals building robust and scalable software solutions.",
    },
    {
      name: "Research and Development (R&D) Team",
      icon: <Microscope className="h-10 w-10 text-primary" />,
      description:
        "Innovators exploring new technologies and methodologies to keep us at the forefront of AI advancements.",
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Lead AI and Machine Learning Engineer",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      bio: "With a Ph.D. in Machine Learning, Emily leads our AI initiatives, developing cutting-edge algorithms and models for our products.",
    },
    {
      name: "David Rodriguez",
      role: "Senior Data Scientist",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      bio: "David brings over a decade of experience in data analysis and predictive modeling, driving insights from complex datasets.",
    },
    {
      name: "Sarah Kim",
      role: "Software Engineering Manager",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "Sarah oversees our software development teams, ensuring high-quality code and efficient development processes.",
    },
    {
      name: "Dr. Alex Patel",
      role: "Head of Research and Development",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "Alex leads our R&D efforts, exploring new technologies and innovations to keep EVAI at the forefront of AI advancements.",
    },
  ]

  const journeyMilestones = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Company Launch",
      description: "Evai Technologies was founded with a vision to revolutionize AI-driven solutions.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "First Major Breakthrough",
      description: "Developed our proprietary AI algorithm, setting new industry standards.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Expansion",
      description: "Grew our team of experts, bringing together diverse talents in AI, ML, and data science.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Industry Recognition",
      description: "Received multiple awards for our innovative AI solutions and contributions to the field.",
    },
  ]

  const values = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client service.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to solve complex problems.",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business practices.",
    },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", resume: null })
  }

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
                About <span className="gradient-text">Evai Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                We are a forward-thinking technology company dedicated to helping businesses harness the power of
                innovation to achieve their goals and transform their operations.
              </p>
              <p className="text-muted-foreground mb-8">
                Founded in January 2025, is an AI-driven company specializing in advanced AI solutions for automation
                and data-driven decision-making. Focused on innovation and R&D, we push AI boundaries to deliver
                cutting-edge, practical, and impactful solutions, shaping the future with intelligence and innovation.
              </p>
            <Link href="/services" passHref>
  <Button asChild variant="gradient" size="lg">
    <span>Our Services</span>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="About Evai Technologies"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section ref={missionRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground">
              We are driven by a clear purpose and a bold vision for the future of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-lg p-8 shadow-sm border"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and
                competitive advantage. We are committed to delivering excellence in every project and building long-term
                partnerships with our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-lg p-8 shadow-sm border"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-6">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in providing transformative technology solutions that shape the future of
                industries. We envision a world where technology enhances human potential and drives sustainable growth
                for businesses and communities.
              </p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border text-center"
              >
                <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">{value.icon}</div>
                <h4 className="text-xl font-medium mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section ref={teamRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team Structure</h2>
            <p className="text-lg text-muted-foreground">
              Meet the expert teams behind Evai Technologies who drive our innovation and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamStructure.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-sm border p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 rounded-full p-3 mr-4">{team.icon}</div>
                  <h3 className="text-xl font-semibold">{team.name}</h3>
                </div>
                <p className="text-muted-foreground">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section ref={journeyRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Explore the key milestones that have shaped our growth and success in the AI industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isJourneyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border text-center"
              >
                <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">{milestone.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At EVAI Technology, we are building innovative AI solutions and looking for passionate individuals to join
              us. If you are eager to grow, learn, and work on exciting projects, this is the place for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Work With Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>A dynamic and collaborative work environment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Opportunities to learn and develop new skills</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Competitive salary and benefits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Work on cutting-edge AI projects</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Interested in Joining Us?</h3>
              <p className="mb-4">Submit your details below, and we'll get in touch!</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-1">
                    Attach Resume
                  </label>
                  <Input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <Button type="submit" variant="gradient">
                  Submit
                </Button>
              </form>
            </div>
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
              We're always looking for talented individuals who are passionate about technology and innovation. Join our
              team and be part of our exciting journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton
                href="/products"
                size="xl"
                variant="default"
                className="bg-white text-primary hover:bg-white/90"
                withArrow
              >
                Explore Our Products
              </AnimatedButton>
              <AnimatedButton
                href="/about/culture"
                size="xl"
                variant="outline"
                className="border-white text-primary hover:bg-white/10"
                withArrow
              >
                Learn About Our Culture
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

