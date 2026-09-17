import { ArrowRight, Building2 } from "lucide-react";

interface TeamsCalloutProps {
  source: string;
  className?: string;
}

export default function TeamsCallout({ source, className = "" }: TeamsCalloutProps) {
  return (
    <aside
      aria-label="Summit for teams"
      className={`flex flex-col gap-6 rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-7 md:flex-row md:items-center md:justify-between ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-sky-100">
          <Building2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">
            Buying for your team?
          </h2>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-600">
            Pay by invoice, share selected meeting notes, and get personal help
            setting up your team. No personal Apple IDs needed.
          </p>
        </div>
      </div>
      <a
        href="/teams"
        data-source={source}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600"
      >
        Explore Summit for Teams
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </aside>
  );
}
