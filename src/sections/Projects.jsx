import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Veseli Piksel",
    description:
      "Veseli Piksel is a web app for generating stylized AI portraits and images without writing prompts or adjusting complex settings. The user uploads an image, chooses a style, previews the direction, and generates a result with one click.",
    image: "/projects/project6.png",
    tags: ["React", "Next.js", "Typescript", "PostgreSQL", "Tailwind CSS"],
    link: "",
    github: "",
  },
  {
    title: "ePozivnice",
    description:
      "Modern digital invitation platform that simplifies the entire event organization process. The platform solves a real problem by allowing users to easily create and share personalized invitations with RSVP tracking, guest management, and integrated Google Maps navigation.",
    image: "/projects/project1.png",
    tags: ["Html", "CSS", "JavaScript"],
    link: "https://www.epozivnice.online/",
    github: "https://github.com/NikolaTomic00/pozivnice",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with authentication (login and registration), inventory management, payment processing, coupon system, “People Also Bought” recommendations, and an analytics dashboard.",
    image: "/projects/project2.png",
    tags: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Stripe",
    ],
    link: "https://mern-ecommerce-gas2.onrender.com",
    github: "https://github.com/NikolaTomic00/mern-ecommerce",
  },
  {
    title: "PawMeet",
    description:
      "PawMeet is a full-stack real-time chat application designed for dog lovers to connect, chat, and share moments with their pets. Users can create accounts, upload profile pictures, see who is online, exchange instant messages, and share images in real time.",
    image: "/projects/project3.png",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Socket.io",
      "Cloudinary",
    ],
    link: "https://pawmeet.onrender.com",
    github: "https://github.com/NikolaTomic00/PawMeet",
  },
  {
    title: "AI SaaS Landing Page",
    description:
      "A sleek, responsive design that highlights your AI SaaS product’s unique value proposition.",
    image: "/projects/project4.png",
    tags: ["React", "Typescript", "Tailwind CSS"],
    link: "https://saas-landing-page-flax.vercel.app/",
    github: "https://github.com/NikolaTomic00/saas-landing-page",
  },
  {
    title: "Thinkboard",
    description:
      "Fullstack Note Taking App Full-stack application for creating, updating, and deleting notes, built with a focus on scalability and basic backend protection using middleware such as rate limiting to prevent excessive requests and ensure API stability.",
    image: "/projects/project5.png",
    tags: ["React.js", "MongoDB", "Express.js", "Node.js"],
    link: "https://mern-thinkboard-yg2p.onrender.com",
    github: "https://github.com/NikolaTomic00/thinkboard",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 max-md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
