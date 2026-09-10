export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-4">
      {/* Cursive Name / Logo */}
      <p className="font-cursive text-5xl tracking-wide text-taupe-800 select-none dark:text-taupe-100">
        Kevin
      </p>

      {/* Subtext and Inspiration Credit */}
      <p className="text-center font-sans text-xs text-taupe-500 dark:text-taupe-400">
        Website heavily inspired by{" "}
        <a
          href="https://www.designerdada.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-taupe-800 underline-offset-4 transition-colors hover:underline dark:text-taupe-100"
        >
          Akash Bhadange
        </a>
      </p>
    </footer>
  );
}
