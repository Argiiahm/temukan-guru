import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Users, Award, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-12 md:py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-5 md:top-20 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary-light border border-primary/20">
              <Star className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary fill-primary" />
              <span className="text-xs md:text-sm font-medium text-primary">Platform Bimbel #1 di Indonesia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Temukan{" "}
              <span className="text-gradient">Guru Terbaik</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              untuk Masa Depan Cerah
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Hubungkan anak Anda dengan guru privat dan lembaga bimbingan belajar terpercaya. 
              Belajar lebih efektif, raih prestasi maksimal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/cari-tutor">
                  <Search className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Cari Guru Sekarang
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/daftar-mitra">
                  <Users className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Daftar Jadi Mitra
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-2 md:pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">5,000+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Guru Terverifikasi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">50,000+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">4.9</div>
                <div className="text-xs md:text-sm text-muted-foreground">Rating Kepuasan</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-3xl shadow-xl p-6 xl:p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl gradient-primary flex items-center justify-center">
                    <Award className="h-7 w-7 xl:h-8 xl:w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base xl:text-lg">Guru Berpengalaman</h3>
                    <p className="text-sm text-muted-foreground">Terverifikasi & Bersertifikat</p>
                  </div>
                </div>

                {/* Sample Tutor Cards */}
                <div className="space-y-3 xl:space-y-4">
                  {[
                    { name: "Bu Sari, S.Pd", subject: "Matematika", rating: 4.9 },
                    { name: "Pak Ahmad, M.Si", subject: "Fisika", rating: 4.8 },
                    { name: "Ms. Diana", subject: "Bahasa Inggris", rating: 5.0 },
                  ].map((tutor, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 xl:p-4 bg-muted rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
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
              <div className="absolute -top-3 -right-3 xl:-top-4 xl:-right-4 bg-accent text-accent-foreground px-3 xl:px-4 py-2 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-xl xl:text-2xl font-bold">98%</span>
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
