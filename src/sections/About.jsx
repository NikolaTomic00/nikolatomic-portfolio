import { Lightbulb, MonitorSmartphone, Rocket, Search } from "lucide-react";

const highlights = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "Your website will look clean and responsive across all devices and screen sizes.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built to improve visibility and reach across search engines.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-white text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building <span className=" text-white"> modern</span> apps that
              people love
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a graduated Engineer of Electrical Engineering and Computer
                Science from the Faculty of Technical Sciences, University of
                Novi Sad.
              </p>
              <p>
                React is at the core of my development work, alongside
                full-stack engineering and modern web application architecture,
                allowing me to design and build scalable websites, web
                applications, and digital products while helping clients turn
                their ideas into modern and functional online solutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                I like building digital products that feel simple, useful, and
                actually enjoyable to use.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
