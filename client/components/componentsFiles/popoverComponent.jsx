import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { FiEdit3, FiChevronsDown, FiCopy, FiArchive, FiExternalLink, FiTrash2 } from "react-icons/fi";

export default function Example() {
  return (
    <div className="w-56 text-right fixed top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-primary bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <FiChevronsDown
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute text-primary right-0 w-56 mt-2 origin-top-right bg-white divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-primary' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FiEdit3
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiEdit3
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-primary' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FiCopy
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiCopy
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-primary' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FiArchive
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiArchive
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-primary' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FiExternalLink
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiExternalLink
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-primary' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FiTrash2
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiTrash2
                        className="w-5 h-5 mr-2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

