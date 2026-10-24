import config from "@/app/data/category.json";
import type { BlogPost, FooterConfig, GalleryItem, HeaderConfig, IconName, Product, Service, TeamMember } from "@/app/types";

const common = config.common;
const sections = config.categories.Pharma.sections;

export const contactInfo = common.contactInfo;
export const header = sections.Header.variants.PharmaHeader1 as HeaderConfig;
export const navLinks = header.navLinks;
export const services = sections.Services.variants.PharmaServices1.items as Service[];
export const products = sections.Products.variants.PharmaProducts1.items as Product[];
export const gallery = sections.Gallery.variants.PharmaGallery1.items as GalleryItem[];
export const blogs = sections.Blogs.variants.PharmaBlogs1.posts as BlogPost[];
export const blogCategories = sections.Blogs.variants.PharmaBlogs1.categories;
export const testimonials = sections.Testimonials.variants.PharmaTestimonials1.items as {
  name: string; role: string; location: string; quote: string; avatar: string;
}[];
export const stats = sections.Stats.variants.PharmaStats1.items as { value: number; suffix: string; label: string; icon: IconName }[];
export const team = sections.Team.variants.PharmaTeam1.members as TeamMember[];
export const footer = common.Footer as FooterConfig;
export const assets = common.assets;
