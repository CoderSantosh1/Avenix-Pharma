import PageBanner from "./ui/PageBanner";
import SectionHeading from "./ui/SectionHeading";
import BlogList from "./BlogList";

/** Shared layout for /blog and /blog/page/[page]. */
export default function BlogIndex({ page }: { page: number }) {
  return (
    <>
      <PageBanner title="Blog" />
      <section className="py-14 sm:py-16 lg:py-16 bg-soft">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            label="Latest Blog"
            title="Insights &"
            highlight="Updates"
            description="Stay informed with the latest news, trends and advancements in the pharmaceutical industry."
          />
          <BlogList page={page} />
        </div>
      </section>
    </>
  );
}
