import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, CheckCircle } from "lucide-react";

const benefits = [
  "Akses ke ribuan siswa potensial",
  "Atur jadwal dan tarif sendiri",
  "Terima pembayaran dengan aman",
  "Tingkatkan reputasi dengan ulasan",
];

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden gradient-primary p-6 md:p-8 lg:p-12 xl:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-primary-foreground text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Jadilah Mitra Pengajar di BimbelKu
              </h2>
              <p className="text-base md:text-lg opacity-90 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                Bergabung dengan ribuan guru lainnya dan mulai mengajar siswa dari seluruh Indonesia. 
                Tentukan jadwal dan tarif Anda sendiri.
              </p>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-left max-w-md mx-auto lg:mx-0">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm md:text-base">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="white" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/daftar-mitra">
                  <UserPlus className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Daftar Jadi Mitra Sekarang
                </Link>
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="text-primary-foreground text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">Rp 10 Juta+</div>
                  <p className="text-base md:text-lg opacity-80 mb-6">Potensi penghasilan per bulan</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xl md:text-2xl font-bold mb-1">5,000+</div>
                      <div className="opacity-70 text-xs md:text-sm">Guru Aktif</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-xl md:text-2xl font-bold mb-1">50,000+</div>
                      <div className="opacity-70 text-xs md:text-sm">Siswa Terdaftar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
