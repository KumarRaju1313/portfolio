"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Eye, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Data Science Learner", "AI Enthusiast", "Python Coder", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT: Glowing Image */}
          <motion.div
            className="md:w-2/5 flex justify-center"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse shadow-[0_0_40px_5px_rgba(99,102,241,0.3)] z-0" />
              <img
                src="/Me.jpg"
                alt="Neela Kumar Raju"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            className="md:w-3/5 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hello, I'm </span>
              <span className="gradient-primary bg-clip-text text-transparent">
                Neela Kumar Raju
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold mb-6 h-12 flex items-center justify-center md:justify-start">
              <span className="text-foreground/80">I'm a </span>
              <motion.span
                key={currentTitle}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="ml-2 gradient-secondary bg-clip-text text-transparent"
              >
                {titles[currentTitle]}
              </motion.span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0 mb-8">
              I used to work with numbers in finance, and now I'm excited about working with data to solve problems. I'm learning to build AI models that can do cool things like recognize faces and understand speech. My goal is to use data to help make better decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button
                size="lg"
                className="glass-button glow-primary group"
                onClick={() => scrollToSection("#projects")}
              >
                <Eye className="mr-2 h-5 w-5" />
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="glass-button"
                onClick={() => scrollToSection("#resume")}
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="glass-button"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🖱️ Scroll Down Mouse Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
