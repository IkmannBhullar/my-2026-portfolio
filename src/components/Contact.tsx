"use client";
import React, { useState, useRef } from "react";
import { Globe } from "./ui/globe";
import { Mail, MapPin, Send, Github, Linkedin, FileText } from "lucide-react";
import emailjs from '@emailjs/browser'; // <--- Import EmailJS

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    const SERVICE_ID = 'service_w0mnds9';
    const TEMPLATE_ID = 'template_w4py1mx';
    const PUBLIC_KEY = '3E9zDwJFJMbJjgJlk';

    // Prepare template parameters
    const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("success");
          setFormState({ name: "", email: "", message: "" }); // Clear form
      }, (error) => {
          console.log(error.text);
          setStatus("error");
      })
      .finally(() => {
          setIsSubmitting(false);
          // Reset status message after 3 seconds
          setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-black text-white py-20 relative overflow-hidden flex items-center">
      
      {/* Optional: Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Let's Connect
          </h2>
          <p className="text-neutral-400 mt-4 max-w-lg mx-auto">
            I'm currently seeking Software Engineer roles for 2026. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: The Globe */}
          <div className="flex flex-col items-center justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-full" />
             <Globe className="relative z-10 opacity-90" />
             
             {/* Location Badge */}
             <div className="mt-[-50px] z-20 flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-mono text-neutral-300">Based in Seattle, WA</span>
             </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="w-full max-w-md mx-auto bg-neutral-900/50 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden">
             
             {/* Form Glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] -z-10" />

             <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-400 ml-1">Name</label>
                    <input 
                        name="user_name"
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="John Doe"
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-neutral-600"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-400 ml-1">Email</label>
                    <input 
                        name="user_email"
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="john@example.com"
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-neutral-600"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-400 ml-1">Message</label>
                    <textarea 
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Let's build something awesome..."
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-neutral-600 resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 group relative flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-neutral-200 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                    <p className="text-green-400 text-sm text-center mt-2 animate-pulse">
                        ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-400 text-sm text-center mt-2">
                        ❌ Failed to send. Please try again or email me directly.
                    </p>
                )}
             </form>

             {/* Social Links Footer */}
             <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6">
                <a href="https://github.com/IkmannBhullar" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/Ikmannbhullar" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:Ikmannb12@gmail.com" className="text-neutral-500 hover:text-red-400 transition-colors">
                    <Mail className="w-5 h-5" />
                </a>
                <a href="/resume.pdf" target="_blank" className="text-neutral-500 hover:text-green-400 transition-colors">
                    <FileText className="w-5 h-5" />
                </a>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
}