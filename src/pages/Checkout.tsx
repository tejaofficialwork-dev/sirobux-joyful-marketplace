import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, CreditCard, Shield, Check, ArrowLeft, Info } from "lucide-react";

const paymentMethods = [
  { id: "dana", name: "DANA", fee: 0 },
  { id: "ovo", name: "OVO", fee: 0 },
  { id: "gopay", name: "GoPay", fee: 0 },
  { id: "qris", name: "QRIS", fee: 0 },
  { id: "bca", name: "BCA Transfer", fee: 2500 },
  { id: "mandiri", name: "Mandiri Transfer", fee: 2500 },
];

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("dana");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  // Mock order data
  const orderData = {
    product: "Top Up Robux",
    amount: 400,
    price: 18000,
  };

  const selectedPaymentData = paymentMethods.find((p) => p.id === selectedPayment);
  const adminFee = selectedPaymentData?.fee || 0;
  const totalPrice = orderData.price + adminFee;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout:", { ...formData, payment: selectedPayment });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <section className="py-8 lg:py-12 bg-background-secondary min-h-[calc(100vh-200px)]">
        <div className="container">
          {/* Back Link */}
          <Link to="/top-up-robux" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Top Up Robux
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Data */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Data Pembeli
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Username Roblox *
                      </label>
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleChange("username", e.target.value)}
                        placeholder="Masukkan username Roblox kamu"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Info className="h-3 w-3" />
                        Pastikan username sudah benar, tidak bisa diubah setelah pembayaran
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="nama@email.com"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nomor WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="08xx xxxx xxxx"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Metode Pembayaran
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedPayment(method.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedPayment === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">{method.name}</span>
                          {selectedPayment === method.id && (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <Check className="h-3 w-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        {method.fee > 0 && (
                          <span className="text-xs text-muted-foreground">
                            + Rp {formatPrice(method.fee)} admin
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button (Mobile) */}
                <div className="lg:hidden">
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Bayar Sekarang - Rp {formatPrice(totalPrice)}
                  </Button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <h2 className="text-lg font-bold text-foreground mb-5">
                  Ringkasan Pesanan
                </h2>

                {/* Product */}
                <div className="flex items-center gap-4 p-4 bg-muted rounded-xl mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    R
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{orderData.product}</p>
                    <p className="text-sm text-primary font-semibold">{orderData.amount} Robux</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pb-5 border-b border-border mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Harga Produk</span>
                    <span className="text-foreground">Rp {formatPrice(orderData.price)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Biaya Admin</span>
                    <span className="text-foreground">
                      {adminFee > 0 ? `Rp ${formatPrice(adminFee)}` : "Gratis"}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold text-foreground">Total Pembayaran</span>
                  <span className="text-xl font-bold text-primary">
                    Rp {formatPrice(totalPrice)}
                  </span>
                </div>

                {/* Submit Button (Desktop) */}
                <div className="hidden lg:block">
                  <Button type="submit" variant="hero" size="lg" className="w-full" onClick={handleSubmit}>
                    Bayar Sekarang
                  </Button>
                </div>

                {/* Security Badge */}
                <div className="flex items-center gap-2 justify-center mt-4 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  Transaksi aman & terenkripsi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}