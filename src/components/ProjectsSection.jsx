// src/components/ProjectsSection.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Campaña Colombia Pensiones",
    description: "Diseño publicitario y branding para temporada primavera.",
    image: "https://i.ytimg.com/vi/c-lzhHs5VB4/maxresdefault.jpg",
    url: "https://tu-enlace.com",
  },
  {
    title: "Campaña Eucalipta",
    description: "Proyecto de identidad visual para tienda de ropa local.",
    image: "https://www.eucaliptababy.com/wp-content/uploads/2024/02/cropped-para-favicon.png",
    url: "#",
  },
  {
    title: "Lana Rosa",
    description: "Diseño publicitario y branding para temporada primavera.",
    image: "https://i.ibb.co/FmR6ddw/LanaRosa.png",
    url: "https://tu-enlace.com",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full flex flex-wrap justify-center gap-6 p-8 bg-pink-50">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
