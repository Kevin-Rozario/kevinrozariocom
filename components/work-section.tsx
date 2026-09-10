import { works } from "@/data/work";

export default function WorkSection() {
  return (
    <div className="relative flex w-full shrink-0 flex-col items-start gap-3">
      <p className="mb-2 font-mono text-sm text-taupe-400 uppercase dark:text-taupe-600">
        Work
      </p>

      <div className="relative flex w-full shrink-0 flex-col items-start gap-3">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative flex w-full shrink-0 items-center gap-4 py-1"
          >
            <div className="flex w-full min-w-0 items-baseline gap-2">
              {/* Work Name */}
              <p className="shrink-0 text-sm font-semibold text-taupe-800 dark:text-taupe-100">
                {work.name}
              </p>

              {/* Divider Symbol */}
              <span className="mx-1 shrink-0 text-xs text-taupe-400 dark:text-taupe-600">
                /
              </span>

              {/* Work Description*/}
              <p className="min-w-0 truncate text-sm text-taupe-500 dark:text-taupe-400">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
