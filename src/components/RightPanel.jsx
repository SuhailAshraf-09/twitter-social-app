import { Search } from "lucide-react"
import Avatar from "./Avatar"
import { people, trends } from "../data/mockData"

export default function RightPanel() {
  return (
    <aside className="hidden w-[330px] shrink-0 px-5 py-3 lg:block">
      <div className="sticky top-3 space-y-4">
        <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-3">
          <Search size={18} className="text-zinc-500" />
          <input
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </div>

        <section className="overflow-hidden rounded-2xl border border-zinc-800">
          <h2 className="px-4 pt-3 pb-2 text-xl font-extrabold">What's happening</h2>
          {trends.map((trend) => (
            <div key={trend.topic} className="px-4 py-3 hover:bg-zinc-950">
              <p className="text-xs text-zinc-500">{trend.category}</p>
              <p className="mt-0.5 font-bold">{trend.topic}</p>
              <p className="mt-0.5 text-xs text-zinc-500">{trend.posts}</p>
            </div>
          ))}
          <button className="px-4 py-4 text-sm text-sky-500">Show more</button>
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-800">
          <h2 className="px-4 pt-3 pb-2 text-xl font-extrabold">Who to follow</h2>
          {people.map((person) => (
            <div key={person.username} className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-950">
              <Avatar initials={person.initials} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{person.name}</p>
                <p className="truncate text-xs text-zinc-500">@{person.username}</p>
              </div>
              <button className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-black">
                Follow
              </button>
            </div>
          ))}
        </section>

        <p className="px-3 text-xs leading-5 text-zinc-600">
          Terms · Privacy · Cookies · Accessibility · © 2026 Social
        </p>
      </div>
    </aside>
  )
}
