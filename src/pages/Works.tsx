import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Header from "@/components/layout/Header";
import WavyUnderline from "@/components/shared/WavyUnderline";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import PhoneCarousel from "@/components/works/PhoneCarousel";
import {
  WORKS,
  workCategories,
  worksByCategory,
  type WorkCategoryId,
} from "@/data/works";

const Works = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [openId, setOpenId] = useState<string | null>(null);

  const requested = searchParams.get("c");
  const active =
    workCategories.find((c) => c.id === requested) ?? workCategories[0];

  const items = useMemo(() => worksByCategory(active.id), [active.id]);
  const open = openId ? (WORKS.find((w) => w.id === openId) ?? null) : null;

  const select = (id: WorkCategoryId) => {
    setSearchParams({ c: id }, { replace: true });
  };

  return (
    <div className="min-h-screen bg-card">
      <Header />

      {/* Intro — green, like the header it sits under */}
      <section className="bg-background px-4 md:px-8 pt-32 pb-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(226, 254, 165, 0.1)",
              border: "1px solid rgba(226, 254, 165, 0.2)",
            }}
          >
            <span className="text-xs font-semibold font-bricolage tracking-[0.18em] uppercase text-primary">
              Selected Works
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-4xl md:text-6xl uppercase leading-[1.05] text-foreground max-w-[20ch] mx-auto"
          >
            The whole studio,{" "}
            <WavyUnderline color="hsl(var(--primary))">
              in one place.
            </WavyUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 font-bricolage leading-relaxed text-foreground/70 max-w-[62ch] mx-auto"
          >
            Pick a category to see that work. Everything here is produced end to
            end by one team in Chennai.
          </motion.p>
        </div>
      </section>

      {/* Sticky category tabs — still on the green */}
      <nav
        aria-label="Work categories"
        className="sticky top-0 z-40 bg-background border-b border-foreground/15 px-4 md:px-8 py-4"
      >
        <div
          role="tablist"
          className="max-w-7xl mx-auto flex gap-2 md:gap-2.5 overflow-x-auto md:flex-wrap md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {workCategories.map((c) => {
            const isActive = c.id === active.id;
            return (
              <button
                key={c.id}
                id={`tab-${c.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => select(c.id)}
                className={`shrink-0 rounded-full border px-4 py-2.5 font-bricolage text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary font-semibold"
                    : "bg-transparent text-foreground border-foreground/20 hover:bg-foreground/10"
                }`}
              >
                <b
                  className={`mr-2 font-bold ${
                    isActive ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  {c.n}
                </b>
                {c.name}
              </button>
            );
          })}
        </div>
      </nav>

      {/* The list view is the only cream surface */}
      <main className="bg-card px-4 md:px-8 pt-12 pb-[100px] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {/* Category header */}
          <div className="text-center mb-10">
            <h2 className="font-dela text-2xl md:text-3xl uppercase text-background">
              {active.name}
            </h2>
            <p className="mt-3 font-bricolage text-brand-black/60 max-w-[60ch] mx-auto">
              {active.desc}
            </p>
            <span className="mt-3 inline-block font-bricolage text-sm tracking-wide text-brand-black/45">
              {String(items.length).padStart(2, "0")}{" "}
              {items.length === 1 ? "project" : "projects"}
            </span>
          </div>

          {/* Each category renders with the treatment set on its definition. */}
          {active.layout === "phone-carousel" ? (
            <div role="tabpanel" aria-labelledby={`tab-${active.id}`}>
              <PhoneCarousel
                items={items}
                categoryName={active.name}
                onOpen={setOpenId}
              />
            </div>
          ) : (
          <div
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="flex flex-wrap justify-center gap-6"
          >
            <AnimatePresence mode="popLayout">
              {items.map((w, index) => (
                <motion.figure
                  layout
                  key={w.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index, 8) * 0.04,
                  }}
                  className={`m-0 w-full sm:w-[calc(50%-12px)] ${active.cols}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(w.id)}
                    className="group block w-full text-left"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border-2 border-background bg-brand-black/5 ${active.aspect}`}
                    >
                      {w.type === "video" ? (
                        <video
                          src={w.src}
                          muted
                          playsInline
                          loop
                          preload="metadata"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <img
                          src={w.src}
                          alt={w.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}

                      {active.video && (
                        <>
                          <span className="absolute top-3 right-3 z-10 rounded-full bg-brand-black/55 backdrop-blur-sm px-2.5 py-1 font-bricolage text-[0.64rem] font-semibold tracking-wider text-card">
                            {active.format}
                          </span>
                          <span className="absolute left-4 bottom-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-0.5 h-4 w-4 fill-primary-foreground text-primary-foreground" />
                          </span>
                        </>
                      )}
                    </div>

                    <figcaption className="pt-3.5">
                      <span className="font-bricolage text-[0.68rem] uppercase tracking-[0.12em] text-brand-black/50">
                        {active.name}
                      </span>
                      <h3 className="mt-1 font-bricolage font-semibold text-[1.02rem] leading-snug text-background">
                        {w.title}
                      </h3>
                      <span className="mt-2 inline-block rounded-full bg-brand-black/[0.06] px-3 py-1 font-bricolage text-[0.66rem] text-brand-black/55">
                        {w.tag}
                      </span>
                    </figcaption>
                  </button>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenId(null)}
          >
            <button
              onClick={() => setOpenId(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex flex-col w-full overflow-hidden rounded-3xl bg-[#1a261f] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <div className="relative w-full overflow-hidden bg-black shrink-0 flex items-center justify-center">
                  {open.type === "video" ? (
                    <video
                      src={open.src}
                      controls
                      autoPlay
                      className="max-h-[55vh] w-auto max-w-full"
                    />
                  ) : (
                    <img
                      src={open.src}
                      alt={open.title}
                      className="max-h-[55vh] w-auto max-w-full object-contain"
                    />
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col text-white">
                  <h3 className="font-dela text-2xl md:text-3xl text-white mb-2 leading-tight">
                    {open.title}
                  </h3>
                  <p className="font-bricolage text-sm md:text-base text-white/70 leading-relaxed">
                    {open.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnhancedFooter mascotBgClass="bg-card" />
    </div>
  );
};

export default Works;
