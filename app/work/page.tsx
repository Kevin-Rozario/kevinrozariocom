import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects Kevin's built and the experience behind them - backend engineering, freelance work, and financial planning.",
};

export default function Work() {
  return (
    <>
      <Header activePage="work" />
      <div className="relative flex min-w-full shrink-0 flex-col gap-4 text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
        Work page
      </div>
      <Footer />
    </>
  );
}
