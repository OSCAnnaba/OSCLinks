import { IconBaseProps } from "react-icons"
import { ReactElement } from "react"
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const LinkStyle = `
  min-h-20
  p-2
  border
  border-black
  rounded-md
  flex
  items-center
  justify-center
  link-hover
  group
  relative
  bg-linear-to-r
  from-[#e6c9a1]
  to-transparent
  bg-[length:200%_100%]
  bg-[position:-100%_0]
  hover:animate-fillBackground
`

const IconStyle = `
  w-12
  h-12
  md:w-16
  md:h-16
  absolute
  opacity-0
  group-hover:opacity-100
  left-0
  group-hover:left-[80%]
  sm:group-hover:left-[90%]
  transition-all
  duration-700
`

type Link = {
  type: string
  at: string
  path: string
  icon: ReactElement<IconBaseProps>
}

export default function ContactTab() {
  const links: Link[] = [
    {
      type: "Telegram",
      at: "@OSCommunityChat",
      path: "https://t.me/OSCommunityChat",
      icon: <FaTelegram className={`text-[#229ED9] ${IconStyle}`} />,
    },
    {
      type: "Github",
      at: "@OSCAnnaba",
      path: "https://github.com/OSCAnnaba",
      icon: <FaGithub className={`text-black ${IconStyle}`} />,
    },
    {
      type: "LinkedIn",
      at: "@Null",
      path: "https://www.linkedin.com/company/open-source-community-annaba",
      icon: <FaLinkedin className={`text-[#0E76A8] ${IconStyle}`} />,
    },
    {
      type: "Instagram",
      at: "@osca_club",
      path: "https://www.instagram.com/osca_club",
      icon: <FaInstagram className={`text-[#E4405F] ${IconStyle}`} />,
    },
    {
      type: "Email",
      at: "osca@univ-annaba.dz",
      path: "mailto:osca@univ-annaba.dz",
      icon: <MdEmail className={`text-gray-600 ${IconStyle}`} />,
    },
  ]
  return (
    <div className="space-y-5 text-sm md:text-base lg:text-lg relative overflow-hidden">
      {links.map((link) => (
        <a key={link.at} href={link.path} target="_blank" className={LinkStyle}>
          {link.icon}
          <span className="tracking-extreme group-hover:hidden uppercase">
            {link.type}
          </span>
          <span className="text-lg font-medium hidden group-hover:block">
            {link.at}
          </span>
        </a>
      ))}
    </div>
  )
}
