// src/components/CatalogsSection.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

/* -------------------- Premium Image Slider -------------------- */
const ImageSlider = ({ images }) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((cur) => (cur + 1) % images.length);
  const prev = () => setCurrent((cur) => (cur - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-xl">
      <img
        src={images[current]}
        alt="Catalog preview"
        className="w-full h-full object-cover transition-all duration-700 rounded-xl"
      />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/60"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/60"
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="absolute bottom-3 w-full flex justify-center gap-2 pointer-events-none">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

/* -------------------- Catalog Card -------------------- */
const CatalogCard = ({ title, subtitle, description, sliderImages, printPath, pdfPath }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row hover:shadow-2xl transition-all border border-gray-100">
    <div className="md:w-1/2 relative p-4">
      <ImageSlider images={sliderImages} />

      <div
        className="absolute left-8 bottom-8 px-4 py-1 rounded-lg text-sm font-medium shadow-md"
        style={{ background: "linear-gradient(90deg,#fbbf24,#fb923c)", color: "#0f172a" }}
      >
        Updated • 2025
      </div>
    </div>

    <div className="p-8 md:w-1/2 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-blue-700 mb-4 font-medium">{subtitle}</p>
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{description}</p>

        <ul className="text-sm text-gray-700 space-y-2 mb-6">
          <li>• Complete technical specifications & performance charts</li>
          <li>• Industrial-grade material composition & durability metrics</li>
          <li>• Machine compatibility & recommended operating parameters</li>
          <li>• Installation guidelines, maintenance support & warranty overview</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {/* <a
          href={printPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Download PDF
          <ArrowRight className="h-4 w-4" />
        </a> */}

        {/* <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-blue-600 underline"
        >
          Direct PDF
        </a> */}
      </div>
    </div>
  </div>
);

/* -------------------- Full Catalog Section -------------------- */
const CatalogsSection = () => {
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Primary: target the <nav> element (your Navbar uses <nav className="... fixed ...">)
    const findNav = () => document.querySelector("nav") || document.querySelector("header") || document.querySelector(".site-navbar");

    let navEl = findNav();

    // apply padding-top on the catalogs section equal to nav height
    const applyPadding = () => {
      if (!sectionRef.current) return;
      // refresh navEl if removed/changed
      if (!navEl || !document.body.contains(navEl)) navEl = findNav();
      if (navEl) {
        // include margins if any (rare for fixed nav), ceil to avoid subpixel gaps
        const rect = navEl.getBoundingClientRect();
        const cs = window.getComputedStyle(navEl);
        const marginBottom = parseFloat(cs.marginBottom || "0") || 0;
        const height = Math.ceil(rect.height + marginBottom);
        sectionRef.current.style.paddingTop = `${height}px`;
      } else {
        // fallback to typical tailwind h-16 -> 64px
        sectionRef.current.style.paddingTop = "64px";
      }
    };

    // initial apply
    applyPadding();

    // update on resize
    const onResize = () => applyPadding();
    window.addEventListener("resize", onResize);

    // observe nav size changes
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => applyPadding());
      if (navEl) {
        try { ro.observe(navEl); } catch (e) { /* ignore */ }
      }
    }

    // observe DOM additions in case navbar mounts later or changes
    const mo = new MutationObserver(() => {
      const newNav = findNav();
      if (newNav && newNav !== navEl) {
        navEl = newNav;
        applyPadding();
        if (ro) {
          try { ro.disconnect(); ro.observe(navEl); } catch (e) {}
        }
      } else {
        applyPadding();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
      mo.disconnect();
    };
  }, []);

  const catalogs = [
    {
      id: "acrylic",
      title: "Acrylic Sheets Master Catalog ",
      subtitle: "High-Performance Sheets • Industrial • Architectural • Commercial",
      description:
        "Our Acrylic Sheets Master Catalog provides a complete overview of premium-grade cast and extruded acrylic materials engineered for modern industries. Designed for signage, fabrication, retail displays, interiors, architecture, CNC machining, and high-impact engineering applications, this catalog explains thickness options, light transmission behavior, thermal stability, flame ratings, and surface finishing technologies including matte, gloss, texture and UV-layer protection.",
      sliderImages: [
        "https://paintingdrive.com/blog/wp-content/uploads/2024/06/Laminate-Kitchen-Or-Acrylic-Kitchen-Which-Kitchen-Cabinet-Finish-is-the-Best.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95rPEyjYaNbVg14nZ2No3S8kAO4mNjiwjzA&s",
        "https://image.made-in-china.com/2f0j00ULMfVOqCfKkc/Solid-Color-Metallic-Color-1220-2440-1mm-Acrylic-Sheet-for-Kitchen-Cabinet-Door-ZH-8603-.webp",
      ],
      printPath: "/catalogs/acrylic-catalog-print.html",
      pdfPath: "/catalogs/acrylic-catalog.pdf",
    },
   
      
  ];

  return (
    <section ref={sectionRef} className="catalogs-section max-w-7xl mx-auto px-4 lg:px-8 my-16" id="catalogs">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Product Catalogs — 2025</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore our premium catalogs enriched with technical specifications, engineering data, configuration details, and complete machine and maintenance guidelines.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {catalogs.map((c) => (
          <CatalogCard key={c.id} {...c} />
        ))}
      </div>
    </section>
  );
};

export default CatalogsSection;
