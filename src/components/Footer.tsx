import { siteConfig } from "@/config/menu";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-dark-secondary px-6 py-8">
      <div className="mx-auto flex max-w-[var(--content-max-width)] flex-col items-center justify-between gap-4 text-sm text-text-on-dark-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p className="font-medium text-text-on-dark">
          {siteConfig.slogan}
        </p>
      </div>
    </footer>
  );
}
