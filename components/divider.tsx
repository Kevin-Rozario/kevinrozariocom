export default function Divider() {
  return (
    <div className="relative m-0 mx-auto flex w-full items-center justify-center space-x-6 text-taupe-500 select-none dark:text-taupe-400">
      {/* Soft Spotlight Backdrop */}
      <div className="pointer-events-none absolute h-24 w-24 bg-linear-to-r from-taupe-100/50 to-transparent blur-sm dark:from-taupe-800/20"></div>

      {/* Divider Elements */}
      <span className="relative z-10 h-[1.5px] w-10 bg-linear-to-r from-transparent to-current"></span>
      <span className="relative z-10 text-base font-medium text-taupe-700 dark:text-taupe-200">
        +
      </span>
      <span className="relative z-10 h-[1.5px] w-10 bg-linear-to-l from-transparent to-current"></span>
    </div>
  );
}
