import { useState, useEffect } from "react";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowRight, CheckCircle, FileText, TrendingUp, BarChart3, Users, Zap, Calendar, FileCheck, Sparkles, Star, Shield } from "lucide-react";

// Utility function
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

// Card Components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

// Input Component
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input";

const BOOKING_URL = "https://calendly.com/deepiotics/consultation"; // 

const painPoints = [
  { text: "You don't fully understand your financial reports." },
  { text: "You're not sure where your profit is leaking." },
  { text: "Cash flow surprises keep catching you off guard." },
  { text: "You don't have time to manage the day‑to‑day books." },
  { text: "Your numbers don't help you make better decisions." },
  { text: "You wish someone would just explain it simply." },
];

const steps = [
  { num: "01", icon: Calendar, title: "Share Your Details & Book a Call", desc: "Fill out a short form and book a quick call. We'll learn about your business, your current setup, and what kind of support you need." },
  { num: "02", icon: FileCheck, title: "Consultation & 30‑Day Free Trial", desc: "On the call, we'll map out your process and access, then we'll start your 30‑day free trial so you can experience how we work with your real numbers." },
  { num: "03", icon: BarChart3, title: "Receive Your Dashboard & Simple Reports", desc: "We organize your books, set up your reports and dashboard, and walk you through everything in clear, simple language." },
];

const services = [
  { title: "Bookkeeping & Day‑to‑Day Accounting", desc: "We handle daily and monthly bookkeeping so your records stay organized and up to date (invoicing, expenses, bank and card reconciliations)." },
  { title: "Month‑End Close & Reports", desc: "We prepare your monthly profit and loss, balance sheet, and key financial reports so you always have a clear view of your business." },
  { title: "Cleanup & Catch‑Up Work", desc: "Behind on your books? We clean up messy accounts and bring everything up to date so you can move forward with confidence." },
  { title: "Smart Insights Dashboard", desc: "See your financial health at a glance with a simple dashboard that highlights trends, cash flow, and potential risks in your business." },
  { title: "Cash Flow & Planning Support", desc: "Understand where your money is coming from and where it's going so you can plan ahead and avoid unpleasant surprises." },
  { title: "Project & One‑Time Support", desc: "Need help with a one‑time project like historical cleanup, system migration, or process organization? We can step in and get it done." },
];

const trustPoints = [
  { title: "Multi‑Level Checks for Accuracy", desc: "We use standard checklists and review steps so your numbers stay accurate and consistent over time." },
  { title: "Clear Communication", desc: "You get regular updates in simple language, so you always know what's done, what's pending, and what needs your attention." },
  { title: "Organised and On Time", desc: "Your reports are delivered on a regular schedule, and your records stay neatly organized for easy review." },
  { title: "Smooth Transitions", desc: "Switching from another setup? We handle the heavy lifting so you don't lose continuity or historical information." },
];

const faqs = [
  { q: "How quickly can you take over my accounting?", a: "In most cases, we can get started within a few days of our initial call. The full setup and cleanup (if needed) usually happens during your 30‑day free trial." },
  { q: "What if my books are a mess?", a: "That's okay. Many clients come to us with behind‑on or disorganised books. We'll assess your situation and include cleanup as part of the onboarding plan." },
  { q: "Do I need to use specific software?", a: "We work with common accounting tools and can usually work within your existing setup. If a change would help, we'll recommend options but the choice is yours." },
  { q: "How much does it cost?", a: "Pricing depends on the size and complexity of your business. On our call, we'll understand your needs and share a clear, tailored quote after your free trial." },
  { q: "What if it doesn't work out?", a: "You're not locked in. If you feel we're not the right fit after the trial and initial period, you can walk away with no long‑term commitment." },
];

const testimonials = [
  { quote: "Finally, an accounting team that actually explains what's going on in our numbers.", author: "Sarah M.", role: "E‑commerce Business Owner" },
  { quote: "We get better service and clarity at a fraction of what we used to pay.", author: "James K.", role: "Tech Company Founder" },
  { quote: "They caught issues we hadn't seen for years and helped us get back on track.", author: "Michelle R.", role: "Consulting Firm Owner" },
];

