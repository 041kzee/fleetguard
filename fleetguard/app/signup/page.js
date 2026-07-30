"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();

  const [role, setRole] = useState("ADMIN");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    let endpoint = "/api/auth/admin/signup";

    if (role === "FLEET_MANAGER") {
      endpoint = "/api/auth/fleet-manager/signup";
    }

    if (role === "DRIVER") {
      endpoint = "/api/auth/driver/signup";
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full bg-[#f8f9ff]">

      {/* LEFT SIDE */}

      <section className="hidden md:flex md:w-1/2 flex-col justify-center items-center p-12 bg-[#f8fafc] border-r border-[#e2e8f0] overflow-hidden relative">

        <div className="max-w-xl w-full z-10 animate-fade-up">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#004ac6] text-white flex items-center justify-center shadow-lg shadow-[#004ac6]/30">
              <span className="material-symbols-outlined text-[24px]">
                local_shipping
              </span>
            </div>

            <span className="text-xl font-bold text-[#0b1c30] tracking-tight">
              FleetGuard
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1c30] mb-4 tracking-tight leading-tight">
            Manage Your Fleet Smarter & Stay Compliant
          </h1>

          <p className="text-sm md:text-base text-[#434655] mb-8 leading-relaxed">
            Track vehicle compliance, assign drivers safely, record
            maintenance service, and maintain complete operational visibility
            with our enterprise SaaS platform.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">

            <div className="glass-card p-4 rounded-xl hover:shadow-md transition-all">
               <span className="material-symbols-outlined text-[#004ac6] text-[24px] mb-2">
                Direction
              </span>

              <h3 className="font-semibold text-xs text-[#0b1c30]">
                Vehicle Registry
              </h3>

              <p className="text-[11px] text-[#565e74] mt-0.5">
                Real-time status tracking
              </p>
            </div>

            <div className="glass-card p-4 rounded-xl hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-[#004ac6] text-[24px] mb-2">
                verified
              </span>

              <h3 className="font-semibold text-xs text-[#0b1c30]">
                Compliance
              </h3>

              <p className="text-[11px] text-[#565e74] mt-0.5">
                Automated document alerts
              </p>
            </div>

            <div className="glass-card p-4 rounded-xl hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-[#004ac6] text-[24px] mb-2">
                build
              </span>

              <h3 className="font-semibold text-xs text-[#0b1c30]">
                Maintenance
              </h3>

              <p className="text-[11px] text-[#565e74] mt-0.5">
                Cost & service logging
              </p>
            </div>

          </div>

          <div className="flex items-center gap-6 p-4 rounded-xl bg-white/80 border border-[#e2e8f0] text-xs">

            <div>
              <p className="text-[11px] text-[#565e74]">
                Active Vehicles
              </p>

              <p className="font-bold text-[#0b1c30]">
                1,280+ Fleet Units
              </p>
            </div>

            <div className="h-6 w-px bg-[#e2e8f0]"></div>

            <div>
              <p className="text-[11px] text-[#565e74]">
                Compliance Rate
              </p>

              <p className="font-bold text-[#10b981]">
                99.4% Validated
              </p>
            </div>

          </div>

        </div>

        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#004ac6]/10 rounded-full blur-3xl"></div>

      </section>

      {/* RIGHT SIDE */}

      <section className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white relative">

        <div className="max-w-md w-full animate-fade-up">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-[#0b1c30] tracking-tight mb-1">
              Create Account
            </h2>

            <p className="text-xs text-[#434655]">
              Register to access your FleetGuard portal
            </p>

          </div>          {/* Role Tabs */}
          <div className="flex p-1 bg-[#eff4ff] rounded-xl mb-6 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setRole("ADMIN")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                role === "ADMIN"
                  ? "bg-white text-[#004ac6] shadow-xs"
                  : "text-[#565e74] hover:text-[#0b1c30]"
              }`}
            >
              Admin
            </button>

            <button
              type="button"
              onClick={() => setRole("FLEET_MANAGER")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                role === "FLEET_MANAGER"
                  ? "bg-white text-[#004ac6] shadow-xs"
                  : "text-[#565e74] hover:text-[#0b1c30]"
              }`}
            >
              Fleet Manager
            </button>

            <button
              type="button"
              onClick={() => setRole("DRIVER")}
              className={`flex-1 py-2 rounded-lg transition-all ${
                role === "DRIVER"
                  ? "bg-white text-[#004ac6] shadow-xs"
                  : "text-[#565e74] hover:text-[#0b1c30]"
              }`}
            >
              Driver
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/20 text-xs text-[#ba1a1a]">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4 text-xs">

            <div>
              <label className="block text-[#434655] font-semibold uppercase tracking-wider mb-1">
                Full Name
              </label>

              <input
                type="text"
                required
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
              />
            </div>

            <div>
              <label className="block text-[#434655] font-semibold uppercase tracking-wider mb-1">
                Email Address
              </label>

              <input
                type="email"
                required
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
              />
            </div>

            <div>
              <label className="block text-[#434655] font-semibold uppercase tracking-wider mb-1">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565e74]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>

              </div>
            </div>

            <div>
              <label className="block text-[#434655] font-semibold uppercase tracking-wider mb-1">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565e74]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showConfirmPassword
                      ? "visibility_off"
                      : "visibility"}
                  </span>
                </button>

              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="w-4 h-4 text-[#004ac6]"
              />

              <span className="text-[#434655]">
                I agree to the Terms & Conditions
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="primary-btn-interaction w-full py-3.5 bg-[#2563eb] text-white font-semibold rounded-xl shadow-lg shadow-[#2563eb]/20 hover:bg-[#004ac6] focus:outline-none focus:ring-4 focus:ring-[#2563eb]/10 text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Creating Account...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <span className="material-symbols-outlined text-[18px]">
                    person_add
                  </span>
                </>
              )}
            </button>
          </form>          <div className="mt-6 text-center text-sm text-[#565e74]">
            Already have an account?{" "}
            <Link
              href="/"
              className="text-[#2563eb] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </div>

          <footer className="mt-8 text-center text-[11px] text-[#565e74]">
            © 2026 FleetGuard Systems Inc. All rights reserved.
          </footer>

        </div>
      </section>
    </main>
  );
}