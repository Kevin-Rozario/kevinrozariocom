import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
  description: "Occasional writing on engineering, building, and money.",
};

export default function Notes() {
  return (
    <>
      <Header />
      <div className="relative flex min-w-full shrink-0 flex-col gap-4 text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
        Notes page
      </div>
      <Footer />
    </>
  );
}
