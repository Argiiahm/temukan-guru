import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  User,
  BookOpen,
  Clock,
  Calendar,
  MessageCircle,
  Star,
  Settings,
  Bell,
  DollarSign,
  Users,
  CheckCircle,
  XCircle,
  Edit,
  Plus,
} from "lucide-react";

const pendingRequests = [
  {
    id: 1,
    student: "Andi Pratama",
    subject: "Matematika",
    level: "SMA",
    date: "Senin, 23 Des 2024",
    time: "14:00 - 15:00",
    type: "Online",
  },
  {
    id: 2,
    student: "Rina Putri",
    subject: "Matematika",
    level: "SMP",
    date: "Selasa, 24 Des 2024",
    time: "10:00 - 11:00",
    type: "Offline",
  },
];

const upcomingSessions = [
  {
    id: 1,
    student: "Budi Santoso",
    subject: "Matematika",
    date: "Rabu, 25 Des 2024",
    time: "16:00 - 17:00",
    type: "Online",
  },
];

const schedule = [
  { day: "Senin", active: true, slots: ["09:00-11:00", "14:00-16:00", "19:00-21:00"] },
  { day: "Selasa", active: true, slots: ["09:00-11:00", "14:00-16:00"] },
  { day: "Rabu", active: true, slots: ["14:00-16:00", "19:00-21:00"] },
  { day: "Kamis", active: true, slots: ["09:00-11:00", "14:00-16:00", "19:00-21:00"] },
  { day: "Jumat", active: false, slots: [] },
  { day: "Sabtu", active: true, slots: ["09:00-11:00", "14:00-16:00"] },
  { day: "Minggu", active: false, slots: [] },
];

const DashboardGuru = () => {
  return (
    <Layout>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Dashboard Guru</h1>
              <p className="text-muted-foreground">Selamat datang, Bu Sari!</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifikasi
                <Badge className="ml-2 bg-destructive text-destructive-foreground">3</Badge>
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
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">128</div>
                  <div className="text-sm text-muted-foreground">Total Siswa</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">342</div>
                  <div className="text-sm text-muted-foreground">Total Sesi</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
                  <Star className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Rp 8.5 jt</div>
                  <div className="text-sm text-muted-foreground">Bulan Ini</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="requests" className="space-y-6">
            <TabsList className="bg-card border border-border p-1">
              <TabsTrigger value="requests">Permintaan Baru</TabsTrigger>
              <TabsTrigger value="schedule">Jadwal</TabsTrigger>
              <TabsTrigger value="profile">Profil</TabsTrigger>
            </TabsList>

            {/* Pending Requests */}
            <TabsContent value="requests">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-xl font-semibold mb-6">Permintaan Bimbingan Baru</h2>

                {pendingRequests.length > 0 ? (
                  <div className="space-y-4">
                    {pendingRequests.map((request) => (
                      <div
                        key={request.id}
                        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-muted rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground font-semibold">
                            {request.student.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-medium">{request.student}</h3>
                            <p className="text-sm text-muted-foreground">
                              {request.subject} • {request.level}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 inline mr-1" />
                            {request.date}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 inline mr-1" />
                            {request.time}
                          </div>
                          <Badge variant={request.type === "Online" ? "default" : "secondary"}>
                            {request.type}
                          </Badge>
                          <div className="flex gap-2">
                            <Button size="sm" variant="hero">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Terima
                            </Button>
                            <Button size="sm" variant="outline">
                              <XCircle className="h-4 w-4 mr-1" />
                              Tolak
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Tidak ada permintaan baru saat ini.
                  </div>
                )}
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-card rounded-2xl p-6 border border-border mt-6">
                <h2 className="text-xl font-semibold mb-6">Sesi Mendatang</h2>

                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-muted rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                          {session.student.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-medium">{session.student}</h3>
                          <p className="text-sm text-muted-foreground">{session.subject}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">{session.date}</span>
                        <span className="text-muted-foreground">{session.time}</span>
                        <Badge>{session.type}</Badge>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Schedule */}
            <TabsContent value="schedule">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Kelola Jadwal</h2>
                  <Button variant="hero" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Slot
                  </Button>
                </div>

                <div className="space-y-4">
                  {schedule.map((day) => (
                    <div
                      key={day.day}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-muted rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <Switch checked={day.active} />
                        <span className="font-medium w-20">{day.day}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {day.slots.length > 0 ? (
                          day.slots.map((slot, index) => (
                            <Badge key={index} variant="secondary">
                              {slot}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-sm text-muted-foreground">Tidak tersedia</span>
                        )}
                      </div>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Profile */}
            <TabsContent value="profile">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Profil Saya</h2>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profil
                  </Button>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                      alt="Profile"
                      className="w-32 h-32 rounded-2xl object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <Label className="text-muted-foreground text-sm">Nama</Label>
                      <p className="font-medium">Bu Sari Indrawati, S.Pd</p>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-sm">Mata Pelajaran</Label>
                      <p className="font-medium">Matematika</p>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-sm">Jenjang</Label>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary">SD</Badge>
                        <Badge variant="secondary">SMP</Badge>
                        <Badge variant="secondary">SMA</Badge>
                      </div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-sm">Tarif per Jam</Label>
                      <p className="font-medium text-primary">Rp 75.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={className}>{children}</span>
);

export default DashboardGuru;
