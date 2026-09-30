import {
  BadgeCheck,
  Heart,
  MessageCircle,
  Repeat2,
  BarChart3,
  Share,
  MoreHorizontal,
} from "lucide-react"
import Avatar from "./Avatar"

export default function PostCard({ post, onLike }) {
  return (
    <article className="post-card border-b border-zinc-800 p-4">
      <div className="flex gap-3">
        <Avatar initials={post.initials} />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex flex-wrap items-center gap-1 text-sm">
              <span className="font-bold text-white">{post.name}</span>
              {post.verified && (
                <BadgeCheck size={16} className="fill-sky-500 text-black" />
              )}
              <span className="text-zinc-500">@{post.username} · {post.time}</span>
            </div>
            <MoreHorizontal size={18} className="shrink-0 text-zinc-500" />
          </div>

          <p className="mt-1 whitespace-pre-wrap text-[15px] leading-6 text-zinc-100">
            {post.content}
          </p>

          <div className="mt-4 flex max-w-md items-center justify-between text-zinc-500">
            <button className="flex items-center gap-2 hover:text-sky-400">
              <MessageCircle size={18} />
              <span className="text-xs">{post.comments}</span>
            </button>

            <button className="flex items-center gap-2 hover:text-emerald-400">
              <Repeat2 size={19} />
              <span className="text-xs">{post.reposts}</span>
            </button>

            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center gap-2 ${
                post.liked ? "text-pink-500" : "hover:text-pink-500"
              }`}
            >
              <Heart size={18} fill={post.liked ? "currentColor" : "none"} />
              <span className="text-xs">{post.likes}</span>
            </button>

            <button className="hidden items-center gap-2 hover:text-sky-400 sm:flex">
              <BarChart3 size={18} />
              <span className="text-xs">{post.views || "1.2K"}</span>
            </button>

            <Share size={18} className="hover:text-sky-400" />
          </div>
        </div>
      </div>
    </article>
  )
}
