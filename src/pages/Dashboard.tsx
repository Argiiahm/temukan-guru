import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  User,
  BookOpen,
  Clock,
  Calendar,
  MessageCircle,
  Star,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";

const upcomingSessions = [
  {
    id: 1,
    tutor: "Bu Sari Indrawati",
    subject: "Matematika",
    date: "Senin, 23 Des 2024",
    time: "14:00 - 15:00",
    type: "Online",
  },
  {
    id: 2,
    tutor: "Pak Ahmad Fauzi",
    subject: "Fisika",
    date: "Rabu, 25 Des 2024",
    time: "16:00 - 17:00",
    type: "Offline",
  },
];

const recentActivity = [
  { id: 1, action: "Sesi bimbingan dengan Bu Sari selesai", time: "2 jam lalu" },
  { id: 2, action: "Pesan baru dari Pak Ahmad", time: "5 jam lalu" },
  { id: 3, action: "Pembayaran berhasil untuk sesi Fisika", time: "1 hari lalu" },
];

const Dashboard = () => {
  return (
    <Layout showFooter={false}>
      <div className="bg-muted/30 min-h-screen py-4 sm:py-8">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Selamat datang kembali, Andi!</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                <Bell className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Notifikasi</span>
              </Button>
              <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                <Settings className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Pengaturan</span>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold">12</div>
                  <div className="text-xs sm:text-sm text-muted-foreground truncate">Total Sesi</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold">24</div>
                  <div className="text-xs sm:text-sm text-muted-foreground truncate">Jam Belajar</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold">3</div>
                  <div className="text-xs sm:text-sm text-muted-foreground truncate">Tutor Aktif</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-warning/20 flex items-center justify-center shrink-0">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-warning" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold">4.8</div>
                  <div className="text-xs sm:text-sm text-muted-foreground truncate">Rating Anda</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Upcoming Sessions */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold">Sesi Mendatang</h2>
                  <Link to="/sesi" className="text-xs sm:text-sm text-primary hover:underline flex items-center gap-1">
                    Lihat Semua <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex flex-col gap-3 p-3 sm:p-4 bg-muted rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm sm:text-base shrink-0">
                          {session.tutor.charAt(0)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-sm sm:text-base truncate">{session.tutor}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{session.subject}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-medium shrink-0 ${
                            session.type === "Online"
                              ? "bg-accent/20 text-accent"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {session.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span className="truncate">{session.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {session.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4 sm:mt-6" asChild>
                  <Link to="/cari-tutor">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Cari Tutor Baru
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Actions & Activity */}
            <div className="space-y-4 sm:space-y-6">
              {/* Quick Actions */}
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
                <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Aksi Cepat</h2>
                <div className="space-y-2 sm:space-y-3">
                  <Button variant="outline" className="w-full justify-start text-sm" asChild>
                    <Link to="/cari-tutor">
                      <User className="h-4 w-4 mr-2" />
                      Cari Tutor
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Pesan
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Jadwal Sesi
                  </Button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
                <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Aktivitas Terbaru</h2>
                <div className="space-y-3 sm:space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
