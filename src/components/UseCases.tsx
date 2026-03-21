import React, { useState } from "react";
import { Badge } from "./ui/badge";
import {
  Scale,
  Briefcase,
  Code,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";

const useCases = [
  {
    id: "legal",
    icon: <Scale className="w-5 h-5" />,
    role: "Lawyer",
    title: "Client Depositions & Witness Interviews",
    inputLabel: "45-min deposition recording",
    inputDetails: [
      "Multiple speakers, legal terminology",
      "Cross-examination with rapid back-and-forth",
      "References to exhibits and prior testimony",
    ],
    output: {
      title: "Deposition Summary - Johnson v. Meridian Corp",
      date: "March 18, 2026",
      sections: [
        {
          heading: "Key Admissions",
          items: [
            "Witness confirmed email was sent on Jan 12 (timestamp 14:23)",
            'Acknowledged reviewing the contract "at least twice" before signing',
            "Could not recall specific conversation with defendant on Feb 3",
          ],
        },
        {
          heading: "Action Items",
          items: [
            "Request exhibits B-4 through B-7 from opposing counsel",
            "Schedule follow-up with forensic accountant re: discrepancy",
            "File motion to compel by Friday deadline",
          ],
        },
      ],
      quote:
        "Every other tool uploads audio to the cloud. That's a non-starter under attorney-client privilege.",
    },
  },
  {
    id: "consulting",
    icon: <Briefcase className="w-5 h-5" />,
    role: "Consultant",
    title: "Client Discovery & Strategy Calls",
    inputLabel: "60-min client discovery call",
    inputDetails: [
      "Stakeholder interviews across departments",
      "Mix of strategic and tactical discussion",
      "Action items scattered throughout",
    ],
    output: {
      title: "Discovery Call - Acme Corp Digital Transformation",
      date: "March 19, 2026",
      sections: [
        {
          heading: "Key Findings",
          items: [
            "Current CRM adoption at 34% - main blocker is mobile UX",
            "CFO wants ROI framework before Q3 board meeting",
            "Sales team processes 200+ leads/week manually via spreadsheets",
          ],
        },
        {
          heading: "Next Steps",
          items: [
            "Send proposal with 3 implementation tiers by Wednesday",
            "Schedule technical deep-dive with their IT lead (Sarah Chen)",
            "Prepare ROI model using their $2.4M annual processing cost",
          ],
        },
      ],
      quote:
        "Summit replaced my entire workflow of multiple apps. One click, client-ready summary.",
    },
  },
  {
    id: "engineering",
    icon: <Code className="w-5 h-5" />,
    role: "Engineering Lead",
    title: "Sprint Planning & Architecture Reviews",
    inputLabel: "30-min sprint planning standup",
    inputDetails: [
      "5-7 engineers discussing blockers",
      "Technical decisions and trade-offs",
      "Dependencies across teams",
    ],
    output: {
      title: "Sprint 24 Planning - Platform Team",
      date: "March 20, 2026",
      sections: [
        {
          heading: "Decisions Made",
          items: [
            "Migrate auth service to OAuth 2.1 - start next sprint",
            "Keep PostgreSQL for now, revisit DynamoDB in Q3",
            "Alex owns the API versioning RFC - draft by Thursday",
          ],
        },
        {
          heading: "Blockers",
          items: [
            "CI pipeline flaky tests - Maya to investigate (P1)",
            "Waiting on security review for payments module",
            "Need design handoff for settings page redesign",
          ],
        },
      ],
      quote:
        "5-7 meetings a day. Summit keeps everything in my Obsidian knowledge base at my fingertips.",
    },
  },
];

const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const current = useCases[activeCase];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-4 bg-sky-50 text-sky-700 border-sky-200"
          >
            See It In Action
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Any Meeting to Actionable Notes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real examples. Real output. See exactly what Summit produces.
          </p>
        </div>

        {/* Role selector tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {useCases.map((uc, index) => (
            <button
              key={uc.id}
              onClick={() => setActiveCase(index)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCase === index
                  ? "bg-sky-100 text-sky-700 shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {uc.icon}
              {uc.role}
            </button>
          ))}
        </div>

        {/* Use case content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left: Input (meeting) */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Meeting Input</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {current.title}
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {current.inputLabel}
              </div>
              <ul className="space-y-3">
                {current.inputDetails.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Users className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" />
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Arrow on desktop */}
              <div className="hidden lg:flex items-center justify-center mt-6">
                <div className="flex items-center gap-2 text-sky-500 text-sm font-medium">
                  <span>Summit processes locally</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              {/* Arrow on mobile - pointing down */}
              <div className="flex lg:hidden items-center justify-center mt-6">
                <div className="flex flex-col items-center gap-1 text-sky-500 text-sm font-medium">
                  <span>Summit processes locally</span>
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

            {/* Right: Output (summary) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Mock app header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-gray-500 font-medium ml-2">
                  Summit AI Notes
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground text-sm">
                    {current.output.title}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    {current.output.date}
                  </span>
                </div>

                {current.output.sections.map((section, i) => (
                  <div key={i} className={i > 0 ? "mt-5" : ""}>
                    <h5 className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
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
      </div>
    </section>
  );
};

export default UseCases;
