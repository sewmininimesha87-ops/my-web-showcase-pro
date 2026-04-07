const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-electric mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Undergraduate student at the University of Sri Jayewardenepura, Faculty of
            Humanities and Social Sciences with a strong interest in academic research,
            communication and social studies. Motivated, responsible and eager to develop
            practical skills while contributing positively to academic and professional
            environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
