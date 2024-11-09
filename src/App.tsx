import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { MdEmail } from "react-icons/md";
function App() {
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
					this is the link page for the open-source community annaba club in
					badji mokhtar university annaba
				</h3>
			</div>
			<div className="space-y-5 w-full max-w-3xl text-sm md:text-base lg:text-lg">
				<a
					href="https://t.me/OSCommunityChat"
					target="_blank"
					className="p-2 border border-black rounded flex items-center justify-between gap-6"
				>
					<FaTelegram className="w-12 h-12 md:w-16 md:h-16 text-[#2AABEE]" />
					<span>@OSCommunityChat</span>
					<MdArrowOutward className="w-8 h-8 md:w-12 md:h-12" />
				</a>
				<a
					href="https://github.com"
					target="_blank"
					className="p-2 border border-black rounded flex items-center justify-between gap-6"
				>
					<FaGithub className="w-12 h-12 md:w-16 md:h-16 text-black" />
					<span>@OSCAnnaba</span>
					<MdArrowOutward className="w-8 h-8 md:w-12 md:h-12" />
				</a>
				<a
					href="mailto:example@example.com"
					target="_blank"
					className="p-2 border border-black rounded flex items-center justify-between gap-6"
				>
					<MdEmail className="w-12 h-12 md:w-16 md:h-16 text-gray-600" />
					<span>osca@univ-annaba.dz</span>
					<MdArrowOutward className="w-8 h-8 md:w-12 md:h-12" />
				</a>
			</div>
		</main>
	);
}

export default App;
