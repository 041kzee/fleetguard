
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  
  const router = useRouter();
  const [role, setRole] = useState("ADMIN"); // ADMIN, FLEET_MANAGER, DRIVER
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    let endpoint = "/api/auth/admin/login";
    if (role === "FLEET_MANAGER") endpoint = "/api/auth/fleet-manager/login";
    if (role === "DRIVER") endpoint = "/api/auth/driver/login";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      // Successful login -> Redirect to Dashboard
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
      // Demo fallback: Allow entering dashboard in preview/demo mode if env credentials are not set locally
      if (err.message.includes("Unauthorized") || err.message.includes("User not found")) {
        setError(`${err.message}. (Click below to enter Demo Dashboard)`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    router.push("/dashboard");
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen w-full bg-[#f8f9ff]">
      {/* Left Side: Marketing/Illustration Bento Grid */}
      <section className="hidden md:flex md:w-1/2 flex-col justify-center items-center p-12 bg-[#f8fafc] border-r border-[#e2e8f0] overflow-hidden relative">
        <div className="max-w-xl w-full z-10 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#004ac6] text-white flex items-center justify-center shadow-lg shadow-[#004ac6]/30">
              <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            </div>
            <span className="text-xl font-bold text-[#0b1c30] tracking-tight">FleetGuard</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b1c30] mb-4 tracking-tight leading-tight">
            Manage Your Fleet Smarter & Stay Compliant
          </h1>
          <p className="text-sm md:text-base text-[#434655] mb-8 leading-relaxed">
            Track vehicle compliance, assign drivers safely, record maintenance service, and maintain complete operational visibility with our enterprise SaaS platform.
          </p>

          {/* Interactive Bento Feature Showcase */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="glass-card p-4 rounded-xl hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-[#004ac6] text-[24px] mb-2">directions</span>
              <h3 className="font-semibold text-xs text-[#0b1c30]">Vehicle Registry</h3>
              <p className="text-[11px] text-[#565e74] mt-0.5">Real-time status tracking</p>
            </div>
            <div className="glass-card p-4 rounded-xl hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-[#004ac6] text-[24px] mb-2">verified</span>
              <h3 className="font-semibold text-xs text-[#0b1c30]">Compliance</h3>
              <p className="text-[11px] text-[#565e74] mt-0.5">Automated document alerts</p>
            </div>
            <div className="glass-card p-4 rounded-xl hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-[#004ac6] text-[24px] mb-2">build</span>
              <h3 className="font-semibold text-xs text-[#0b1c30]">Maintenance</h3>
              <p className="text-[11px] text-[#565e74] mt-0.5">Cost & service logging</p>
            </div>
          </div>

          {/* Stat Pill Bar */}
          <div className="flex items-center gap-6 p-4 rounded-xl bg-white/80 border border-[#e2e8f0] text-xs">
            <div>
              <p className="text-[11px] text-[#565e74]">Active Vehicles</p>
              <p className="font-bold text-[#0b1c30]">1,280+ Fleet Units</p>
            </div>
            <div className="h-6 w-px bg-[#e2e8f0]"></div>
            <div>
              <p className="text-[11px] text-[#565e74]">Compliance Rate</p>
              <p className="font-bold text-[#10b981]">99.4% Validated</p>
            </div>
          </div>
        </div>

        {/* Subtle Ambient Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#004ac6]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Right Side: Authentication Form */}
      <section className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white relative">
        <div className="max-w-md w-full animate-fade-up">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0b1c30] tracking-tight mb-1">
              Welcome Back
            </h2>
            <p className="text-xs text-[#434655]">
              Sign in to access your FleetGuard portal
            </p>
          </div>

          {/* Role Tabs */}
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
            <div className="mb-4 p-3 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/20 text-xs text-[#ba1a1a] flex items-center justify-between">
              <span>{error}</span>
              <button onClick={handleDemoLogin} className="underline font-semibold text-[#004ac6] ml-2">
                Enter Demo Mode &rarr;
              </button>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-[#434655] font-semibold uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="admin@fleetguard.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9ff] border border-[#e2e8f0] rounded-xl text-xs text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#004ac6]/20 focus:border-[#004ac6] transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[#434655] font-semibold uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-[#004ac6] font-medium hover:underline">
                  Forgot Password?
                </a>
              </div>
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#565e74] hover:text-[#0b1c30]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <label className="flex items-center gap-2 cursor-pointer text-[#434655]">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#e2e8f0] text-[#004ac6] focus:ring-[#004ac6]/20"
                />
                <span>Remember me for 30 days</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="primary-btn-interaction w-full py-3.5 bg-[#2563eb] text-white font-semibold rounded-xl shadow-lg shadow-[#2563eb]/20 hover:bg-[#004ac6] focus:outline-none focus:ring-4 focus:ring-[#2563eb]/10 text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In as {role.replace("_", " ")}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Bypass button */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-2.5 bg-[#eff4ff] text-[#004ac6] hover:bg-[#e5eeff] font-semibold rounded-xl text-xs transition-colors"
            >
              🚀 Explore Demo Dashboard Directly
            </button>
          </div>
<div className="mt-6 text-center text-sm text-[#565e74]">
  New to FleetGuard?{" "}
  <Link
    href="/signup"
    className="text-[#2563eb] font-semibold hover:underline"
  >
    Create an Account
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
