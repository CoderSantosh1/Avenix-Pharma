import PageBanner from "./ui/PageBanner";
import SectionHeading from "./ui/SectionHeading";
import BlogList from "./BlogList";

/** Shared layout for /blog and /blog/page/[page]. */
export default function BlogIndex({ page }: { page: number }) {
  return (
    <>
      <PageBanner title="Blog" />
      <section className="bg-soft section-y px-4 sm:px-6">
        <div className="mx-auto max-w-[1220px]">
          <SectionHeading
            align="left"
            label="Latest Blog"
            title="Insights &"
            highlight="Updates"
            description="Stay informed with the latest news, trends and advancements in the pharmaceutical industry."
            className="mb-10"
          />
          <BlogList page={page} />
        </div>
      </section>
    </>
  );
}
