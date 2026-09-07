import {
  FileText,
  Disc,
  Pipette,
  Layers,
  Wrench,
  Sparkles,
  ShieldCheck,
  Flame,
  Zap,
  Globe,
  Building2,
  Anchor,
  Factory
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Products",
    href: "#products",
    dropdown: [
      {
        title: "Pipes & Tubes",
        desc: "Seamless, Welded, LTCS & Line Pipes",
        icon: Pipette,
        href: "#pipes",
      },
      {
        title: "Sheets, Plates & Coils",
        desc: "Hot & Cold Rolled, Shims & Perforated",
        icon: FileText,
        href: "#sheets",
      },
      {
        title: "Round, Hex & Square Bars",
        desc: "Bright, Black, Peeled & Ground Bars",
        icon: Disc,
        href: "#bars",
      },
      {
        title: "Industrial Flanges",
        desc: "ANSI, BS 10, Weldneck, Slipon & Blind",
        icon: Layers,
        href: "#flanges",
      },
      {
        title: "Fasteners & Bolting",
        desc: "High Tensile Studs, Bolts & Nuts",
        icon: Wrench,
        href: "#fasteners",
      },
      {
        title: "Butt Weld & Forged Fittings",
        desc: "Elbows, Tees, Reducers & Socketweld",
        icon: Sparkles,
        href: "#fittings",
      },
      {
        title: "Sanitary & Ferrule Fittings",
        desc: "Tri-Clover, Dairy & Double Ferrule",
        icon: ShieldCheck,
        href: "#sanitary",
      },
    ],
  },
  {
    label: "Materials",
    href: "#materials",
    dropdown: [
      {
        title: "Stainless Steel",
        desc: "304, 316L, 321, 310S, 347, 904L, 17-4PH",
        icon: ShieldCheck,
        href: "#ss",
      },
      {
        title: "Nickel & High Alloys",
        desc: "Inconel 600/625, Monel 400, Hastelloy C276",
        icon: Flame,
        href: "#nickel",
      },
      {
        title: "Duplex & Super Duplex",
        desc: "UNS S31803 (2205), S32750 (2507)",
        icon: Zap,
        href: "#duplex",
      },
      {
        title: "Titanium & Alloys",
        desc: "Grade 1, Grade 2, Grade 5 (Ti-6Al-4V), Gr 7",
        icon: Globe,
        href: "#titanium",
      },
      {
        title: "Carbon & Alloy Steel",
        desc: "ASTM A106 B, A335 P11/P22/P91, Boiler Plates",
        icon: Factory,
        href: "#carbon-alloy",
      },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    dropdown: [
      {
        title: "Oil & Gas & Refineries",
        desc: "High-pressure certified piping & fittings",
        icon: Flame,
        href: "#oil-gas",
      },
      {
        title: "Petrochemical & Power",
        desc: "Corrosion-resistant high temp alloys",
        icon: Zap,
        href: "#petrochem",
      },
      {
        title: "Pharma & Food Processing",
        desc: "Hygienic electro-polished TC fittings",
        icon: Building2,
        href: "#pharma",
      },
      {
        title: "Marine & Ship Building",
        desc: "Copper-Nickel & Monel sea water alloys",
        icon: Anchor,
        href: "#marine",
      },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export default navItems;
