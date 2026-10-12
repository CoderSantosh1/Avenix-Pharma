import type { StaticImageData } from "next/image";
import type {
  BlogPost,
  GalleryItem,
  IconName,
  Product,
  Service,
  TeamMember,
} from "@/app/types";

import ManufacturingImage from "@/public/Services/manufacturing.png";
import ManufacturingLarge from "@/public/Services/manufacturing-large.jpg";
import ContractImage from "@/public/Services/contract-manufacturing.png";
import ProductDevImage from "@/public/Services/product-development.png";
import DistributionImage from "@/public/Services/distribution.png";

import Tablets from "@/public/Products/tablets.jpg";
import Capsules from "@/public/Products/capsules.jpg";
import Syrups from "@/public/Products/syrups.jpg";
import Injections from "@/public/Products/injections.jpg";
import Ointments from "@/public/Products/ointments.jpg";
import Nutraceuticals from "@/public/Products/nutraceuticals.jpg";
import NutraceuticalsLarge from "@/public/Products/nutraceuticals-large.jpg";
import Inhalers from "@/public/Products/inhalers.jpg";
import EyeDrops from "@/public/Products/eye-drops.jpg";
import NasalSprays from "@/public/Products/nasal-sprays.jpg";
import Dermatologicals from "@/public/Products/dermatologicals.jpg";
import IvFluids from "@/public/Products/iv-fluids.jpg";
import Vaccines from "@/public/Products/vaccines.jpg";
import Powders from "@/public/Products/powders.jpg";
import OralSuspensions from "@/public/Products/oral-suspensions.jpg";
import Softgels from "@/public/Products/softgel-capsules.jpg";
import Effervescent from "@/public/Products/effervescent-tablets.jpg";
import Herbal from "@/public/Products/herbal-products.jpg";
import Probiotics from "@/public/Products/probiotics.jpg";

import Gallery1 from "@/public/Gallery/gallery-1.jpg";
import Gallery2 from "@/public/Gallery/gallery-2.jpg";
import Gallery3 from "@/public/Gallery/gallery-3.jpg";
import Gallery4 from "@/public/Gallery/gallery-4.jpg";
import Gallery5 from "@/public/Gallery/gallery-5.jpg";
import Gallery6 from "@/public/Gallery/gallery-6.jpg";
import Gallery7 from "@/public/Gallery/gallery-7.jpg";
import Gallery8 from "@/public/Gallery/gallery-8.jpg";
import Gallery9 from "@/public/Gallery/gallery-9.jpg";

import Blog1 from "@/public/Blog/blog-1.jpg";
import Blog2 from "@/public/Blog/blog-2.jpg";
import Blog3 from "@/public/Blog/blog-3.jpg";
import Blog4 from "@/public/Blog/blog-4.jpg";
import Blog5 from "@/public/Blog/blog-5.jpg";
import Blog6 from "@/public/Blog/blog-6.jpg";

import Avatar1 from "@/public/Home/avatar-1.jpg";
import Avatar2 from "@/public/Home/avatar-2.jpg";
import Avatar3 from "@/public/Home/avatar-3.jpg";
import RahulSharma from "@/public/Team/rahul-sharma.jpg";

