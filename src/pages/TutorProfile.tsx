import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Video,
  Clock,
  GraduationCap,
  Award,
  Calendar,
  MessageCircle,
  Phone,
  ChevronLeft,
  CheckCircle,
  Users,
} from "lucide-react";

const tutorData = {
  id: 1,
  name: "Bu Sari Indrawati, S.Pd",
  subject: "Matematika",
  specialization: ["Matematika Dasar", "Aljabar", "Geometri", "Statistika"],
  level: ["SD", "SMP", "SMA"],
  location: "Jakarta Selatan",
  rating: 4.9,
  reviews: 128,
  price: 75000,
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
  isOnline: true,
  isOffline: true,
  experience: "8 tahun",
  students: 350,
  education: "S1 Pendidikan Matematika - Universitas Negeri Jakarta",
  about: `Saya adalah guru matematika berpengalaman dengan passion mengajar selama lebih dari 8 tahun. 
  Metode pengajaran saya fokus pada pemahaman konsep dasar dan aplikasi praktis dalam kehidupan sehari-hari.
  
  Saya percaya setiap siswa memiliki potensi untuk memahami matematika dengan pendekatan yang tepat. 
  Materi disampaikan dengan cara yang menyenangkan dan mudah dipahami.`,
  schedule: [
    { day: "Senin", slots: ["09:00-11:00", "14:00-16:00", "19:00-21:00"] },
    { day: "Selasa", slots: ["09:00-11:00", "14:00-16:00"] },
    { day: "Rabu", slots: ["14:00-16:00", "19:00-21:00"] },
    { day: "Kamis", slots: ["09:00-11:00", "14:00-16:00", "19:00-21:00"] },
    { day: "Jumat", slots: ["09:00-11:00"] },
    { day: "Sabtu", slots: ["09:00-11:00", "14:00-16:00"] },
  ],
  testimonials: [
    {
      id: 1,
      name: "Ibu Ratna",
      role: "Orang Tua Siswa",
      content: "Anak saya sangat senang belajar dengan Bu Sari. Nilai matematikanya naik drastis!",
      rating: 5,
    },
    {
      id: 2,
      name: "Andi",
      role: "Siswa SMA",
      content: "Penjelasannya mudah dipahami dan sabar banget kalau saya tanya berulang-ulang.",
      rating: 5,
    },
  ],
};

const TutorProfile = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container-custom">
          {/* Back Button */}
          <Link
            to="/cari-tutor"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Kembali ke Pencarian
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Card */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={tutorData.image}
                    alt={tutorData.name}
                    className="w-32 h-32 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {tutorData.isOnline && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Video className="h-3 w-3 mr-1" />
                          Online
                        </Badge>
                      )}
                      {tutorData.isOffline && (
                        <Badge variant="secondary">
                          <MapPin className="h-3 w-3 mr-1" />
                          Offline
                        </Badge>
                      )}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">{tutorData.name}</h1>
                    <p className="text-primary font-semibold text-lg mb-4">{tutorData.subject}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {tutorData.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tutorData.experience} pengalaman
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {tutorData.students}+ siswa
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 text-warning fill-warning" />
                        <span className="font-bold text-lg">{tutorData.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({tutorData.reviews} ulasan)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-semibold mb-4">Tentang Saya</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {tutorData.about}
                </p>
              </div>

              {/* Education & Specialization */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-semibold mb-4">Pendidikan & Keahlian</h2>

                <div className="flex items-start gap-3 mb-6">
                  <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Pendidikan</p>
                    <p className="text-muted-foreground">{tutorData.education}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <Award className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium mb-2">Spesialisasi</p>
                    <div className="flex flex-wrap gap-2">
                      {tutorData.specialization.map((spec, index) => (
                        <Badge key={index} variant="secondary">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium mb-2">Jenjang yang Diajar</p>
                    <div className="flex flex-wrap gap-2">
                      {tutorData.level.map((lvl, index) => (
                        <Badge key={index} variant="outline">
                          {lvl}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-semibold mb-4">Jadwal Ketersediaan</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tutorData.schedule.map((day) => (
                    <div key={day.day} className="bg-muted rounded-xl p-4">
                      <p className="font-medium mb-2">{day.day}</p>
                      <div className="space-y-1">
                        {day.slots.map((slot, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {slot}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-semibold mb-4">Ulasan Siswa</h2>
                <div className="space-y-4">
                  {tutorData.testimonials.map((review) => (
                    <div key={review.id} className="bg-muted rounded-xl p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-warning fill-warning" />
                        ))}
                      </div>
                      <p className="text-foreground mb-3">"{review.content}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">
                    Rp {tutorData.price.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground">per jam</p>
                </div>

                <div className="space-y-3 mb-6">
                  <Button variant="hero" className="w-full" size="lg">
                    <Calendar className="h-5 w-5 mr-2" />
                    Ajukan Jadwal
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Kirim Pesan
                  </Button>
                  <Button variant="ghost" className="w-full" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Hubungi
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Gratis konsultasi 15 menit pertama
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold mb-4">Informasi Cepat</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Profil terverifikasi
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Respon cepat
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Jadwal fleksibel
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Garansi kepuasan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorProfile;
