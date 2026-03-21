import React from "react";
import { Badge } from "./ui/badge";
import { Cpu, Zap, Lock, CheckCircle2 } from "lucide-react";

const beforeAfter = {
  before: {
    label: "Raw Transcript",
    content: [
      { speaker: "Speaker 1", text: "So, um, I think we should, you know, probably look at the, uh, the quarterly numbers before we make any, like, final decisions on the budget..." },
      { speaker: "Speaker 2", text: "Yeah, yeah, totally. I was actually, um, I was looking at those yesterday and the, the main thing that stood out was the 23% increase in, in customer acquisition costs..." },
      { speaker: "Speaker 1", text: "Right, right. And that's, that's a problem because, um, Sarah mentioned that the, the board wants us to, to bring that down by at least, what was it, 15%?" },
    ],
  },
  after: {
    label: "AI Summary",
    sections: [
      {
        heading: "Budget Review - Key Points",
        items: [
          "Customer acquisition costs up 23% quarter-over-quarter",
          "Board target: reduce CAC by 15% before next review",
          "Decision pending on Q2 budget allocation until numbers finalized",
        ],
      },
      {
        heading: "Speakers Identified",
        items: [
          "Speaker 1: Meeting lead (referenced Sarah / board direction)",
          "Speaker 2: Analyst (provided CAC data from prior review)",
        ],
      },
    ],
  },
};

const stats = [
  {
    icon: <Cpu className="w-5 h-5" />,
    value: "100% Local",
    label: "Runs on Apple Silicon. No internet needed after download.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    value: "~2 min",
    label: "To process a 1-hour meeting on M1 Mac or newer.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    value: "Zero Upload",
    label: "Audio never leaves your Mac. NDA & HIPAA friendly.",
  },
];

const AIQuality: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200"
          >
            Local AI Quality
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            "Does Local AI Actually Work?"
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See for yourself. Here's what Summit produces from a real meeting — no cloud, no internet, just your Mac.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Before: Raw transcript */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  {beforeAfter.before.label}
                </span>
                <span className="text-xs text-gray-400">Unprocessed</span>
              </div>
              <div className="p-5 space-y-4 max-h-80 overflow-y-auto">
                {beforeAfter.before.content.map((line, i) => (
                  <div key={i}>
                    <span className="text-xs font-medium text-sky-600 block mb-1">
                      {line.speaker}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {line.text}
                    </p>
                  </div>
                ))}
                <div className="text-center text-xs text-gray-300 pt-2">
                  ... 47 more minutes of conversation ...
                </div>
              </div>
            </div>

            {/* After: AI Summary */}
            <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm overflow-hidden ring-1 ring-emerald-100">
              <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-emerald-700">
                  {beforeAfter.after.label}
                </span>
                <span className="text-xs text-emerald-500 font-medium">Processed locally</span>
              </div>
              <div className="p-5 space-y-5">
                {beforeAfter.after.sections.map((section, i) => (
                  <div key={i}>
                    <h5 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">
                      {section.heading}
                    </h5>
                    <ul className="space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground/80">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIQuality;
