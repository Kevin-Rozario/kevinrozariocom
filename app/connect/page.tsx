import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Kevin is open to full-time roles and freelance work - get in touch.",
};

export default function Connect() {
  return (
    <>
      <Header activePage="work" />
      <div className="relative flex min-w-full shrink-0 flex-col gap-4 text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
        Connect page
      </div>
      <Footer />
    </>
  );
}
