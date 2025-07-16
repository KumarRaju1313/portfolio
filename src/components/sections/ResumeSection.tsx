"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Award, GraduationCap, Briefcase } from "lucide-react";

export function ResumeSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experience = [
    {
      role: "Data Science Intern",
      company: "Algonive",
      period: "Jul 2025 - Present",
      achievements: [
        "Working on real-world data science projects and learning from industry professionals",
        "Building machine learning models and data analysis solutions",
        "Collaborating with teams to deliver data-driven insights",
      ],
    },
    {
      role: "Data Science Intern",
      company: "Innomatics Research Labs",
      period: "Sep 2024 - Dec 2024",
      achievements: [
        "Conducted EDA and statistical modeling, improving process efficiency by 25%",
        "Forecasting ML models deployed — reduced turnaround by 15%",
        "Automated data preprocessing pipelines in Python, cutting manual work by 30%",
      ],
    },
    {
      role: "HR cum Accountant",
      company: "RK Royal Engineers Pvt Ltd",
      period: "Sep 2021 - Aug 2023",
      achievements: [
        "Managed payroll processing for 50+ employees with 100% compliance",
        "Streamlined financial record-keeping using Tally ERP, reducing errors by 30%",
        "Automated GST, TDS, and tax return filings",
      ],
    },
    {
      role: "Billing Executive",
      company: "KIMS Hospitals",
      period: "Aug 2019 - Jun 2020",
      achievements: [
        "Managed billing for inpatient and outpatient services",
        "Handled insurance claims and coordinated with medical teams",
        "Helped patients with billing queries and system processes",
      ],
    },
  ];

  const education = [
    {
      title: "Data Science Diploma",
      institute: "Innomatics Research Labs",
      period: "Oct 2023 - Aug 2024",
    },
    {
      title: "Bachelor of Commerce",
      institute: "Anish College of Commerce",
      period: "Apr 2016 - Jun 2019",
    },
  ];

  const certifications = [
    {
      name: "Advanced Data Analysis - Innomatics Research Labs",
      link: "https://drive.google.com/file/d/1thT3Ls8y9dV3sBloqSoPHn9YttyaRXSu/view?usp=sharing",
    },
    {
      name: "Machine Learning Certification - Innomatics Research Labs",
      link: "https://drive.google.com/file/d/1rBkad6X9K7eiKiWFM-BN--f2sRmdwPHe/view",
    },
    {
      name: "Advanced Data Science with Python - NASSCOM",
      link: "https://drive.google.com/file/d/1R-cJZz9aXJwZPQn9tKRBQA3uFs3wFWeZ/view?usp=sharing",
    },
    {
      name: "Exploratory Data Analysis - Innomatics Research Labs",
      link: "https://drive.google.com/file/d/1AI3uRgdzzG-ZigeFZ1sVEC2UHVR6horQ/view",
    },
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Download my complete resume or explore my professional background
          </p>
          <Button
            size="lg"
            className="glass-button glow-primary"
            onClick={() => window.open("/Neela_Kumar_Raju_Resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                  <span className="gradient-secondary bg-clip-text text-transparent">Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="glass-card p-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
                    >
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <ul className="text-sm space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <GraduationCap className="h-6 w-6 text-green-500" />
                  <span className="gradient-secondary bg-clip-text text-transparent">Education & Training</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
                  >
                    <h4 className="font-semibold text-md">{edu.title}</h4>
                    <p className="text-sm text-primary">{edu.institute}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-purple-500" />
                  <span className="gradient-secondary bg-clip-text text-transparent">Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-5 w-5 text-green-500" />
                      <span className="font-medium">{cert.name}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
