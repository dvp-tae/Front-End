import React, { useState }  from "react";
import "../../index.css";
import { Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';


const resources = [
  {
    name: "Help Center",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleDownloadClick = () => {
    navigate('/download');
  };

  const handleProfileClick = () => {
    navigate('/profile/:userid');
  };
 
  const [tab, setTab] = useState('vote');

  return (
    <div className="bg-white">
      <div className="max-w-full p-2 mx-auto px-0 border-b-2 border-gray-100  ">
        <div className="flex items-center justify-between py-3 gap-7 ">
          <div className="flex gap-7 space-x-4 items-center vote-tabs">
          <span className="ml-8 text-2xl font-bold text-black">DD</span>
            <button
        className={`py-4 px-4 text-lg font-medium text-gray-500 hover:text-gray-900 ${tab === 'home' ? 'active border-b border-[#767676]' : ''}`}
        onClick={() => setTab('home')}
      >
        Home
        </button>
        <button
        className={`py-4 px-4 text-lg font-medium text-gray-500 hover:text-gray-900 ${tab === 'about' ? 'active border-b border-[#767676]' : ''}`}
        onClick={() => setTab('about')}
      >
        about
        </button>



            <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-[18px] font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <span>카테고리</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>

                    </Transition>

                  </>
                )}

              </Popover>

              <button
        className={`py-4 px-4 text-lg font-medium text-gray-500 hover:text-gray-900 ${tab === 'help' ? 'active border-b border-[#767676]' : ''}`}
        onClick={() => setTab('help')}
      >
        도움말
        </button>
          </div>
          <div className="flex-1 mx-4">
            <form className="flex items-center relative">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              <input
                id="search-field"
                className="block w-full bg-[#ECECEC] text-lg rounded-full pl-10 pr-3 py-2 text-[#A5A5A5] placeholder:text-[#A5A5A5] focus:outline-none focus:ring-0"
                placeholder="이미지 검색"
                type="search"
                name="search"
              />
            </form>
          </div>
          <div className="flex mr-5 gap-3 space-x-4 items-center">
            <button onClick={handleLoginClick} className="text-lg font-medium text-gray-500 hover:text-gray-900">로그인</button>
            <button onClick={handleDownloadClick} type="button" className="border border-gray-200 rounded-lg px-5 py-1 text-lg font-medium text-gray-500 hover:text-gray-900 shadow-sm hover:bg-gray-500  focus:outline-none">업로드</button>
          </div>
        </div>
      </div>



    </div>
  );
}