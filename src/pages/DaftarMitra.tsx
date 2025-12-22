import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Clock,
  Award,
  ChevronRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Users,
    title: "Akses Ribuan Siswa",
    description: "Terhubung dengan siswa dari seluruh Indonesia yang mencari tutor berkualitas.",
  },
  {
    icon: TrendingUp,
    title: "Tingkatkan Penghasilan",
    description: "Tentukan tarif Anda sendiri dan dapatkan penghasilan hingga Rp 10 juta/bulan.",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description: "Atur jadwal mengajar sesuai waktu luang Anda, online maupun offline.",
  },
  {
    icon: Award,
    title: "Bangun Reputasi",
    description: "Dapatkan ulasan positif dan tingkatkan kredibilitas sebagai pengajar profesional.",
  },
];

const subjects = [
  "Matematika",
  "Fisika",
  "Kimia",
  "Biologi",
  "Bahasa Indonesia",
  "Bahasa Inggris",
  "Ekonomi",
  "Akuntansi",
  "Pemrograman",
  "Lainnya",
];

const DaftarMitra = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    education: "",
    subject: "",
    experience: "",
    levels: [] as string[],
    teachingMode: [] as string[],
    location: "",
    about: "",
    agreeTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleLevel = (level: string) => {
    setFormData((prev) => ({
      ...prev,
      levels: prev.levels.includes(level)
        ? prev.levels.filter((l) => l !== level)
        : [...prev.levels, level],
    }));
  };

  const toggleMode = (mode: string) => {
    setFormData((prev) => ({
      ...prev,
      teachingMode: prev.teachingMode.includes(mode)
        ? prev.teachingMode.filter((m) => m !== mode)
        : [...prev.teachingMode, mode],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Tim kami akan menghubungi Anda dalam 1-2 hari kerja untuk verifikasi.",
    });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Bergabung Menjadi <span className="text-gradient">Mitra Pengajar</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jadilah bagian dari komunitas pengajar profesional di BimbelKu dan mulai menghasilkan
              sambil berbagi ilmu.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-tutor text-center">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h2 className="text-2xl font-bold mb-2 text-center">Formulir Pendaftaran</h2>
              <p className="text-muted-foreground text-center mb-8">
                Lengkapi data berikut untuk mendaftar sebagai mitra pengajar.
              </p>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        step >= s
                          ? "gradient-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step > s ? <CheckCircle className="h-4 w-4" /> : s}
                    </div>
                    {s < 3 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="nama@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Nomor WhatsApp *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="08xxxxxxxxxx"
                        required
                      />
                    </div>

                    <div>
                      <Label>Tipe Pengajar *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => handleInputChange("type", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tipe pengajar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Tutor Individu</SelectItem>
                          <SelectItem value="institution">Lembaga Bimbingan Belajar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Teaching Info */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="education">Pendidikan Terakhir *</Label>
                      <Input
                        id="education"
                        value={formData.education}
                        onChange={(e) => handleInputChange("education", e.target.value)}
                        placeholder="S1 Pendidikan Matematika - UI"
                        required
                      />
                    </div>

                    <div>
                      <Label>Mata Pelajaran Utama *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => handleInputChange("subject", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih mata pelajaran" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject.toLowerCase()}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Pengalaman Mengajar *</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleInputChange("experience", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih pengalaman" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">Kurang dari 1 tahun</SelectItem>
                          <SelectItem value="1-3">1-3 tahun</SelectItem>
                          <SelectItem value="3-5">3-5 tahun</SelectItem>
                          <SelectItem value="5+">Lebih dari 5 tahun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="mb-3 block">Jenjang yang Diajar *</Label>
                      <div className="flex flex-wrap gap-4">
                        {["SD", "SMP", "SMA"].map((level) => (
                          <label key={level} className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                              checked={formData.levels.includes(level)}
                              onCheckedChange={() => toggleLevel(level)}
                            />
                            <span>{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">Mode Mengajar *</Label>
                      <div className="flex flex-wrap gap-4">
                        {["Online", "Offline"].map((mode) => (
                          <label key={mode} className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                              checked={formData.teachingMode.includes(mode)}
                              onCheckedChange={() => toggleMode(mode)}
                            />
                            <span>{mode}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Info */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="location">Lokasi (Kota) *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Jakarta Selatan"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="about">Tentang Anda *</Label>
                      <Textarea
                        id="about"
                        value={formData.about}
                        onChange={(e) => handleInputChange("about", e.target.value)}
                        placeholder="Ceritakan tentang pengalaman mengajar, metode pengajaran, dan pencapaian Anda..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="bg-muted rounded-xl p-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <Checkbox
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", !!checked)}
                          className="mt-1"
                        />
                        <span className="text-sm text-muted-foreground">
                          Saya menyetujui{" "}
                          <Link to="/syarat-ketentuan" className="text-primary hover:underline">
                            Syarat & Ketentuan
                          </Link>{" "}
                          dan{" "}
                          <Link to="/kebijakan-privasi" className="text-primary hover:underline">
                            Kebijakan Privasi
                          </Link>{" "}
                          BimbelKu.
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Sebelumnya
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <Button type="button" variant="hero" onClick={nextStep}>
                      Lanjutkan
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="hero"
                      disabled={!formData.agreeTerms}
                    >
                      Kirim Pendaftaran
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DaftarMitra;
