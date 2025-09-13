"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
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

  const [submitStatus, setSubmitStatus] = useState(null)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataObj = new FormData()
    formDataObj.append("name", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("resume", formData.resume)

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        body: formDataObj,
      })

      const data = await res.json()

      if (data.status === "success") {
        setSubmitStatus("success")
        setSubmitMessage("Thank you for your message! We'll get back to you shortly.")
        setFormData({ name: "", email: "", resume: null })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setSubmitStatus("error")
      setSubmitMessage("Something went wrong. Please try again.")
    }
  }

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus(null)
        setSubmitMessage("")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

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

      {/* Mission, Vision, Values Section */}
      {/* ...keep your existing sections here... */}

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

              {/* Inline Success/Error Message */}
              {submitStatus && (
                <p
                  className={`mt-4 text-center font-medium ${
                    submitStatus === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
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