export const contactInfo = {
  address: "1234 Main Street, Suite 100, ",
  addressLines: ["1234 Main Street, Suite 100, Springfield, IL 62701, USA"],
  phone: "+1 00000000",
  email: "info@xyz.com",
  hours: "Mon - Sat, 9:00 AM - 6:00 PM",
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const defaultBody = (topic: string) => [
  `Our ${topic.toLowerCase()} services are designed to produce safe, effective, and high-quality outcomes. With advanced facilities, strict quality control, and a commitment to global standards, we ensure every product meets the highest levels of safety and efficacy.`,
  "We work across a wide range of pharmaceutical products, including tablets, capsules, liquids, and injections, using modern technology and automated processes. Our experienced team follows internationally recognized guidelines to maintain consistency, purity, and reliability in every batch.",
  "From raw material sourcing to final production, we focus on precision, compliance, and continuous improvement. Our goal is to support healthcare needs worldwide by delivering trusted and high-quality pharmaceutical solutions.",
];

const defaultHighlights = [
  "WHO-GMP certified facilities",
  "Stringent in-process quality checks",
  "Scalable batch sizes",
  "Complete regulatory documentation",
];

export const services: Service[] = [
  {
    slug: "pharmaceutical-manufacturing",
    title: "Pharmaceutical Manufacturing",
    description:
      "State-of-the-art facilities for high-quality and safe medicine production.",
    image: ManufacturingImage,
    heroImage: ManufacturingLarge,
    icon: "settings",
    body: defaultBody("Pharmaceutical manufacturing"),
    highlights: defaultHighlights,
  },
  {
    slug: "contract-manufacturing",
    title: "Contract Manufacturing",
    description:
      "Reliable third-party manufacturing services to support your business growth.",
    image: ContractImage,
    heroImage: ContractImage,
    icon: "flask",
    body: defaultBody("Contract manufacturing"),
    highlights: defaultHighlights,
  },
  {
    slug: "product-development",
    title: "Product Development",
    description:
      "Innovative formulations and customized solutions for better healthcare.",
    image: ProductDevImage,
    heroImage: ProductDevImage,
    icon: "package",
    body: defaultBody("Product development"),
    highlights: defaultHighlights,
  },
  {
    slug: "global-distribution",
    title: "Global Distribution",
    description:
      "Ensuring timely and efficient delivery across domestic and international markets.",
    image: DistributionImage,
    heroImage: DistributionImage,
    icon: "truck",
    body: defaultBody("Global distribution"),
    highlights: defaultHighlights,
  },
  {
    slug: "quality-assurance",
    title: "Quality Control & Testing",
    description:
      "Rigorous analytical testing at every stage to guarantee purity and potency.",
    image: Gallery3,
    heroImage: Gallery3,
    icon: "microscope",
    body: defaultBody("Quality control and testing"),
    highlights: defaultHighlights,
  },
  {
    slug: "research-development",
    title: "Research & Development",
    description:
      "Science-driven research that turns new ideas into effective therapies.",
    image: Gallery4,
    heroImage: Gallery4,
    icon: "flask",
    body: defaultBody("Research and development"),
    highlights: defaultHighlights,
  },
  {
    slug: "regulatory-support",
    title: "Regulatory Support",
    description:
      "Dossier preparation and compliance guidance for smooth market approvals.",
    image: Blog5,
    heroImage: Blog5,
    icon: "file",
    body: defaultBody("Regulatory support"),
    highlights: defaultHighlights,
  },
  {
    slug: "patient-support",
    title: "Patient Support",
    description:
      "Programs and information that help patients use medicines safely.",
    image: Gallery1,
    heroImage: Gallery1,
    icon: "heart",
    body: defaultBody("Patient support"),
    highlights: defaultHighlights,
  },
];

const productSummary = (name: string) =>
  `Our ${name.toLowerCase()} are manufactured under strict quality standards to be safe, effective and consistent, helping patients of all age groups live healthier lives.`;

export const products: Product[] = [
  ["tablets", "Tablets", Tablets],
  ["capsules", "Capsules", Capsules],
  ["syrups", "Syrups", Syrups],
  ["injections", "Injections", Injections],
  ["ointments", "Ointments", Ointments],
  ["nutraceuticals", "Nutraceuticals", Nutraceuticals],
  ["inhalers", "Inhalers", Inhalers],
  ["eye-drops", "Eye Drops", EyeDrops],
  ["nasal-sprays", "Nasal Sprays", NasalSprays],
  ["dermatologicals", "Dermatologicals", Dermatologicals],
  ["iv-fluids", "IV Fluids", IvFluids],
  ["vaccines", "Vaccines", Vaccines],
  ["powders", "Powders", Powders],
  ["oral-suspensions", "Oral Suspensions", OralSuspensions],
  ["softgel-capsules", "Softgel Capsules", Softgels],
  ["effervescent-tablets", "Effervescent Tablets", Effervescent],
  ["herbal-products", "Herbal Products", Herbal],
  ["probiotics", "Probiotics", Probiotics],
].map(([slug, name, image]) => ({
  slug: slug as string,
  name: name as string,
  image: image as StaticImageData,
  heroImage: slug === "nutraceuticals" ? NutraceuticalsLarge : undefined,
  summary: productSummary(name as string),
}));

export const gallery: GalleryItem[] = [
  { src: Gallery1, caption: "Research Laboratory", category: "Laboratory" },
  { src: Gallery2, caption: "Capsule Production Line", category: "Manufacturing" },
  { src: Gallery3, caption: "Automated Process Control", category: "Manufacturing" },
  { src: Gallery4, caption: "Sample Analysis", category: "Laboratory" },
  { src: Gallery5, caption: "Quality Medicines", category: "Products" },
  { src: Gallery6, caption: "Formulation Testing", category: "Laboratory" },
  { src: Gallery7, caption: "Sterile Vial Filling", category: "Manufacturing" },
  { src: Gallery8, caption: "Avenix Pharma Campus", category: "Facility" },
  { src: Gallery9, caption: "Tablet Packaging", category: "Manufacturing" },
];

export const blogs: BlogPost[] = [
  {
    slug: "future-of-pharmaceutical-innovation",
    title: "The Future of Pharmaceutical Innovation",
    date: "15 Sep 2025",
    category: "Pharmaceutical",
    image: Blog1,
    excerpt:
      "How science, technology and collaboration are reshaping the way new treatments reach patients.",
  },
  {
    slug: "importance-of-quality-in-pharmaceuticals",
    title: "Importance of Quality in Pharmaceuticals",
    date: "10 Sep 2025",
    category: "Healthcare",
    image: Blog2,
    excerpt:
      "Why rigorous quality systems are the foundation of every safe and effective medicine.",
  },
  {
    slug: "advancing-healthcare-through-research",
    title: "Advancing Healthcare Through Research",
    date: "05 Sep 2025",
    category: "Research",
    image: Blog3,
    excerpt:
      "Inside the research programs driving better outcomes for patients worldwide.",
  },
  {
    slug: "modern-sterile-manufacturing",
    title: "Modern Sterile Manufacturing Practices",
    date: "28 Aug 2025",
    category: "Innovation",
    image: Blog4,
    excerpt:
      "Automation and clean-room design that keep injectable products safe.",
  },
  {
    slug: "precision-medicine-explained",
    title: "Precision Medicine, Explained",
    date: "20 Aug 2025",
    category: "Research",
    image: Blog5,
    excerpt:
      "Targeted therapies are changing how we think about dosage and treatment.",
  },
  {
    slug: "building-a-global-supply-chain",
    title: "Building a Reliable Global Supply Chain",
    date: "12 Aug 2025",
    category: "Industry News",
    image: Blog6,
    excerpt:
      "What it takes to deliver medicines on time across domestic and international markets.",
  },
  {
    slug: "inside-a-modern-qc-laboratory",
    title: "Inside a Modern QC Laboratory",
    date: "05 Aug 2025",
    category: "Research",
    image: Gallery1,
    excerpt:
      "A look at the instruments and checks that confirm every batch is safe to release.",
  },
  {
    slug: "automation-in-tablet-manufacturing",
    title: "Automation in Tablet Manufacturing",
    date: "29 Jul 2025",
    category: "Innovation",
    image: Gallery9,
    excerpt:
      "How automated lines improve consistency, speed and traceability on the shop floor.",
  },
  {
    slug: "understanding-who-gmp",
    title: "Understanding WHO-GMP Standards",
    date: "22 Jul 2025",
    category: "Pharmaceutical",
    image: Gallery3,
    excerpt:
      "What Good Manufacturing Practice requires and why it matters to patients.",
  },
  {
    slug: "role-of-nutraceuticals",
    title: "The Growing Role of Nutraceuticals",
    date: "15 Jul 2025",
    category: "Healthcare",
    image: Gallery5,
    excerpt:
      "Why vitamins, minerals and herbal supplements are becoming part of everyday wellness.",
  },
  {
    slug: "safe-storage-of-medicines",
    title: "Safe Storage of Medicines at Home",
    date: "08 Jul 2025",
    category: "Healthcare",
    image: Gallery6,
    excerpt:
      "Simple guidelines to keep medicines effective, from temperature to packaging.",
  },
  {
    slug: "partnering-for-better-healthcare",
    title: "Partnering for Better Healthcare",
    date: "01 Jul 2025",
    category: "Industry News",
    image: Gallery8,
    excerpt:
      "How collaboration between manufacturers, hospitals and distributors improves access.",
  },
];

export const blogCategories = [
  { name: "Pharmaceutical", count: 12 },
  { name: "Research", count: 8 },
  { name: "Healthcare", count: 10 },
  { name: "Innovation", count: 7 },
  { name: "Industry News", count: 5 },
];

export const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "General Physician",
    location: "New Delhi, India",
    avatar: Avatar1,
    quote:
      "Avenix Pharma has been a reliable partner for our practice. Their product quality and timely delivery have always met our expectations.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Pharmacist",
    location: "Mumbai, India",
    avatar: Avatar2,
    quote:
      "Excellent range of medicines and consistent quality. Their team is always supportive and professional.",
  },
  {
    name: "Dr. Amit Verma",
    role: "Hospital Director",
    location: "Bengaluru, India",
    avatar: Avatar3,
    quote:
      "We appreciate their commitment to innovation and patient care. A trusted pharmaceutical partner for our hospital.",
  },
  {
    name: "Dr. Sanjay Mehta",
    role: "Cardiologist",
    location: "Pune, India",
    avatar: Avatar1,
    quote:
      "Their documentation and regulatory support made onboarding new products effortless for our hospital network.",
  },
  {
    name: "Dr. Neha Kapoor",
    role: "Clinical Researcher",
    location: "Hyderabad, India",
    avatar: Avatar2,
    quote:
      "A research-minded team that genuinely cares about outcomes. Communication is quick and transparent.",
  },
  {
    name: "Dr. Arjun Rao",
    role: "Pharmacy Owner",
    location: "Chennai, India",
    avatar: Avatar3,
    quote:
      "Stock always arrives on schedule and well packed. Our customers trust the Avenix brand.",
  },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years of Experience", icon: "factory" },
  { value: 500, suffix: "+", label: "Happy Clients", icon: "users" },
  { value: 100, suffix: "+", label: "Quality Products", icon: "box" },
  { value: 50, suffix: "+", label: "Countries Served", icon: "globe" },
] as const;

