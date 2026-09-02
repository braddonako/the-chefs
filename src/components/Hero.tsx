import { siteConfig } from "@/config/menu";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark px-6 py-24 text-center md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-accent">
          Software Development Studio
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-text-on-dark md:text-7xl">
          {siteConfig.slogan}
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-text-on-dark-muted md:text-xl">
          {siteConfig.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#menu"
            className="rounded-full bg-brand-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-primary-hover"
          >
            See the Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-text-on-dark-muted px-8 py-3.5 text-base font-semibold text-text-on-dark transition-colors hover:border-text-on-dark hover:bg-white/5"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}
