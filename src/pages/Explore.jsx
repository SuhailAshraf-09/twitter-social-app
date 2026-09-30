import { Search, TrendingUp } from "lucide-react"
import { trends } from "../data/mockData"

export default function Explore() {
  return (
    <>
      <header className="glass sticky top-0 z-20 border-b border-zinc-800 p-3">
        <div className="flex items-center gap-3 rounded-full bg-zinc-900 px-4 py-3">
          <Search size={19} className="text-zinc-500" />
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Search Social"
          />
        </div>
      </header>

      <div className="border-b border-zinc-800 p-5">
        <p className="text-sm text-sky-500">Featured</p>
        <h1 className="mt-2 text-3xl font-black">What's happening now</h1>
        <p className="mt-2 text-zinc-500">
          Discover conversations, technology, design and stories from around the community.
        </p>
      </div>

      <section>
        <h2 className="px-5 pt-5 text-xl font-extrabold">Trends for you</h2>
        {trends.map((trend, index) => (
          <div
            key={trend.topic}
            className="flex items-start gap-4 border-b border-zinc-900 px-5 py-5 hover:bg-zinc-950"
          >
            <div className="mt-1 rounded-xl bg-sky-500/10 p-3 text-sky-500">
              <TrendingUp size={21} />
            </div>
            <div>
              <p className="text-xs text-zinc-500">{trend.category}</p>
              <h3 className="mt-1 text-lg font-bold">{trend.topic}</h3>
              <p className="mt-1 text-sm text-zinc-500">{trend.posts}</p>
            </div>
            <span className="ml-auto text-sm text-zinc-600">0{index + 1}</span>
          </div>
        ))}
      </section>
    </>
  )
}
