import { ArrowLeft, CalendarDays, MapPin } from "lucide-react"
import Avatar from "../components/Avatar"
import PostCard from "../components/PostCard"
import { currentUser } from "../data/mockData"

export default function Profile({ posts, onLike }) {
  const myPosts = posts.filter((post) => post.username === currentUser.username)

  return (
    <>
      <header className="glass sticky top-0 z-20 flex items-center gap-6 border-b border-zinc-800 px-4 py-2">
        <ArrowLeft size={20} />
        <div>
          <h1 className="font-bold">{currentUser.name}</h1>
          <p className="text-xs text-zinc-500">{myPosts.length} posts</p>
        </div>
      </header>

      <div className="h-44 bg-gradient-to-br from-sky-700 via-blue-800 to-zinc-950" />

      <section className="border-b border-zinc-800 px-4 pb-4">
        <div className="-mt-10 flex items-end justify-between">
          <div className="rounded-full border-4 border-black">
            <Avatar initials={currentUser.initials} size="lg" />
          </div>
          <button className="mb-1 rounded-full border border-zinc-600 px-5 py-2 text-sm font-bold hover:bg-zinc-900">
            Edit profile
          </button>
        </div>

        <h1 className="mt-3 text-xl font-extrabold">{currentUser.name}</h1>
        <p className="text-sm text-zinc-500">@{currentUser.username}</p>

        <p className="mt-4 text-[15px]">{currentUser.bio}</p>

        <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-500">
          <span className="flex items-center gap-1">
            <MapPin size={16} /> {currentUser.location}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays size={16} /> Joined September 2026
          </span>
        </div>

        <div className="mt-4 flex gap-5 text-sm">
          <span><strong>{currentUser.following}</strong> <span className="text-zinc-500">Following</span></span>
          <span><strong>{currentUser.followers}</strong> <span className="text-zinc-500">Followers</span></span>
        </div>
      </section>

      <div className="grid grid-cols-3 border-b border-zinc-800 text-center text-sm">
        <button className="border-b-4 border-sky-500 py-4 font-bold">Posts</button>
        <button className="py-4 text-zinc-500">Replies</button>
        <button className="py-4 text-zinc-500">Likes</button>
      </div>

      {myPosts.length ? (
        myPosts.map((post) => (
          <PostCard key={post.id} post={post} onLike={onLike} />
        ))
      ) : (
        <div className="p-10 text-center">
          <h2 className="text-xl font-bold">Your posts will appear here</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Create a post from the Home page to see it on your profile.
          </p>
        </div>
      )}
    </>
  )
}
