import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">BimbelKu</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Platform terpercaya untuk menghubungkan siswa dengan guru privat dan lembaga bimbingan belajar terbaik di Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/cari-tutor" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Cari Tutor
                </Link>
              </li>
              <li>
                <Link to="/daftar-mitra" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Jadi Mitra
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Blog Edukasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Mata Pelajaran */}
          <div>
            <h4 className="font-semibold mb-4">Mata Pelajaran</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/cari-tutor?subject=matematika" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Matematika
                </Link>
              </li>
              <li>
                <Link to="/cari-tutor?subject=bahasa-inggris" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Bahasa Inggris
                </Link>
              </li>
              <li>
                <Link to="/cari-tutor?subject=fisika" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Fisika
                </Link>
              </li>
              <li>
                <Link to="/cari-tutor?subject=kimia" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Kimia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-primary-foreground/70">info@bimbelku.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-primary-foreground/70">+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-primary-foreground/70">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 BimbelKu. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <Link to="/kebijakan-privasi" className="hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/syarat-ketentuan" className="hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
