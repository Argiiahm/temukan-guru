import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Video, Users, ArrowRight } from "lucide-react";

const tutors = [
  {
    id: 1,
    name: "Bu Sari Indrawati, S.Pd",
    subject: "Matematika",
    level: "SD, SMP, SMA",
    location: "Jakarta Selatan",
    rating: 4.9,
    reviews: 128,
    price: 75000,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    isOnline: true,
    experience: "8 tahun",
  },
  {
    id: 2,
    name: "Pak Ahmad Fauzi, M.Si",
    subject: "Fisika",
    level: "SMP, SMA",
    location: "Bandung",
    rating: 4.8,
    reviews: 95,
    price: 100000,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    isOnline: true,
    experience: "12 tahun",
  },
  {
    id: 3,
    name: "Ms. Diana Putri",
    subject: "Bahasa Inggris",
    level: "SD, SMP, SMA",
    location: "Surabaya",
    rating: 5.0,
    reviews: 156,
    price: 85000,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    isOnline: true,
    experience: "6 tahun",
  },
  {
    id: 4,
    name: "Pak Budi Santoso, S.Pd",
    subject: "Kimia",
    level: "SMA",
    location: "Yogyakarta",
    rating: 4.7,
    reviews: 82,
    price: 90000,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    isOnline: false,
    experience: "10 tahun",
  },
];

const TutorShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Guru <span className="text-gradient">Terpopuler</span>
            </h2>
            <p className="text-muted-foreground">
              Guru dengan rating tertinggi dan ulasan terbaik dari siswa.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/cari-tutor">
              Lihat Semua
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutors.map((tutor, index) => (
            <Link
              key={tutor.id}
              to={`/tutor/${tutor.id}`}
              className="card-tutor overflow-hidden group"
            >
              {/* Image */}
              <div className="relative -mx-6 -mt-6 mb-4">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {tutor.isOnline && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-accent text-accent-foreground px-2 py-1 rounded-lg text-xs font-medium">
                    <Video className="h-3 w-3" />
                    Online
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground line-clamp-1">{tutor.name}</h3>
                  <p className="text-sm text-primary font-medium">{tutor.subject}</p>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{tutor.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-warning fill-warning" />
                    <span className="font-semibold">{tutor.rating}</span>
                    <span className="text-sm text-muted-foreground">({tutor.reviews})</span>
                  </div>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-lg">
                    {tutor.level}
                  </span>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">
                      Rp {tutor.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground">/jam</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorShowcase;
