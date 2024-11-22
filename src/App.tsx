import { IconBaseProps } from "react-icons";
import { ReactElement } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LinkStyle = `
  min-h-20
  p-2
  border
  border-black
  rounded
  flex
  items-center
  justify-center
  link-hover
  group
  relative
  bg-gradient-to-r
  from-[#e6c9a1]
  to-transparent
  bg-[length:200%_100%]
  bg-[position:-100%_0]
  hover:animate-fillBackground
`;

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
`;

type Link = {
  type: string;
  at: string;
  path: string;
  icon: ReactElement<IconBaseProps>;
};

function App() {
  const links: Link[] = [
    {
      type: "Telegram",
      at: "@OSCommunityChat",
      path: "https://t.me/OSCommunityChat",
      icon: <FaTelegram className={`text-[#229ED9] ${IconStyle}`} />,
    },
    {
      type: "Github",
      at: "OSCAnnaba",
      path: "https://github.com/OSCAnnaba",
      icon: <FaGithub className={`text-black ${IconStyle}`} />,
    },
    {
      type: "Email",
      at: "osca@univ-annaba.dz",
      path: "mailto:osca@univ-annaba.dz",
      icon: <MdEmail className={`text-gray-600 ${IconStyle}`} />,
    },
  ];

  return (
    <main className="bg-[#f0dfc8] w-full min-h-screen flex flex-col gap-12 items-center p-8">
      <div className="flex flex-col gap-4 items-center w-full max-w-3xl">
        <img className="flex md:hidden h-36" src="/logo-black-text.svg" />
        <img className="h-36 hidden md:flex" src="/logo-black.png" />
        <h1 className="text-2xl font-bold uppercase hidden md:flex">
          Open Source Community Annaba
        </h1>
        <h3 className="font-medium text-sm md:text-base lg:text-lg text-center">
          Welcome to the official links page for the Open-Source Community
          Annaba Club at Badji Mokhtar University
        </h3>
      </div>
      <div className="space-y-5 w-full max-w-3xl text-sm md:text-base lg:text-lg relative overflow-hidden">
        {links.map((link) => (
          <a
            key={link.at}
            href={link.path}
            target="_blank"
            className={LinkStyle}
          >
            {link.icon}
            <span className="tracking-extreme group-hover:hidden uppercase">
              {link.type}
            </span>
            <span className="text-lg font-medium hidden group-hover:block ">
              {link.at}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}

export default App;
