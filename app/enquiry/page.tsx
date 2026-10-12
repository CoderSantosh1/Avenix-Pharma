import type { Metadata } from "next";
import Image from "next/image";
import EnquiryImage from "@/public/Contact/enquiry.jpg";
import { contactInfo } from "@/app/data/data";
import PageBanner from "@/app/components/ui/PageBanner";
import Reveal from "@/app/components/ui/Reveal";
import Icon, { type Icon as IconName } from "@/app/components/ui/Icons";
import EnquiryForm from "@/app/components/EnquiryForm";

export const metadata: Metadata = { title: "Enquiry" };

const details: { title: string; value: string; icon: IconName }[] = [
  { title: "Our Address", value: contactInfo.address, icon: "pin" },
  { title: "Call Us", value: contactInfo.phone, icon: "phone" },
  { title: "Email Us", value: contactInfo.email, icon: "mail" },
];

function Label({ children }: { children: string }) {
  return (
    <div className="mb-2 flex items-center gap-3">
      <span className="grow-line h-[2px] w-9 bg-teal" />
      <p className="text-[13px] font-semibold uppercase tracking-[1px] text-navy">
        {children}
      </p>
    </div>
  );
}

export default function EnquiryPage() {
  return (
    <>
      <PageBanner title="Enquiry" />

      <section className="bg-soft px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 lg:grid-cols-[425px_1fr]">
          <Reveal variant="left">
            <Label>Get in Touch</Label>
            <h2 className="text-[30px] font-bold text-navy sm:text-[34px]">
              Send Your <span className="text-teal">Enquiry</span>
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-muted">
              Have a question or need more information about our pharmaceutical
              products or services? Fill out the form and our team will get
              back to you shortly.
            </p>

            <div className="group relative mt-6 aspect-[425/165] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={EnquiryImage}
                alt="Sterile vials on a production line"
                fill
                sizes="425px"
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
            </div>

            <ul className="mt-5 space-y-3">
              {details.map((d, i) => (
                <li
                  key={d.title}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="group flex items-center gap-4 rounded-xl bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:translate-x-2 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e0f4f6] text-teal-dark transition-all duration-500 group-hover:bg-teal group-hover:text-white">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-navy">{d.title}</p>
                    <p className="text-[14px] text-muted">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right">
            <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-18px_rgba(16,52,90,0.3)] sm:p-9">
              <Label>Enquiry Form</Label>
              <h2 className="text-[26px] font-bold text-navy sm:text-[32px]">
                Let&apos;s Discuss Your{" "}
                <span className="text-teal">Requirements</span>
              </h2>
              <p className="mb-6 mt-2 text-[14px] text-muted">
                Please fill in the details below and we will get in touch with
                you soon.
              </p>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
