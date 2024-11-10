import { IconBaseProps } from "react-icons";
import { ReactElement } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function App() {
  const links: {
    type: string;
    at: string;
    path: string;
    icon: ReactElement<IconBaseProps>;
  }[] = [
    {
      type: "Telegram",
      at: "@OSCumminityChat",
      path: "https://t.me/OSCommunityChat",
      icon: (
        <FaTelegram className="w-12 h-12 hidden md:w-16 md:h-16 text-[#229ED9] icon" />
      ),
    },
    {
      type: "Github",
      at: "OSCAnnaba",
      path: "https://github.com/OSCAnnaba",
      icon: (
        <FaGithub className="w-12 h-12 hidden md:w-16 md:h-16 text-black icon" />
      ),
    },
    {
      type: "Email",
      at: "osca@univ-annaba.dz",
      path: "mailto:osca@univ-annaba.dz",
      icon: (
        <MdEmail className="w-12 h-12 md:w-16 hidden md:h-16 text-gray-600 icon" />
      ),
    },
  ];

  return (
    <main className="bg-[#f0dfc8] w-full min-h-screen flex flex-col gap-12 items-center p-8">
      <div className="flex flex-col gap-4 items-center w-full max-w-3xl">
        <img
          className="flex md:hidden h-36"
          src="/logo-black-text.svg"
          alt=""
        />
        <img className="h-36 hidden md:flex" src="/logo-black.png" alt="logo" />
        <h1 className="text-2xl font-bold uppercase hidden md:flex">
          open source community annaba
        </h1>
        <h3 className=" font-medium text-sm md:text-base lg:text-lg text-center">
          {" "}
          Welcome to the official links page for the Open-Source Community
          Annaba Club at Badji Mokhtar University
        </h3>
      </div>
      <div className="space-y-5 w-full max-w-3xl text-sm md:text-base lg:text-lg">
        {links.map((link) => (
          <a
            key={link.at}
            href={link.path}
            target="_blank"
            className="min-h-20 p-2 border border-black rounded-xl flex items-center justify-center link-hover group"
          >
            {link.icon}
            <span className="text-lg font-bold italic group-hover:hidden">
              {link.type}
            </span>
            <span className="hidden group-hover:block ">{link.at}</span>
          </a>
        ))}
      </div>
    </main>
  );
}

export default App;
