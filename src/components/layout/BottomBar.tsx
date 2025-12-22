import { Link, useLocation } from "react-router-dom";
import { Home, Search, UserPlus, LogIn, User } from "lucide-react";

const BottomBar = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/cari-tutor", label: "Cari", icon: Search },
    { href: "/daftar-mitra", label: "Jadi Mitra", icon: UserPlus },
    { href: "/login", label: "Masuk", icon: LogIn },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomBar;
