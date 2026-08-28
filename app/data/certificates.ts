export interface Certificate {
  slug: string;
  name: string;
  shortName: string;
  file: string;
  description: string;
  icon: string;
}

export const certificates: Certificate[] = [
  {
    slug: "mtcna",
    name: "MTCNA",
    shortName: "MTCNA",
    file: "/Cetifications/MTCNA.pdf",
    description: "MikroTik Certified Network Associate",
    icon: "/Icons/MTCNA.png",
  },
  {
    slug: "career-essentials-microsoft-linkedin",
    name: "Career Essentials Certificate",
    shortName: "Career Essentials",
    file: "/Cetifications/Career Essentials Certificate by Microsoft and LinkedIn.pdf",
    description: "Microsoft and LinkedIn Career Essentials",
    icon: "/Icons/Microsoft_Linkedin.png",
  },
  {
    slug: "google-it-support-coursera",
    name: "Coursera Professional Certificate",
    shortName: "Coursera Professional",
    file: "/Cetifications/Coursera Q94848A88CKB.pdf",
    description: "Google IT Support Professional Certificate",
    icon: "/Icons/Coursera.png",
  },
  {
    slug: "cisco-ccna",
    name: "Cisco Certified Network Associate",
    shortName: "Cisco CCNA",
    file: "/Cetifications/Cisco Certified Network Associate.pdf",
    description: "CCNA - Cisco Certified Network Associate",
    icon: "/Icons/Cisco.png",
  },
];

export function getCertificate(slug: string) {
  return certificates.find((certificate) => certificate.slug === slug);
}
