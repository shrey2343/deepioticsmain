import { r as reactExports, a as reactDomExports } from "./vendor-BS092evN.js";
import { C as ChevronDown, X, M as Menu, A as ArrowRight, a as CheckCircle, Z as Zap, T as Target, B as Brain, b as Bot, N as Network, c as BarChart3, d as TrendingUp, U as Users, e as MessageSquare, D as Download, f as Award, S as Shield, G as Globe, g as Sparkles, h as DollarSign, i as Clock, j as Star, k as Mail, P as Phone, l as MapPin, m as Send, L as Linkedin, F as Facebook, I as Instagram, V as Volume2, n as VolumeX, o as Maximize2, p as Minimize2, q as Mic, r as MicOff, s as Lock, t as Plus, u as Save, E as Eye, v as EyeOff, w as Pen, x as Trash2, y as LayoutDashboard, z as LogOut, H as Briefcase, J as BookOpen, K as FileText, O as ArrowLeft, Q as Lightbulb, R as Heart, W as LineChart, Y as Workflow, _ as Database, $ as Cpu, a0 as Code, a1 as CloudCog, a2 as Gamepad2, a3 as Camera, a4 as ShoppingCart, a5 as Building2, a6 as BarChart, a7 as Twitter, a8 as User, a9 as Calendar, aa as AlertCircle, ab as Rocket, ac as Smartphone } from "./utils-Byrj8Lkd.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center h-16 sm:h-18 md:h-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/LogoDeepiotics.png",
          alt: "Deepiotics Logo",
          className: "h-10 w-auto transition-none"
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center space-x-4 xl:space-x-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700", children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700", children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsServicesDropdownOpen(!isServicesDropdownOpen),
              className: "font-medium text-sm xl:text-base transition-colors hover:text-blue-600 flex items-center space-x-1 text-gray-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}` })
              ]
            }
          ),
          isServicesDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/linkedin-service",
                className: "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                children: "AI LinkedIn Growth"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/AI-business-growth",
                className: "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                children: "AI Business Growth Suite"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/services",
                className: "block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                children: "All Services"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/portfolio", className: "font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog", className: "font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700", children: "Blog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/careers", className: "font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700", children: "Careers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "font-medium text-sm xl:text-base transition-colors hover:text-blue-600 text-gray-700", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center space-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-medium text-sm xl:text-base hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-block whitespace-nowrap",
          children: "Get Free AI Strategy Session"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: "lg:hidden p-2 rounded-lg hover:bg-gray-100/10",
          children: isMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-gray-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6 text-gray-700" })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden py-4 border-t border-gray-200/20 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-3 px-3 sm:px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "font-medium transition-colors hover:text-blue-600 text-gray-700",
          onClick: () => setIsMenuOpen(false),
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/about",
          className: "font-medium transition-colors hover:text-blue-600 text-gray-700",
          onClick: () => setIsMenuOpen(false),
          children: "About Us"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setIsServicesDropdownOpen(!isServicesDropdownOpen),
            className: "font-medium transition-colors hover:text-blue-600 text-gray-700 flex items-center space-x-1 w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}` })
            ]
          }
        ),
        isServicesDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 ml-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/linkedin-service",
              className: "block py-2 text-gray-700 hover:text-blue-600 transition-colors",
              onClick: () => setIsMenuOpen(false),
              children: "AI LinkedIn Growth"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/AI-business-growth",
              className: "block py-2 text-gray-700 hover:text-blue-600 transition-colors",
              onClick: () => setIsMenuOpen(false),
              children: "AI Business Growth Suite"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/services",
              className: "block py-2 text-gray-700 hover:text-blue-600 transition-colors",
              onClick: () => setIsMenuOpen(false),
              children: "All Services"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/portfolio",
          className: "font-medium transition-colors hover:text-blue-600 text-gray-700",
          onClick: () => setIsMenuOpen(false),
          children: "Portfolio"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/blog",
          className: "font-medium transition-colors hover:text-blue-600 text-gray-700",
          onClick: () => setIsMenuOpen(false),
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/careers",
          className: "font-medium transition-colors hover:text-blue-600 text-gray-700",
          onClick: () => setIsMenuOpen(false),
          children: "Careers"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/contact",
          className: "font-medium transition-colors hover:text-blue-600 text-gray-700",
          onClick: () => setIsMenuOpen(false),
          children: "Contact"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm w-full text-center inline-block",
          children: "Get Free AI Strategy Session"
        }
      )
    ] }) })
  ] }) });
};
const Hero = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-14 border-t border-yellow-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          className: "absolute inset-0 w-full h-full object-cover",
          style: { objectPosition: "center" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "https://res.cloudinary.com/dq5v1ewpq/video/upload/v1754303402/Deepiotics_qt54hg.mp4", type: "video/mp4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline", children: "Your AI-Trusted" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline", children: "Partner for" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Every Stage of Your" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Business Growth" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0", children: "Empowering your business with end-to-end AI-driven solutions from website creation and app development to lead generation and ad campaigns that deliver real growth." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-4 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://tidycal.com/team/deepiotics-team/call",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book a Free Consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "End-to-End Product Engineering" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Proven Experience With 70+ AI Projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Faster Time-to-Market" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Cost-Efficient Global Outsourcing" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 sm:gap-8 pt-8 mt-8 border-t border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold text-white mb-2", children: "70+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm text-gray-300", children: "AI Solutions Delivered" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold text-white mb-2", children: "80%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm text-gray-300", children: "Average Efficiency Gain" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold text-white mb-2", children: "35%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm text-gray-300", children: "Lower Operational Costs" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-white", children: "AI Performance Metrics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Live business intelligence" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: "Revenue Impact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-green-400", children: "+247%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/20 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-4/5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: "Automation Success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-green-400", children: "+312%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/20 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-3/4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: "Operational Savings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-green-400", children: "-52%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/20 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-2/3" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 xl:p-4 shadow-lg border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 xl:w-5 xl:h-5 text-blue-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs xl:text-sm font-medium text-white", children: "99.7% AI Accuracy" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-12 -left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 xl:p-4 shadow-lg border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base xl:text-lg font-bold text-white", children: "$5.2M" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-300", children: "Client Savings" })
        ] }) })
      ] }) })
    ] }) })
  ] });
};
const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;
  const handleRequestDemo = () => {
    window.open("https://tidycal.com/team/deepiotics-team/call", "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen", "aria-hidden": "true", children: "​" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full",
        onClick: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-gradient-to-r ${service.color} px-8 py-6 relative`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-4 right-4 text-white hover:bg-white/20 rounded-lg p-2 transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white", children: service.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 mt-1", children: "AI-Powered Solution" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Overview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: service.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Key Features" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: service.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3 bg-gray-50 rounded-lg p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: feature })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Why Choose This Solution?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Proven track record with 100+ companies" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Custom implementation tailored to your business needs" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Average ROI of 300% within first 6 months" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dedicated support and continuous optimization" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleRequestDemo,
                  className: "flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300",
                  children: "Request Demo"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  className: "flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300",
                  children: "Close"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) });
};
const Services = () => {
  const [selectedService, setSelectedService] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleGetConsultation = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };
  const services = [
    {
      icon: Brain,
      title: "Scattered Teams Create Confusion",
      description: "Multiple vendors cause misalignment, delays, and endless rework.",
      features: ["Custom Machine Learning Models", "AI-Powered Chatbots & Virtual Assistants", "Intelligent Document Processing", " Predictive Business Analytics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "Poor Planning Derails AI Projects",
      description: "Lack of clear requirements leads to failed or stalled builds.",
      features: ["Autonomous Task Execution", "Multi-Channel Customer Engagement", "Intelligent Decision Making", "Seamless System Integration"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Slow Releases Kill Momentum",
      description: "Inefficient workflows make delivery unpredictable and costly.",
      features: ["Multi-Agent Orchestration", "Collaborative AI Networks", "Adaptive Learning Systems", "Enterprise-Scale Deployment"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Bad Architecture Breaks at Scale",
      description: "Weak foundations cause instability as your product grows.",
      features: ["Advanced Business Intelligence", "Real-Time Data Processing", "Predictive Market Analysis", "Custom Analytics Dashboards"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "High Costs Burn Your Budget",
      description: "Unnecessary complexity leads to overspending and slow ROI.",
      features: ["Custom API Development", "Legacy System Integration", "Cloud & On-Premise Deployment", "Scalable AI Architecture"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Weak Communication Causes Chaos",
      description: "Unclear updates and shifting expectations disrupt your roadmap.",
      features: ["Real-time Collaboration Tools", "Automated Documentation", "Predictive Analytics for Project", "Cross-platform Compatibility"],
      color: "from-yellow-500 to-blue-500"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden border-t border-yellow-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse", style: { animationDelay: "2s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 sm:mb-10 md:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight", children: [
          "Remove the Roadblocks Slowing ",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Your Product" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto px-4 leading-relaxed", children: "We eliminate the common failures that delay AI, web, and app builds so you can launch without chaos." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12", children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "w-10 h-10 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 mb-8 leading-relaxed", children: service.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 mb-8 relative", children: service.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group/item flex items-center space-x-3 text-base text-gray-700 p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: feature })
        ] }, featureIndex)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleGetConsultation(service),
            className: `group/btn relative w-full bg-gradient-to-r ${service.color} text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 flex items-center justify-center space-x-3 overflow-hidden`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center space-x-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Free Consultation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover/btn:translate-x-1 transition-transform" })
              ] })
            ]
          }
        )
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 md:p-12 text-center overflow-hidden relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4", children: "Ready to Scale Your Business with AI?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-blue-100 mb-6 sm:mb-7 md:mb-8 max-w-3xl mx-auto leading-relaxed", children: "Join 500+ companies that have increased revenue by 200%+ with our custom AI development services. Get your free strategy session today." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://tidycal.com/team/deepiotics-team/call",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group relative inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Free AI Strategy Session" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceModal,
      {
        isOpen: isModalOpen,
        onClose: handleCloseModal,
        service: selectedService
      }
    )
  ] });
};
const AIAgentCapabilities = () => {
  const [selectedService, setSelectedService] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleLearnMore = (capability) => {
    setSelectedService(capability);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };
  const capabilities = [
    {
      icon: BarChart3,
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "AI Business",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-600 font-extrabold", children: "Growth" }),
        " ",
        "Suite"
      ] }),
      description: "Grow Your Business Smarter with AI That Works for You. From strategy to execution, our AI Business Growth Suite helps small and medium businesses automate marketing, capture more leads, and scale faster without the tech overwhelm",
      features: [
        "Done-for-you AI Website & Ads Setup",
        "24/7 AI Chatbots & Voice Agents",
        "Data-Driven Analytics & Tracking",
        "Fast ROI through Smart Automation"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "AI-Powered LinkedIn Lead Generation for Business",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-600 font-extrabold", children: "Growth" })
      ] }),
      description: "Stop Scrolling, Stop Pitching Turn Your LinkedIn Into a 24/7 Lead Generation Machine.",
      features: [
        "Profile Optimization",
        "AI-Generated Content & Posting",
        "Smart AI Outreach Campaigns",
        "Lead Qualification & Call Booking"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Target,
      title: "AI Agent Development - Agentic AI Chatbots",
      description: "Deploy intelligent AI agents that autonomously handle complex business tasks. Our agentic AI chatbots work 24/7 to qualify leads, provide customer support, and drive conversions with human-like interactions.",
      features: [
        "Autonomous Task Execution",
        "Lead Qualification Automation",
        "Multi-Channel Integration",
        "Natural Language Understanding"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Fast MVP & Prototype Delivery",
      description: "Launch your AI product in 30 days with our rapid MVP development. We help startups and enterprises validate ideas quickly, iterate fast, and get to market before the competition.",
      features: [
        "30-Day Deployment",
        "Agile Development",
        "Quick Iterations",
        "Market Validation"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Generative AI Model Development",
      description: "Harness the power of generative AI with custom models tailored to your business needs. From content generation to creative design, unlock new possibilities with cutting-edge AI technology.",
      features: [
        "Custom LLM Development",
        "Content Generation AI",
        "Image & Video Synthesis",
        "AI-Powered Creativity"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "Web & App Development",
      description: "Build scalable, high-performance web and mobile applications with cutting-edge technologies. From responsive websites to complex enterprise applications, we deliver solutions that drive business growth.",
      features: [
        "Responsive Web Design",
        "Mobile App Development",
        "Progressive Web Apps",
        "E-commerce Solutions"
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ];
  const benefits = [
    { metric: "300%", description: "Increase in qualified leads" },
    { metric: "85%", description: "Reduction in customer acquisition cost" },
    { metric: "250%", description: "Improvement in conversion rates" },
    { metric: "90%", description: "Time saved on manual tasks" }
  ];
  const handleDownloadGuide = () => {
    const guideContent = `AI CAPABILITIES GUIDE
Deepiotics — Custom AI Solutions Deployed in 30 Days with Guaranteed ROI

... (same as your guide text)
`;
    const blob = new Blob([guideContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Deepiotics-AI-Capabilities-Guide.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-8 sm:py-12 md:py-14 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-yellow-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 sm:mb-10 md:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6", children: [
          "Enterprise AI Development Services",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "That Transform Industries" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4", children: "From custom machine learning models to enterprise AI automation..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2", children: benefit.metric }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm text-gray-600", children: benefit.description })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12", children: capabilities.map((capability, index) => {
        var _a, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(capability.icon, { className: "w-8 h-8 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-4", children: capability.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: capability.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mb-6", children: capability.features.map((feature, featureIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center space-x-2 text-sm text-gray-600",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
                  ]
                },
                featureIndex
              )) }),
              capability.title.props ? ((_a = capability.title.props.children) == null ? void 0 : _a.toString().includes("AI Business")) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/AI-business-growth",
                  className: "group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn More" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
                  ]
                }
              ) : ((_b = capability.title.props.children) == null ? void 0 : _b.toString().includes("LinkedIn")) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://grow.deepiotics.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn More" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleLearnMore(capability),
                  className: "group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn More" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleLearnMore(capability),
                  className: "group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn More" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
                  ]
                }
              )
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Ready to Deploy AI Agents for Your Sales & Marketing?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto", children: "Join 200+ companies that have revolutionized..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://tidycal.com/team/deepiotics-team/call",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-block",
              children: "Get Free AI Agent Demo"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleDownloadGuide,
              className: "bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Download AI Capabilities Guide" })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ServiceModal,
      {
        isOpen: isModalOpen,
        onClose: handleCloseModal,
        service: selectedService
      }
    )
  ] });
};
const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Expert Team Members" },
    { icon: Award, value: "1000+", label: "AI Solutions Deployed" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: TrendingUp, value: "$50M+", label: "Client Cost Savings" }
  ];
  const values = [
    {
      title: "Guaranteed ROI",
      description: "We guarantee measurable results within 6 months or your money back. Average client ROI: 300%+"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security, GDPR compliance, and rigorous testing ensure your AI solutions are production-ready."
    },
    {
      title: "End-to-End Partnership",
      description: "From strategy to deployment and beyond - we provide complete AI development lifecycle support."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 relative overflow-hidden border-t border-yellow-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400/8 to-teal-400/8 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "4s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-400/6 to-yellow-400/6 rounded-full filter blur-xl animate-pulse", style: { animationDelay: "6s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-32 right-32 w-4 h-4 bg-blue-500/20 rotate-45 animate-bounce", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-32 left-32 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce", style: { animationDelay: "3s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2/3 right-1/3 w-3 h-3 bg-green-500/20 rotate-12 animate-bounce", style: { animationDelay: "5s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 sm:mb-10 md:mb-12 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8 leading-tight tracking-tight", children: [
          "Why 100+ Companies Choose",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative", children: [
            "Deepiotics for AI Development",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto px-4 mb-12 leading-relaxed font-light", children: [
          "As a leading AI development company, we've helped over",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded-lg", children: "500 enterprises" }),
          " achieve",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600 bg-green-50/50 px-2 py-1 rounded-lg", children: "300% efficiency gains" }),
          " and",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-600 bg-purple-50/50 px-2 py-1 rounded-lg", children: "$50M+ in cost savings" }),
          " through custom machine learning solutions and intelligent automation."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-gray-800", children: "Industry Leader" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-gray-800", children: "Proven Results" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-gray-800", children: "Enterprise Security" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-gray-800", children: "Fast Deployment" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 sm:mb-10 md:mb-12 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/90 backdrop-blur-md rounded-3xl p-10 lg:p-12 shadow-2xl border border-white/60 hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full filter blur-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl font-bold text-gray-900 leading-tight", children: "Proven AI Development Expertise That Delivers Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-30 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-gray-700 leading-relaxed font-light", children: [
                "With over a decade of AI development experience, Deepiotics has become the trusted partner for enterprises seeking transformative artificial intelligence solutions. Our team of",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600 bg-blue-50/70 px-2 py-1 rounded-lg", children: "50+ AI specialists" }),
                ", data scientists, and ML engineers has delivered over",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600 bg-green-50/70 px-2 py-1 rounded-lg", children: "1,000 successful AI implementations" }),
                " across",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-600 bg-purple-50/70 px-2 py-1 rounded-lg", children: "25+ industries" }),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-gray-700 leading-relaxed font-light", children: [
                "From ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600 bg-blue-50/70 px-2 py-1 rounded-lg", children: "100+ corporations" }),
                " to innovative startups, we've consistently delivered custom AI solutions that generate",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600 bg-green-50/70 px-2 py-1 rounded-lg", children: "measurable ROI within 6 months" }),
                ". Our proven methodology combines cutting-edge machine learning techniques with deep industry expertise to solve your most complex business challenges."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-10", children: values.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-r from-white/50 to-blue-50/30 border border-white/60 hover:bg-gradient-to-r hover:from-blue-50/60 hover:to-purple-50/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors", children: value.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 leading-relaxed", children: value.description })
              ] })
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => {
          const colors = [
            "from-blue-500 to-cyan-500",
            "from-green-500 to-teal-500",
            "from-purple-500 to-pink-500",
            "from-orange-500 to-red-500"
          ];
          const bgColors = [
            "from-blue-50/80 to-cyan-50/80",
            "from-green-50/80 to-teal-50/80",
            "from-purple-50/80 to-pink-50/80",
            "from-orange-50/80 to-red-50/80"
          ];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `group bg-gradient-to-br ${bgColors[index]} backdrop-blur-md rounded-3xl p-8 sm:p-10 text-center border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-15 transition-opacity duration-500` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative w-20 h-20 bg-gradient-to-r ${colors[index]} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "w-10 h-10 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative text-4xl sm:text-5xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors", children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative text-base sm:text-lg text-gray-700 font-bold", children: stat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-yellow-500 animate-pulse" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 bg-white/60 rounded-full animate-bounce" }) })
              ]
            },
            index
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-white/95 to-blue-50/60 backdrop-blur-md rounded-3xl p-12 sm:p-16 md:p-20 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500 relative z-10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/3 via-transparent to-purple-600/3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-12 right-12 w-40 h-40 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full filter blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-12 left-12 w-32 h-32 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "1s" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/6 to-teal-400/6 rounded-full filter blur-xl animate-pulse", style: { animationDelay: "3s" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 sm:mb-20 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6", children: "Meet Our AI Development Experts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl sm:text-2xl text-gray-700 max-w-5xl mx-auto px-4 leading-relaxed font-light", children: [
            "Led by industry veterans with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600 bg-blue-50/70 px-3 py-1 rounded-lg", children: "15+ years" }),
            " in enterprise AI development, our leadership team has successfully delivered AI solutions for",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-green-600 bg-green-50/70 px-3 py-1 rounded-lg", children: "Google, Microsoft" }),
            ", and ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-purple-600 bg-purple-50/70 px-3 py-1 rounded-lg", children: "100+ global enterprises" }),
            " across UK, US, and European markets."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-10", children: [
          {
            name: "Ayan Nigam",
            role: "Founder & Chief Executive Officer",
            description: "With 20+ years of industry experience across enterprise AI solutions, Ayan drives strategic AI innovation and business transformation for Fortune 500 companies.",
            image: "https://res.cloudinary.com/dq5v1ewpq/image/upload/v1754281036/ayan_g3mkvg.jpg",
            linkedin: "https://www.linkedin.com/in/ayannigam/"
          },
          {
            name: "Dr. Bhawna Nigam",
            role: "Co-Founder & Chief AI Officer",
            description: "Ph.D. in Artificial Intelligence with 50+ published research papers and 70+ successful enterprise AI implementations across global markets.",
            image: "/bhawna.png",
            linkedin: "https://www.linkedin.com/in/dr-bhawna-nigam/"
          },
          {
            name: "Dr. Madhu Jain",
            role: "Head of Research & Data Science",
            description: "Ph.D. in Data Science leading cutting-edge research initiatives and advanced analytics solutions for enterprise clients worldwide.",
            image: "/madhuji.png",
            linkedin: "http://linkedin.com/in/dr-madhu-jain-5b5917376"
          },
          {
            name: "Rajshri Nigam",
            role: "Director of Business Development",
            description: "Leads strategic business development and client partnerships, driving growth across UK, US, and European AI markets.",
            image: "/rajeshri.png",
            linkedin: "https://www.linkedin.com/in/rajeshri-nigam-a4941337a/"
          },
          {
            name: "Narendra Pipliwal",
            role: "Head of Sales & Marketing",
            description: "Manages enterprise sales strategy and marketing operations, specializing in AI solution deployment and client success.",
            image: "/Narendra.png",
            linkedin: "https://www.linkedin.com/in/narendra-pipliwal"
          }
        ].map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-gray-200/60 hover:border-blue-300/80 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-28 mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full p-1 group-hover:scale-110 transition-transform duration-500 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: member.image,
                alt: member.name,
                className: "w-full h-full rounded-full object-cover bg-white"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-white" }) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight", children: member.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-md", children: member.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-700 leading-relaxed mb-6 font-light", children: member.description }),
            member.linkedin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: member.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group/link inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-white/20",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LinkedIn Profile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/link:translate-x-1 transition-transform" })
                ]
              }
            )
          ] })
        ] }, index)) })
      ] })
    ] })
  ] });
};
const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Manufacturing Optimization",
      client: "100+ Manufacturing Leader",
      industry: "Manufacturing",
      challenge: "Reduce production defects by 80% and optimize quality control across 15 global facilities",
      solution: "Deployed custom computer vision AI system with real-time defect detection and predictive maintenance algorithms",
      results: [
        { icon: TrendingUp, metric: "87%", description: "Defect reduction achieved" },
        { icon: DollarSign, metric: "$4.2M", description: "Annual cost savings" },
        { icon: Clock, metric: "65%", description: "Faster quality inspection" }
      ],
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Medical Diagnosis System",
      client: "Leading Healthcare Network",
      industry: "Healthcare",
      challenge: "Improve diagnostic accuracy to 95%+ and reduce patient wait times by 50% across 20 hospitals",
      solution: "Built custom AI medical imaging analysis system with natural language processing for patient triage",
      results: [
        { icon: TrendingUp, metric: "96%", description: "Diagnostic accuracy rate" },
        { icon: Clock, metric: "58%", description: "Reduction in wait times" },
        { icon: Users, metric: "2000+", description: "Patients served daily" }
      ],
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "AI Fraud Detection & Risk Management",
      client: "Top-Tier Financial Institution",
      industry: "Finance",
      challenge: "Detect fraud in real-time with 99%+ accuracy while reducing false positives by 70%",
      solution: "Developed advanced machine learning models for real-time fraud detection and intelligent risk assessment",
      results: [
        { icon: TrendingUp, metric: "99.2%", description: "Fraud detection accuracy" },
        { icon: DollarSign, metric: "$12.5M", description: "Fraud losses prevented" },
        { icon: Clock, metric: "73%", description: "Reduction in false positives" }
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-purple-500 to-pink-500"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "case-studies", className: "py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden border-t border-yellow-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-purple-400/5 rounded-full filter blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/3 w-48 h-48 bg-green-400/5 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "4s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 sm:mb-10 md:mb-12 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight", children: [
          "Proven AI Development Success Stories",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent", children: "$50M+ in Client Savings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto px-4 mb-8 leading-relaxed", children: [
          "See how our custom AI development services have transformed operations for",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-600", children: " 100+ companies" }),
          " and growing businesses across industries, delivering",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-green-600", children: " measurable ROI" }),
          " and competitive advantages."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "100+ Success Stories" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "300%+ Average ROI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-purple-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Enterprise Grade" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-orange-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "6 Month ROI" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 sm:space-y-10 md:space-y-12 relative z-10", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: index % 2 === 1 ? "lg:col-start-2" : "", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center space-x-2 bg-gradient-to-r ${study.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: study.industry })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-yellow-500 fill-current" }, i)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors", children: study.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-gray-700 font-semibold", children: study.client })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-red-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-red-800", children: "Challenge" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-700 leading-relaxed", children: study.challenge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-green-800", children: "Solution" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-700 leading-relaxed", children: study.solution })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mb-8", children: study.results.map((result, resultIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(result.icon, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors", children: result.metric }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600 leading-tight font-medium", children: result.description })
              ] }, resultIndex)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://tidycal.com/team/deepiotics-team/call",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `group inline-flex items-center space-x-3 bg-gradient-to-r ${study.color} text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 relative overflow-hidden`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center space-x-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Similar Results" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: index % 2 === 1 ? "lg:col-start-1" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r ${study.color} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-r ${study.color} rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500 opacity-50` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: study.image,
                  alt: study.title,
                  className: "relative rounded-3xl shadow-2xl w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold mb-2", children: "ROI Achieved" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl", children: "300%+ Returns" })
              ] }) })
            ] }) })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8 sm:mt-10 md:mt-12 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-white/20 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full filter blur-2xl animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full filter blur-xl animate-pulse", style: { animationDelay: "1s" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6", children: "Ready to Achieve Similar Results?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto px-4 leading-relaxed", children: [
            "Join ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: "500+ companies" }),
            " that have achieved",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-yellow-300", children: " 300%+ ROI" }),
            " with our custom AI development services. Get your free strategy session and discover how AI can transform your business."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center items-center gap-6 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-white/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Free Consultation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-white/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "No Commitment" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-white/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "ROI Guarantee" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://tidycal.com/team/deepiotics-team/call",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group inline-flex items-center space-x-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center space-x-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Free AI Strategy Session" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-6 h-6 group-hover:translate-x-2 transition-transform" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white", children: "!" }) })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
function Contact() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const googleSheetsData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        project: formData.message
      };
      await fetch("https://script.google.com/macros/s/AKfycbxPS5T4gzKy1vc0ZFaAE7KjcGue52KSaFvlTvlYRMywo7RDNpWkNjTLxqAh9VdJ7ItW/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(googleSheetsData)
      });
      const apiUrl = `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/contact-form`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: "",
          subject: formData.service || "AI Service Consultation",
          message: formData.message
        })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Failed to submit. Please try again.");
        return;
      }
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setTimeout(() => setIsSubmitted(false), 3e3);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-8 sm:py-12 md:py-14 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden border-t border-yellow-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "4s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 sm:mb-10 md:mb-12 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight", children: [
          "Get Your Free",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent", children: "AI Strategy Session" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto px-4 mb-8 leading-relaxed", children: [
          "Discover how custom AI development can",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-green-600", children: " increase your revenue by 200%+" }),
          " and",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-600", children: " reduce costs by 45%" }),
          ". Schedule your complimentary consultation with our AI experts today."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-blue-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "500+ Clients Served" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "$50M+ Revenue Generated" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-purple-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Enterprise Security" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-gray-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-orange-600" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "24/7 Support" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-9 lg:gap-10 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900", children: "Contact Our AI Experts" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Available 24/7 for enterprise clients" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-6 h-6 text-blue-600" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-1", children: "Enterprise Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-700 font-medium", children: "contact@deepiotics.com" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Response within 2 hours" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-6 h-6 text-purple-600" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-1", children: "Direct Line" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-700 font-medium", children: "+91 8827272142" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Mon-Fri 9AM-6PM IST" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-6 h-6 text-green-600" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-1", children: "Global Headquarters" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-700", children: "204, Atulya IT Park Indore, MP 452016 India" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Visit by appointment" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-2xl border border-blue-100/50 hover:shadow-3xl transition-all duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-2xl font-bold text-gray-900", children: "Why Choose Deepiotics?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-gray-900", children: "10+ Years AI Expertise" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Proven track record with Fortune 500 companies" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-gray-900", children: "Guaranteed ROI in 6 Months" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Or we'll work for free until you see results" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-gray-900", children: "500+ Trusted Partners" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "From startups to enterprise corporations" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start space-x-4 p-3 rounded-xl hover:bg-white/70 transition-all duration-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-gray-900", children: "1000+ AI Implementations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Across 50+ industries worldwide" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://tidycal.com/team/deepiotics-team/call",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule Free Strategy Call" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Start Your AI Transformation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Fill out the form below and our AI experts will contact you within 24 hours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", children: "Your Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    id: "name",
                    name: "name",
                    required: true,
                    value: formData.name,
                    onChange: handleChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                    placeholder: "Your full name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Business Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    required: true,
                    value: formData.email,
                    onChange: handleChange,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                    placeholder: "your.email@company.com"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 mb-2", children: "Company Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "company",
                  name: "company",
                  required: true,
                  value: formData.company,
                  onChange: handleChange,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                  placeholder: "Your Company"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "block text-sm font-medium text-gray-700 mb-2", children: "AI Service Interest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "service",
                  name: "service",
                  value: formData.service,
                  onChange: handleChange,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select AI service of interest" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "custom-ai-development", children: "Custom AI Development" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "machine-learning-services", children: "Machine Learning Services" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ai-automation", children: "AI Process Automation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "computer-vision", children: "Computer Vision Solutions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "nlp-services", children: "Natural Language Processing" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ai-integration", children: "Enterprise AI Integration" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ai-consulting", children: "AI Strategy Consulting" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Project Details *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  required: true,
                  rows: 4,
                  value: formData.message,
                  onChange: handleChange,
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none",
                  placeholder: "Describe your AI project goals, current challenges, and how we can help transform your business..."
                }
              )
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                disabled: isSubmitted || isSubmitting,
                className: "group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center space-x-3", children: isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Request Submitted Successfully!" })
                  ] }) : isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Submitting Your Request..." })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-6 h-6 group-hover:rotate-12 transition-transform" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Free AI Consultation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-gray-500 mt-4", children: [
              "🔒 Your information is secure and will never be shared.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "100% confidential consultation." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center space-x-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 animate-bounce", style: { animationDelay: "0s", animationDuration: "3s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-gray-700", children: "SSL Secured" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 animate-bounce", style: { animationDelay: "1s", animationDuration: "3s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-gray-700", children: "24h Response" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 animate-bounce", style: { animationDelay: "2s", animationDuration: "3s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-gray-700", children: "ISO Certified" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-center text-lg font-semibold text-gray-800 mb-4", children: "What Happens Next?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse", children: "1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors", children: "AI Expert Reviews Your Requirements" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "Within 2 hours" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse", style: { animationDelay: "1s" }, children: "2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors", children: "Free Strategy Session Scheduled" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600", children: "30-minute consultation" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const Footer = () => {
  const [email, setEmail] = reactExports.useState("");
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [isRocketLaunching, setIsRocketLaunching] = reactExports.useState(false);
  const handleRocketLaunch = () => {
    setIsRocketLaunching(true);
    setTimeout(() => setIsRocketLaunching(false), 6e3);
  };
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwbCWJRZVLmzvod0BLu24fmbAuNlsYrV5YDTjBv60wp0kWmvA0MaqdwaNVt1CMJl1rX/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const apiUrl = `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/newsletter-subscribe`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Failed to subscribe. Please try again.");
        return;
      }
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3e3);
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-600/15 to-blue-500/15 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "4s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: "50px 50px",
        animation: "float 20s ease-in-out infinite"
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/LogoDeepiotics1.png",
                alt: "Deepiotics Logo",
                className: "h-16 w-auto mb-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-25 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6 leading-relaxed text-sm", children: "Leading AI development company specializing in custom machine learning solutions, enterprise AI automation, and intelligent business transformation for 100+ companies worldwide." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.linkedin.com/company/deepiotics",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://share.google/T98ArPPYIYaTLTVZ9",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://share.google/SHS9rC3Rumrp9DahO",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-green-400/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-300", children: "Industry Leading AI Solutions" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold mb-6 text-lg flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3" }),
            "AI Development Services"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Custom AI Development"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Machine Learning Services"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "AI-Powered Data Analytics"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "AI Security & Compliance"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "AI Process Automation"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Enterprise AI Integration"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold mb-6 text-lg flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3" }),
            "Quick Links"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Services"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/about", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "About Us"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/portfolio", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Portfolio"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/blog", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Blog"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/careers", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Careers"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/contact", className: "text-gray-400 hover:text-white transition-colors text-sm flex items-center group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:w-2 transition-all" }),
              "Contact"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold mb-6 text-lg flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3" }),
            "Contact Our AI Experts"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-blue-400 group-hover:text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-white mb-1", children: "Headquarters" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "204, Atulya IT Park" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Indore, MP 452016, India" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-3 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-purple-400 group-hover:text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-white mb-1", children: "Email Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contact@deepiotics.com", className: "hover:text-white transition-colors", children: "contact@deepiotics.com" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 mt-10 sm:mt-12 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-6 border border-white/10 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 gap-6 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 px-4 py-2 rounded-full mb-6 border border-white/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-blue-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-white tracking-wider", children: "EXCLUSIVE NEWSLETTER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-ping" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold mb-3 text-white leading-tight", children: [
            "Get AI Insights That",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: " Drive Results" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Join 8,500+ industry leaders receiving weekly AI trends, exclusive case studies, and actionable insights." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 text-xs text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-3 h-3 text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Weekly AI Updates" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-3 h-3 text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Exclusive Content" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-3 h-3 text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No Spam" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubscribe, className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "Enter your professional email",
                disabled: isSubmitting || isSubmitted,
                className: "flex-1 px-5 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm disabled:opacity-50 transition-all"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting || isSubmitted,
                className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",
                children: isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subscribed!" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isSubmitting ? "Subscribing..." : "Subscribe Now" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              }
            )
          ] }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-400 text-sm mt-2", children: error })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 mt-8 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-sm flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "© 2025 Deepiotics Pvt. Ltd. All rights reserved" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Privacy Policy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Terms of Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "text-gray-400 hover:text-white transition-all duration-300 relative group flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cookie Policy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-px h-4 bg-white/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleRocketLaunch,
              className: "flex items-center space-x-1 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚀" })
            }
          )
        ] })
      ] }) })
    ] }),
    isRocketLaunching && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[9999] pointer-events-none overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-black animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: [...Array(50)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute w-1 h-1 bg-white rounded-full animate-pulse",
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 transform -translate-x-1/2 rocket-launch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-8xl animate-bounce", style: {
          animation: "rocketLaunch 6s ease-out forwards"
        }, children: "🚀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 w-8 h-32 bg-gradient-to-t from-orange-500 via-red-500 to-yellow-400 rounded-full opacity-80 animate-pulse rocket-fire" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-48 bg-gray-400 opacity-30 rounded-full animate-ping rocket-smoke" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl font-bold text-white mb-4 animate-pulse", children: "🚀 LAUNCHING! 🚀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl text-gray-300 animate-bounce", children: "Taking Your Business to New Heights!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        @keyframes rocketLaunch {
          0% {
            bottom: -100px;
            transform: translateX(-50%) rotate(0deg);
          }
          20% {
            bottom: 20vh;
            transform: translateX(-50%) rotate(-5deg);
          }
          40% {
            bottom: 40vh;
            transform: translateX(-50%) rotate(5deg);
          }
          60% {
            bottom: 60vh;
            transform: translateX(-50%) rotate(-3deg);
          }
          80% {
            bottom: 80vh;
            transform: translateX(-50%) rotate(2deg);
          }
          100% {
            bottom: 120vh;
            transform: translateX(-50%) rotate(0deg);
          }
        }
        
        .rocket-fire {
          animation: fireFlicker 0.1s infinite alternate;
        }
        
        @keyframes fireFlicker {
          0% { height: 32px; opacity: 0.8; }
          100% { height: 48px; opacity: 1; }
        }
        
        .rocket-smoke {
          animation: smokeExpand 6s ease-out forwards;
        }
        
        @keyframes smokeExpand {
          0% { width: 96px; height: 48px; opacity: 0.3; }
          50% { width: 192px; height: 96px; opacity: 0.2; }
          100% { width: 384px; height: 192px; opacity: 0; }
        }
      ` })
  ] });
};
const ChatbotWidget = ({
  customerName = "Guest",
  customerId = "guest_user"
}) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [isMinimized, setIsMinimized] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([
    {
      id: "1",
      text: "Good day! I'm Olivia, your AI technology consultant at Deepiotics.\n\nI operate with advanced intelligence and voice capabilities to help you explore our engineering solutions. How may I assist you today?",
      sender: "olivia",
      timestamp: /* @__PURE__ */ new Date()
    }
  ]);
  const [inputText, setInputText] = reactExports.useState("");
  const [isListening, setIsListening] = reactExports.useState(false);
  const [isSpeaking, setIsSpeaking] = reactExports.useState(false);
  const [voiceEnabled, setVoiceEnabled] = reactExports.useState(true);
  const [conversationContext, setConversationContext] = reactExports.useState([]);
  const [micPermission, setMicPermission] = reactExports.useState("prompt");
  const [voiceError, setVoiceError] = reactExports.useState("");
  const [continuousVoiceMode, setContinuousVoiceMode] = reactExports.useState(false);
  const [showLeadForm, setShowLeadForm] = reactExports.useState(false);
  const [leadFormData, setLeadFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmittingLead, setIsSubmittingLead] = reactExports.useState(false);
  const [leadSubmitted, setLeadSubmitted] = reactExports.useState(false);
  const messagesEndRef = reactExports.useRef(null);
  const recognitionRef = reactExports.useRef(null);
  const synthRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "microphone" }).then((result) => {
        setMicPermission(result.state);
        result.onchange = () => {
          setMicPermission(result.state);
        };
      }).catch(() => {
        setMicPermission("prompt");
      });
    }
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.maxAlternatives = 1;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setVoiceError("");
        handleSendMessage(transcript, true);
      };
      recognitionRef.current.onerror = (event) => {
        setIsListening(false);
        if (event.error === "not-allowed") {
          setVoiceError("Microphone access denied. Please allow microphone permission in your browser settings.");
          setMicPermission("denied");
        } else if (event.error === "no-speech") {
          setVoiceError("No speech detected. Please try again.");
        } else if (event.error === "network") {
          setVoiceError("Network error. Please check your connection.");
        } else {
          setVoiceError("Voice input error. Please try again.");
        }
      };
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    synthRef.current = window.speechSynthesis;
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);
  reactExports.useEffect(() => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const speak = (text) => {
    if (!voiceEnabled || !synthRef.current) return;
    synthRef.current.cancel();
    const loadVoices = () => {
      return new Promise((resolve) => {
        var _a;
        let voices = ((_a = synthRef.current) == null ? void 0 : _a.getVoices()) || [];
        if (voices.length > 0) {
          resolve(voices);
        } else {
          if (synthRef.current) {
            synthRef.current.onvoiceschanged = () => {
              var _a2;
              voices = ((_a2 = synthRef.current) == null ? void 0 : _a2.getVoices()) || [];
              resolve(voices);
            };
          }
        }
      });
    };
    loadVoices().then((voices) => {
      const utterance = new SpeechSynthesisUtterance(text);
      const preferredVoices = [
        "Google UK English Female",
        "Google US English Female",
        "Microsoft Zira Desktop",
        "Microsoft Zira",
        "Samantha",
        "Karen",
        "Victoria",
        "Fiona",
        "Moira",
        "Tessa"
      ];
      let selectedVoice = null;
      for (const preferred of preferredVoices) {
        selectedVoice = voices.find((v) => v.name.includes(preferred));
        if (selectedVoice) break;
      }
      if (!selectedVoice) {
        selectedVoice = voices.find(
          (v) => (v.lang === "en-GB" || v.lang === "en-US") && (v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("woman"))
        );
      }
      if (!selectedVoice) {
        selectedVoice = voices.find((v) => v.lang === "en-GB" || v.lang === "en-US");
      }
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      } else {
        utterance.lang = "en-GB";
      }
      utterance.rate = 0.95;
      utterance.pitch = 0.85;
      utterance.volume = 1;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        if (continuousVoiceMode && recognitionRef.current) {
          setTimeout(() => {
            try {
              recognitionRef.current.start();
              setIsListening(true);
            } catch (e) {
              console.log("Recognition restart failed:", e);
              setContinuousVoiceMode(false);
            }
          }, 1e3);
        }
      };
      utterance.onerror = () => setIsSpeaking(false);
      if (synthRef.current) {
        synthRef.current.speak(utterance);
      }
    });
  };
  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };
  const toggleVoiceInput = async () => {
    if (!recognitionRef.current) {
      setVoiceError("Voice recognition not supported in this browser. Please use Chrome or Edge.");
      return;
    }
    if (isListening) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.log("Stop error:", e);
      }
      setIsListening(false);
      setContinuousVoiceMode(false);
      setVoiceError("");
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setVoiceError("Microphone access not available. Please use HTTPS and a modern browser.");
      return;
    }
    try {
      console.log("Requesting microphone permission...");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 44100
        }
      });
      console.log("Microphone permission granted");
      stream.getTracks().forEach((track) => {
        track.stop();
        console.log("Track stopped:", track.label);
      });
      setMicPermission("granted");
      setVoiceError("");
      setTimeout(() => {
        try {
          console.log("Starting speech recognition...");
          recognitionRef.current.start();
          setIsListening(true);
          console.log("Speech recognition started successfully");
        } catch (e) {
          console.error("Recognition start error:", e);
          if (e.message && e.message.includes("already started")) {
            setIsListening(true);
          } else {
            setVoiceError("Could not start voice recognition. Please refresh and try again.");
          }
        }
      }, 200);
    } catch (error) {
      console.error("Microphone access error:", error);
      setIsListening(false);
      if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
        setVoiceError("🎤 Microphone blocked! Click the lock icon 🔒 in address bar → Site Settings → Allow Microphone");
        setMicPermission("denied");
      } else if (error.name === "NotFoundError") {
        setVoiceError("No microphone detected. Please connect a microphone and try again.");
      } else if (error.name === "NotReadableError") {
        setVoiceError("Microphone is being used by another app. Please close other apps and try again.");
      } else if (error.name === "SecurityError") {
        setVoiceError("Security error. Please ensure you're using HTTPS and refresh the page.");
      } else {
        setVoiceError(`Microphone error: ${error.message || "Unknown error"}. Please refresh and try again.`);
      }
    }
  };
  const toggleContinuousVoice = async () => {
    if (continuousVoiceMode) {
      setContinuousVoiceMode(false);
      if (isListening && recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.log("Stop error:", e);
        }
        setIsListening(false);
      }
      if (isSpeaking && synthRef.current) {
        synthRef.current.cancel();
        setIsSpeaking(false);
      }
    } else {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setVoiceError("Microphone access not available. Please use HTTPS and a modern browser.");
        return;
      }
      try {
        console.log("Requesting microphone for continuous mode...");
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
            sampleRate: 44100
          }
        });
        console.log("Microphone granted for continuous mode");
        stream.getTracks().forEach((track) => {
          track.stop();
          console.log("Track stopped:", track.label);
        });
        setMicPermission("granted");
        setVoiceError("");
        setContinuousVoiceMode(true);
        setTimeout(() => {
          try {
            console.log("Starting continuous recognition...");
            recognitionRef.current.start();
            setIsListening(true);
            console.log("Continuous recognition started");
          } catch (e) {
            console.error("Continuous recognition error:", e);
            if (e.message && e.message.includes("already started")) {
              setIsListening(true);
            } else {
              setVoiceError("Could not start continuous mode. Try single voice input instead.");
              setContinuousVoiceMode(false);
            }
          }
        }, 200);
      } catch (error) {
        console.error("Continuous mode error:", error);
        if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
          setVoiceError("🎤 Microphone blocked! Click lock icon 🔒 → Site Settings → Allow Microphone");
          setMicPermission("denied");
        } else if (error.name === "NotReadableError") {
          setVoiceError("Microphone busy. Close other apps using microphone.");
        } else if (error.name === "SecurityError") {
          setVoiceError("Security error. Ensure HTTPS and refresh page.");
        } else {
          setVoiceError("Could not start continuous voice. Try single voice input instead.");
        }
      }
    }
  };
  const submitToHubSpot = async (formData) => {
    setIsSubmittingLead(true);
    try {
      const hubspotFormData = {
        fields: [
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: formData.name.split(" ")[0]
          },
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: formData.name.split(" ").slice(1).join(" ") || formData.name.split(" ")[0]
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: formData.email
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: formData.phone
          },
          {
            objectTypeId: "0-1",
            name: "lead_source",
            value: "Deepiotics Website - Olivia Bot"
          }
        ],
        context: {
          pageUri: window.location.href,
          pageName: "Deepiotics - Olivia Bot Lead Capture"
        }
      };
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/244512215/973bf6d5-1212-46d6-b866-8bf09df07006",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(hubspotFormData)
        }
      );
      if (response.ok) {
        setLeadSubmitted(true);
        setShowLeadForm(false);
        const successMsg = {
          id: Date.now().toString(),
          text: `🎉 Thank you ${formData.name}! Your details have been submitted successfully.

