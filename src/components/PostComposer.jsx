import { useState } from "react"
import { Image, Smile, MapPin, CalendarDays } from "lucide-react"
import Avatar from "./Avatar"
import { currentUser } from "../data/mockData"

export default function PostComposer({ onPost }) {
  const [text, setText] = useState("")

  const submitPost = () => {
    const value = text.trim()
    if (!value) return
    onPost(value)
    setText("")
  }

  return (
    <div className="border-b border-zinc-800 p-4">
      <div className="flex gap-3">
        <Avatar initials={currentUser.initials} />
        <div className="min-w-0 flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 280))}
            placeholder="What's happening?"
            className="min-h-24 w-full resize-none bg-transparent pt-2 text-xl text-white outline-none placeholder:text-zinc-500"
          />

          <div className="flex items-center justify-between border-t border-zinc-900 pt-3">
            <div className="flex gap-4 text-sky-500">
              <Image size={19} />
              <Smile size={19} />
              <CalendarDays size={19} className="hidden sm:block" />
              <MapPin size={19} className="hidden sm:block" />
            </div>

            <div className="flex items-center gap-3">
              {text.length > 0 && (
                <span className="text-xs text-zinc-500">{text.length}/280</span>
              )}
              <button
                onClick={submitPost}
                disabled={!text.trim()}
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-bold text-white disabled:opacity-40"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
