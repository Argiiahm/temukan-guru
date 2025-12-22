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
    <Layout>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Selamat datang kembali, Andi!</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifikasi
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Pengaturan
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Total Sesi</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Jam Belajar</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <User className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Tutor Aktif</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating Anda</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upcoming Sessions */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Sesi Mendatang</h2>
                  <Link to="/sesi" className="text-sm text-primary hover:underline flex items-center gap-1">
                    Lihat Semua <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-muted rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                          {session.tutor.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-medium">{session.tutor}</h3>
                          <p className="text-sm text-muted-foreground">{session.subject}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {session.date}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {session.time}
                        </div>
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            session.type === "Online"
                              ? "bg-accent/20 text-accent"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {session.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link to="/cari-tutor">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Cari Tutor Baru
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Actions & Activity */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-lg font-semibold mb-4">Aksi Cepat</h2>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/cari-tutor">
                      <User className="h-4 w-4 mr-2" />
                      Cari Tutor
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Pesan
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Jadwal Sesi
                  </Button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="text-sm">{activity.action}</p>
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
