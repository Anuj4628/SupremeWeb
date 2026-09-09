import React from "react";
import { Award, ShieldCheck, Building2, ExternalLink } from "lucide-react";
import { CERTIFICATES } from "../../data/certificatesData";

export default function CertificateDropdown({ onClose }) {
  const getIcon = (id) => {
    switch (id) {
      case "iso-9001-2015":
        return Award;
      case "udyam-msme":
        return ShieldCheck;
      case "massma-membership":
        return Building2;
      default:
        return Award;
    }
  };

  return (
    <div
      className="w-72 sm:w-80 bg-[#0F2942] text-white rounded-xl shadow-2xl border border-slate-700/80 p-1.5 font-sans overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col gap-0.5">
        {CERTIFICATES.map((cert) => {
          const IconComp = getIcon(cert.id);

          return (
            <a
              key={cert.id}
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center justify-between gap-2.5 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors duration-150 text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <IconComp className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                  {cert.title}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 shrink-0 transition-all" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
