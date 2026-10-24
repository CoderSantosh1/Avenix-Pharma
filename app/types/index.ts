export type IconName =
  | "settings" | "flask" | "package" | "truck" | "shield" | "file"
  | "microscope" | "heart" | "users" | "target" | "award" | "globe"
  | "factory" | "box" | "arrow" | "chevron" | "chevron-left" | "pin"
  | "phone" | "mail" | "calendar" | "user" | "folder" | "clock"
  | "quote" | "star" | "search" | "close" | "send" | "check"
  | "building" | "grid" | "message" | "facebook" | "linkedin" | "twitter" | "youtube";

export type ContactInfo = {
  address: string;
  addressLines: string[];
  phone: string;
  email: string;
  hours: string;
};

export type NavLink = { name: string; href: string };
export type HeaderConfig = {
  logoAlt: string;
  navLinks: NavLink[];
  enquiryButton: { label: string; href: string; icon: IconName };
  mobileMenu: { openLabel: string; closeLabel: string; navIcon: IconName };
};

export type FooterConfig = {
  logoAlt: string;
  description: string;
  quickLinksTitle: string;
  quickLinks: NavLink[];
  quickLinkIcon: IconName;
  servicesTitle: string;
  servicesLinkIcon: IconName;
  contactTitle: string;
  contactIcons: { address: IconName; phone: IconName; email: IconName };
  copyrightText: string;
  socialLinks: { name: IconName; href: string }[];
};

export type CommonConfig = {
  contactInfo: ContactInfo;
  assets: Record<string, string>;
  iconIds: IconName[];
  Footer: FooterConfig;
  enquiryOptions: string[];
  productDetailFeatures: string[];
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  heroImage: string;
  icon: IconName;
  body: string[];
  highlights: string[];
};

export type Product = {
  slug: string;
  name: string;
  image: string;
  heroImage?: string;
  summary: string;
};

export type GalleryCategory =
  | "All"
  | "Laboratory"
  | "Manufacturing"
  | "Products"
  | "Facility";

export type CategoryConfig = {
  common: CommonConfig;
  categories: Record<
    string,
    {
      sections: Record<string, unknown> & {
        Gallery: {
          variants: Record<string, { categories: GalleryCategory[]; items: GalleryItem[] }>;
        };
      };
    }
  >;
};

export type GalleryItem = {
  src: string;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
};


export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  about: string;
};
