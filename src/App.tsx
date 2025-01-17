import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import ContactTab from "./components/ContactsTab";
import ProjectsTab from "./components/ProjectsTab";

function App() {
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
      <TabGroup className="w-full space-y-4 max-w-3xl">
        <TabList className="flex gap-3">
          {["Contact", "Projects"].map((tabName, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `text-lg bg-gradient-to-r font-semibold capitalize px-4 py-2 rounded-md transition-all duration-300 ${
                  selected
                    ? "flex-1 from-amber-600/90 to-amber-500 text-white shadow-md [text-shadow:_0_1px_3px_rgba(0,_0,_0,_0.3)]" // Selected Tab
                    : "from-amber-200/90 to-amber-100 text-amber-800" // Unselected Tabs
                }`
              }
            >
              {tabName}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <ContactTab />
          </TabPanel>
          <TabPanel>
            <ProjectsTab />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}

export default App;
