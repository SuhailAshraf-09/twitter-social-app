import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import RightPanel from "./components/RightPanel"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"
import { currentUser, initialPosts } from "./data/mockData"

export default function App() {
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem("social-posts")
      return saved ? JSON.parse(saved) : initialPosts
    } catch {
      return initialPosts
    }
  })

  useEffect(() => {
    localStorage.setItem("social-posts", JSON.stringify(posts))
  }, [posts])

  const addPost = (content) => {
    const post = {
      id: Date.now(),
      name: currentUser.name,
      username: currentUser.username,
      initials: currentUser.initials,
      verified: false,
      time: "now",
      content,
      likes: 0,
      comments: 0,
      reposts: 0,
      views: 0,
      liked: false,
    }

    setPosts((current) => [post, ...current])
  }

  const toggleLike = (id) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    )
  }

  return (
    <BrowserRouter>
      <div className="mx-auto flex min-h-screen max-w-[1265px] bg-black text-white">
        <Sidebar />

        <main className="min-h-screen w-full max-w-[600px] border-r border-zinc-800 pb-16 md:pb-0">
          <Routes>
            <Route
              path="/"
              element={<Home posts={posts} onPost={addPost} onLike={toggleLike} />}
            />
            <Route path="/explore" element={<Explore />} />
            <Route
              path="/profile"
              element={<Profile posts={posts} onLike={toggleLike} />}
            />
          </Routes>
        </main>

        <RightPanel />
      </div>
    </BrowserRouter>
  )
}
