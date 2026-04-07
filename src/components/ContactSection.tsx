import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-electric mx-auto mb-12 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-left animate-on-scroll">
          {/* Email */}
          <a
            href="mailto:nimeshaseumini8@gmail.com"
            className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-electric/50 transition-colors group"
          >
            <Mail className="text-electric mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-sm text-primary-foreground/60">Email</p>
              <p className="font-medium text-primary-foreground group-hover:text-electric transition-colors">
                nimeshaseumini8@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+94702145163"
            className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-electric/50 transition-colors group"
          >
            <Phone className="text-electric mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-sm text-primary-foreground/60">Phone</p>
              <p className="font-medium text-primary-foreground group-hover:text-electric transition-colors">
                070 214 5163
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
            <MapPin className="text-electric mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-sm text-primary-foreground/60">Location</p>
              <p className="font-medium text-primary-foreground">
                Aratuwatawaththa, Boralukada, Baddegama
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nimesha-sewmini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-electric/50 transition-colors group"
          >
            <Linkedin className="text-electric mt-0.5 shrink-0" size={20} />
            <div>
              <p className="text-sm text-primary-foreground/60">LinkedIn</p>
              <p className="font-medium text-primary-foreground group-hover:text-electric transition-colors">
                Connect with me
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
