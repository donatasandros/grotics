import type { transaction } from "@/db/schema";
import type { InferSelectModel } from "drizzle-orm";
import {
  CircleDollarSignIcon,
  PackageCheckIcon,
  TrophyIcon,
} from "lucide-react";

interface OverviewCardsProps {
  items: InferSelectModel<typeof transaction>[];
}

export default function OverviewCards({ items }: OverviewCardsProps) {
  const cards = [
    {
      title: "Total earnings",
      value: `${items.reduce((sum, t) => sum + t.wlsEarned, 0)} WLS`,
      icon: CircleDollarSignIcon,
    },
    {
      title: "Items sold",
      value: items.reduce((sum, t) => sum + t.quantity, 0),
      icon: PackageCheckIcon,
    },
    {
      title: "Largest sale",
      value: `${Math.max(...items.map((t) => t.wlsEarned))} WLS`,
      icon: TrophyIcon,
    },
  ];

  return (
    <section className="flex items-center justify-between gap-5 flex-wrap">
      {cards.map((card) => (
        <div
          key={card.title}
          className="p-5 max-lg:px-4 min-w-80 flex-1 max-lg:flex-col flex gap-4 rounded-xl border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xs border"
        >
          <div className="flex items-center justify-center size-10 bg-white shrink-0 rounded-lg ring-1 ring-inset ring-gray-300 dark:ring-gray-700 dark:bg-gray-950 shadow-xs-skeumorphic">
            <card.icon className="size-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
              {card.title}
            </span>
            <span className="text-gray-900 whitespace-nowrap font-semibold dark:text-gray-50 text-3xl">
              {card.value}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
