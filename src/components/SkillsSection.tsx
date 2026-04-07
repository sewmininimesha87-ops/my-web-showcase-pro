const skills = [
  "Creativity",
  "Team Leadership",
  "Negotiation",
  "Clear Communication",
  "Event Planning",
  "Time Management",
  "Assertiveness",
  "Content Creating",
  "Video Editing",
  "Public Speaking",
  "Research & Analytical Writing",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-electric mx-auto mb-12 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-foreground font-medium text-sm shadow-sm hover:border-electric hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