const USAccounting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // Set document title
  useEffect(() => {
    document.title = "Outsourced Accounting Services | Deepiotics";
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Deepiotics";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          >
            <source src="https://public-assets.content-platform.envatousercontent.com/5ee046ce-b333-4711-ba70-e1e524043d31/ff2f7d48-82ba-40a7-8d6f-2f568afc9966/5ee046ce-b333-4711-ba70-e1e524043d31/preview_540p_crf22_higher_quality.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 sm:px-4 py-2 sm:py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-5 sm:mb-6 animate-slide-up text-sm sm:text-sm bg-blue-100">
                <Sparkles className="h-4 w-4 sm:h-4 sm:w-4 text-primary" />
                <span className="font-medium text-primary">Trusted by 500+ Businesses</span>
              </div>

              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Outsourced Accounting That Makes Your Numbers{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ textShadow: 'none', WebkitTextStroke: '0.5px rgba(59, 130, 246, 0.3)' }}>Easy to Understand</span>
              </h1>

              <p className="mx-auto lg:mx-0 mt-4 sm:mt-5 md:mt-7 max-w-2xl text-lg sm:text-lg md:text-xl text-gray-800 animate-slide-up leading-relaxed font-semibold" style={{ animationDelay: '0.2s' }}>
                We manage your books and reports and explain them in simple language so you always know what's happening in your business.
              </p>

              <div className="mt-5 sm:mt-7 md:mt-9 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-2 rounded-lg bg-cyan-100/90 backdrop-blur-sm border border-cyan-300/50 justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600 shrink-0" />
                  <span className="font-medium text-cyan-800 text-xs sm:text-sm whitespace-nowrap">Free 30-Day Trial</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-2 rounded-lg bg-blue-100/90 backdrop-blur-sm border border-blue-300/50 justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 shrink-0" />
                  <span className="font-medium text-blue-800 text-xs sm:text-sm whitespace-nowrap">Smart Financial Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-2 rounded-lg bg-purple-100/90 backdrop-blur-sm border border-purple-300/50 justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 shrink-0" />
                  <span className="font-medium text-purple-800 text-xs sm:text-sm whitespace-nowrap">Dedicated Team</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="animate-scale-in order-2 lg:order-2" style={{ animationDelay: '0.4s' }}>
              <div className="p-4 sm:p-5 md:p-6">

                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Start Your Free 30-Day Trial</h3>
                <p className="text-xs sm:text-sm text-foreground/80 mt-1 mb-6">No credit card required</p>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground">Full Name</label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="transition-all focus:scale-[1.02] h-9 sm:h-10 text-sm bg-white/90 hover:bg-white border-gray-200 focus:border-primary shadow-sm backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground">Business Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="transition-all focus:scale-[1.02] h-9 sm:h-10 text-sm bg-white/90 hover:bg-white border-gray-200 focus:border-primary shadow-sm backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="transition-all focus:scale-[1.02] h-9 sm:h-10 text-sm bg-white/90 hover:bg-white border-gray-200 focus:border-primary shadow-sm backdrop-blur-sm"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full text-sm sm:text-base py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] animate-pulse-glow backdrop-blur-sm">
                    Start Free 30-Day Trial <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <p className="text-[10px] sm:text-xs text-center text-foreground/70">
                   🔒 Your information is secure and will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-6 sm:py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Does Your Accounting Feel <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Out of Control?</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Many business owners receive reports every month but still don't feel confident about what their numbers actually mean.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Card
                key={i}
                className="border border-gray-200 bg-white hover:border-red-300 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardContent className="p-5 sm:p-6 relative">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Large gradient icon badge */}

                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{p.text}</p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 sm:mt-12 md:mt-14 text-center px-4 sm:px-0">
            <Card className="inline-block  max-w-3xl border-2 border-blue-200 bg-gradient-to-r from-blue-500 to-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">

                  <div className="text-center sm:text-left flex-1">
                    <p className="text-sm sm:text-base lg:text-lg  text-white mb-1">
                      You don't need more reports, you need clear explanations and usable insights.
                    </p>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="py-6 sm:py-8 md:py-6 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Most Accounting Firms Send Reports. <span className="gradient-text">We Send Clarity.</span>
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground">
              We manage your books and show you what your numbers actually mean, in plain language.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-6 sm:mb-8">
            {/* Typical Firms Card */}
            <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 h-full bg-white">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-3xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center shadow-lg">
                    <FileText className="h-7 w-7 sm:h-8 sm:w-8 text-white stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Typical Accounting Firms</h3>
                    <p className="text-xs text-gray-500">Traditional approach</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Send complex reports full of jargon.",
                    "Use technical language that's hard to follow.",
                    "Focus only on the data, not decisions.",
                    "Leave interpretation entirely up to you."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Our Approach Card */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 h-full bg-white relative overflow-hidden group">
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="h-3 w-3 fill-white" />
                  RECOMMENDED
                </div>
              </div>

              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-white stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">With Us</h3>
                    <p className="text-xs text-primary font-medium">Modern clarity-first approach</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Simple explanations in plain English.",
                    "Clear insights about what's working and what isn't.",
                    "Actionable guidance, not just spreadsheets.",
                    "Numbers that support your daily decisions."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <div className="h-5 w-5 rounded-lg bg-teal-500 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-3.5 w-3.5 text-white stroke-[2.5]" />
                      </div>
                      <span className="text-sm text-gray-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Grid */}
          <Card className="border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500">
            <CardContent className="p-5 sm:p-6 md:p-4">
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-base text-white sm:text-lg md:text-xl font-bold text-gray-900">With our approach, you'll always know:</p>
              </div>

              <div className="grid gap-5 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { text: "Where your money is going", gradient: "from-cyan-400 to-blue-500" },
                  { text: "What's working best", gradient: "from-blue-400 to-cyan-500" },
                  { text: "What needs fixing", gradient: "from-purple-400 to-blue-500" },
                  { text: "What decisions to make next", gradient: "from-purple-500 to-cyan-500" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group/item">

                    <span className="text-xs sm:text-sm font-semibold text-center text-white">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 text-center ">
                <p className="text-base sm:text-lg font-bold text-white">
                  Clear numbers. Confident decisions. Better growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-6 sm:py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Everything You Need to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stay on Top of Your Numbers</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Clear books. Clear insights. Zero stress.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Card
                key={i}
                className={"group relative overflow-hidden transition-all duration-500 hover:shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600"}
              >


                <CardContent className="p-5 sm:p-3 relative">
                  {/* Large gradient icon badge */}



                  <h3 className="font-bold text-white sm:text-lg mb-2 text-gray-900 ">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white leading-relaxed mb-4">
                    {s.desc}
                  </p>



                  {/* Bottom accent line */}
                  <div className={"absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"}></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 sm:mt-12 md:mt-14 text-center px-4 sm:px-0">
            <Card className="inline-block w-full max-w-4xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                  <div className="flex gap-2 sm:gap-3 shrink-0">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                      <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white stroke-[2]" />
                    </div>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white stroke-[2]" />
                    </div>
                    <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white stroke-[2]" />
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      Clear books. Clear insights. Zero stress.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Everything you need to stay on top of your numbers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-8 sm:py-10 md:py-8 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Get Started in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">3 Simple Steps</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Simple onboarding. No confusion. No complicated technical setup.
            </p>
          </div>

          {/* Single Card with 3 Mobile Mockups */}
          <div className="relative group">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden transition-all duration-500 hover:border-blue-400/40 hover:shadow-blue-100">
              {/* Background Section with 3 Phones */}
              <div className="bg-gradient-to-br from-blue-950 to-slate-950 relative min-h-[600px] flex items-center justify-center p-8 overflow-hidden">
                {/* Advanced Animated Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Liquid Metal Effect */}
                  <div className="liquid-metal"></div>
                  {/* DNA Helix Animation */}
                  <div className="dna-helix"></div>
                  {/* Quantum Dots */}
                  <div className="quantum-dots"></div>
                  {/* Floating Cubes */}
                  <div className="floating-cubes"></div>
                  {/* Sine Wave Grid */}
                  <div className="sine-wave-grid"></div>
                  {/* Color Spectrum Flow */}
                  <div className="color-spectrum"></div>
                  {/* Morphing Polygons */}
                  <div className="morphing-polygons"></div>
                  {/* Particle Vortex */}
                  <div className="particle-vortex"></div>
                  {/* Glitch Effect */}
                  <div className="glitch-effect"></div>
                  {/* Light Streaks */}
                  <div className="light-streaks"></div>
                  {/* Data Particles */}
                  <div className="data-particles"></div>
                </div>

                {/* Navigation Buttons - Mobile Only */}
                <button
                  onClick={() => {
                    const carousel = document.getElementById('mockup-carousel-advanced');
                    if (carousel) carousel.scrollBy({ left: -300, behavior: 'smooth' });
                  }}
                  className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 group pointer-events-auto"
                  aria-label="Scroll left"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700 rotate-180" />
                </button>

                <button
                  onClick={() => {
                    const carousel = document.getElementById('mockup-carousel-advanced');
                    if (carousel) carousel.scrollBy({ left: 300, behavior: 'smooth' });
                  }}
                  className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 group pointer-events-auto"
                  aria-label="Scroll right"
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                </button>

                {/* 3 Phone Mockups in a Row */}
                <div
                  id="mockup-carousel-advanced"
                  className="relative z-10 flex md:grid md:grid-cols-3 gap-8 max-w-6xl w-full overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-12 md:px-0"
                >
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center flex-shrink-0 snap-center"
                    >
                      {/* Phone Mockup */}
                      <div className="relative w-[260px] h-[520px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border border-white/10 hover:scale-105 transition-all duration-500">
                        {/* Notch */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>

                        {/* Screen */}
                        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                          {/* Status Bar */}
                          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-between px-6 text-white text-xs z-10">
                            <span className="font-semibold">{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false })}</span>
                            <div className="flex gap-1">
                              <div className="w-1 h-3 bg-white rounded"></div>
                              <div className="w-1 h-3 bg-white rounded"></div>
                              <div className="w-1 h-3 bg-white rounded"></div>
                              <div className="w-1 h-3 bg-white/50 rounded"></div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="pt-16 px-6 pb-6 h-full overflow-hidden">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 shadow-lg">
                              <step.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Title */}
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-xs text-slate-600 mb-3">Step {step.num} of 3</p>

                            {/* Description */}
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{step.desc}</p>

                            {/* Progress Bar */}
                            <div className="w-full h-2 bg-slate-200 rounded-full mb-6 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000"
                                style={{ width: `${(parseInt(step.num)) * 33.33}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Phone Buttons */}
                        <div className="absolute right-0 top-32 w-1 h-12 bg-slate-700 rounded-l"></div>
                        <div className="absolute right-0 top-48 w-1 h-16 bg-slate-700 rounded-l"></div>
                        <div className="absolute left-0 top-40 w-1 h-8 bg-slate-700 rounded-r"></div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-white/20 rounded-full"></div>

                        {/* Floating Glow Effects */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-300/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center px-4 sm:px-0 mt-10 sm:mt-12">
            <Card className="inline-block w-full max-w-3xl border-2 border-cyan-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 lg:gap-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shrink-0">
                    <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white stroke-[2]" />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">That's it — no long onboarding or complicated technical setup.</p>
                    <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">We handle account setup, migration, and organization so you can focus on running your business.</p>
                  </div>
                  <Button asChild className="w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 shrink-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-sm sm:text-base px-6 sm:px-8">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Start Free 30-Day Trial <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-6 sm:py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-blue-50/30">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Why Businesses Trust Us <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">With Their Accounting</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Your financial data is sensitive, and you need a team you can rely on every single month.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((t, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-200 bg-white hover:border-green-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


                <CardContent className="p-5 sm:p-6 relative">
                  {/* Large gradient icon badge */}


                  <h3 className="font-bold text-base sm:text-lg mb-2 text-purple-700 group-hover:text-cyan-600 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {t.desc}
                  </p>



                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 sm:mt-12 md:mt-14 text-center px-4 sm:px-0">
            <Card className="inline-block w-full max-w-3xl border-2 border-cyan-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">

                  <div className="text-center sm:text-left flex-1">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      Accurate books. Clear insights. Less stress for you and your team.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Switching from another setup? We handle the heavy lifting so you don't lose continuity or historical information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-6 sm:py-8 md:py-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        </div>

        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="card-hover-lift border-2 border-gray-200 hover:border-primary hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-white to-gray-50 overflow-hidden relative"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Quote decoration */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-100 to-transparent rounded-tl-full"></div>

                <CardContent className="p-5 sm:p-6 relative">
                  {/* Star rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Quote mark */}
                  <div className="text-5xl sm:text-6xl text-primary/20 font-serif leading-none mb-2">"</div>

                  <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-4 relative z-10">{t.quote}</p>

                  {/* Author info */}
                  <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{t.author}</p>
                      <p className="text-xs text-gray-600">{t.role}</p>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-600 fill-green-100 ml-auto shrink-0 stroke-[2]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-6 sm:py-8 md:py-12 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base text-gray-600">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card
                key={i}
                className="overflow-hidden border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group bg-white"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 flex-1 pr-4">
                      {/* Question Number Badge */}
                      <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${openFaq === i
                          ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg scale-110'
                          : 'bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700 group-hover:from-purple-200 group-hover:to-pink-200'
                        }`}>
                        {i + 1}
                      </div>

                      {/* Question Text */}
                      <div className="flex-1">
                        <span className={`font-bold text-sm sm:text-base transition-colors block ${openFaq === i ? 'text-purple-600' : 'text-gray-900 group-hover:text-purple-600'
                          }`}>
                          {faq.q}
                        </span>
                      </div>
                    </div>

                    {/* Expand/Collapse Icon */}
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${openFaq === i
                        ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white rotate-180'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                      }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Section */}
                  {openFaq === i && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-200 bg-gradient-to-r from-purple-50/50 to-pink-50/50 animate-slide-up">
                      <div className="pt-5 flex items-start gap-3">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-cyan-600 stroke-[2.5]" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help CTA */}
          <div className="mt-10 sm:mt-12 md:mt-14 text-center px-4 sm:px-0">
            <Card className="inline-block w-full max-w-3xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 via-cyan-50 to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">

                  <div className="text-center sm:text-left flex-1">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">Still have questions?</p>
                    <p className="text-xs sm:text-sm text-gray-600">Our team is here to help you get started.</p>
                  </div>
                  <Button asChild className="w-full sm:w-auto rounded-full shrink-0 bg-gradient-to-r from-purple-500 to-cyan-600 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm sm:text-base px-6 sm:px-8">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Book a Quick Call <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-8 text-center relative">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <CheckCircle className="h-4 w-4 text-white" />
              <span className="text-white text-xs sm:text-sm font-semibold">Free 30-Day Trial</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-white text-xs sm:text-sm font-semibold">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Zap className="h-4 w-4 text-white" />
              <span className="text-white text-xs sm:text-sm font-semibold">Simple Setup</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Get Clear on Your Numbers?</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10">
            Start your free 30-day trial today. No credit card required. No complicated setup. Just clear, simple accounting that helps you run and grow your business with confidence.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10 px-4 sm:px-0">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-6 sm:px-8 md:px-10 lg:px-12 text-sm sm:text-base md:text-lg py-5 sm:py-6 md:py-7 bg-white text-purple-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 font-bold">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Start Free 30-Day Trial <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300 fill-cyan-300" />
                ))}
              </div>
            </div>
            <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium text-center">
              Join 500+ businesses who trust us with their books
            </p>
          </div>

          {/* Feature Icons */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">Clear Reports</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">Expert Team</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">Smart Insights</span>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default USAccounting;
