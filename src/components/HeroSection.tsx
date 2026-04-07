import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-electric font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
          Nimesha{" "}
          <span className="text-gradient">Sewmini</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          University student passionate about research, communication &amp; social studies — turning ideas into impact.
        </p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric text-accent-foreground font-semibold hover:bg-electric-glow transition-colors animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Explore My Work <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
