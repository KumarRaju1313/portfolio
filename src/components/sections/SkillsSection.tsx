import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Eye, Settings } from "lucide-react";

export function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      color: "text-blue-500",
      skills: [
        "Python (Pandas, NumPy)",
        "Matplotlib, Seaborn",
        "SQL",        
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "text-purple-500",
      skills: [
        "Feature Engineering",
        "Hyperparameter Tuning",
        "Model Training",
        "Scikit-learn",
      ],
    },
    {
      icon: Eye,
      title: "Deep Learning / CV",
      color: "text-rose-500",
      skills: [
        "Neural Networks (ANN, CNN)",
        "Keras, TensorFlow",
        "OpenCV",
        "Transfer Learning",
      ],
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      color: "text-green-500",
      skills: [
        "Google Workspace",
        "MS Office",
        "Power BI",
        "Tally ERP",
      ],
    },
  ];

  const specializations = [
  "Basic NLP",
  "Compliance & Reporting",
  "Computer Vision",
  "Face Recognition",
  "Feature Engineering",
  "Financial Data Analysis",
  "Model Optimization",
  "Predictive Analytics",
  "Regularization",
  "Statistical Analysis",
  "Time Series Analysis",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A snapshot of my core technical competencies and ML strengths
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="glass-card p-6 rounded-xl hover:glow-primary transition-all duration-300 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg glass-button ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <span className="gradient-secondary bg-clip-text text-transparent text-lg font-semibold">
                    {category.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.08 }}
                      className="text-sm px-4 py-2 rounded-md bg-muted hover:bg-primary/10 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-accent bg-clip-text text-transparent">
            Specializations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Badge
                  variant="secondary"
                  className="glass-button hover:glow-secondary transition-all duration-300 text-sm py-2 px-4 cursor-default"
                >
                  {spec}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
