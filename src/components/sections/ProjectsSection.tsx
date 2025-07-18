"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye, Brain, BookOpen } from "lucide-react";

export function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Face Re-identification with MobileNetV2 & VGG16",
      icon: Eye,
      description:
        "Built a system that can recognize and track people across different camera angles using deep learning.",
      problem:
        "I wanted to learn how computers can identify the same person from different photos, even when lighting changes or they're at different angles.",
      solution:
        "I trained models using MobileNetV2 and VGG16 on about 32,000 images of 7 different people. Used data augmentation like flipping and blurring to make the models more robust.",
      metrics: ["1.73s per 100 images", "7 different people", "32K+ training images"],
      technologies: ["Python", "TensorFlow", "OpenCV", "MobileNetV2", "VGG16", "NumPy"],
      challenges:
        "Getting it to work when people were partially hidden or lighting was weird. Also making it run fast enough to be actually useful.",
      learnings:
        "This project taught me tons about computer vision and transfer learning. I also learned how to convert models to ONNX format to speed things up.",
      github: "https://github.com/KumarRaju1313/Face-Recognition-CNN",
    },
    {
      title: "Speech-to-Speech LLM Bot",
      icon: Brain,
      description:
        "An AI you can actually talk to with your voice, and it talks back - like having a real conversation with a computer.",
      problem:
        "I wanted to build something where you could speak naturally to an AI and it would understand and respond back in voice, not just boring text.",
      solution:
        "Connected Whisper (for understanding speech), Llama 2 (for smart responses), and Pyttsx3 (for speaking back). Getting them to work together smoothly was the real challenge.",
      metrics: ["Under 3s response time", "Multiple input types", "Natural Conversations", "Works with mic & webcam"],
      technologies: ["Python", "Whisper", "Llama2", "Pyttsx3", "Google Colab", "Hugging Face"],
      challenges:
        "Making it respond quickly enough to feel like a real conversation. Nobody wants to wait forever for a response!",
      learnings:
        "Learned how to integrate different AI models and optimize them to work together. Also got better at managing system resources and reducing delays.",
      github: "https://github.com/KumarRaju1313/SpeechToSpeech-AI",
      demo : null,
    },
    {
      title: "Scientific Citation Classifier",
      icon: BookOpen,
      description:
        "ML tool that reads scientific papers and figures out what type of citations they're using - built for a Kaggle competition.",
      problem:
        "Researchers needed help automatically categorizing how papers cite datasets. Doing this manually takes forever and people make mistakes.",
      solution:
        "Processed 500+ scientific papers, extracted citation info using custom regex patterns, and used machine learning to classify them automatically.",
      metrics: ["500+ papers processed", "2K+ Citations", "8% accuracy improvement"],
      technologies: ["Python", "scikit-learn", "spaCy", "TF-IDF", "Logistic Regression", "PyMuPDF", "Regex"],
      challenges:
        "Scientific papers are messy! Text formatiing was all over the place, and there were way more of one type of citation than another.",
      learnings:
        "This taught me how to work with real, messy data and handle text processing. Also learned about dealing woth imbalanced datasets and improving models.",
      github: "https://github.com/neelakumarraju/citation-classifier",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI and ML projects that solve real-world problems with elegant solutions and solid performance.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${
                index === 2 ? "md:col-span-2" : ""
              } transition-all duration-300`}
            >
              <div className="glass-card p-6 rounded-xl hover:glow-primary h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg glass-button bg-primary/20">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="gradient-secondary bg-clip-text text-transparent text-lg font-semibold">
                    {project.title}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 text-sm text-foreground/80">
                  <div className="glass-card p-4 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-1">Problem</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-1">Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-400 mb-1">Challenges</h4>
                    <p>{project.challenges}</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-1">Learnings</h4>
                    <p>{project.learnings}</p>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Key Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <Badge
                          key={i}
                          className="glass-button text-xs hover:scale-105 transition-all duration-200"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          className="text-xs px-3 py-1 rounded-md bg-muted hover:bg-primary/10 shadow-sm cursor-default transition-all"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Button
                    size="sm"
                    className="glass-button glow-primary"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-button"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 rounded-2xl inline-block max-w-xl w-full hover:glow-primary"
          >
            <h3 className="text-xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
              Interested in more projects?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore my GitHub for additional AI tools, ML experiments, and contributions.
            </p>
            <Button
              size="lg"
              className="glass-button glow-primary"
              onClick={() => window.open("https://github.com/KumarRaju1313?tab=repositories", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              Visit GitHub Profile
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
