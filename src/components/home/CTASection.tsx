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
    <section className="py-20">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden gradient-primary p-8 md:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Jadilah Mitra Pengajar di BimbelKu
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Bergabung dengan ribuan guru lainnya dan mulai mengajar siswa dari seluruh Indonesia. 
                Tentukan jadwal dan tarif Anda sendiri.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="white" size="xl" asChild>
                <Link to="/daftar-mitra">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Daftar Jadi Mitra Sekarang
                </Link>
              </Button>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-primary-foreground text-center">
                  <div className="text-5xl font-bold mb-2">Rp 10 Juta+</div>
                  <p className="text-lg opacity-80 mb-6">Potensi penghasilan per bulan</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold mb-1">5,000+</div>
                      <div className="opacity-70">Guru Aktif</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold mb-1">50,000+</div>
                      <div className="opacity-70">Siswa Terdaftar</div>
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
