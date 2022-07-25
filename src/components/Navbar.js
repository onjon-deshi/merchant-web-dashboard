/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import { ReactComponent as ChecklistIcon } from '../assets/icons/checklist.svg'
import { ReactComponent as NotificationIcon } from '../assets/icons/notification.svg'
import { ReactComponent as HelpIcon } from '../assets/icons/help.svg'
import { ReactComponent as DownIcon } from '../assets/icons/down.svg'
import shopno from '../assets/icons/shopno.png';
import { ReactComponent as InvoiceIcon } from '../assets/icons/invoice.svg'
import { ReactComponent as TransactionIcon } from '../assets/icons/transaction.svg'
import { ReactComponent as RightIcon } from '../assets/icons/right.svg'

// const navigation = [
//     { name: 'Dashboard', href: '#', current: true },
//     { name: 'Team', href: '#', current: false },
//     { name: 'Projects', href: '#', current: false },
//     { name: 'Calendar', href: '#', current: false },
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const onClick = (e) => {
    // const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');
    search.classList.toggle('active')
}

// const onClickExpand = (e) => {
//     document.getElementById('mysearch').value = '';
// }

export default function Example() {
    return (
        <Disclosure as="nav" className="z-[1] font-normal">
            {
                ({ open }) => (
                    <>
                        <div className="mx-auto px-2 py-3 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-end h-16">

                                {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    //!Mobile menu button
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div> */}

                                {/* <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                            alt="Workflow"
                                        />
                                    </div> 
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div> */}
                                <div className="absolute inset-y-0 right-0 flex items-center space-x-3 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button type="button">
                                        <span className="sr-only">Search Panel</span>
                                        {/* <SearchIcon aria-hidden="true" /> */}
                                        <div className="search ">
                                            <div className="absolute top-3 left-0 w-[60px] rounded-full flex items-center justify-center z-[1000]" onClick={onClick}>
                                                <SearchIcon />
                                            </div>
                                            <div className="input shadow-none">
                                                <input type="text" placeholder="Search" id="mysearch" className="text-black" />
                                            </div>
                                            {/* <span className="clear" onClick={onClickExpand}></span> */}
                                        </div>
                                    </button>


                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="flex">
                                                <span className="sr-only">View checklist</span>
                                                <ChecklistIcon />
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
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[470px] rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <div>
                                                            <header className="py-[15px] px-[30px] bg-neutral-100">
                                                                <p className="font-medium">Setup Guide</p>
                                                            </header>
                                                            <div className="py-[15px] px-[30px] border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className="flex">
                                                                    <p className="mb-3 text-xl font-medium">Let’s take a tour</p>
                                                                    <RightIcon className="mt-0.5" />
                                                                </div>
                                                                <span className="text-[#444444]">This Setup Guide will take you through the steps needed to get XYZ up and running on Deshi</span>
                                                            </div>
                                                            <div className="py-[15px] px-[30px] border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className="flex">
                                                                    <p className="mb-3 text-xl font-medium">Set a PIN</p>
                                                                    <RightIcon className="mt-0.5" />
                                                                </div>
                                                                <span className="text-[#444444]">Set a 4 digit PIN for your smooth transactions</span>
                                                            </div>
                                                            <div className="py-[15px] px-[30px] border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className="flex ">
                                                                    <p className="mb-3 text-xl font-medium">Setup merchant account</p>
                                                                    <RightIcon className="mt-0.5" />
                                                                </div>
                                                                <p className="text-[#444444] mb-2.5">We need to know few details about your business. Please provide these details and documents.</p>
                                                                <div className="bg-[#DDDDDD] rounded-2xl mb-[15px]">
                                                                    <div className="px-4 bg-primary rounded-2xl w-3/12 py-1"></div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="py-[15px] px-[30px] border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className=" p-3.5 bg-neutral-100 h-[50px] w-[50px]">
                                                                    <TransactionIcon />
                                                                </div>
                                                                <div>
                                                                    <p className="mb-2.5">Taka 100 has been transferred to +8801676533442</p>
                                                                    <span className="text-[#999999]">08 Feb, 2022</span>
                                                                    <span className="float-right text-[#999999]">01:46 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="py-[15px] px-[30px] border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className=" p-3.5 bg-neutral-100 h-[50px] w-[50px]">
                                                                    <InvoiceIcon />
                                                                </div>
                                                                <div className="w-full">
                                                                    <p className="mb-2.5 ">Merchant payment received</p>
                                                                    <span className="text-[#999999]">08 Feb, 2022</span>
                                                                    <span className="float-right text-[#999999]">01:46 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="py-[15px] px-[30px] border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className=" p-3.5 bg-neutral-100 h-[50px] w-[50px]">
                                                                    <TransactionIcon />
                                                                </div>
                                                                <div>
                                                                    <p className="mb-2.5">Your invoice sent successfully to merchant</p>
                                                                    <span className="text-[#999999]">08 Feb, 2022</span>
                                                                    <span className="float-right text-[#999999]">01:46 PM</span>
                                                                </div>
                                                            </div> */}
                                                            {/* <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your invoice has saved as a draft
                                                            </a> */}
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>


                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="flex">
                                                <span className="sr-only">View notification</span>
                                                <NotificationIcon />
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
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[370px] rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <div>
                                                            <header className="flex justify-between items-center py-[15px] px-[30px] bg-neutral-100">
                                                                <p className="font-normal">Notification</p>
                                                                <p className="text-sm text-[#444444]">Mark all as read</p>
                                                            </header>
                                                            <div className="py-[15px] px-[30px] flex items-center justify-center border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className=" p-3.5 bg-neutral-100 h-[50px] w-[50px] ">
                                                                    <InvoiceIcon />
                                                                </div>
                                                                <div className="w-full">
                                                                    <p className="mb-2.5">Your invoice has saved as a draft</p>
                                                                    <span className="text-[#999999] text-sm">08 Feb, 2022</span>
                                                                    <span className="float-right text-[#999999] text-sm">01:46 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="py-[15px] px-[30px] flex items-center justify-center border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className=" p-3.5 bg-neutral-100 h-[50px] w-[50px]">
                                                                    <TransactionIcon />
                                                                </div>
                                                                <div>
                                                                    <p className="mb-2.5">Taka 100 has been transferred to +8801676533442</p>
                                                                    <span className="text-[#999999] text-sm">08 Feb, 2022</span>
                                                                    <span className="float-right text-[#999999] text-sm">01:46 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="py-[15px] px-[30px] flex items-center justify-center border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className=" p-3.5 bg-neutral-100 h-[50px] w-[50px]">
                                                                    <InvoiceIcon />
                                                                </div>
                                                                <div className="w-full">
                                                                    <p className="mb-2.5 ">Merchant payment received</p>
                                                                    <span className="text-[#999999] text-sm">08 Feb, 2022</span>
                                                                    <span className="float-right text-[#999999] text-sm">01:46 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="py-[15px] px-[30px] flex items-center justify-center border-solid border-b-2 border-neutral-100 gap-x-2.5 cursor-pointer">
                                                                <div className=" p-3.5 bg-neutral-100 h-[50px] w-[50px]">
                                                                    <TransactionIcon />
                                                                </div>
                                                                <div>
                                                                    <p className="mb-2.5">Your invoice sent successfully to merchant</p>
                                                                    <span className="text-[#999999] text-sm">08 Feb, 2022</span>
                                                                    <span className="float-right text-[#999999] text-sm">01:46 PM</span>
                                                                </div>
                                                            </div>
                                                            {/* <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your invoice has saved as a draft
                                                            </a> */}
                                                            <footer className="text-center py-[15px] px-[30px] font-medium bg-neutral-100 cursor-pointer">See All Notifications</footer>
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                    <button type="button">
                                        <span className="sr-only">View notifications</span>
                                        <HelpIcon aria-hidden="true" />
                                    </button>



                                    {/* Profile dropdown */}
                                    <div className="flex items-center justify-center ">
                                        <img
                                            className=" rounded-full mr-2.5 ml-1"
                                            src={shopno}
                                            alt=""
                                        />
                                        <p className="font-medium">Swapno</p>
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="flex ">
                                                    <span className="sr-only">Open user menu</span>
                                                    <DownIcon />
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
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel> */}
                    </>
                )
            }
        </Disclosure>
    )
}
