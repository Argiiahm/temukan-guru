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
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mengapa Memilih <span className="text-gradient">BimbelKu</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Platform terpercaya dengan berbagai keunggulan untuk membantu proses belajar anak Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-tutor group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
