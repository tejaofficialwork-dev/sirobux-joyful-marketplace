import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { User, History, Settings, LogOut, Package, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const tabs = [
  { id: "transactions", label: "Riwayat Transaksi", icon: History },
  { id: "profile", label: "Profil Saya", icon: User },
  { id: "settings", label: "Pengaturan", icon: Settings },
];

const transactions = [
  { id: "TRX001", date: "23 Des 2024", product: "Top Up Robux", amount: "400 Robux", price: "Rp 18.000", status: "success" },
  { id: "TRX002", date: "20 Des 2024", product: "Gamepass Blox Fruits", amount: "2x EXP", price: "Rp 45.000", status: "success" },
  { id: "TRX003", date: "18 Des 2024", product: "Top Up Robux", amount: "100 Robux", price: "Rp 5.000", status: "success" },
  { id: "TRX004", date: "15 Des 2024", product: "Top Up Robux", amount: "800 Robux", price: "Rp 35.000", status: "pending" },
  { id: "TRX005", date: "10 Des 2024", product: "Top Up Robux", amount: "200 Robux", price: "Rp 9.500", status: "failed" },
];

const statusConfig = {
  success: { label: "Berhasil", icon: CheckCircle, color: "text-success bg-success/10" },
  pending: { label: "Diproses", icon: Clock, color: "text-warning bg-warning/10" },
  failed: { label: "Gagal", icon: XCircle, color: "text-destructive bg-destructive/10" },
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("transactions");

  // Mock user data
  const userData = {
    name: "Rizky Pratama",
    email: "rizky@email.com",
    phone: "0812-3456-7890",
    robloxUsername: "RizkyGamer123",
    joinDate: "Desember 2024",
    totalTransactions: 5,
  };

  return (
    <Layout>
      <section className="py-8 lg:py-12 bg-background-secondary min-h-[calc(100vh-200px)]">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border">
                {/* User Info */}
                <div className="text-center mb-6 pb-6 border-b border-border">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    {userData.name.charAt(0)}
                  </div>
                  <h2 className="font-bold text-foreground">{userData.name}</h2>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                          activeTab === tab.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        {tab.label}
                      </button>
                    );
                  })}
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-destructive hover:bg-destructive/10 transition-colors">
                    <LogOut className="h-5 w-5" />
                    Keluar
                  </button>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Transactions Tab */}
              {activeTab === "transactions" && (
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <History className="h-5 w-5 text-primary" />
                      Riwayat Transaksi
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      Total: {transactions.length} transaksi
                    </span>
                  </div>

                  {/* Transactions Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">ID</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Tanggal</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Produk</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Jumlah</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Harga</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((tx) => {
                          const status = statusConfig[tx.status as keyof typeof statusConfig];
                          const StatusIcon = status.icon;
                          return (
                            <tr key={tx.id} className="border-b border-border last:border-0">
                              <td className="py-4 px-4 text-sm font-medium text-foreground">{tx.id}</td>
                              <td className="py-4 px-4 text-sm text-muted-foreground">{tx.date}</td>
                              <td className="py-4 px-4 text-sm text-foreground">{tx.product}</td>
                              <td className="py-4 px-4 text-sm text-foreground">{tx.amount}</td>
                              <td className="py-4 px-4 text-sm font-medium text-foreground">{tx.price}</td>
                              <td className="py-4 px-4">
                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                                  <StatusIcon className="h-3 w-3" />
                                  {status.label}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Profil Saya
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Nama Lengkap</label>
                      <p className="font-medium text-foreground">{userData.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Email</label>
                      <p className="font-medium text-foreground">{userData.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">No. Telepon</label>
                      <p className="font-medium text-foreground">{userData.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Username Roblox</label>
                      <p className="font-medium text-foreground">{userData.robloxUsername}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Bergabung Sejak</label>
                      <p className="font-medium text-foreground">{userData.joinDate}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">Total Transaksi</label>
                      <p className="font-medium text-foreground">{userData.totalTransactions}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <Button variant="cta">Edit Profil</Button>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Pengaturan
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                      <div>
                        <p className="font-medium text-foreground">Notifikasi Email</p>
                        <p className="text-sm text-muted-foreground">Terima update transaksi via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-muted-foreground/30 peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                      <div>
                        <p className="font-medium text-foreground">Notifikasi WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Terima update transaksi via WhatsApp</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-muted-foreground/30 peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <h3 className="font-medium text-foreground mb-4">Keamanan Akun</h3>
                      <Button variant="outline">Ubah Password</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}