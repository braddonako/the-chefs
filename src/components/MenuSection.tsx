import { menuCategories } from "@/config/menu";
import type { MenuCategory, MenuItem } from "@/config/menu";

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="menu-card rounded-xl border border-border-light bg-bg-secondary p-6 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h4 className="text-lg font-semibold text-text-primary">{item.name}</h4>
        <span className="shrink-0 whitespace-nowrap rounded-full bg-brand-accent/15 px-3 py-1 text-sm font-semibold text-brand-primary">
          {item.price}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {item.description}
      </p>
      {item.tags && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-light px-2.5 py-0.5 text-xs font-medium text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-8 text-center">
        <span className="mb-2 block text-3xl">{category.icon}</span>
        <h3 className="mb-1 text-2xl font-bold text-text-primary md:text-3xl">
          {category.title}
        </h3>
        <p className="text-sm text-text-muted">{category.subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="bg-bg-primary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            What We Serve
          </p>
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            The Menu
          </h2>
          <div className="menu-divider mx-auto max-w-xs">
            <span className="text-sm">✦</span>
          </div>
        </div>

        {menuCategories.map((category) => (
          <CategorySection key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
