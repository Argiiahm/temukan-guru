import { Search, Shield, Clock, MessageCircle, Video, MapPin } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Pencarian Mudah",
    description: "Cari tutor berdasarkan mata pelajaran, jenjang, lokasi, dan budget dengan filter lengkap.",
  },
  {
    icon: Shield,
    title: "Guru Terverifikasi",
    description: "Semua tutor telah melewati proses verifikasi ketat untuk memastikan kualitas terbaik.",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description: "Atur jadwal belajar sesuai waktu yang nyaman bagi siswa dan guru.",
  },
  {
    icon: MessageCircle,
    title: "Konsultasi Gratis",
    description: "Hubungi tutor terlebih dahulu untuk konsultasi sebelum memulai bimbingan.",
  },
  {
    icon: Video,
    title: "Online & Offline",
    description: "Pilih mode belajar yang sesuai, baik tatap muka langsung maupun online.",
  },
  {
    icon: MapPin,
    title: "Jangkauan Luas",
    description: "Tersedia tutor dari berbagai kota di seluruh Indonesia.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Mengapa Memilih <span className="text-gradient">BimbelKu</span>?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Platform terpercaya dengan berbagai keunggulan untuk membantu proses belajar anak Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-tutor group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl gradient-primary flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