export const team: TeamMember[] = [
  {
    slug: "rahul-sharma",
    name: "Dr. Rahul Sharma",
    role: "Managing Director",
    image: RahulSharma,
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    location: "New Delhi, India",
    bio: "Dr. Rahul Sharma is a dedicated healthcare professional with a strong commitment to advancing pharmaceutical care and ensuring better health outcomes for patients. His expertise and leadership help drive innovation and quality across our organization.",
    about:
      "With years of experience in the pharmaceutical and healthcare industry, Dr. Rahul Sharma focuses on improving patient care through innovative solutions, research-driven approaches, and a commitment to excellence. He plays a key role in guiding our team and ensuring the highest standards in pharmaceutical services.",
  },
  {
    slug: "amit-verma",
    name: "Dr. Amit Verma",
    role: "Head of Research",
    image: Avatar3,
    email: "amit.verma@example.com",
    phone: "+91 98765 43211",
    location: "Bengaluru, India",
    bio: "Dr. Amit Verma leads our research programs, turning scientific insight into formulations that make a measurable difference for patients.",
    about:
      "Dr. Verma has spent his career in formulation science and clinical research. He oversees our R&D pipeline and partners with hospitals and universities to keep Avenix Pharma at the forefront of innovation.",
  },
  {
    slug: "priya-sharma",
    name: "Dr. Priya Sharma",
    role: "Quality Assurance Lead",
    image: Avatar2,
    email: "priya.sharma@example.com",
    phone: "+91 98765 43212",
    location: "Mumbai, India",
    bio: "Dr. Priya Sharma ensures every batch that leaves our facilities meets stringent national and international quality standards.",
    about:
      "With deep expertise in GMP compliance and analytical testing, Dr. Sharma heads our quality assurance team and drives a culture of continuous improvement across manufacturing.",
  },
];