Our team will contact you within 24 hours to discuss your AI strategy.

In the meantime, feel free to ask me anything about our services!`,
          sender: "olivia",
          timestamp: /* @__PURE__ */ new Date()
        };
        setMessages((prev) => [...prev, successMsg]);
        speak(successMsg.text);
        setLeadFormData({ name: "", email: "", phone: "" });
      } else {
        throw new Error("Failed to submit to HubSpot");
      }
    } catch (error) {
      console.error("HubSpot submission error:", error);
      const errorMsg = {
        id: Date.now().toString(),
        text: "❌ Sorry, there was an error submitting your details. Please try again or contact us directly at contact@deepiotics.com",
        sender: "olivia",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsSubmittingLead(false);
    }
  };
  const getOliviaResponse = (userMessage, context) => {
    const msg = userMessage.toLowerCase();
    const hasAskedBefore = (topic) => context.some((c) => c.includes(topic));
    const leadTriggers = [
      "book",
      "schedule",
      "call",
      "meeting",
      "consultation",
      "strategy",
      "contact",
      "talk",
      "speak",
      "discuss",
      "demo",
      "interested",
      "pricing",
      "quote",
      "proposal",
      "help me",
      "get started"
    ];
    const shouldShowLeadForm = leadTriggers.some((trigger) => msg.includes(trigger));
    if (shouldShowLeadForm && !leadSubmitted) {
      setTimeout(() => setShowLeadForm(true), 500);
      return "I'd love to connect you with our team! 🎯\n\nLet me collect your details so we can schedule a free AI strategy call with you.\n\nPlease fill in the form below and we'll reach out within 24 hours.";
    }
    const websiteKnowledge = {
      location: "204, Atulya IT Park, Indore, MP 452016, India",
      email: "contact@deepiotics.com",
      phone: "+91 8827272142",
      services: [
        "Custom AI Development - Machine learning models, AI chatbots, intelligent document processing",
        "AI Agents - Autonomous task execution, multi-channel engagement, intelligent decision making",
        "Multi-Agent Systems - Agent orchestration, collaborative AI networks, adaptive learning",
        "AI Analytics - Business intelligence, real-time data processing, predictive analysis",
        "AI Integration - Custom API development, legacy system integration, cloud deployment",
        "Process Automation - Workflow automation, RPA, intelligent automation",
        "AI LinkedIn Growth - Personal branding, content strategy, lead generation",
        "AI Business Growth Suite - Complete digital transformation solutions"
      ],
      stats: {
        projects: "70+ AI Solutions Delivered",
        efficiency: "80% Average Efficiency Gain",
        savings: "35% Lower Operational Costs",
        clients: "100+ companies worldwide"
      },
      benefits: [
        "End-to-End Product Engineering",
        "Proven Experience With 70+ AI Projects",
        "Faster Time-to-Market",
        "Cost-Efficient Global Outsourcing"
      ],
      pages: {
        home: "Hero section with video background, services overview, AI capabilities, case studies",
        about: "Company details, team information, mission and vision",
        services: "Detailed service offerings with consultation booking",
        portfolio: "Case studies and success stories",
        careers: "Job listings and application portal",
        contact: "Contact form and company information",
        blog: "AI insights and industry updates"
      }
    };
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      if (hasAskedBefore("greeting")) {
        return "Welcome back! How can I provide further insight into our technology capabilities?";
      }
      return "Hello! I'm Olivia, your AI technology consultant at Deepiotics.\n\nWe specialise in AI development, automation, and enterprise software engineering. What specific challenge are you looking to address?";
    }
    if (msg.includes("service") || msg.includes("what do you do") || msg.includes("what can you do")) {
      if (hasAskedBefore("services")) {
        return "To expand on our capabilities:\n\nOur engineering approach focuses on precision architecture, scalable infrastructure, and long-term partnership. We handle the complete development lifecycle—from strategic planning through deployment and optimisation.\n\nWhich area aligns most closely with your current objectives?";
      }
      setConversationContext((prev) => [...prev, "services"]);
      return `Deepiotics delivers end-to-end technology solutions:

