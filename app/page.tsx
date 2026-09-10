import Divider from "@/components/divider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WorkSection from "@/components/work-section";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-taupe-100 py-10 dark:bg-taupe-900">
      <div className="m-0 flex w-full max-w-xl flex-col items-center gap-6 px-4">
        <Header activePage="home" />

        {/* Description */}
        <div className="relative flex min-w-full shrink-0 flex-col gap-4 text-justify text-sm/6 font-normal text-olive-800 dark:text-olive-100">
          <p>
            I build for purpose. No system is magical and ultimately breaks down
            to architecture you can understand if you dig far enough, and I like
            doing the digging. NodeJS, Typescript and the MERN stack are home
            base; NextJS, Tailwind, and Shadcn/ui are where I build new things.
          </p>
          <p>
            Open to full-time and freelance work: remote, on-site, hybrid,
            doesn't matter. What matters is the work is worth doing.
          </p>
          <p>Mumbai, Maharashtra &middot; Class of 2026</p>
        </div>
        <Divider />

        {/* Bio */}
        <p className="mb-2 w-full font-mono text-sm text-taupe-400 uppercase dark:text-taupe-600">
          Bio
        </p>
        <div className="relative flex min-w-full shrink-0 flex-col gap-4 text-justify text-sm/6 font-normal text-olive-800 dark:text-olive-100">
          <p>
            I'm a software engineer with a habit of asking how things actually
            work under the hood. I care about the parts most people skip: how
            data moves, why system holds up under load, what happens when the
            happy path breaks. Data-intensive applications, API design,
            websockets, RPC, performance and scalability that's the work I
            actaully enjoy.
          </p>
          <p>
            I also work part-time as business-partner, helping people understand
            thier finances where their money's going, what options they actaully
            have, and a real roadmap to get where they want to be. I came into
            it with zero finance background adn a lot of curiosity about why
            people's lives end up so differently even when everyone's earning
            something. Three months in. I've helped 15+ families make clearer
            decisions about their money. It's entirely on my own terms; no
            targets, no compulsion, just intent.
          </p>
          <p>
            Off the keyboard, I ride a Royal Enfield Hunter 350. Three years in
            now usually with no fixed destination, camera ready for whatever the
            road turns up. I trek with a group whenver the weekend allows:
            Kalsubai, Ghambhirgad, Asawa - the list keeps growing. And I show up
            for food distribution and beach cleanup drives with personalized
            group whenever the opportunity comes around.
          </p>
        </div>
        <Divider />
        <WorkSection />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}
