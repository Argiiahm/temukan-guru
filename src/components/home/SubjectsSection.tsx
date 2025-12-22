import { Link } from "react-router-dom";
import { 
  Calculator, 
  BookOpen, 
  Globe, 
  Atom, 
  FlaskConical, 
  PenTool,
  Palette,
  Code,
} from "lucide-react";

const subjects = [
  { icon: Calculator, name: "Matematika", count: 1250, color: "bg-blue-500" },
  { icon: BookOpen, name: "Bahasa Indonesia", count: 890, color: "bg-emerald-500" },
  { icon: Globe, name: "Bahasa Inggris", count: 1100, color: "bg-purple-500" },
  { icon: Atom, name: "Fisika", count: 750, color: "bg-orange-500" },
  { icon: FlaskConical, name: "Kimia", count: 620, color: "bg-pink-500" },
  { icon: PenTool, name: "Biologi", count: 580, color: "bg-green-500" },
  { icon: Palette, name: "Seni & Desain", count: 340, color: "bg-rose-500" },
  { icon: Code, name: "Pemrograman", count: 420, color: "bg-cyan-500" },
];

const SubjectsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Mata Pelajaran <span className="text-gradient">Populer</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Temukan guru untuk berbagai mata pelajaran dari SD hingga SMA.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {subjects.map((subject, index) => (
            <Link
              key={index}
              to={`/cari-tutor?subject=${subject.name.toLowerCase().replace(" ", "-")}`}
              className="card-tutor group text-center p-4 md:p-6"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${subject.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <subject.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground mb-0.5 md:mb-1 line-clamp-1">{subject.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{subject.count} Guru</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
