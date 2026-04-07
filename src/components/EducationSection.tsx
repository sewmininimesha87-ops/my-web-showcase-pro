import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Special Political Science Degree",
    institution: "University of Sri Jayewardenepura",
    status: "Currently pursuing",
  },
  {
    title: "Diploma in Human Administration",
    institution: "",
    status: "Completed",
  },
  {
    title: "Diploma in IT",
    institution: "NAITA",
    status: "Completed",
  },
  {
    title: "Diploma in English",
    institution: "The Beeline Campus",
    status: "Completed",
  },
  {
    title: "Diploma in IT",
    institution: "IBS Campus",
    status: "Currently pursuing",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <div className="w-16 h-1 bg-electric mx-auto mb-12 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-electric/30 ml-4 md:ml-8 space-y-10">
          {education.map((item, i) => (
            <div key={i} className="relative pl-8 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-electric border-4 border-background" />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              {item.institution && (
                <p className="text-muted-foreground text-sm">{item.institution}</p>
              )}
              <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-medium bg-electric/10 text-electric">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
