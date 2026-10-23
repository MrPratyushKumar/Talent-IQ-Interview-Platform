import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  Code2Icon,
  SearchIcon,
  SearchXIcon,
  VideoIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { getDifficultyBadgeClass } from "../lib/utils";

const FILTERS = ["all", "easy", "medium", "hard"];

function ProblemsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const visibleProblems = useMemo(() => {
    const search = query.trim().toLowerCase();

    return Object.values(PROBLEMS).filter((problem) => {
      const matchesFilter =
        filter === "all" || problem.difficulty.toLowerCase() === filter;
      const matchesSearch =
        !search ||
        problem.title.toLowerCase().includes(search) ||
        problem.category.toLowerCase().includes(search);

      return matchesFilter && matchesSearch;
    });
  }, [query, filter]);

  const clearFilters = () => {
    setQuery("");
    setFilter("all");
  };

  return (
    <div className="min-h-dvh bg-base-200">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-base-content">Problems</h1>
            <p className="mt-2 max-w-2xl text-base-content/60">
              Practise solo, or take the same problem into a live 1-on-1 session with someone
              else in the editor.
            </p>
          </div>

          <div className="w-full sm:w-80">
            <label htmlFor="problem-search" className="sr-only">
              Search problems
            </label>
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-base-content/40"
                aria-hidden="true"
              />
              <input
                id="problem-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or topic"
                className="input w-full pl-11"
              />
            </div>
          </div>
        </header>

        <div
          className="mt-8 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter problems by difficulty"
        >
          {FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
              className={`btn btn-sm capitalize cursor-pointer ${
                filter === option
                  ? "btn-primary"
                  : "btn-ghost border border-base-300"
              }`}
            >
              {option}
            </button>
          ))}

          <span className="ml-auto font-mono text-sm text-base-content/50">
            {visibleProblems.length} shown
          </span>
        </div>

        {visibleProblems.length > 0 ? (
          <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProblems.map((problem) => (
              <li
                key={problem.id}
                className="card border border-base-300 bg-base-100 transition-colors duration-200 hover:border-primary/40"
              >
                <div className="card-body gap-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                      <Code2Icon className="size-6 text-primary-content" aria-hidden="true" />
                    </div>
                    <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </div>

                  <div>
                    <h2 className="card-title text-lg">{problem.title}</h2>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-base-content/50">
                      {problem.category}
                    </p>
                  </div>

                  <p className="text-sm text-base-content/60">
                    {Object.keys(problem.starterCode).length} starter languages ·{" "}
                    {Object.keys(problem.expectedOutput).length} test cases
                  </p>

                  <div className="card-actions justify-between">
                    <Link to={`/problem/${problem.id}`} className="btn btn-primary btn-sm gap-2">
                      Practise
                      <ChevronRightIcon className="size-4" aria-hidden="true" />
                    </Link>
                    <Link
                      to="/dashboard?create=1"
                      className="btn btn-sm btn-ghost gap-2 border border-base-300"
                    >
                      <VideoIcon className="size-4" aria-hidden="true" />
                      Host a session
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 px-6 py-20 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary/10">
              <SearchXIcon className="size-8 text-primary/60" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-semibold text-base-content">No problems match that</h2>
            <p className="mt-1 max-w-sm text-sm text-base-content/60">
              Try a different keyword, or clear the filters to see the whole set again.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="btn btn-primary btn-sm mt-6 cursor-pointer"
            >
              Clear search and filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProblemsPage;
