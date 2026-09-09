import isoCertImage from "../assets/Certificates/WhatsApp Image 2026-09-09 at 15.26.59.jpeg";
import udyamCertPdf from "../assets/Certificates/Print _ Udyam Registration Certificate---RAJENDRA (1).pdf";
import massmaCertImage from "../assets/Certificates/WhatsApp Image 2026-09-09 at 15.28.46.jpeg";

export const CERTIFICATES = [
  {
    id: "iso-9001-2015",
    title: "ISO 9001:2015 Quality Management System",
    shortTitle: "ISO 9001:2015 Certificate",
    issuer: "Royal Assessments Pvt. Ltd. (EGAC & IAF Accredited)",
    regNo: "Certificate No: E20250422122",
    fileUrl: isoCertImage,
    fileType: "IMAGE",
    fileFormat: "JPG Image",
    badgeColor: "amber",
    fileName: "WhatsApp Image 2026-09-09 at 15.26.59.jpeg",
    description: "Certified for manufacture, stockiest & exporter of ferrous & non-ferrous metals, pipes, fittings & raw materials.",
    validity: "Valid Until: 20/04/2028",
    scope: "Quality Management Systems Standard",
  },
  {
    id: "udyam-msme",
    title: "Udyam Registration Certificate (MSME)",
    shortTitle: "Udyam MSME Certificate",
    issuer: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    regNo: "UDYAM-MH-19-0110593",
    fileUrl: udyamCertPdf,
    fileType: "PDF",
    fileFormat: "Official PDF Document",
    badgeColor: "emerald",
    fileName: "Print _ Udyam Registration Certificate---RAJENDRA (1).pdf",
    description: "Official government enterprise registration recognizing Supreme Metal and Alloys under Ministry of MSME.",
    validity: "Active & Government Verified",
    scope: "Manufacturing & Wholesale Supply",
  },
  {
    id: "massma-membership",
    title: "MASSMA Certificate of Membership",
    shortTitle: "MASSMA Membership Certificate",
    issuer: "Metal & Stainless Steel Merchant's Association (Regd. 1982)",
    regNo: "Regd. Act No. NTC / 167 of 1982",
    fileUrl: massmaCertImage,
    fileType: "IMAGE",
    fileFormat: "JPG Image",
    badgeColor: "cyan",
    fileName: "WhatsApp Image 2026-09-09 at 15.28.46.jpeg",
    description: "Official certificate of active membership in the apex trade association for metal & stainless steel merchants.",
    validity: "Renewed for 2025-26 & 2026-27",
    scope: "Apex Industry Association Membership",
  },
];

export default CERTIFICATES;
