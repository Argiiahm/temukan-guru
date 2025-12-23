import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Star, 
  TrendingUp,
  Settings,
  LogOut,
  Menu,
  X,
  GraduationCap,
  UserCheck,
  Clock,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const stats = [
  { title: "Total Users", value: "1,234", icon: Users, change: "+12%" },
  { title: "Active Tutors", value: "89", icon: UserCheck, change: "+5%" },
  { title: "Total Bookings", value: "456", icon: Calendar, change: "+18%" },
  { title: "Revenue", value: "Rp 45.6M", icon: DollarSign, change: "+23%" },
];

const recentUsers = [
  { id: 1, name: "Ahmad Rizki", email: "ahmad@email.com", role: "student", status: "active", joinedAt: "2024-01-15" },
  { id: 2, name: "Siti Nurhaliza", email: "siti@email.com", role: "tutor", status: "pending", joinedAt: "2024-01-14" },
  { id: 3, name: "Budi Santoso", email: "budi@email.com", role: "student", status: "active", joinedAt: "2024-01-13" },
  { id: 4, name: "Dewi Lestari", email: "dewi@email.com", role: "tutor", status: "active", joinedAt: "2024-01-12" },
  { id: 5, name: "Eko Prasetyo", email: "eko@email.com", role: "student", status: "inactive", joinedAt: "2024-01-11" },
];

const pendingTutors = [
  { id: 1, name: "Siti Nurhaliza", subject: "Matematika", experience: "5 tahun", appliedAt: "2024-01-14" },
  { id: 2, name: "Rudi Hermawan", subject: "Fisika", experience: "3 tahun", appliedAt: "2024-01-13" },
  { id: 3, name: "Maya Indah", subject: "Bahasa Inggris", experience: "7 tahun", appliedAt: "2024-01-12" },
];

const recentBookings = [
  { id: 1, student: "Ahmad Rizki", tutor: "Dewi Lestari", subject: "Matematika", date: "2024-01-16", status: "confirmed" },
  { id: 2, student: "Budi Santoso", tutor: "Dewi Lestari", subject: "Fisika", date: "2024-01-17", status: "pending" },
  { id: 3, student: "Citra Dewi", tutor: "Rudi Hermawan", subject: "Kimia", date: "2024-01-18", status: "confirmed" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "users", label: "Pengguna", icon: Users },
    { id: "tutors", label: "Tutor", icon: GraduationCap },
    { id: "bookings", label: "Booking", icon: Calendar },
    { id: "subjects", label: "Mata Pelajaran", icon: BookOpen },
    { id: "reviews", label: "Ulasan", icon: Star },
    { id: "settings", label: "Pengaturan", icon: Settings },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      active: "default",
      pending: "secondary",
      inactive: "destructive",
      confirmed: "default",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  const getRoleBadge = (role: string) => {
    const colors: Record<string, string> = {
      admin: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      tutor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      student: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    };
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[role] || ""}`}>{role}</span>;
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-card border-r border-border transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-border flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg">Admin</span>
            </div>
          )}
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        <nav className="flex-1 p-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                activeTab === item.id 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-2 border-t border-border">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium">Kembali ke Home</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-card border-b border-border p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard Admin</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-primary">
                <Clock className="h-3 w-3 mr-1" />
                {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </Badge>
            </div>
          </div>
        </header>

        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                      <stat.icon className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-green-600 mt-1">{stat.change} dari bulan lalu</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Tabs for different sections */}
              <Tabs defaultValue="users" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="users">Pengguna Terbaru</TabsTrigger>
                  <TabsTrigger value="pending">Tutor Pending</TabsTrigger>
                  <TabsTrigger value="bookings">Booking Terbaru</TabsTrigger>
                </TabsList>

                <TabsContent value="users">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pengguna Terbaru</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Nama</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Bergabung</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentUsers.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name}</TableCell>
                              <TableCell>{user.email}</TableCell>
                              <TableCell>{getRoleBadge(user.role)}</TableCell>
                              <TableCell>{getStatusBadge(user.status)}</TableCell>
                              <TableCell>{new Date(user.joinedAt).toLocaleDateString('id-ID')}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pending">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tutor Menunggu Approval</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Nama</TableHead>
                            <TableHead>Mata Pelajaran</TableHead>
                            <TableHead>Pengalaman</TableHead>
                            <TableHead>Tanggal Apply</TableHead>
                            <TableHead>Aksi</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {pendingTutors.map((tutor) => (
                            <TableRow key={tutor.id}>
                              <TableCell className="font-medium">{tutor.name}</TableCell>
                              <TableCell>{tutor.subject}</TableCell>
                              <TableCell>{tutor.experience}</TableCell>
                              <TableCell>{new Date(tutor.appliedAt).toLocaleDateString('id-ID')}</TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="default">Approve</Button>
                                  <Button size="sm" variant="destructive">Tolak</Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="bookings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Terbaru</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Siswa</TableHead>
                            <TableHead>Tutor</TableHead>
                            <TableHead>Mata Pelajaran</TableHead>
                            <TableHead>Tanggal</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentBookings.map((booking) => (
                            <TableRow key={booking.id}>
                              <TableCell className="font-medium">{booking.student}</TableCell>
                              <TableCell>{booking.tutor}</TableCell>
                              <TableCell>{booking.subject}</TableCell>
                              <TableCell>{new Date(booking.date).toLocaleDateString('id-ID')}</TableCell>
                              <TableCell>{getStatusBadge(booking.status)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === "users" && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manajemen Pengguna</CardTitle>
                  <Button>Tambah Pengguna</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nama</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Bergabung</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{new Date(user.joinedAt).toLocaleDateString('id-ID')}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="destructive">Hapus</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {activeTab === "tutors" && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manajemen Tutor</CardTitle>
                  <Button>Tambah Tutor</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kelola data tutor di sini.</p>
              </CardContent>
            </Card>
          )}

          {activeTab === "bookings" && (
            <Card>
              <CardHeader>
                <CardTitle>Manajemen Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Siswa</TableHead>
                      <TableHead>Tutor</TableHead>
                      <TableHead>Mata Pelajaran</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.student}</TableCell>
                        <TableCell>{booking.tutor}</TableCell>
                        <TableCell>{booking.subject}</TableCell>
                        <TableCell>{new Date(booking.date).toLocaleDateString('id-ID')}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">Detail</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {activeTab === "subjects" && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Mata Pelajaran</CardTitle>
                  <Button>Tambah Mata Pelajaran</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kelola mata pelajaran di sini.</p>
              </CardContent>
            </Card>
          )}

          {activeTab === "reviews" && (
            <Card>
              <CardHeader>
                <CardTitle>Ulasan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kelola ulasan tutor di sini.</p>
              </CardContent>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pengaturan aplikasi di sini.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
