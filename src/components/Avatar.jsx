export default function Avatar({ initials = "U", size = "md" }) {
  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-11 w-11 text-sm",
    lg: "h-20 w-20 text-xl",
  }

  return (
    <div
      className={`${sizes[size]} shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-blue-700 flex items-center justify-center font-bold text-white`}
    >
      {initials}
    </div>
  )
}
