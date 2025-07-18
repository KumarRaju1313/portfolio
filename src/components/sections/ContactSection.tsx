"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_xe52xkf",          
        "template_pmr4pr9",         
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "bkl6wRBLp-rTml21F"         
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next AI project? Let’s connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="gradient-secondary bg-clip-text text-transparent">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="glass-button"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="glass-button"
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="glass-button"
                    required
                  />
                  <Button
                    type="submit"
                    className="glass-button glow-primary w-full"
                    disabled={isSending}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                  {status && (
                    <p className="text-sm text-center text-muted-foreground">{status}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-accent bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-foreground/70 mb-8">
                I'm always open to discussing new opportunities, collaborations, or just chatting about AI and data science!
              </p>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="glass-button w-full justify-start"
                  onClick={() => window.open("mailto:neelakumarraju@gmail.com", "_blank")}
                >
                  <Mail className="mr-3 h-5 w-5" />
                  neelakumarraju@gmail.com
                </Button>

                <Button
                  variant="outline"
                  className="glass-button w-full justify-start"
                  onClick={() => window.open("https://linkedin.com/in/kumar-raju-neela", "_blank")}
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn Profile
                </Button>

                <Button
                  variant="outline"
                  className="glass-button w-full justify-start"
                  onClick={() => window.open("https://github.com/KumarRaju1313", "_blank")}
                >
                  <Github className="mr-3 h-5 w-5" />
                  GitHub Profile
                </Button>

                <Button
                  variant="outline"
                  className="glass-button w-full justify-start"
                  onClick={() =>
                    window.open("https://www.instagram.com/srikumar.1998?igsh=MXUyZXUydjkyYXI0bg==", "_blank")
                  }
                >
                  <Instagram className="mr-3 h-5 w-5" />
                  Instagram
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
