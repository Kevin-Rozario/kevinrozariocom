import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-taupe-100 py-10 dark:bg-taupe-900">
      <div className="m-0 flex w-full max-w-xl flex-col items-center gap-6 border-2 border-black px-4">
        <Header />
      </div>
    </div>
  );
}
