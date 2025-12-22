import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star, MapPin, Video, Filter, Search, X } from "lucide-react";

const tutorsData = [
  {
    id: 1,
    name: "Bu Sari Indrawati, S.Pd",
    subject: "Matematika",
    level: ["SD", "SMP", "SMA"],
    location: "Jakarta Selatan",
    rating: 4.9,
    reviews: 128,
    price: 75000,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    isOnline: true,
    isOffline: true,
    experience: "8 tahun",
    description: "Guru berpengalaman dengan metode pembelajaran yang menyenangkan dan efektif.",
  },
  {
    id: 2,
    name: "Pak Ahmad Fauzi, M.Si",
    subject: "Fisika",
    level: ["SMP", "SMA"],
    location: "Bandung",
    rating: 4.8,
    reviews: 95,
    price: 100000,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    isOnline: true,
    isOffline: false,
    experience: "12 tahun",
    description: "Spesialis persiapan olimpiade Fisika dengan banyak prestasi.",
  },
  {
    id: 3,
    name: "Ms. Diana Putri",
    subject: "Bahasa Inggris",
    level: ["SD", "SMP", "SMA"],
    location: "Surabaya",
    rating: 5.0,
    reviews: 156,
    price: 85000,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    isOnline: true,
    isOffline: true,
    experience: "6 tahun",
    description: "Native speaker dengan sertifikasi TESOL internasional.",
  },
  {
    id: 4,
    name: "Pak Budi Santoso, S.Pd",
    subject: "Kimia",
    level: ["SMA"],
    location: "Yogyakarta",
    rating: 4.7,
    reviews: 82,
    price: 90000,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    isOnline: false,
    isOffline: true,
    experience: "10 tahun",
    description: "Fokus pada pemahaman konsep dengan praktikum menarik.",
  },
  {
    id: 5,
    name: "Ibu Rina Marlina, S.Pd",
    subject: "Bahasa Indonesia",
    level: ["SD", "SMP"],
    location: "Jakarta Pusat",
    rating: 4.8,
    reviews: 67,
    price: 65000,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    isOnline: true,
    isOffline: true,
    experience: "5 tahun",
    description: "Spesialis dalam penulisan kreatif dan sastra Indonesia.",
  },
  {
    id: 6,
    name: "Pak Dedi Kurniawan, M.Kom",
    subject: "Pemrograman",
    level: ["SMP", "SMA"],
    location: "Depok",
    rating: 4.9,
    reviews: 43,
    price: 120000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    isOnline: true,
    isOffline: false,
    experience: "7 tahun",
    description: "Full-stack developer dengan pengalaman mengajar coding untuk pemula.",
  },
];

const subjects = [
  "Semua Mata Pelajaran",
  "Matematika",
  "Fisika",
  "Kimia",
  "Biologi",
  "Bahasa Indonesia",
  "Bahasa Inggris",
  "Pemrograman",
];

const levels = ["SD", "SMP", "SMA"];
const locations = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Depok"];

const CariTutor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("Semua Mata Pelajaran");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredTutors = tutorsData.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubject =
      selectedSubject === "Semua Mata Pelajaran" || tutor.subject === selectedSubject;

    const matchesLevel =
      selectedLevels.length === 0 || tutor.level.some((l) => selectedLevels.includes(l));

    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.some((loc) => tutor.location.toLowerCase().includes(loc.toLowerCase()));

    const matchesOnline = !onlineOnly || tutor.isOnline;

    const matchesPrice = tutor.price >= priceRange[0] && tutor.price <= priceRange[1];

    return matchesSearch && matchesSubject && matchesLevel && matchesLocation && matchesOnline && matchesPrice;
  });

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSubject("Semua Mata Pelajaran");
    setSelectedLevels([]);
    setSelectedLocations([]);
    setOnlineOnly(false);
    setPriceRange([0, 200000]);
  };

  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen">
        {/* Header */}
        <div className="gradient-hero py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Cari <span className="text-gradient">Tutor Terbaik</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Temukan guru yang sesuai dengan kebutuhan belajar Anda dari ribuan tutor terverifikasi.
            </p>

            {/* Search Bar */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Cari nama tutor atau mata pelajaran..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border"
                />
              </div>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full md:w-64 h-12 bg-card">
                  <SelectValue placeholder="Pilih Mata Pelajaran" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="h-12 md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-8">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-72 flex-shrink-0`}>
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg">Filter</h3>
                  <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                    Reset
                  </button>
                </div>

                {/* Level Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Jenjang</h4>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={selectedLevels.includes(level)}
                          onCheckedChange={() => toggleLevel(level)}
                        />
                        <span className="text-sm">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Lokasi</h4>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <label key={location} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => toggleLocation(location)}
                        />
                        <span className="text-sm">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Online Filter */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox checked={onlineOnly} onCheckedChange={(checked) => setOnlineOnly(!!checked)} />
                    <span className="text-sm font-medium">Hanya Online</span>
                  </label>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Rentang Harga (per jam)</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={200000}
                    step={10000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Rp {priceRange[0].toLocaleString()}</span>
                    <span>Rp {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Tutor Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Menampilkan <span className="font-semibold text-foreground">{filteredTutors.length}</span> tutor
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutors.map((tutor) => (
                  <Link key={tutor.id} to={`/tutor/${tutor.id}`} className="card-tutor overflow-hidden group">
                    {/* Image */}
                    <div className="relative -mx-6 -mt-6 mb-4">
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {tutor.isOnline && (
                          <span className="flex items-center gap-1 bg-accent text-accent-foreground px-2 py-1 rounded-lg text-xs font-medium">
                            <Video className="h-3 w-3" />
                            Online
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground line-clamp-1">{tutor.name}</h3>
                        <p className="text-sm text-primary font-medium">{tutor.subject}</p>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">{tutor.description}</p>

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
                          {tutor.level.join(", ")}
                        </span>
                      </div>

                      <div className="pt-3 border-t border-border">
                        <span className="text-lg font-bold text-primary">
                          Rp {tutor.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">/jam</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredTutors.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Tidak ada tutor ditemukan</h3>
                  <p className="text-muted-foreground mb-4">
                    Coba ubah filter atau kata kunci pencarian Anda.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-2" />
                    Reset Filter
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CariTutor;
