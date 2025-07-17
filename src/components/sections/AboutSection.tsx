"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, TrendingUp, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineData = [
    {
      year: "2019-2020",
      title: "Hospital Billing - KIMS Hospitals",
      description: "Where I first fell in love with data (even if it was just patient bills!)",
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      year: "2021-2023",
      title: "Accounting & HR - RK Royal Engineers",
      description: "Handled payroll for 50+ people and learned how businesses actually work",
      icon: GraduationCap,
      color: "text-purple-500",
    },
    {
      year: "2023-2024",
      title: "Data Science Training - Innomatics Research Labs",
      description: "Took the plunge and learned Python, machine learning, and AI",
      icon: Lightbulb,
      color: "text-green-500",
    },
    {
      year: "2025-Present",
      title: "Data Science Intern - Algonive",
      description: "Building real projects and growing my skills every day",
      icon: Target,
      color: "text-orange-500",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey from handling bills to building AI models
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300 h-full"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-secondary bg-clip-text text-transparent">
                My Story
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Hey there! I'm Kumar Raju, and I used to work in billing at KIMS Hospital, Then moved to accounting at RK Royal Engineers.
                Every day, I was working with numbers, invoices, and financial data. I started getting curious - what if this data could tell us more than just who owes what?
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                So I did something that felt pretty scary at the time —
                I left my comfortable accounting job and joined Innomatics Research Labs to learn data science.
                I knew I was starting from scratch, but I was determined to learn.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Now I'm working as a Data Science Intern at Algonive, and I'm loving every bit of it.
                I've built projects that can recognize faces, understand speech, and find patterns in data.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The cool thing is, my finance background actually helps a lot.
                I understand how businesses work, what problems they face, and how data can solve real issues -
                not just fancy algorithms for the sake of it. So learning and practicing.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-4 rounded-xl bg-muted backdrop-blur-md border border-border/10 text-center"
            >
              <blockquote className="text-lg italic text-primary font-medium">
                "My journey from handling bills to building AI models."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right Column - Career Grid Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-6"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
              Career Journey
            </h3>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg glass-button ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary">{item.year}</span>
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
