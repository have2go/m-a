import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ title, options, setFunc, initialState }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md  px-3 py-2 text-base font-medium text-[#1E1E1E80] ring-0 hover:bg-gray-50">
                    {title}
                    <ChevronDownIcon
                        className="-mr-1 h-8 w-8 text-black"
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
                <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {options.map((menuItem, i) => {
                            return (
                                <Menu.Item key={i}>
                                    {({ active }) => (
                                        <button
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-2 text-sm w-full text-left md:px-2"
                                            )}
                                            onClick={() => {
                                                setFunc(menuItem);
                                            }}
                                        >
                                            {menuItem}
                                        </button>
                                    )}
                                </Menu.Item>
                            );
                        })}
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm w-full text-left"
                                    )}
                                    onClick={() => {
                                        setFunc(initialState);
                                    }}
                                >
                                    Любой
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
