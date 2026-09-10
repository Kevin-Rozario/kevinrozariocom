import Header from "@/components/header";
import Footer from "@/components/footer";
import Divider from "@/components/divider";

export default function Moments() {
  return (
    <>
      <Header activePage="moments" />
      <div className="relative flex min-w-full shrink-0 flex-col gap-4 text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
        <p>
          I ride with no fixed destination. A trail with a group. A morning
          spent cleaning a beach. None of it staged, all of it real.
        </p>
        <Divider />

        {/* On the Road */}
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-sm text-taupe-400 uppercase dark:text-taupe-600">
            On the Road
          </h2>
          <p className="text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
            Three years on a Royal Enfield Hunter 350, most rides with no real
            plan just wherever the road looks worth following. The photos are
            whatever nature I found along the way.
          </p>
          {/* Modern 2x2 grid wrapper layout for your photos */}
          <div className="mt-1 grid grid-cols-2 gap-3">
            <div className="border-border/10 aspect-video w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
            <div className="border-border/10 aspect-video w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
          </div>
        </section>
        <Divider />

        {/* Treks */}
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-sm text-taupe-400 uppercase dark:text-taupe-600">
            Treks
          </h2>
          <p className="text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
            Always with a group, always worth the climb: Kalsubai, Raigad,
            Bhandardurg, Tungareshwar, Chinchoti, Kaldurg, Ghambhirgad, Asawa
            and the list isn't done growing.
          </p>
          <div className="mt-1 grid grid-cols-2 gap-3">
            <div className="border-border/10 aspect-video w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
            <div className="border-border/10 aspect-video w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
          </div>
        </section>
        <Divider />

        {/* Giving Back */}
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-sm text-taupe-400 uppercase dark:text-taupe-600">
            Giving Back
          </h2>
          <p className="text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
            With a personalized group, whenever the opportunity comes up food
            distribution and beach cleanups. During COVID, that meant getting
            food to daily wage earners and homeless people who had nowhere else
            to turn. During monsoon, it's meant raincoat drives. The people we
            helped didn't have much, but what they gave back was real gratitude,
            no strings attached. That stuck with me more than anything I gave
            them.
          </p>
          <div className="mt-1 grid grid-cols-2 gap-3">
            <div className="border-border/10 aspect-video w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
            <div className="border-border/10 aspect-video w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
          </div>
        </section>
        <Divider />

        {/* Books */}
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-sm text-taupe-400 uppercase dark:text-taupe-600">
            Books
          </h2>
          <div className="mt-1 grid grid-cols-3 gap-3">
            <div className="border-border/10 aspect-3/4 w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
            <div className="border-border/10 aspect-3/4 w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
            <div className="border-border/10 aspect-3/4 w-full animate-pulse rounded-lg border bg-taupe-200/50 dark:bg-taupe-800/40" />
          </div>
        </section>
        <Divider />

        {/* Podcasts / Creators */}
        <section className="flex flex-col gap-3">
          <h2 className="font-mono text-sm text-taupe-400 uppercase dark:text-taupe-600">
            Creators & Contents
          </h2>
          <p className="text-justify text-sm/6 font-normal text-taupe-800 dark:text-taupe-100">
            Shows and hosts I listen to regularly for insights on tech, systems,
            and human performance.
          </p>
          <div className="mt-1 flex items-center gap-3">
            <div className="border-border/10 h-7 w-20 animate-pulse rounded-full border bg-taupe-200/50 dark:bg-taupe-800/40" />
            <div className="border-border/10 h-7 w-20 animate-pulse rounded-full border bg-taupe-200/50 dark:bg-taupe-800/40" />
          </div>
        </section>
        <Divider />
      </div>
      <Footer />
    </>
  );
}
