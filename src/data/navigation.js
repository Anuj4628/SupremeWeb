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
        href: "#materials/stainless-steel",
      },
      {
        title: "Nickel",
        desc: "Nickel 200/201, Inconel 600/625, Monel 400",
        icon: Flame,
        href: "#materials/nickel",
      },
      {
        title: "High Alloys",
        desc: "Hastelloy C22, Alloy 20, SMO 254, AL-6XN",
        icon: Sparkles,
        href: "#materials/high-alloys",
      },
      {
        title: "Duplex",
        desc: "UNS S31803 (2205), UNS S32205, LDX 2101",
        icon: Zap,
        href: "#materials/duplex",
      },
      {
        title: "Super Duplex",
        desc: "UNS S32750 (2507), UNS S32760 (Zeron 100)",
        icon: Anchor,
        href: "#materials/super-duplex",
      },
      {
        title: "Titanium",
        desc: "Grade 1, Grade 2, Grade 5 (Ti-6Al-4V), Grade 7",
        icon: Globe,
        href: "#materials/titanium",
      },
      {
        title: "Alloys",
        desc: "Zirconium 702, Tantalum, Cu-Ni 70/30, Hastelloy B2",
        icon: Layers,
        href: "#materials/alloys",
      },
      {
        title: "Carbon",
        desc: "ASTM A106 Gr B, A105, A333 Gr 6, A516 Gr 70",
        icon: Factory,
        href: "#materials/carbon",
      },
      {
        title: "Alloy Steel",
        desc: "ASTM A335 P5, P9, P11, P22, P91, F11, F22",
        icon: Wrench,
        href: "#materials/alloy-steel",
      },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    dropdown: [
      {
        title: "Defense & Aerospace",
        desc: "Mil-spec titanium, 17-4PH & aero forgings",
        icon: ShieldCheck,
        href: "#industries/defense-aerospace",
      },
      {
        title: "Precision Industrial Piping & Biopharma",
        desc: "Hygienic Ra < 0.4µm electro-polished tubing",
        icon: Pipette,
        href: "#industries/precision-industrial-piping-biopharma",
      },
      {
        title: "Heavy Engineering & Infrastructures",
        desc: "Structural plates, 200mm cutting & forged rings",
        icon: Building2,
        href: "#industries/heavy-engineering-infrastructures",
      },
      {
        title: "Nuclear & Thermal Power",
        desc: "ASME Sec III creep-resistant P91 & alloy tubing",
        icon: Zap,
        href: "#industries/nuclear-thermal-power",
      },
      {
        title: "Petrochemicals & Chemicals",
        desc: "Severe sour gas, Hastelloy & acid piping",
        icon: Flame,
        href: "#industries/petrochemicals-chemicals",
      },
      {
        title: "Marine & Offshore Rigs",
        desc: "Super Duplex 2507, CuNi & subsea manifolds",
        icon: Anchor,
        href: "#industries/marine-offshore-rigs",
      },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export default navItems;
