import { Users, Mic, Film, CalendarDays } from "lucide-react";

const projects = [
  {
    icon: Users,
    title: "University Program Collaboration",
    description:
      "Collaborated with team members across multiple university programs, demonstrating leadership and teamwork skills.",
  },
  {
    icon: Mic,
    title: "Event Hosting & Ceremonies",
    description:
      "Hosted and assisted in university programs and ceremonies, honing public speaking and presentation abilities.",
  },
  {
    icon: Film,
    title: "Content Creation & Video Editing",
    description:
      "Created engaging content and edited videos for university initiatives, combining creativity with technical skills.",
  },
  {
    icon: CalendarDays,
    title: "Creative Teamwork & Planning",
    description:
      "Led creative teamwork efforts with a focus on time management and event planning for academic projects.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Experience &amp; <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-electric mx-auto mb-12 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-xl p-6 hover-lift animate-on-scroll group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mb-4 group-hover:bg-electric/20 transition-colors">
                  <Icon className="text-electric" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
