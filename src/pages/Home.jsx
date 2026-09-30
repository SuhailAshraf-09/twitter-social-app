import PostComposer from "../components/PostComposer"
import PostCard from "../components/PostCard"

export default function Home({ posts, onPost, onLike }) {
  return (
    <>
      <header className="glass sticky top-0 z-20 border-b border-zinc-800">
        <div className="px-4 py-3 text-xl font-bold">Home</div>
        <div className="grid grid-cols-2 text-center text-sm font-medium">
          <button className="relative py-4 text-white">
            For you
            <span className="absolute bottom-0 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-sky-500" />
          </button>
          <button className="py-4 text-zinc-500">Following</button>
        </div>
      </header>

      <PostComposer onPost={onPost} />

      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onLike={onLike} />
        ))}
      </div>
    </>
  )
}