${websiteKnowledge.services.map((s) => "• " + s).join("\n")}

We engineer smarter, deliver faster, and customise deeply. Would you like to explore a specific domain?`;
    }
    if (msg.includes("stat") || msg.includes("number") || msg.includes("achievement") || msg.includes("result")) {
      return `Here are our proven results:

${Object.values(websiteKnowledge.stats).map((s) => "✓ " + s).join("\n")}

We've delivered measurable impact across ${websiteKnowledge.stats.clients}. Would you like to see specific case studies?`;
    }
    if (msg.includes("location") || msg.includes("address") || msg.includes("where") || msg.includes("office")) {
      return `Our office is located at:

📍 ${websiteKnowledge.location}

📧 Email: ${websiteKnowledge.email}
📞 Phone: ${websiteKnowledge.phone}

Would you like to schedule a visit or book a consultation?`;
    }
    if (msg.includes("page") || msg.includes("website") || msg.includes("navigate")) {
      return `Our website includes:

${Object.entries(websiteKnowledge.pages).map(([page, desc]) => `• ${page.charAt(0).toUpperCase() + page.slice(1)}: ${desc}`).join("\n")}

Which section would you like to explore?`;
    }
    if (msg.includes("benefit") || msg.includes("advantage") || msg.includes("why work")) {
      return `Key benefits of working with Deepiotics:

${websiteKnowledge.benefits.map((b) => "✓ " + b).join("\n")}

We focus on delivering real business value. Would you like to discuss your specific needs?`;
    }
    if (msg.includes("why choose") || msg.includes("why deepiotics") || msg.includes("what makes you")) {
      if (hasAskedBefore("why")) {
        return "Beyond technical excellence, our strategic advantage lies in:\n\n• Architectural precision that scales with your growth\n• Predictable delivery through proven methodologies\n• Security-first engineering culture\n• Long-term partnership mindset—not transactional engagements\n\nWe've helped 100+ organisations achieve measurable competitive advantages. Shall we discuss your specific requirements?";
      }
      setConversationContext((prev) => [...prev, "why"]);
      return "Excellent question. Here's our strategic differentiation:\n\n✓ Engineering excellence with 15+ years of proven expertise\n✓ AI-first approach to complex business challenges\n✓ Deep customisation aligned to your exact requirements\n✓ Scalable, secure, enterprise-grade architecture\n✓ Delivery discipline with transparent communication\n\nOur clients achieve measurable ROI through superior engineering quality. Would you like to see specific case studies?";
    }
    if (msg.includes("ai") || msg.includes("artificial intelligence") || msg.includes("machine learning")) {
      if (hasAskedBefore("ai")) {
        return "Our AI engineering extends beyond standard implementations:\n\nWe architect multi-agent systems, build custom ML pipelines, and integrate AI seamlessly into existing infrastructure. Recent projects include predictive analytics platforms, intelligent automation systems, and computer vision solutions.\n\nClients typically see 80%+ efficiency gains and 35% operational cost reduction. What's your specific AI use case?";
      }
      setConversationContext((prev) => [...prev, "ai"]);
      return "AI is our core engineering strength. We specialise in:\n\n• Custom AI Development tailored to business logic\n• Multi-Agent Systems for complex orchestration\n• Machine Learning models with production-grade accuracy\n• Natural Language Processing & conversational AI\n• Computer Vision for intelligent visual analysis\n• Predictive Analytics for strategic decision-making\n\nOur solutions deliver measurable business impact. Would you like to discuss a specific application?";
    }
    if (msg.includes("price") || msg.includes("cost") || msg.includes("budget") || msg.includes("investment")) {
      if (hasAskedBefore("pricing")) {
        return "Our pricing philosophy centres on value delivery and transparent partnership.\n\nWe structure engagements based on your strategic objectives—whether that's fixed-scope delivery, flexible time-and-materials, or ongoing retainer partnerships.\n\nI'd recommend a brief consultation where we can understand your requirements and provide a tailored proposal. Shall I arrange that?";
      }
      setConversationContext((prev) => [...prev, "pricing"]);
      return "Our pricing reflects the strategic value and engineering quality we deliver.\n\nWe offer:\n• Fixed-price projects for well-defined scopes\n• Time & materials for evolving requirements\n• Retainer partnerships for ongoing innovation\n\nEach engagement is tailored to your specific objectives. I'd be happy to arrange a free consultation where our team can provide a detailed, transparent proposal.\n\nWould you like to schedule a strategy session?";
    }
    if (msg.includes("contact") || msg.includes("call") || msg.includes("meeting") || msg.includes("book") || msg.includes("schedule")) {
      return "I'd be delighted to connect you with our engineering team.\n\n📞 Book a free AI strategy session:\nhttps://tidycal.com/team/deepiotics-team/call\n\n📧 Email our consultants:\ncontact@deepiotics.com\n\n📍 Visit our office:\n204, Atulya IT Park, Indore, MP 452016, India\n\nOur experts typically respond within 2 hours during business hours. Is there anything specific you'd like me to prepare for the consultation?";
    }
    if (msg.includes("portfolio") || msg.includes("case stud") || msg.includes("example") || msg.includes("project") || msg.includes("work")) {
      if (hasAskedBefore("portfolio")) {
        return "Our portfolio spans multiple industries with consistent results:\n\nManufacturing, healthcare, finance, logistics, and SaaS—each project delivered measurable ROI through precision engineering and strategic AI implementation.\n\nWe've generated £50M+ in client value through operational efficiency, cost reduction, and revenue enhancement. Which industry vertical interests you most?";
      }
      setConversationContext((prev) => [...prev, "portfolio"]);
      return "We've delivered 70+ successful AI and software engineering projects:\n\n🏭 Manufacturing: 87% defect reduction, £4.2M annual savings\n🏥 Healthcare: 96% diagnostic accuracy, 2000+ patients daily\n💰 Finance: 99.2% fraud detection, £12.5M losses prevented\n🚚 Logistics: 34% fuel cost reduction, 41% delivery improvement\n\nOur solutions consistently deliver measurable business impact. Would you like detailed case studies in your industry?";
    }
    if (msg.includes("how") || msg.includes("technical") || msg.includes("architecture") || msg.includes("implement")) {
      return "That's a thoughtful technical question.\n\nOur architectural approach emphasises:\n• Scalable, modular design patterns\n• Security-first engineering principles\n• Cloud-native infrastructure where appropriate\n• Seamless integration with existing systems\n\nThe specific implementation varies based on your requirements, infrastructure, and strategic objectives.\n\nWould you like me to arrange a technical consultation where our architects can provide detailed insights?";
    }
    return "That's an interesting question. As your AI technology consultant, I'm here to help you understand how our engineering capabilities can address your specific challenges.\n\nDeepiotics specialises in:\n• AI Development & Intelligent Automation\n• Custom Software & Enterprise Solutions\n• Cloud Engineering & Infrastructure\n• Data Analytics & Business Intelligence\n\nCould you tell me more about what you're looking to achieve? Or would you prefer to speak directly with one of our senior consultants?\n\nI can arrange a free strategy session immediately.";
  };
  const handleSendMessage = (text, isVoiceInput) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;
    const userMessage = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date(),
      isVoice: isVoiceInput
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setTimeout(() => {
      const response = getOliviaResponse(messageText, conversationContext);
      const oliviaMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "olivia",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, oliviaMessage]);
      if (voiceEnabled && isVoiceInput) {
        speak(response);
      }
    }, 400);
  };
  const quickActions = [
    { icon: "🔍", text: "Explore Services" },
    { icon: "📞", text: "Book a Call" },
    { icon: "❓", text: "Why Choose Us?" }
  ];
  if (!isOpen) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/Olivia.PNG",
              alt: "Olivia",
              className: "w-10 h-10 rounded-full border-2 border-white",
              onError: (e) => {
                e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia&backgroundColor=b6e3f4";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ${isMinimized ? "w-80 sm:w-80" : "w-[calc(100vw-2rem)] sm:w-96 max-w-md"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 relative flex flex-col ${isMinimized ? "h-20" : "h-[85vh] sm:h-[600px] max-h-[600px]"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-pink-500 to-rose-500 p-4 flex items-center justify-between flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/Olivia.PNG",
              alt: "Olivia",
              className: "w-12 h-12 rounded-full border-2 border-white",
              onError: (e) => {
                e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia&backgroundColor=b6e3f4";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold text-lg", children: "Olivia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs", children: "AI Consultant • Online" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggleContinuousVoice,
            className: `transition-colors p-2 ${continuousVoiceMode ? "text-green-400 animate-pulse" : "text-white/80 hover:text-white"}`,
            title: continuousVoiceMode ? "Stop continuous voice" : "Start continuous voice conversation",
            children: continuousVoiceMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsMinimized(!isMinimized),
            className: "text-white/80 hover:text-white transition-colors p-2",
            children: isMinimized ? /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "text-white/80 hover:text-white transition-colors p-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }),
    !isMinimized && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-3 sm:p-4 bg-gradient-to-b from-gray-50 to-white", children: [
        messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`, children: [
              message.sender === "olivia" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-gray-600", children: "Olivia" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${message.sender === "user" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-white border border-gray-200 text-gray-800"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm whitespace-pre-line leading-relaxed break-words", children: message.text }),
                    message.isVoice && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1 mt-1 text-xs opacity-70", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Voice message" })
                    ] })
                  ]
                }
              )
            ] })
          },
          message.id
        )),
        isSpeaking && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-pink-500 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Olivia is speaking..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: stopSpeaking, className: "text-xs underline", children: "Stop" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
      ] }),
      showLeadForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-800 mb-2", children: "Get Your Free Strategy Call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Fill in your details below and our team will contact you within 24 hours" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          submitToHubSpot(leadFormData);
        }, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Enter your full name",
              value: leadFormData.name,
              onChange: (e) => setLeadFormData({ ...leadFormData, name: e.target.value }),
              required: true,
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "Enter your email address (required)",
              value: leadFormData.email,
              onChange: (e) => setLeadFormData({ ...leadFormData, email: e.target.value }),
              required: true,
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "tel",
              placeholder: "Phone with country code (e.g. +91) (required)",
              value: leadFormData.phone,
              onChange: (e) => setLeadFormData({ ...leadFormData, phone: e.target.value }),
              required: true,
              pattern: "\\+?[0-9]{10,15}",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowLeadForm(false),
                className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmittingLead,
                className: "flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg transition-all font-medium disabled:opacity-50",
                children: isSubmittingLead ? "Submitting..." : "Continue"
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-2 sm:px-4 sm:py-3 flex flex-wrap gap-1 sm:gap-2 border-t border-gray-200 bg-white overflow-x-auto flex-shrink-0", children: quickActions.map((action, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => handleSendMessage(action.text),
          className: "px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-full text-xs hover:bg-gray-50 transition-colors flex items-center space-x-1 whitespace-nowrap flex-shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: action.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: action.text })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 sm:p-4 bg-white border-t border-gray-200 flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60px] sm:min-h-[48px]", children: [
          continuousVoiceMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 p-2 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700 flex items-center space-x-1 sm:space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-3 h-3 sm:w-4 sm:h-4 animate-pulse flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[10px] sm:text-xs", children: "Voice Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 hidden sm:inline text-[10px] sm:text-xs", children: "- Speak naturally" })
          ] }),
          voiceError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 p-2 bg-red-50 border border-red-200 rounded-lg text-[10px] sm:text-xs text-red-600 flex items-start space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 text-xs", children: "⚠️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-words flex-1", children: voiceError }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setVoiceError(""), className: "ml-auto text-red-400 hover:text-red-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1 sm:space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: inputText,
              onChange: (e) => setInputText(e.target.value),
              onKeyPress: (e) => e.key === "Enter" && handleSendMessage(),
              placeholder: "Type message...",
              className: "flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs sm:text-sm"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: toggleVoiceInput,
              className: `p-2 sm:p-3 rounded-full transition-all relative flex-shrink-0 ${isListening ? "bg-red-500 text-white animate-pulse" : micPermission === "denied" ? "bg-gray-300 text-gray-500" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`,
              title: micPermission === "denied" ? "Microphone access denied" : isListening ? "Stop listening" : "Start voice input",
              children: [
                isListening ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { className: "w-4 h-4 sm:w-5 sm:h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
                micPermission === "denied" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleSendMessage(),
              className: "p-2 sm:p-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-lg transition-all flex-shrink-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 sm:w-5 sm:h-5" })
            }
          )
        ] })
      ] })
    ] })
  ] }) });
};
function AdminLogin() {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/admin-login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          },
          body: JSON.stringify({ email, password })
        }
      );
      const data = await response.json();
      if (response.ok && data.success) {
        localStorage.setItem("admin_token", data.token);
        window.location.href = "/admin/dashboard";
      } else {
        setError(data.error || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-8 h-8 text-blue-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Admin Login" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Enter your credentials to access the admin panel" })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-800 text-sm", children: error }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              id: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              required: true,
              className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
              placeholder: "admin@example.com"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 mb-2", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5 text-gray-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              id: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              required: true,
              className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
              placeholder: "Enter your password"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          children: loading ? "Signing in..." : "Sign In"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-sm text-gray-600 hover:text-gray-900 transition-colors", children: "← Back to Home" }) })
  ] }) }) });
}
const AdminBlog = ({ token }) => {
  const [posts, setPosts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingPost, setEditingPost] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    title: "",
    slug: "",
    featured_image: "",
    short_description: "",
    content: "",
    author_name: "",
    published_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    is_published: false
  });
  const [error, setError] = reactExports.useState("");
  const [success, setSuccess] = reactExports.useState("");
  const [imageFile, setImageFile] = reactExports.useState(null);
  const [imagePreview, setImagePreview] = reactExports.useState("");
  const [uploading, setUploading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const apiUrl = `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/blog-manage/all`;
      const response = await fetch(apiUrl, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (err) {
      setError("Failed to load blog posts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  };
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...name === "title" && !editingPost ? { slug: generateSlug(value) } : {}
    }));
  };
  const handleImageChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size must be less than 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const uploadImage = async () => {
    if (!imageFile) return null;
    setUploading(true);
    try {
      const formData2 = new FormData();
      formData2.append("file", imageFile);
      const apiUrl = `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/blog-image-upload`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData2
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload image");
      }
      const data = await response.json();
      return data.url;
    } catch (err) {
      console.error("Image upload error:", err);
      setError("Failed to upload image: " + (err instanceof Error ? err.message : "Unknown error"));
      return null;
    } finally {
      setUploading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (formData.short_description.length > 300) {
      setError("Short description must be 300 characters or less");
      return;
    }
    try {
      let imageUrl = formData.featured_image;
      if (imageFile) {
        const uploadedUrl = await uploadImage();
        if (!uploadedUrl) {
          setError("Failed to upload image. Please try again.");
          return;
        }
        imageUrl = uploadedUrl;
      }
      const apiUrl = editingPost ? `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/blog-manage/update/${editingPost.id}` : `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/blog-manage/create`;
      const response = await fetch(apiUrl, {
        method: editingPost ? "PUT" : "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          featured_image: imageUrl
        })
      });
      if (!response.ok) {
        throw new Error("Failed to save post");
      }
      setSuccess(editingPost ? "Post updated successfully!" : "Post created successfully!");
      setShowForm(false);
      setEditingPost(null);
      resetForm();
      fetchPosts();
    } catch (err) {
      setError("Failed to save post");
      console.error(err);
    }
  };
  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      featured_image: post.featured_image || "",
      short_description: post.short_description,
      content: post.content,
      author_name: post.author_name,
      published_date: post.published_date.split("T")[0],
      is_published: post.is_published
    });
    setImagePreview(post.featured_image || "");
    setImageFile(null);
    setShowForm(true);
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return;
    }
    try {
      const apiUrl = `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/blog-manage/delete/${id}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      setSuccess("Post deleted successfully!");
      fetchPosts();
    } catch (err) {
      setError("Failed to delete post");
      console.error(err);
    }
  };
  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      featured_image: "",
      short_description: "",
      content: "",
      author_name: "",
      published_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      is_published: false
    });
    setImageFile(null);
    setImagePreview("");
  };
  const handleCancel = () => {
    setShowForm(false);
    setEditingPost(null);
    resetForm();
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Blog Management" }),
      !showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setShowForm(true),
          className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Post" })
          ]
        }
      )
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg", children: error }),
    success && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg", children: success }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: editingPost ? "Edit Post" : "Create New Post" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "title",
              value: formData.title,
              onChange: handleInputChange,
              required: true,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Slug *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              name: "slug",
              value: formData.slug,
              onChange: handleInputChange,
              required: true,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Featured Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handleImageChange,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Upload an image (max 5MB, JPG, PNG, GIF)" }),
          imagePreview && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: imagePreview,
              alt: "Preview",
              className: "w-full max-w-md h-48 object-cover rounded-lg border"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Short Description * (max 300 characters)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              name: "short_description",
              value: formData.short_description,
              onChange: handleInputChange,
              required: true,
              maxLength: 300,
              rows: 3,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [
            formData.short_description.length,
            "/300 characters"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Content *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              name: "content",
              value: formData.content,
              onChange: handleInputChange,
              required: true,
              rows: 10,
              className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Author Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                name: "author_name",
                value: formData.author_name,
                onChange: handleInputChange,
                required: true,
                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Published Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                name: "published_date",
                value: formData.published_date,
                onChange: handleInputChange,
                required: true,
                className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              name: "is_published",
              checked: formData.is_published,
              onChange: handleInputChange,
              className: "w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "ml-2 text-sm font-medium text-gray-700", children: "Publish immediately" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: uploading,
              className: "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: uploading ? "Uploading..." : `${editingPost ? "Update" : "Create"} Post` })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleCancel,
              disabled: uploading,
              className: "bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cancel" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    !showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Author" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Published Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: post.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: post.author_name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${post.is_published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
              children: post.is_published ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 mr-1" }),
                "Published"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3 h-3 mr-1" }),
                "Draft"
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(post.published_date).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleEdit(post),
                className: "text-blue-600 hover:text-blue-900 mr-4",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelete(post.id),
                className: "text-red-600 hover:text-red-900",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }, post.id)) })
      ] }),
      posts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-gray-500", children: "No blog posts yet. Create your first post!" })
    ] })
  ] });
};
function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [activeSection, setActiveSection] = reactExports.useState("dashboard");
  const [adminToken, setAdminToken] = reactExports.useState("");
  reactExports.useEffect(() => {
    verifyAuth();
  }, []);
  const verifyAuth = async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      window.location.href = "/admin";
      return;
    }
    setAdminToken(token);
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/admin-verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          },
          body: JSON.stringify({ token })
        }
      );
      const data = await response.json();
      if (response.ok && data.valid) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("admin_token");
        window.location.href = "/admin";
      }
    } catch (err) {
      console.error("Auth verification error:", err);
      localStorage.removeItem("admin_token");
      window.location.href = "/admin";
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    window.location.href = "/admin";
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600", children: "Verifying authentication..." })
    ] }) });
  }
  if (!isAuthenticated) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-white shadow-sm border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "w-8 h-8 text-blue-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "ml-3 text-xl font-bold text-gray-900", children: "Admin Dashboard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleLogout,
          className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
            "Logout"
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: activeSection === "dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Welcome back!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Manage your website content and settings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/admin/career",
            className: "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-6 h-6 text-blue-600" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Career Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Manage job postings and applications" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setActiveSection("blog"),
            className: "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 group text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-6 h-6 text-green-600" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Blog Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Create and manage blog posts" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6 border border-gray-200 opacity-50 cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-gray-400" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "User Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Coming soon" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6 border border-gray-200 opacity-50 cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-gray-400" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Content Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Coming soon" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveSection("dashboard"),
          className: "mb-6 text-gray-600 hover:text-gray-900 font-medium",
          children: "← Back to Dashboard"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AdminBlog, { token: adminToken })
    ] }) })
  ] });
}
function AdminCareer() {
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [jobs, setJobs] = reactExports.useState([]);
  const [editingJob, setEditingJob] = reactExports.useState(null);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [viewingApplications, setViewingApplications] = reactExports.useState(null);
  const [applications, setApplications] = reactExports.useState([]);
  const [loadingApplications, setLoadingApplications] = reactExports.useState(false);
  reactExports.useEffect(() => {
    verifyAuth();
  }, []);
  const verifyAuth = async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      window.location.href = "/admin";
      return;
    }
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/admin-verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          },
          body: JSON.stringify({ token })
        }
      );
      const data = await response.json();
      if (response.ok && data.valid) {
        setIsAuthenticated(true);
        loadJobs();
      } else {
        localStorage.removeItem("admin_token");
        window.location.href = "/admin";
      }
    } catch (err) {
      console.error("Auth verification error:", err);
      localStorage.removeItem("admin_token");
      window.location.href = "/admin";
    } finally {
      setLoading(false);
    }
  };
  const loadJobs = async () => {
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/jobs-manage?admin=true`,
        {
          headers: {
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (err) {
      console.error("Error loading jobs:", err);
    }
  };
  const loadApplications = async (jobId) => {
    setLoadingApplications(true);
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/job-applications?job_id=${jobId}`,
        {
          headers: {
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    } catch (err) {
      console.error("Error loading applications:", err);
    } finally {
      setLoadingApplications(false);
    }
  };
  const handleCreateJob = () => {
    setEditingJob({
      id: "",
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      description: "",
      requirements: "",
      salary_range: "",
      status: "active",
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    setShowForm(true);
  };
  const handleEditJob = (job) => {
    setEditingJob({ ...job });
    setShowForm(true);
  };
  const handleSaveJob = async () => {
    if (!editingJob) return;
    try {
      const url = editingJob.id ? `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/jobs-manage?id=${editingJob.id}` : `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/jobs-manage`;
      const response = await fetch(url, {
        method: editingJob.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
        },
        body: JSON.stringify(editingJob)
      });
      if (response.ok) {
        await loadJobs();
        setShowForm(false);
        setEditingJob(null);
      } else {
        alert("Failed to save job");
      }
    } catch (err) {
      console.error("Error saving job:", err);
      alert("Error saving job");
    }
  };
  const handleDeleteJob = async (id) => {
    if (!confirm("Are you sure you want to delete this job posting? This will also delete all applications.")) {
      return;
    }
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/jobs-manage?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          }
        }
      );
      if (response.ok) {
        await loadJobs();
      } else {
        alert("Failed to delete job");
      }
    } catch (err) {
      console.error("Error deleting job:", err);
      alert("Error deleting job");
    }
  };
  const handleToggleStatus = async (job) => {
    const newStatus = job.status === "active" ? "closed" : "active";
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/jobs-manage?id=${job.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          },
          body: JSON.stringify({ ...job, status: newStatus })
        }
      );
      if (response.ok) {
        await loadJobs();
      }
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };
  const handleViewApplications = (jobId) => {
    setViewingApplications(jobId);
    loadApplications(jobId);
  };
  const handleUpdateApplicationStatus = async (applicationId, newStatus) => {
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/job-applications`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          },
          body: JSON.stringify({ id: applicationId, status: newStatus })
        }
      );
      if (response.ok && viewingApplications) {
        loadApplications(viewingApplications);
      }
    } catch (err) {
      console.error("Error updating application status:", err);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600", children: "Loading..." })
    ] }) });
  }
  if (!isAuthenticated) {
    return null;
  }
  const selectedJob = viewingApplications ? jobs.find((j) => j.id === viewingApplications) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-white shadow-sm border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center h-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/admin/dashboard",
        className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-5 h-5" }),
          "Back to Dashboard"
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Career Management" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Manage job postings and applications" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleCreateJob,
            className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5" }),
              "Add Job"
            ]
          }
        )
      ] }),
      showForm && editingJob && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: editingJob.id ? "Edit Job" : "Create New Job" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setShowForm(false);
                setEditingJob(null);
              },
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Job Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: editingJob.title,
                onChange: (e) => setEditingJob({ ...editingJob, title: e.target.value }),
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                placeholder: "e.g., Senior AI Engineer"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Department" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: editingJob.department,
                  onChange: (e) => setEditingJob({ ...editingJob, department: e.target.value }),
                  className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "e.g., Engineering"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: editingJob.location,
                  onChange: (e) => setEditingJob({ ...editingJob, location: e.target.value }),
                  className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "e.g., Remote"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Job Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: editingJob.type,
                  onChange: (e) => setEditingJob({ ...editingJob, type: e.target.value }),
                  className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Full-time", children: "Full-time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Part-time", children: "Part-time" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Contract", children: "Contract" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Internship", children: "Internship" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Salary Range (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: editingJob.salary_range || "",
                  onChange: (e) => setEditingJob({ ...editingJob, salary_range: e.target.value }),
                  className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "e.g., $80k - $120k"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: editingJob.description,
                onChange: (e) => setEditingJob({ ...editingJob, description: e.target.value }),
                rows: 4,
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                placeholder: "Describe the role..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Requirements" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: editingJob.requirements,
                onChange: (e) => setEditingJob({ ...editingJob, requirements: e.target.value }),
                rows: 4,
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                placeholder: "List requirements..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: editingJob.status,
                onChange: (e) => setEditingJob({ ...editingJob, status: e.target.value }),
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Active" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "closed", children: "Closed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "draft", children: "Draft" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-gray-200 flex justify-end gap-3 sticky bottom-0 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setShowForm(false);
                setEditingJob(null);
              },
              className: "px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleSaveJob,
              className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                "Save Job"
              ]
            }
          )
        ] })
      ] }) }),
      viewingApplications && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: selectedJob == null ? void 0 : selectedJob.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setViewingApplications(null),
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: loadingApplications ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600", children: "Loading applications..." })
        ] }) : applications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-16 h-16 text-gray-400 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "No applications yet" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: applications.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: app.full_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gray-600 space-y-1 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Email: ",
                  app.email
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Phone: ",
                  app.phone
                ] }),
                app.linkedin_url && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "LinkedIn:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: app.linkedin_url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-blue-600 hover:underline",
                      children: app.linkedin_url
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                  "Applied: ",
                  new Date(app.created_at).toLocaleDateString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: app.status,
                onChange: (e) => handleUpdateApplicationStatus(app.id, e.target.value),
                className: "px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "reviewing", children: "Reviewing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "shortlisted", children: "Shortlisted" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rejected", children: "Rejected" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "accepted", children: "Accepted" })
                ]
              }
            )
          ] }),
          app.cover_letter && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Cover Letter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 bg-gray-50 p-4 rounded-lg whitespace-pre-wrap", children: app.cover_letter })
          ] })
        ] }, app.id)) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", children: jobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-4", children: "No job postings yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleCreateJob,
            className: "text-blue-600 hover:text-blue-700 font-medium",
            children: "Create your first job posting"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Job Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Applications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: jobs.map((job) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-gray-900", children: job.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: job.department }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: job.location }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: job.type }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleViewApplications(job.id),
              className: "flex items-center gap-2 text-sm text-blue-600 hover:text-blue-900",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                job.applicant_count || 0
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleToggleStatus(job),
              className: `px-3 py-1 rounded-full text-xs font-medium ${job.status === "active" ? "bg-green-100 text-green-800" : job.status === "closed" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`,
              children: job.status
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleEditJob(job),
                className: "text-blue-600 hover:text-blue-900 mr-4",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4 inline" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDeleteJob(job.id),
                className: "text-red-600 hover:text-red-900",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4 inline" })
              }
            )
          ] })
        ] }, job.id)) })
      ] }) }) })
    ] })
  ] });
}
function Careers() {
  const [jobs, setJobs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selectedJob, setSelectedJob] = reactExports.useState(null);
  const [showApplicationForm, setShowApplicationForm] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    full_name: "",
    email: "",
    phone: "",
    linkedin_url: "",
    cover_letter: ""
  });
  reactExports.useEffect(() => {
    loadJobs();
  }, []);
  const loadJobs = async () => {
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/jobs-manage`,
        {
          headers: {
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (err) {
      console.error("Error loading jobs:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setSubmitted(false);
  };
  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    if (!selectedJob) return;
    setSubmitting(true);
    try {
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/job-applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          },
          body: JSON.stringify({
            job_id: selectedJob.id,
            ...formData
          })
        }
      );
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          linkedin_url: "",
          cover_letter: ""
        });
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("Error submitting application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const closeModal = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setSubmitted(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-24 bg-gradient-to-b from-white to-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Join Our Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Be part of a team that's shaping the future of AI. We're looking for talented individuals who are passionate about innovation and making a real impact." })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600", children: "Loading opportunities..." })
      ] }) : jobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-16 h-16 text-gray-400 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "No Open Positions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "We don't have any open positions at the moment, but we're always looking for great talent. Check back soon!" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-2", children: jobs.map((job) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: job.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-sm text-gray-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4" }),
                  job.department
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                  job.location
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                  job.type
                ] }),
                job.salary_range && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-4 h-4" }),
                  job.salary_range
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 line-clamp-3", children: job.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleApply(job),
                className: "w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",
                children: "View Details & Apply"
              }
            )
          ]
        },
        job.id
      )) })
    ] }),
    showApplicationForm && selectedJob && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900", children: selectedJob.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm text-gray-600 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4" }),
              selectedJob.department
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
              selectedJob.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
              selectedJob.type
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: closeModal,
            className: "text-gray-400 hover:text-gray-600",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
          }
        )
      ] }),
      submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-16 h-16 text-green-600 mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Application Submitted!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-6", children: [
          "Thank you for applying to ",
          selectedJob.title,
          ". We've received your application and will review it carefully. If your qualifications match our needs, we'll be in touch soon."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: closeModal,
            className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",
            children: "Close"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "About the Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 whitespace-pre-wrap", children: selectedJob.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Requirements" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 whitespace-pre-wrap", children: selectedJob.requirements })
        ] }),
        selectedJob.salary_range && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Salary Range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: selectedJob.salary_range })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-200 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Apply for this Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmitApplication, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: formData.full_name,
                  onChange: (e) => setFormData({ ...formData, full_name: e.target.value }),
                  className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "John Doe"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    placeholder: "john@example.com"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Phone *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    required: true,
                    value: formData.phone,
                    onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    placeholder: "+91 8827272142"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "LinkedIn Profile (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "url",
                  value: formData.linkedin_url,
                  onChange: (e) => setFormData({ ...formData, linkedin_url: e.target.value }),
                  className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "https://linkedin.com/in/yourprofile"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Cover Letter *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  required: true,
                  value: formData.cover_letter,
                  onChange: (e) => setFormData({ ...formData, cover_letter: e.target.value }),
                  rows: 6,
                  className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "Tell us why you're interested in this position and why you'd be a great fit..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: closeModal,
                  className: "px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: submitting,
                  className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed",
                  children: submitting ? "Submitting..." : "Submit Application"
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-24 bg-gradient-to-b from-white via-blue-50/30 to-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-up", children: "About Deepiotics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up", style: { animationDelay: "0.1s" }, children: "Pioneering the future of business through artificial intelligence and innovation" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-20 animate-slide-up", style: { animationDelay: "0.2s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:scale-[1.02]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none text-gray-600 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Founded with a vision to democratize artificial intelligence, Deepiotics has emerged as a leading force in AI-driven business transformation. We believe that every organization, regardless of size or industry, should have access to cutting-edge AI solutions that drive real business value." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: "Our journey began when our founders recognized a critical gap in the market: businesses needed more than just AI tools they needed strategic partners who could understand their unique challenges and craft tailored solutions that deliver measurable results." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Today, Deepiotics stands at the forefront of AI innovation, helping businesses across industries harness the power of artificial intelligence to optimize operations, enhance customer experiences, and unlock new opportunities for growth." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white border-2 border-blue-400/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-16 h-16 mb-6 animate-bounce-slow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-95 leading-relaxed", children: "To empower businesses worldwide with intelligent AI solutions that transform challenges into opportunities, driving innovation, efficiency, and sustainable growth in an increasingly digital world." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 md:p-12 text-white border-2 border-purple-400/30 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.4s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-16 h-16 mb-6 animate-pulse-slow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-95 leading-relaxed", children: "To be the world's most trusted AI partner, recognized for creating transformative solutions that shape the future of business, foster innovation, and make advanced technology accessible to all." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12 animate-slide-up", style: { animationDelay: "0.5s" }, children: "Our Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-blue-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.6s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-6 h-6 text-blue-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Integrity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We operate with transparency, honesty, and ethical standards in everything we do, building trust with every interaction." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-purple-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.7s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-purple-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Innovation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We constantly push boundaries, embrace new technologies, and create groundbreaking solutions that drive progress." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-green-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.8s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-green-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Collaboration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We believe in the power of partnership, working closely with clients to achieve shared success and lasting impact." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-red-300 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.9s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-6 h-6 text-red-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Excellence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We strive for excellence in every project, delivering solutions that exceed expectations and create measurable value." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20 border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 animate-slide-up", style: { animationDelay: "1s" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12", children: "What Sets Us Apart" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Deep Expertise" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "Our team comprises world-class AI engineers, data scientists, and business strategists with decades of combined experience in developing and deploying enterprise-grade AI solutions." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Proven Track Record" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We've successfully delivered AI solutions for businesses across healthcare, finance, retail, manufacturing, and more, driving measurable ROI and operational excellence." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100 hover:shadow-lg transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "End-to-End Solutions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "From initial strategy and proof of concept to full-scale deployment and ongoing optimization, we partner with you throughout your entire AI journey." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 hover:shadow-lg transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Client-Centric Approach" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We don't believe in one-size-fits-all solutions. Every engagement begins with understanding your unique challenges, goals, and vision for success." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "1.1s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2", children: "500+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl text-gray-600 font-semibold", children: "Projects Completed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "1.2s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2", children: "200+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl text-gray-600 font-semibold", children: "Happy Clients" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 bg-white rounded-2xl shadow-lg border-2 border-pink-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "1.3s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent mb-2", children: "98%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl text-gray-600 font-semibold", children: "Client Satisfaction" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center border-2 border-white/20 hover:shadow-3xl transition-all duration-500 animate-slide-up", style: { animationDelay: "1.4s" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 animate-pulse-slow", children: "Ready to Transform Your Business?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-95 leading-relaxed", children: "Join hundreds of companies that trust Deepiotics to power their AI journey" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-200 hover:border-blue-400",
          children: "Schedule Your Free AI Strategy Session"
        }
      )
    ] })
  ] }) });
}
function ServicesPage() {
  const services = [
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Custom AI agents that automate complex tasks, make intelligent decisions, and interact naturally with users.",
      features: [
        "Conversational AI chatbots and virtual assistants",
        "Autonomous task execution and decision-making",
        "Multi-channel deployment (web, mobile, messaging)",
        "Natural language understanding and generation",
        "Context-aware responses and personalization",
        "Integration with existing business systems"
      ],
      benefits: [
        "24/7 automated customer support",
        "Reduced operational costs by up to 60%",
        "Improved response times and customer satisfaction",
        "Scalable solution that grows with your business"
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Advanced ML models tailored to your business needs, from predictive analytics to computer vision.",
      features: [
        "Custom model development and training",
        "Predictive analytics and forecasting",
        "Computer vision and image recognition",
        "Natural language processing",
        "Recommendation systems",
        "Anomaly detection and fraud prevention"
      ],
      benefits: [
        "Data-driven decision making",
        "Improved accuracy and efficiency",
        "Automated pattern recognition",
        "Enhanced business intelligence"
      ]
    },
    {
      icon: LineChart,
      title: "Business Intelligence & Analytics",
      description: "Transform raw data into actionable insights with our comprehensive BI and analytics solutions.",
      features: [
        "Real-time dashboards and reporting",
        "Data warehousing and ETL pipelines",
        "Advanced data visualization",
        "Predictive and prescriptive analytics",
        "Self-service BI tools",
        "Performance metrics and KPI tracking"
      ],
      benefits: [
        "Better strategic planning",
        "Faster time to insights",
        "Improved operational efficiency",
        "Data-driven culture"
      ]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that reduces manual work and increases efficiency.",
      features: [
        "Robotic Process Automation (RPA)",
        "Workflow optimization and automation",
        "Document processing and data extraction",
        "Integration with legacy systems",
        "Business rules engine",
        "Exception handling and monitoring"
      ],
      benefits: [
        "Up to 80% reduction in processing time",
        "Minimized human error",
        "Freed resources for strategic work",
        "Consistent and compliant processes"
      ]
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Engage customers with intelligent chatbots and voice assistants that understand context and intent.",
      features: [
        "Multi-language support",
        "Sentiment analysis and emotion detection",
        "Voice recognition and synthesis",
        "Context management and memory",
        "Seamless handoff to human agents",
        "Analytics and conversation insights"
      ],
      benefits: [
        "Enhanced customer experience",
        "Increased engagement rates",
        "Reduced support costs",
        "Global reach with localization"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data infrastructure that powers your AI and analytics initiatives.",
      features: [
        "Data pipeline architecture",
        "Real-time data streaming",
        "Data quality and governance",
        "Cloud and hybrid solutions",
        "Big data processing",
        "Data lake and warehouse design"
      ],
      benefits: [
        "Reliable and scalable data infrastructure",
        "Improved data quality and consistency",
        "Faster data processing",
        "Reduced infrastructure costs"
      ]
    },
    {
      icon: Cpu,
      title: "AI Strategy Consulting",
      description: "Expert guidance to develop and execute your AI transformation roadmap.",
      features: [
        "AI readiness assessment",
        "Use case identification and prioritization",
        "ROI analysis and business case development",
        "Technology stack recommendations",
        "Implementation roadmap",
        "Change management and training"
      ],
      benefits: [
        "Clear AI strategy aligned with business goals",
        "Reduced risk and faster time to value",
        "Organizational AI readiness",
        "Competitive advantage"
      ]
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI systems are secure, ethical, and compliant with regulations.",
      features: [
        "AI security audits and testing",
        "Bias detection and mitigation",
        "Privacy-preserving AI techniques",
        "Regulatory compliance (GDPR, CCPA, etc.)",
        "Model governance and monitoring",
        "Explainable AI implementation"
      ],
      benefits: [
        "Protected intellectual property",
        "Regulatory compliance assurance",
        "Trust and transparency",
        "Risk mitigation"
      ]
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Bespoke AI solutions built from the ground up to address your unique challenges.",
      features: [
        "Full-stack AI application development",
        "API development and integration",
        "Microservices architecture",
        "Cloud-native deployment",
        "Continuous integration and delivery",
        "Performance optimization"
      ],
      benefits: [
        "Tailored to exact requirements",
        "Competitive differentiation",
        "Full ownership and control",
        "Scalable and maintainable code"
      ]
    },
    {
      icon: Network,
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: [
        "Legacy system integration",
        "API and webhook development",
        "Middleware and orchestration",
        "Data synchronization",
        "Single sign-on and authentication",
        "Performance monitoring"
      ],
      benefits: [
        "Minimal disruption to operations",
        "Enhanced system capabilities",
        "Unified user experience",
        "Maximized existing investments"
      ]
    },
    {
      icon: CloudCog,
      title: "MLOps & Model Deployment",
      description: "Deploy, monitor, and maintain ML models in production with enterprise-grade MLOps practices.",
      features: [
        "Model versioning and registry",
        "Automated deployment pipelines",
        "A/B testing and experimentation",
        "Model monitoring and drift detection",
        "Scalable inference infrastructure",
        "Performance optimization"
      ],
      benefits: [
        "Faster model deployment",
        "Improved model reliability",
        "Reduced operational overhead",
        "Better model performance"
      ]
    },
    {
      icon: Zap,
      title: "AI-Powered Optimization",
      description: "Use AI to optimize business processes, resource allocation, and decision-making.",
      features: [
        "Supply chain optimization",
        "Dynamic pricing and revenue optimization",
        "Resource allocation and scheduling",
        "Demand forecasting",
        "Route optimization",
        "Inventory management"
      ],
      benefits: [
        "Reduced costs and waste",
        "Improved resource utilization",
        "Better customer satisfaction",
        "Increased profitability"
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 sm:py-12 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-gray-50 border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-8 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-slide-up", children: "Our Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up", style: { animationDelay: "0.1s" }, children: "Comprehensive AI solutions designed to transform your business and drive measurable results" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white border-2 border-white/20 hover:shadow-3xl transition-all duration-500 animate-slide-up", style: { animationDelay: "0.2s" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4 animate-pulse-slow", children: "End-to-End AI Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg opacity-95 mb-6 leading-relaxed", children: "From initial strategy and consultation to development, deployment, and ongoing optimization, we provide complete AI solutions that deliver real business value. Our team of experts works closely with you to understand your unique challenges and craft tailored solutions that drive innovation and growth." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2 text-lg", children: "Discovery & Strategy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90 leading-relaxed", children: "We analyze your needs and develop a comprehensive AI roadmap" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2 text-lg", children: "Development & Deployment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90 leading-relaxed", children: "We build and launch production-ready AI solutions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold mb-2 text-lg", children: "Support & Optimization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90 leading-relaxed", children: "We continuously monitor and improve your AI systems" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 animate-slide-up", style: { animationDelay: `${0.3 + index * 0.1}s` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "w-8 h-8 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: service.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Key Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 hover:translate-x-1 transition-transform duration-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600 mt-1 font-bold text-lg", children: "✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 leading-relaxed", children: feature })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Business Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.benefits.map((benefit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 hover:translate-x-1 transition-transform duration-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-600 mt-1 font-bold text-lg", children: "★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-600 leading-relaxed", children: benefit })
          ] }, idx)) })
        ] })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white text-center border-2 border-white/20 hover:shadow-3xl transition-all duration-500 animate-slide-up", style: { animationDelay: `${0.3 + services.length * 0.1}s` }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 animate-pulse-slow", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl mb-8 opacity-95 leading-relaxed", children: "Let's discuss how our AI solutions can transform your business" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-200 hover:border-blue-400",
          children: "Schedule Your Free Consultation"
        }
      )
    ] })
  ] }) });
}
function PortfolioPage() {
  const caseStudies = [
    {
      icon: Gamepad2,
      company: "Vyuh",
      industry: "Gaming & EdTech",
      title: "Vyuh The Game That Trains Modern Leaders Under Pressure",
      challenge: "Creating an engaging multiplayer gaming platform that revives ancient Indian warfare strategies while providing modern gaming experience with real-time battles, tournaments, and cultural education.",
      solution: "We developed Vyuh - a comprehensive gaming platform featuring ancient Indian tactical warfare based on Mahabharata formations. The platform includes real-time multiplayer battles, AI-powered opponent matching, tournament systems, offline practice modes, and educational content about Sanskrit terminology and historical battle strategies.",
      results: [
        "10,000+ active players globally",
        "500+ tournaments conducted",
        "4.8/5 user rating",
        "Available in 25 countries",
        "92% player retention rate"
      ],
      technologies: ["React", "Node.js", "WebSocket", "MongoDB", "AWS"],
      timeline: "6 months",
      team: "8 specialists",
      link: "https://www.vyuh9.in/",
      metrics: [
        { label: "Active Players", value: "10K+" },
        { label: "Tournaments", value: "500+" },
        { label: "Countries", value: "25" },
        { label: "User Rating", value: "4.8" }
      ],
      features: [
        { title: "Strategic Gameplay", desc: "Reviving ancient Indian warfare strategies through modern gaming mechanics with Chakravyuha formations." },
        { title: "Cultural Heritage", desc: "Educational platform teaching Mahabharata stories and ancient Indian tactical warfare systems." },
        { title: "Modern Features", desc: "Cross-platform gaming with responsive design and offline practice against AI opponents." }
      ]
    },
    {
      icon: Camera,
      company: "FutureVision",
      industry: "AI & Photography",
      title: "An AI-powered app that helps parents visualize, inspire, and emotionally connect with their child’s future.",
      challenge: "Parents wanted to visualize their children's future career possibilities in a meaningful way. Traditional photo editing was time-consuming and lacked emotional connection. Need for AI-powered solution that creates realistic future portraits.",
      solution: "We created FutureVision - an advanced AI portrait generator using deep learning algorithms for age progression and facial feature analysis. The platform generates professional career visualizations with realistic clothing and backgrounds for multiple career paths including doctor, pilot, entrepreneur, and artist roles.",
      results: [
        "50,000+ portraits generated",
        "95% accuracy in age progression",
        "4.9/5 customer satisfaction",
        "Privacy-focused data handling",
        "Shareable social media results"
      ],
      technologies: ["Python", "TensorFlow", "React", "AWS", "OpenCV"],
      timeline: "5 months",
      team: "10 specialists",
      link: "https://future-bloom-portraits.lovable.app",
      metrics: [
        { label: "Portraits Generated", value: "50K+" },
        { label: "AI Accuracy", value: "95%" },
        { label: "User Rating", value: "4.9" },
        { label: "Career Options", value: "12+" }
      ],
      features: [
        { title: "Advanced AI Technology", desc: "Deep learning algorithms for age progression and facial feature analysis with professional results." },
        { title: "Emotional Connection", desc: "Personalized experience creating emotional bonds with future possibilities for families." },
        { title: "Privacy First", desc: "Family-friendly interface with privacy-focused data handling and secure processing." }
      ]
    },
    {
      icon: Database,
      company: "ResearchHub",
      industry: "Research & Development",
      title: "Next-Gen Scientific Collaboration Network",
      challenge: "Researchers and organizations struggled to find verified collaborators for R&D projects. Lack of secure communication channels and milestone tracking led to project failures. Need for a trusted global marketplace connecting researchers with organizations.",
      solution: "We built ResearchHub - a comprehensive R&D marketplace platform connecting 20,000+ verified academic researchers with organizations across 200+ domains. The platform features credential verification, end-to-end encrypted communication, milestone tracking, secure payment systems, and real-time collaboration tools.",
      results: [
        "20,000+ verified researchers",
        "15,000+ active projects",
        "200+ research domains",
        "98% project completion rate",
        "End-to-end encryption"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      timeline: "8 months",
      team: "12 specialists",
      link: "https://researchhub-frontend.onrender.com/",
      metrics: [
        { label: "Verified Researchers", value: "20K+" },
        { label: "Active Projects", value: "15K+" },
        { label: "Research Domains", value: "200+" },
        { label: "Completion Rate", value: "98%" }
      ],
      features: [
        { title: "Verified Network", desc: "20,000+ verified academic researchers across 200+ domains with credential verification system." },
        { title: "Secure Collaboration", desc: "End-to-end encrypted communication with milestone tracking and secure payment systems." },
        { title: "Growth Metrics", desc: "Platform showing 33% YoY growth in researchers and 87% increase in active projects." }
      ]
    },
    {
      icon: ShoppingCart,
      company: "Global Retail Chain",
      industry: "E-commerce & Retail",
      title: "AI-Powered Personalization Engine",
      challenge: "A major retail chain was struggling with low conversion rates and high cart abandonment. Their generic product recommendations were not resonating with customers, leading to missed revenue opportunities.",
      solution: "We developed a sophisticated AI personalization engine that analyzes customer behavior, purchase history, browsing patterns, and demographic data to deliver hyper-personalized product recommendations in real-time.",
      results: [
        "45% increase in conversion rates",
        "32% reduction in cart abandonment",
        "$12M additional annual revenue",
        "28% improvement in average order value",
        "65% increase in customer engagement"
      ],
      technologies: ["TensorFlow", "Python", "AWS", "Redis", "PostgreSQL"],
      timeline: "4 months",
      team: "8 specialists"
    },
    {
      icon: Heart,
      company: "Regional Healthcare Network",
      industry: "Healthcare",
      title: "Predictive Patient Care Platform",
      challenge: "The healthcare network faced challenges with patient readmission rates, inefficient resource allocation, and difficulty predicting patient deterioration.",
      solution: "We built an AI-powered predictive analytics platform that monitors patient data in real-time, identifies high-risk patients, predicts potential complications, and recommends preventive interventions.",
      results: [
        "37% reduction in patient readmissions",
        "52% improvement in early detection",
        "$8M annual cost savings",
        "25% reduction in average length of stay",
        "89% clinician satisfaction rate"
      ],
      technologies: ["PyTorch", "Python", "Azure", "FHIR", "MongoDB"],
      timeline: "6 months",
      team: "12 specialists"
    },
    {
      icon: Building2,
      company: "Manufacturing Enterprise",
      industry: "Manufacturing",
      title: "Predictive Maintenance System",
      challenge: "Unexpected equipment failures were causing production downtime, costing millions in lost productivity. Traditional preventive maintenance was either too early or too late.",
      solution: "We implemented an IoT-enabled predictive maintenance solution using machine learning to analyze sensor data from equipment, predict failures before they occur, and optimize maintenance schedules.",
      results: [
        "68% reduction in unplanned downtime",
        "43% decrease in maintenance costs",
        "$15M annual savings",
        "35% improvement in equipment lifespan",
        "92% prediction accuracy"
      ],
      technologies: ["Scikit-learn", "Python", "Azure IoT", "Time Series DB", "Power BI"],
      timeline: "5 months",
      team: "10 specialists"
    },
    {
      icon: DollarSign,
      company: "Financial Services Firm",
      industry: "Finance",
      title: "AI Fraud Detection System",
      challenge: "The firm was experiencing significant losses due to fraudulent transactions. Their rule-based system had high false positive rates, causing customer frustration.",
      solution: "We developed a real-time AI fraud detection system using advanced machine learning algorithms that analyze transaction patterns, user behavior, and contextual data to identify fraudulent activities.",
      results: [
        "84% improvement in fraud detection",
        "76% reduction in false positives",
        "$22M prevented fraud losses annually",
        "3-second average detection time",
        "94% customer satisfaction improvement"
      ],
      technologies: ["XGBoost", "Python", "Kafka", "Cassandra", "Docker"],
      timeline: "7 months",
      team: "14 specialists"
    },
    {
      icon: TrendingUp,
      company: "Supply Chain Logistics",
      industry: "Logistics",
      title: "AI-Driven Route Optimization",
      challenge: "The logistics company faced challenges with inefficient routing, high fuel costs, delayed deliveries, and difficulty adapting to real-time changes.",
      solution: "We developed an AI-powered route optimization system that uses machine learning, real-time data, and predictive analytics to determine the most efficient delivery routes.",
      results: [
        "34% reduction in fuel costs",
        "41% improvement in on-time deliveries",
        "$18M annual operational savings",
        "29% increase in daily deliveries",
        "82% driver satisfaction improvement"
      ],
      technologies: ["Google OR-Tools", "Python", "Google Cloud", "Redis", "GraphQL"],
      timeline: "5 months",
      team: "9 specialists"
    },
    {
      icon: BarChart,
      company: "Marketing Technology Company",
      industry: "MarTech",
      title: "Predictive Customer Analytics",
      challenge: "The company lacked insights into customer behavior and couldn't effectively predict churn or identify upsell opportunities.",
      solution: "We built a comprehensive customer analytics platform that uses machine learning to segment customers, predict churn risk, identify upsell opportunities, and optimize marketing spend.",
      results: [
        "56% improvement in churn prediction",
        "47% increase in customer lifetime value",
        "$9M additional revenue from upsells",
        "38% improvement in marketing ROI",
        "71% reduction in customer acquisition cost"
      ],
      technologies: ["Pandas", "Python", "Snowflake", "Tableau", "Airflow"],
      timeline: "4 months",
      team: "7 specialists"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-20 sm:pt-28 md:pt-32 lg:pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full filter blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-purple-400/8 rounded-full filter blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/6 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "4s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Portfolio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto", children: "Real-world AI solutions delivering measurable results" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-6 md:p-10 text-white relative overflow-hidden border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "1s" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center space-x-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-blue-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold", children: "Innovation at Scale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-purple-400" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg opacity-90 mb-6 max-w-2xl mx-auto text-center", children: "Cutting-edge projects in AI, gaming, and research platforms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent", children: "70+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold opacity-90", children: "AI Solutions" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent", children: "80%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold opacity-90", children: "Efficiency Gain" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent", children: "35%" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold opacity-90", children: "Cost Reduction" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent", children: "100+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold opacity-90", children: "Companies" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/60 hover:border-blue-300/80 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-5 sm:p-6 text-white relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row items-start sm:items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(study.icon, { className: "w-7 h-7" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-2 leading-tight", children: study.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30", children: study.company }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-80", children: "•" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30", children: study.industry })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6 md:p-8 relative", children: [
          study.metrics && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6", children: study.metrics.map((metric, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-200/50 hover:border-blue-300/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1", children: metric.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold text-gray-600 uppercase tracking-wide", children: metric.label })
          ] }, idx)) }),
          study.features && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4 mb-6", children: study.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-4 border border-slate-200/50 hover:border-blue-300/60 hover:shadow-md transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-gray-900 mb-2", children: feature.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: feature.desc })
          ] }, idx)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/item bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-xl p-4 border border-red-200/40 hover:border-red-300/60 hover:shadow-md transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-gray-900", children: "Challenge" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: study.challenge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/item bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-xl p-4 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-gray-900", children: "Solution" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: study.solution })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900", children: "Results" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: study.results.map((result, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group/result bg-gradient-to-br from-green-50/80 to-emerald-50/80 p-3 rounded-xl border border-green-200/50 hover:border-green-300/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/result:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-3 h-3 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-800 font-semibold leading-relaxed", children: result })
            ] }) }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-4 border border-gray-200/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid sm:grid-cols-2 ${study.link ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-3`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider", children: "Technologies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: study.technologies.map((tech, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-[10px] font-bold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300", children: tech }, idx)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider", children: "Timeline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-bold text-sm", children: study.timeline })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider", children: "Team" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-purple-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-bold text-sm", children: study.team })
              ] })
            ] }),
            study.link && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 hover:shadow-md transition-all duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-bold text-gray-600 mb-2 uppercase tracking-wider", children: "Live Project" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: study.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center space-x-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs hover:shadow-md hover:scale-105 transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visit" })
                  ]
                }
              )
            ] })
          ] }) })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center relative overflow-hidden border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "1s" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight", children: [
            "Ready to Create Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Success Story?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto", children: "Let's discuss how we can help you achieve similar results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://tidycal.com/team/deepiotics-team/call",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-white/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Schedule Free Consultation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 group-hover:rotate-12 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center items-center gap-4 text-xs opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No Commitment" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Expert Consultation" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-green-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tailored Solutions" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ContactPage() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const googleSheetsUrl = new URL("https://script.google.com/macros/s/AKfycbwF64LxEQZ7qdsb-DxeGfR3MVPqEoowpXU5ZcVjAKwWX2ja2zTCvT2qoxKx2QM2NC4/exec");
      googleSheetsUrl.searchParams.append("name", formData.name);
      googleSheetsUrl.searchParams.append("email", formData.email);
      googleSheetsUrl.searchParams.append("company", formData.company);
      googleSheetsUrl.searchParams.append("phone", formData.phone);
      googleSheetsUrl.searchParams.append("subject", formData.subject);
      googleSheetsUrl.searchParams.append("message", formData.message);
      fetch(googleSheetsUrl.toString(), {
        method: "GET",
        mode: "no-cors"
      }).catch(() => {
      });
      const response = await fetch(
        `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/contact-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdWFlcGVhY2x6aWhvcmppemJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzE1NTQsImV4cCI6MjA3ODM0NzU1NH0.HOCClfcTP7MmmuT-VResYPGJy9WWcnLoVcI582dMmUA"}`
          },
          body: JSON.stringify(formData)
        }
      );
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        const errorData = await response.text();
        console.error("Response error:", response.status, errorData);
        alert("Failed to send message. Please try again or contact us directly via email.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Failed to send message. Please try again or contact us directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-24 bg-gradient-to-b from-white via-blue-50/30 to-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-slide-up", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up", style: { animationDelay: "0.1s" }, children: "Let's discuss how we can help transform your business with AI" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.2s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-7 h-7 text-blue-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Email Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: "Send us an email and we'll respond within 24 hours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contact@deepiotics.com", className: "text-blue-600 font-medium hover:underline", children: "contact@deepiotics.com" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-purple-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-7 h-7 text-purple-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Call Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: "Speak directly with our team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918827272142", className: "text-blue-600 font-medium hover:underline", children: "+91 8827272142" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 border-2 border-transparent hover:border-green-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-slide-up", style: { animationDelay: "0.4s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-7 h-7 text-green-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Visit Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: "Come say hello at our office" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-blue-600 font-medium", children: [
          "Atulya IT Park",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Indore, MP 452016",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "India"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 animate-slide-up", style: { animationDelay: "0.5s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6", children: "Send Us a Message" }),
        isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-16 h-16 text-green-600 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Message Sent!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: "Thank you for reaching out. We'll get back to you within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsSubmitted(false),
              className: "text-blue-600 font-medium hover:underline",
              children: "Send another message"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  required: true,
                  value: formData.name,
                  onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "John Doe"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  value: formData.email,
                  onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "john@company.com"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Company Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: formData.company,
                  onChange: (e) => setFormData({ ...formData, company: e.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "Your Company"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  value: formData.phone,
                  onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "+91 8827272142"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Subject *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: formData.subject,
                onChange: (e) => setFormData({ ...formData, subject: e.target.value }),
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                placeholder: "How can we help you?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Message *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                required: true,
                value: formData.message,
                onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                rows: 6,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                placeholder: "Tell us about your project and requirements..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
              children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white" }),
                "Sending..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5" }),
                "Send Message"
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white border-2 border-white/20 hover:shadow-2xl transition-all duration-500 animate-slide-up", style: { animationDelay: "0.6s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Schedule a Free Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base opacity-95 mb-6 leading-relaxed", children: "Book a 30-minute AI strategy call with our experts to discuss your specific needs and explore how AI can transform your business." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://tidycal.com/team/deepiotics-team/call",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-200",
              children: "Book Your Free Session"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 animate-slide-up", style: { animationDelay: "0.7s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Business Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-blue-600 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900", children: "Monday - Friday" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "9:00 AM - 6:00 PM PST" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-blue-600 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900", children: "Saturday" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "10:00 AM - 4:00 PM PST" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-gray-600 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900", children: "Sunday" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Closed" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 animate-slide-up", style: { animationDelay: "0.8s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Connect With Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.linkedin.com/company/deepiotics",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 border border-blue-200",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-6 h-6 text-blue-600" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#",
                className: "w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 border border-sky-200",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "w-6 h-6 text-sky-600" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://share.google/T98ArPPYIYaTLTVZ9",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 border border-blue-200",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-6 h-6 text-blue-700" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://share.google/SHS9rC3Rumrp9DahO",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 border border-pink-200",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-6 h-6 text-pink-600" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 text-white border-2 border-white/20 hover:shadow-2xl transition-all duration-500 animate-slide-up", style: { animationDelay: "0.9s" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-10 h-10 mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: "Need Immediate Help?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-95 mb-3 text-sm leading-relaxed", children: "Our AI-powered chatbot is available 24/7 to answer your questions and provide instant assistance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-90", children: "Look for the chat widget in the bottom right corner of your screen!" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 animate-slide-up", style: { animationDelay: "1s" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "What is the typical timeline for an AI project?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "Project timelines vary based on complexity, but most projects range from 3-6 months from initial consultation to deployment. We provide detailed timelines during the discovery phase." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Do you work with startups or only enterprises?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We work with organizations of all sizes, from startups to 100+ companies. Our solutions are tailored to your specific needs and budget." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "What industries do you specialize in?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "We have experience across 15+ industries including healthcare, finance, retail, manufacturing, logistics, and more. Our team adapts to industry-specific requirements." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Do you provide ongoing support after deployment?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: "Yes! We offer comprehensive support and maintenance packages to ensure your AI solutions continue to perform optimally and evolve with your business needs." })
        ] })
      ] })
    ] })
  ] }) });
}
function BlogPage() {
  const [posts, setPosts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const apiUrl = `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/blog-public/all`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (err) {
      setError("Failed to load blog posts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handlePostClick = (slug) => {
    window.location.href = `/blog/${slug}`;
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600", children: "Loading posts..." })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Latest Posts & Resources" }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8", children: error }),
      posts.length === 0 && !error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-lg", children: "No blog posts yet. Check back soon!" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "article",
          {
            className: "bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group",
            onClick: () => handlePostClick(post.slug),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: post.featured_image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
                  alt: post.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                  onError: (e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop";
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors", children: post.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 line-clamp-2", children: post.short_description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white border-2 border-orange-500 text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-500 hover:text-white transition-colors text-sm", children: "READ MORE" })
              ] })
            ] })
          },
          post.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600 transition-colors mt-8", children: "View All Posts" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:w-80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black text-white p-6 rounded-lg sticky top-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-6", children: "Categories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hover:text-orange-500 transition-colors cursor-pointer", children: "AI Development" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hover:text-orange-500 transition-colors cursor-pointer", children: "Machine Learning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hover:text-orange-500 transition-colors cursor-pointer", children: "Data Science" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hover:text-orange-500 transition-colors cursor-pointer", children: "AI Automation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hover:text-orange-500 transition-colors cursor-pointer", children: "Tech Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hover:text-orange-500 transition-colors cursor-pointer", children: "Case Studies" })
      ] })
    ] }) })
  ] }) }) });
}
function BlogDetailPage({ slug }) {
  const [post, setPost] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetchPost();
  }, [slug]);
  const fetchPost = async () => {
    try {
      const apiUrl = `${"https://ajuaepeaclzihorjizby.supabase.co"}/functions/v1/blog-public/${slug}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Post not found");
      }
      const data = await response.json();
      setPost(data.post);
    } catch (err) {
      setError("Failed to load blog post");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600", children: "Loading post..." })
    ] }) }) });
  }
  if (error || !post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Post Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-8", children: error || "The blog post you are looking for does not exist." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/blog",
          className: "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Blog"
          ]
        }
      )
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/blog",
        className: "inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Blog"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: [
      post.featured_image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: post.featured_image,
          alt: post.title,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-2", children: [
          post.title,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔬" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-gray-600 mb-8 pb-6 border-b border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: post.author_name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(post.published_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-800 leading-relaxed font-medium", children: post.short_description }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 text-gray-700 leading-relaxed", children: post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.trim().startsWith("#")) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 mt-8 mb-4", children: paragraph.replace(/^#+\s*/, "") }, index);
            }
            if (paragraph.trim().startsWith("•") || paragraph.trim().startsWith("-")) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-inside space-y-2 ml-4", children: paragraph.split("\n").map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-gray-700", children: item.replace(/^[•-]\s*/, "") }, i)) }, index);
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: paragraph }, index);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-orange-500 to-red-500 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 p-8 text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold mb-4", children: "RESEARCH LEADERS ROUNDTABLE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "Insider insights from seasoned academics around the globe." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-16 h-16", viewBox: "0 0 100 100", fill: "none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "40", stroke: "white", strokeWidth: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "30", r: "8", fill: "white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "70", cy: "50", r: "8", fill: "white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "70", r: "8", fill: "white" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "50", r: "8", fill: "white" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
                alt: "Research Team",
                className: "w-full h-64 object-cover"
              }
            ) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border-l-4 border-orange-500 p-6 mt-8 rounded-r", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⭐" }),
              " Your Practical Action Plan"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-gray-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Set your weekly priorities." }),
                " Each Monday morning (or Sunday evening), identify your top two dissertation priorities for the week. Write them down. Everything else is secondary."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Outline your tentative conclusions." }),
                " If you haven't already, spend a focused day sketching out what you think your research is heading. Create provisional answers to your research questions."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Build your framework." }),
                " If you're in the writing phase, create or refine your structural outline. Get all your main headings in place with brief introductory paragraphs."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Write what you're ready to write." }),
                " Don't force yourself to write Chapter One if Chapter Four is clearer in your mind. Work where your energy and clarity are highest."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "The Bottom Line" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: "Your dissertation is a major project, and like any complex project, it requires both strategic planning and disciplined execution. But here's what often gets lost: discipline doesn't mean grinding yourself down with endless hours of unfocused work. It means working with intention, structure, and clarity." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/blog",
        className: "inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to all posts"
        ]
      }
    ) })
  ] }) });
}
const LinkedInServicePage = () => {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "10k+", label: "Leads Generated" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Automation Active" }
  ];
  const problems = [
    {
      icon: "🧱",
      title: 'Your profile looks good  but not "client-ready."',
      description: "It reads like a résumé, not a sales page. People scroll past instead of reaching out."
    },
    {
      icon: "📉",
      title: "You post sometimes, but nothing happens.",
      description: "No engagement, no reach, no leads — just silence."
    },
    {
      icon: "💬",
      title: "You don't know what to say (or how often).",
      description: "Every time you sit to post, you overthink your words or design."
    },
    {
      icon: "⌛",
      title: "You don't have time to chase leads manually.",
      description: "You're too busy building your business to spend hours sending connection requests or follow-ups."
    },
    {
      icon: "🤖",
      title: "You've tried automation before but it felt spammy.",
      description: "Generic messages killed your credibility instead of building it."
    },
    {
      icon: "💡",
      title: "And the worst part?",
      description: "You know LinkedIn works but you have no clear system to make it work for you."
    }
  ];
  const services = [
    {
      title: "ProfileIgnite",
      subtitle: "Light Up Your LinkedIn Presence",
      description: "Your profile is your first impression and your most powerful sales tool. With ProfileIgnite, we completely optimize your LinkedIn presence so it attracts attention, builds credibility, and gets you ready to generate leads instantly.",
      features: [
        "Complete Profile Optimization (Headline, About, Experience, CTA Buttons)",
        "Custom LinkedIn Banner Design",
        "Feature Section Setup (Lead Magnet, Calendar, or Case Study)",
        "Eye-Catching CTA Buttons & Visual Hooks",
        "Before–After Profile Audit Report"
      ],
      outcome: "A professional, conversion-focused profile that builds authority and brings inbound opportunities — even before you start posting.",
      pricing: "One-Time Setup",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50/50 to-purple-50/50",
      borderColor: "border-blue-200/40 hover:border-blue-300/60"
    },
    {
      title: "ContentFlow",
      subtitle: "Consistency That Converts",
      description: "Once your profile is ignited, the next step is consistent visibility. With ContentFlow, we handle your entire monthly LinkedIn posting from strategy to design so your brand stays active, relevant, and trusted.",
      features: [
        "8–12 AI-Crafted Posts (Text, Image, Carousel, or Video)",
        "1 Long-Form Article or Newsletter",
        "Branded Post Design + Hashtag Optimization",
        "Weekly Scheduling & Posting",
        "Performance Tracking + Weekly Insights"
      ],
      outcome: "A consistent, engaging LinkedIn presence that nurtures trust and attracts inbound opportunities without you lifting a finger.",
      pricing: "Monthly Subscription",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50/50 to-emerald-50/50",
      borderColor: "border-green-200/40 hover:border-green-300/60"
    },
    {
      title: "LeadBot",
      subtitle: "Automate Your LinkedIn Outreach",
      description: "Ready to turn conversations into clients? With LeadBot, we integrate AI with your LinkedIn to launch your first automated campaign from smart messaging to real leads in your inbox.",
      features: [
        "AI Campaign Tool Integration",
        "4-Step Personalized Messaging Sequence",
        "50 Prospect Research & Data Setup",
        "Complete Campaign Setup & Launch",
        "Campaign Report + 1 Week Support"
      ],
      outcome: "An AI-driven LinkedIn system that runs personalized outreach and generates qualified leads — automatically.",
      pricing: "One-Time Setup",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50/50 to-red-50/50",
      borderColor: "border-orange-200/40 hover:border-orange-300/60"
    }
  ];
  const testimonials = [
    {
      quote: "Within 2 weeks of using ProfileIgnite, I started getting inbound messages from potential clients. The ROI has been incredible!",
      name: "Sarah Johnson",
      title: "Founder, TechScale Solutions",
      initials: "SJ"
    },
    {
      quote: "ContentFlow saved me 15+ hours every week. My engagement grew 300% and I've closed 4 new clients this month alone.",
      name: "Michael Chen",
      title: "Business Coach",
      initials: "MC"
    },
    {
      quote: "LeadBot changed everything. We went from 0 to 50+ qualified leads per month on autopilot. Game changer!",
      name: "Emma Rodriguez",
      title: "CEO, Digital Marketing Agency",
      initials: "ER"
    }
  ];
  const comparisonData = [
    {
      aspect: "Time Investment",
      diy: "Takes 10–15 hours weekly writing, posting, and managing connections",
      system: "You review and approve content in minutes — we handle everything else"
    },
    {
      aspect: "Profile Setup",
      diy: "Looks decent, but not optimized for conversions",
      system: "Fully rebuilt to attract and convert ideal clients (ProfileIgnite)"
    },
    {
      aspect: "Content Strategy",
      diy: "Random posting whenever inspiration strikes",
      system: "Strategic, authority-building content designed to convert (ContentFlow)"
    },
    {
      aspect: "Lead Generation",
      diy: "Manual cold outreach with inconsistent results",
      system: "AI-powered campaigns that connect, engage, and book calls (LeadBot)"
    },
    {
      aspect: "Growth Speed",
      diy: "Slow, unpredictable, and exhausting",
      system: "Consistent, measurable, and scalable growth every month"
    },
    {
      aspect: "Focus",
      diy: "You juggle marketing instead of growing your business",
      system: "You stay focused on your clients — while we grow your brand"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24 pb-8 sm:pb-12 md:pb-10 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://grow.deepiotics.com/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex items-center space-x-3 bg-blue-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 mb-8 hover:bg-blue-200/90 hover:border-blue-300/70 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300 group-hover:rotate-12 transform",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-blue-400/30 animate-ping group-hover:bg-blue-500/40" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-800 font-semibold text-base sm:text-lg md:text-xl group-hover:text-blue-900 transition-colors duration-300", children: "AI-Powered LinkedIn Lead Generation for Business Growth" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5 text-blue-600 animate-bounce", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight", children: [
        "Stop Scrolling, Stop Pitching",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Turn Your LinkedIn Into a 24/7 Lead Generation Machine" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl text-gray-700 leading-relaxed mb-10", children: "Most entrepreneurs struggle with visibility and leads on LinkedIn because their profile isn't optimized, their content isn't consistent, and their outreach isn't strategic." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl text-gray-700 leading-relaxed mb-12", children: "We fix all that using AI powered optimization, content, and campaigns that attract your ideal clients automatically." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-white/20 mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Started Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-6 h-6 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2", children: stat.number }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-700 font-semibold text-sm sm:text-base", children: stat.label })
      ] }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden border-t border-yellow-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "1s" } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight", children: [
            "Why Most Entrepreneurs Fail to",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent", children: "Get Clients from LinkedIn" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl sm:text-3xl mb-4 opacity-95", children: "You're brilliant at what you do." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl opacity-90", children: "But on LinkedIn… it feels like you're invisible." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16", children: problems.map((problem, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300", children: [
          problem.icon === "🤖" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl animate-bounce", children: problem.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-orange-400/30 animate-ping" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: problem.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors", children: problem.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed", children: problem.description })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl mb-6 text-blue-300 font-semibold", children: `That's exactly why we created AI for Lead Generation a 3 step system that transforms your LinkedIn from "just another profile" into a lead generation machine.` }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight", children: [
        "The 3 Step System to",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Transform your LinkedIn into a lead generation machine" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `group bg-gradient-to-br ${service.bgGradient} rounded-3xl shadow-2xl border-2 ${service.borderColor} hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 md:p-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-white", children: index + 1 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-2", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`, children: service.subtitle })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-8", children: service.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-900 mb-4", children: "What's Included:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: feature })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-yellow-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-gray-900", children: "Outcome:" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: service.outcome }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-full font-bold`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💰" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: service.pricing })
            ] })
          ] })
        ] })
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-bold text-gray-900 mb-6", children: [
          "What Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Clients Say" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700", children: "Real results from real entrepreneurs who transformed their LinkedIn presence" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-1 mb-6", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-current" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-gray-700 leading-relaxed mb-6 text-lg", children: [
          '"',
          testimonial.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold", children: testimonial.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900", children: testimonial.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600", children: testimonial.title })
          ] })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-bold text-gray-900 mb-6", children: [
          "Why Not ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent", children: "DIY?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "You could spend hours trying to optimize your LinkedIn, write posts, and manually message leads…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600", children: "But the truth? Without a system you'll burn out before you see results." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-gray-50/50 border-r border-gray-200/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "💡 Aspect" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-red-50/50 border-r border-gray-200/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-red-700 mb-4", children: "DIY Approach" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-green-50/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-green-700 mb-4", children: "Our AI4Sales System" }) })
        ] }),
        comparisonData.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-0 border-t border-gray-200/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-gray-50/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900", children: item.aspect }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-red-50/30 border-r border-gray-200/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: item.diy }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 bg-green-50/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700", children: item.system }) })
        ] }, index))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-700 font-semibold", children: "Why struggle to do it all yourself when you can have an AI-powered LinkedIn Growth System working for you 24/7?" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden border-t border-yellow-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl animate-pulse", style: { animationDelay: "1s" } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-4", children: "Stop Guessing. Start Growing." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight", children: [
          "Ready to Transform Your",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "LinkedIn Presence?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl mb-12 opacity-95 leading-relaxed", children: "Join 500+ entrepreneurs who have turned their LinkedIn into a lead generation machine. Start your journey today." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://tidycal.com/team/deepiotics-team/call",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group inline-flex items-center space-x-3 bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-white/20 mb-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Started Now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 group-hover:rotate-12 transition-transform" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
const AIBusinessGrowthPage = () => {
  const [activeModule, setActiveModule] = reactExports.useState(null);
  const [selectedModule, setSelectedModule] = reactExports.useState(null);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const handleLearnMore = (module) => {
    setSelectedModule(module);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedModule(null), 300);
  };
  const struggles = [
    { icon: AlertCircle, text: "You're juggling 10+ marketing tools   and none talk to each other." },
    { icon: AlertCircle, text: "Your website isn't converting." },
    { icon: AlertCircle, text: "Social media feels like a full-time job." },
    { icon: AlertCircle, text: "Ads are eating your budget." },
    { icon: AlertCircle, text: "You're losing leads while you sleep." },
    { icon: AlertCircle, text: "You don't have clear data." }
  ];
  const steps = [
    {
      number: "1",
      title: "Strategy & Roadmap",
      description: 'We start with your goals. In a one-time AI Brand Strategy Session, we identify your biggest growth opportunities, choose the right AI tools, and design your custom "growth stack."',
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "2",
      title: "Build & Automate",
      description: "From an AI-powered website revamp to chatbots, analytics, and ad automation, we implement the exact tools your business needs to scale without adding extra workload.",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      title: "Launch, Learn & Scale",
      description: "Once your system is live, we monitor performance, fine-tune campaigns, and scale what's working   powered by smart data and automation.",
      icon: Rocket,
      color: "from-green-500 to-teal-500"
    }
  ];
  const modules = [
    {
      icon: Target,
      title: "AI Brand Strategy Consulting",
      description: "Map your business goals, identify the right AI tools, and design your custom growth stack in one focused session.",
      color: "from-blue-500 to-cyan-500",
      details: {
        overview: "Our AI Brand Strategy Consulting helps you create a comprehensive roadmap for AI-powered business growth.",
        features: [
          "Complete business analysis and goal mapping",
          "AI tool selection and integration planning",
          "Custom growth stack design",
          "ROI projections and timeline planning",
          "Competitive analysis and positioning"
        ],
        benefits: [
          "Clear direction for AI implementation",
          "Reduced risk of technology misalignment",
          "Faster time to market",
          "Optimized budget allocation"
        ],
        timeline: "1-2 weeks"
      }
    },
    {
      icon: Globe,
      title: "AI-Powered Website Revamp",
      description: "Turn your old site into a stunning, mobile-friendly, and SEO-optimized platform built to convert.",
      color: "from-purple-500 to-pink-500",
      details: {
        overview: "Transform your website into a high-converting, AI-enhanced platform that works 24/7 to grow your business.",
        features: [
          "AI-optimized design and user experience",
          "Mobile-first responsive development",
          "Advanced SEO implementation",
          "Conversion rate optimization",
          "Performance monitoring and analytics"
        ],
        benefits: [
          "Up to 300% increase in conversion rates",
          "Improved search engine rankings",
          "Better user engagement",
          "Reduced bounce rates"
        ],
        timeline: "3-4 weeks"
      }
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot for Lead Capture",
      description: "Engage visitors 24/7 with an intelligent chatbot that answers FAQs, collects leads, and books calls automatically.",
      color: "from-green-500 to-teal-500",
      details: {
        overview: "Deploy intelligent AI chatbots that never sleep, capturing leads and qualifying prospects around the clock.",
        features: [
          "24/7 automated customer engagement",
          "Intelligent lead qualification",
          "Automatic appointment scheduling",
          "Multi-language support",
          "CRM integration and data sync"
        ],
        benefits: [
          "85% reduction in response time",
          "200% increase in lead capture",
          "Improved customer satisfaction",
          "Lower operational costs"
        ],
        timeline: "2-3 weeks"
      }
    },
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "Stay consistent and relevant with weekly AI-generated content   posts, videos, and engagement handled for you.",
      color: "from-orange-500 to-red-500",
      details: {
        overview: "Let AI handle your social media presence with consistent, engaging content that builds your brand and drives growth.",
        features: [
          "AI-generated content creation",
          "Multi-platform posting automation",
          "Engagement monitoring and response",
          "Performance analytics and optimization",
          "Brand voice consistency"
        ],
        benefits: [
          "Consistent brand presence",
          "150% increase in engagement",
          "Time savings of 20+ hours per week",
          "Better audience targeting"
        ],
        timeline: "Ongoing monthly service"
      }
    },
    {
      icon: Users,
      title: "Meta Ads (Facebook + Instagram)",
      description: "Launch AI-optimized ad campaigns that find your ideal audience and turn clicks into customers.",
      color: "from-pink-500 to-rose-500",
      details: {
        overview: "Leverage AI-powered advertising to reach your ideal customers on Facebook and Instagram with precision targeting.",
        features: [
          "AI-driven audience targeting",
          "Dynamic ad creative optimization",
          "Automated bid management",
          "Real-time performance monitoring",
          "A/B testing and optimization"
        ],
        benefits: [
          "60% lower cost per acquisition",
          "250% increase in ROAS",
          "Better audience insights",
          "Scalable campaign management"
        ],
        timeline: "1-2 weeks setup + ongoing"
      }
    },
    {
      icon: Target,
      title: "Google Ads Setup",
      description: "Capture high-intent traffic with AI-crafted copy and keyword targeting.",
      color: "from-indigo-500 to-purple-500",
      details: {
        overview: "Dominate Google search results with AI-optimized campaigns that capture high-intent customers at the perfect moment.",
        features: [
          "AI-powered keyword research",
          "Smart bidding strategies",
          "Dynamic ad copy generation",
          "Landing page optimization",
          "Conversion tracking setup"
        ],
        benefits: [
          "40% improvement in Quality Score",
          "180% increase in click-through rates",
          "Lower cost per click",
          "Higher conversion rates"
        ],
        timeline: "1-2 weeks"
      }
    },
    {
      icon: Linkedin,
      title: "LinkedIn AI Lead Generation",
      description: "Transform your LinkedIn into a lead magnet   optimized profile, AI content strategy, and smart outreach.",
      color: "from-blue-600 to-cyan-600",
      details: {
        overview: "Turn LinkedIn into your most powerful lead generation machine with AI-driven content and outreach strategies.",
        features: [
          "Profile optimization for maximum visibility",
          "AI-generated content strategy",
          "Automated connection requests",
          "Personalized outreach campaigns",
          "Lead tracking and management"
        ],
        benefits: [
          "300% increase in profile views",
          "250% more qualified leads",
          "Enhanced professional credibility",
          "Automated relationship building"
        ],
        timeline: "2-3 weeks"
      }
    },
    {
      icon: Phone,
      title: "AI Voice Agent",
      description: "Add a voice-based AI sales assistant that answers calls, qualifies leads, and schedules appointments.",
      color: "from-violet-500 to-purple-500",
      details: {
        overview: "Deploy AI voice agents that handle calls professionally, qualify leads, and book appointments while you focus on closing deals.",
        features: [
          "Natural language conversation",
          "Intelligent call routing",
          "Automatic lead qualification",
          "Calendar integration",
          "Call recording and analysis"
        ],
        benefits: [
          "Never miss a lead again",
          "70% reduction in response time",
          "Improved lead qualification",
          "24/7 availability"
        ],
        timeline: "3-4 weeks"
      }
    },
    {
      icon: BarChart3,
      title: "AI Analytics & Tracking Setup",
      description: "Get full visibility into what's driving your sales with Microsoft Clarity, Hotjar, and Google Analytics 4.",
      color: "from-emerald-500 to-teal-500",
      details: {
        overview: "Gain complete visibility into your business performance with comprehensive AI-powered analytics and tracking systems.",
        features: [
          "Advanced analytics implementation",
          "Custom dashboard creation",
          "Conversion tracking setup",
          "User behavior analysis",
          "Automated reporting"
        ],
        benefits: [
          "Data-driven decision making",
          "Improved ROI tracking",
          "Better customer insights",
          "Optimized marketing spend"
        ],
        timeline: "1-2 weeks"
      }
    },
    {
      icon: FileText,
      title: "Lead Magnet Creation",
      description: "Design irresistible downloads (eBooks, checklists, PDFs) that grow your email list and nurture leads automatically.",
      color: "from-amber-500 to-orange-500",
      details: {
        overview: "Create compelling lead magnets that attract your ideal customers and build a valuable email list for long-term growth.",
        features: [
          "AI-generated content creation",
          "Professional design and layout",
          "Landing page development",
          "Email automation setup",
          "Performance tracking"
        ],
        benefits: [
          "400% increase in email signups",
          "Higher quality leads",
          "Improved nurturing sequences",
          "Better conversion rates"
        ],
        timeline: "2-3 weeks"
      }
    }
  ];
  const caseStudies = [
    {
      title: "Tech Startup   From Invisible to In-Demand",
      result: "AI-powered LinkedIn optimization + content automation → 3× profile visits, 2.5× more qualified leads.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "eCommerce Brand   Website Conversion Makeover",
      result: "AI website revamp + chatbot → Bounce rate dropped by 38%, inquiries doubled.",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Consulting Firm   24/7 Lead Qualification",
      result: "AI Voice Agent + Analytics → 60% faster responses, 30% higher conversion.",
      icon: Phone,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Local Service Business   Smart Ads Automation",
      result: "AI Meta Ads + GA4 → 41% lower CPL, 2× ROI in 60 days.",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];
  const trustReasons = [
    { icon: Target, text: "Strategy-First, Tools-Second   You get clarity, not complexity." },
    { icon: Sparkles, text: "Modular System   Start small, expand fast." },
    { icon: CheckCircle, text: "Done-For-You Implementation   We handle the tech; you focus on growth." },
    { icon: Users, text: "SMB-Focused Expertise   AI solutions designed for small businesses." },
    { icon: LineChart, text: "Transparent Reporting   Know exactly what's working." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-24 pb-8 sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight", children: [
        "Grow Your Business Smarter with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "AI That Works for You" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed", children: "From strategy to execution, our AI Business Growth Suite helps small and medium businesses automate marketing, capture more leads, and scale faster without the tech overwhelm." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Your Free AI Growth Call" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: [
          "😣 The Struggle Why Growth Feels",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent", children: "So Hard Right Now" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "If You're a Small or Medium Business Owner, This Might Sound Familiar..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed", children: "You're working harder than ever but growth isn't getting easier. Between marketing, content, and customer acquisition, it can feel impossible to keep up with everything… especially in today's AI-driven world." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: struggles.map((struggle, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "group bg-white rounded-2xl p-6 border-2 border-red-100 hover:border-red-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "w-6 h-6 text-red-500 flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: struggle.text })
          ] })
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "What if you could fix all of that   without hiring extra staff, learning complex tools, or spending hours managing it all?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl mb-6 opacity-90", children: "That's exactly why we built the AI Business Growth Suite so small and medium businesses can automate, grow, and scale smarter." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#modules",
            className: "inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "See How It Works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how-it-works", className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: [
          "🧭 How It Works  ",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Your AI Powered Growth Journey" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "We make AI driven business growth simple. In just three steps, we map your goals, build your tools, and launch your automation engine." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl mb-6 shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "w-8 h-8" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-bold text-gray-200 mb-4", children: [
                "Step ",
                step.number
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: step.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed", children: step.description })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Your Free AI Growth Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "modules", className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: [
          "🧩 Choose Your",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "AI Growth Modules" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-4", children: "Build Your AI-Powered Growth Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 max-w-4xl mx-auto", children: "Pick the modules that match your business goals   or let us design your perfect AI growth system. Every service is plug-and-play, results-driven, and built for small and medium businesses." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: modules.map((module, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onMouseEnter: () => setActiveModule(index),
          onMouseLeave: () => setActiveModule(null),
          className: "group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${module.color} text-white rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(module.icon, { className: "w-7 h-7" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: module.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed mb-4", children: module.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleLearnMore(module),
                  className: "flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Learn More" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                  ]
                }
              )
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "💡 Don't know where to start?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl mb-6 opacity-90", children: "Book Your Free AI Growth Call and we'll design your perfect stack together." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://tidycal.com/team/deepiotics-team/call",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get Started Now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: [
          "🚀 Real Results.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent", children: "Real Growth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "See What Happens When Businesses Go AI-First. Our clients don't just use AI   they grow with it." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: caseStudies.map((study, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${study.color} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(study.icon, { className: "w-8 h-8" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: study.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-700 leading-relaxed mb-4", children: study.result }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300" })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://tidycal.com/team/deepiotics-team/call",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📞 Ready to see your own AI success story? Book Your Free AI Growth Strategy Call" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm border-t border-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: [
          "💎 Why Businesses Trust",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Our AI Growth Suite" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "We don't just add AI to your business   we build AI systems around your goals. That's why our clients see faster growth, leaner operations, and higher ROI within weeks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: trustReasons.map((reason, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "group bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reason.icon, { className: "w-6 h-6 text-white" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium leading-relaxed", children: reason.text })
          ] })
        },
        index
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-16 h-16 mx-auto mb-6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl font-bold mb-6", children: "Let's Build Your AI Growth Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto", children: "Transform your business with AI-powered automation, smarter marketing, and data-driven growth strategies designed specifically for UK businesses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://tidycal.com/team/deepiotics-team/call",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center space-x-2 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book a Free AI Strategy Call Now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-6 h-6" })
            ]
          }
        )
      ] })
    ] }) }),
    isModalOpen && selectedModule && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-16 h-16 bg-gradient-to-r ${selectedModule.color} rounded-2xl flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(selectedModule.icon, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900", children: selectedModule.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: selectedModule.description })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleCloseModal,
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-gray-500" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-gray-900 mb-4", children: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: selectedModule.details.overview }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-gray-900 mb-4", children: "Key Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-6", children: selectedModule.details.features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: feature })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-gray-900 mb-4", children: "Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-6", children: selectedModule.details.benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: benefit })
          ] }, index)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 rounded-2xl p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-semibold text-gray-900 mb-2", children: "Timeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: selectedModule.details.timeline })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://tidycal.com/team/deepiotics-team/call",
            target: "_blank",
            rel: "noopener noreferrer",
            className: `flex-1 bg-gradient-to-r ${selectedModule.color} text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`,
            children: [
              "Get Started with ",
              selectedModule.title
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleCloseModal,
            className: "px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors",
            children: "Close"
          }
        )
      ] })
    ] }) }) })
  ] });
};
function App() {
  const path = window.location.pathname;
  if (path === "/admin") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLogin, {});
  }
  if (path === "/admin/dashboard") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {});
  }
  if (path === "/admin/career") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminCareer, {});
  }
  if (path === "/careers") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Careers, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path === "/about") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path === "/services") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path === "/portfolio") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioPage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path === "/contact") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path === "/blog") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path.startsWith("/blog/")) {
    const slug = path.replace("/blog/", "");
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BlogDetailPage, { slug }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path === "/linkedin-service") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LinkedInServicePage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  if (path === "/AI-business-growth") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AIBusinessGrowthPage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIAgentCapabilities, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatbotWidget, { customerName: "Guest", customerId: "99aupairs" })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
