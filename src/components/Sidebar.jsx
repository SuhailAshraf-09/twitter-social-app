import { NavLink } from "react-router-dom"
import {
  Home,
  Search,
  User,
  Bell,
  Mail,
  Bookmark,
  MoreHorizontal,
  Feather,
} from "lucide-react"
import Avatar from "./Avatar"
import { currentUser } from "../data/mockData"

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/explore", label: "Explore", icon: Search },
  { to: "/profile", label: "Profile", icon: User },
]

export default function Sidebar() {
  return (
    <>
      <aside className="hidden md:flex sticky top-0 h-screen w-[88px] xl:w-[260px] shrink-0 flex-col border-r border-zinc-800 px-3 xl:px-5 py-4">
        <div className="mb-5 px-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black font-black text-xl">
            S
          </div>
        </div>

        <nav className="space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-5 rounded-full px-3 py-3 text-xl transition hover:bg-zinc-900 ${
                  isActive ? "font-bold text-white" : "text-zinc-300"
                }`
              }
            >
              <Icon size={26} />
              <span className="hidden xl:block">{label}</span>
            </NavLink>
          ))}

          <div className="flex items-center gap-5 rounded-full px-3 py-3 text-xl text-zinc-300">
            <Bell size={26} />
            <span className="hidden xl:block">Notifications</span>
          </div>

          <div className="flex items-center gap-5 rounded-full px-3 py-3 text-xl text-zinc-300">
            <Mail size={26} />
            <span className="hidden xl:block">Messages</span>
          </div>

          <div className="flex items-center gap-5 rounded-full px-3 py-3 text-xl text-zinc-300">
            <Bookmark size={26} />
            <span className="hidden xl:block">Bookmarks</span>
          </div>

          <div className="flex items-center gap-5 rounded-full px-3 py-3 text-xl text-zinc-300">
            <MoreHorizontal size={26} />
            <span className="hidden xl:block">More</span>
          </div>
        </nav>

        <button className="mt-5 flex h-13 items-center justify-center rounded-full bg-sky-500 font-bold text-white hover:bg-sky-600">
          <Feather className="xl:hidden" size={22} />
          <span className="hidden xl:block">Post</span>
        </button>

        <div className="mt-auto flex items-center gap-3 rounded-full p-2 hover:bg-zinc-900">
          <Avatar initials={currentUser.initials} />
          <div className="hidden min-w-0 xl:block">
            <p className="truncate font-bold text-sm">{currentUser.name}</p>
            <p className="truncate text-sm text-zinc-500">@{currentUser.username}</p>
          </div>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-zinc-800 bg-black/95 py-3 backdrop-blur md:hidden">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            aria-label={label}
            className={({ isActive }) =>
              isActive ? "text-sky-400" : "text-zinc-400"
            }
          >
            <Icon size={25} />
          </NavLink>
        ))}
      </nav>
    </>
  )
}
