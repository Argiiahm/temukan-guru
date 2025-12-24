import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Mail, KeyRound, CheckCircle } from "lucide-react";

type Step = "email" | "otp" | "success";

const ForgotPassword = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email diperlukan",
        description: "Silakan masukkan alamat email Anda",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast({
      title: "Kode OTP Terkirim",
      description: `Kode verifikasi telah dikirim ke ${email}`,
    });
    setStep("otp");
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Kode tidak lengkap",
        description: "Silakan masukkan 6 digit kode OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);

    toast({
      title: "Verifikasi Berhasil",
      description: "Silakan buat password baru Anda",
    });
    setStep("success");
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast({
      title: "Kode OTP Dikirim Ulang",
      description: `Kode baru telah dikirim ke ${email}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Link */}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Login
        </Link>

        {/* Card */}
        <div className="bg-card rounded-2xl shadow-xl border p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              {step === "email" && <Mail className="h-8 w-8 text-primary" />}
              {step === "otp" && <KeyRound className="h-8 w-8 text-primary" />}
              {step === "success" && <CheckCircle className="h-8 w-8 text-green-500" />}
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              {step === "email" && "Lupa Password?"}
              {step === "otp" && "Masukkan Kode OTP"}
              {step === "success" && "Verifikasi Berhasil!"}
            </h1>
            <p className="text-muted-foreground mt-2">
              {step === "email" && "Masukkan email Anda untuk menerima kode verifikasi"}
              {step === "otp" && `Kami telah mengirim kode 6 digit ke ${email}`}
              {step === "success" && "Password Anda berhasil direset"}
            </p>
          </div>

          {/* Step 1: Email Form */}
          {step === "email" && (
            <form onSubmit={handleSendOTP} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
              </div>

              <Button type="submit" className="w-full h-12" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Mengirim...
                  </span>
                ) : (
                  "Kirim Kode OTP"
                )}
              </Button>
            </form>
          )}

          {/* Step 2: OTP Input */}
          {step === "otp" && (
            <div className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={1} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={2} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={3} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={4} className="h-14 w-12 text-xl" />
                    <InputOTPSlot index={5} className="h-14 w-12 text-xl" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                onClick={handleVerifyOTP}
                className="w-full h-12"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Memverifikasi...
                  </span>
                ) : (
                  "Verifikasi Kode"
                )}
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Tidak menerima kode?{" "}
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={isLoading}
                    className="text-primary hover:underline font-medium disabled:opacity-50"
                  >
                    Kirim Ulang
                  </button>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStep("email")}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Gunakan email lain
              </button>
            </div>
          )}

          {/* Step 3: Success */}
          {step === "success" && (
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Silakan cek email Anda untuk link reset password
                </p>
              </div>

              <Link to="/login">
                <Button className="w-full h-12">Kembali ke Login</Button>
              </Link>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            <div
              className={`h-2 w-8 rounded-full transition-colors ${
                step === "email" ? "bg-primary" : "bg-primary/30"
              }`}
            />
            <div
              className={`h-2 w-8 rounded-full transition-colors ${
                step === "otp" ? "bg-primary" : "bg-primary/30"
              }`}
            />
            <div
              className={`h-2 w-8 rounded-full transition-colors ${
                step === "success" ? "bg-primary" : "bg-primary/30"
              }`}
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Ingat password Anda?{" "}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
