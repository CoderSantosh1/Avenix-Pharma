import type { StaticImageData } from "next/image";

export type IconName =
  | "settings"
  | "flask"
  | "package"
  | "truck"
  | "shield"
  | "file"
  | "microscope"
  | "heart";

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  heroImage: StaticImageData;
  icon: IconName;
  body: string[];
  highlights: string[];
};

export type Product = {
  slug: string;
  name: string;
  image: StaticImageData;
  heroImage?: StaticImageData;
  summary: string;
};

export type GalleryCategory =
  | "All"
  | "Laboratory"
  | "Manufacturing"
  | "Products"
  | "Facility";

export type CategoryConfig = {
  common: Record<string, unknown>;
  categories: Record<
    string,
    {
      sections: {
        Gallery: {
          variants: Record<
            string,
            { categories: GalleryCategory[]; items: GalleryItem[] }
          >;
        };
      };
    }
  >;
};

export type GalleryItem = {
  src: string | StaticImageData;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: StaticImageData;
  excerpt: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: StaticImageData;
  email: string;
  phone: string;
  location: string;
  bio: string;
  about: string;
};
