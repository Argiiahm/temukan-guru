import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Users, Award, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">Platform Bimbel #1 di Indonesia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Temukan{" "}
              <span className="text-gradient">Guru Terbaik</span>
              <br />
              untuk Masa Depan Cerah
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Hubungkan anak Anda dengan guru privat dan lembaga bimbingan belajar terpercaya. 
              Belajar lebih efektif, raih prestasi maksimal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/cari-tutor">
                  <Search className="h-5 w-5 mr-2" />
                  Cari Guru Sekarang
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/daftar-mitra">
                  <Users className="h-5 w-5 mr-2" />
                  Daftar Jadi Mitra
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">5,000+</div>
                <div className="text-sm text-muted-foreground">Guru Terverifikasi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50,000+</div>
                <div className="text-sm text-muted-foreground">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Rating Kepuasan</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-3xl shadow-xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Guru Berpengalaman</h3>
                    <p className="text-sm text-muted-foreground">Terverifikasi & Bersertifikat</p>
                  </div>
                </div>

                {/* Sample Tutor Cards */}
                <div className="space-y-4">
                  {[
                    { name: "Bu Sari, S.Pd", subject: "Matematika", rating: 4.9 },
                    { name: "Pak Ahmad, M.Si", subject: "Fisika", rating: 4.8 },
                    { name: "Ms. Diana", subject: "Bahasa Inggris", rating: 5.0 },
                  ].map((tutor, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                          {tutor.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{tutor.name}</div>
                          <div className="text-xs text-muted-foreground">{tutor.subject}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-warning fill-warning" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">98%</span>
                  <span className="text-xs">Tingkat<br/>Kelulusan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
