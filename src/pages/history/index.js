import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "../../../public/images/logo.png"
import SubScribeDialog from '@/components/SubScribeDialog'
import { FaArrowLeft } from 'react-icons/fa'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const HistoryPage = () => {
    const [visibleEvent, setVisibleEvent] = useState(null);

    const events = [
        { date: "October 2024", title: "Project Kickoff", description: "Initial project planning and team setup.", time: "May 15, 2024 16:00 UTC" },
        { date: "October 2024", title: "Design Phase", description: "Completed initial design mockups and prototypes.", time: "May 15, 2024 16:00 UTC" },
        { date: "October 2024", title: "Development Started", description: "Started building core components and features.", time: "May 15, 2024 16:00 UTC" },
        { date: "October 2024", title: "Testing", description: "Testing and debugging completed, preparing for launch.", time: "May 15, 2024 16:00 UTC" },
        { date: "October 2024", title: "Launch", description: "Project officially launched.", time: "May 15, 2024 16:00 UTC" },
    ];
    const toggleVisibility = (index) => {
        setVisibleEvent(visibleEvent === index ? null : index);
    };


    return (
        <div className=''>
            <div className='container mx-auto text-white pt-8'>
                <div className="flex justify-between mb-5">
                    <Image src={Logo} height={150} width={300} style={{ maxWidth: "300px", maxHeight: "150px" }} />
                    <div>
                        <SubScribeDialog />
                    </div>
                </div>
                <div className='pb-3'>
                    <div className='bg-[#27AE60] rounded'>
                        <div className='flex justify-between items-center h-[52px] p-[15px] '>
                            <div className='text-white text-base font-bold'>All Systems Operational</div>
                            <div className='text-white text-base'>Updated a few seconds ago</div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className='flex items-center justify-center text-[#dbd9d9]'>
                        <FaArrowLeft />
                        <b className='ml-2'>Back to current status</b>
                    </button>
                </div>
                <div className="border border-[#414142] rounded w-full text-center py-6 mt-12">
                    <h1 className='text-xl text-[#dbd9d9]'>Status History</h1>
                </div>

                <div className="dropdown mt-5 text-[#dbd9d9]">
                    <DropdownMenu>
                        <DropdownMenuTrigger className='flex items-center justify-center'>Filter <span className='caret'></span> </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Hosted Status Pages</DropdownMenuItem>
                            <DropdownMenuItem>Status Notifications</DropdownMenuItem>
                            <DropdownMenuItem>Developer API</DropdownMenuItem>
                            <DropdownMenuItem>Status API</DropdownMenuItem>
                            <DropdownMenuItem>Dashboard</DropdownMenuItem>
                            <DropdownMenuItem>Website</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>US-East</DropdownMenuItem>
                            <DropdownMenuItem>US-West</DropdownMenuItem>
                            <DropdownMenuItem>Ireland</DropdownMenuItem>
                            <DropdownMenuItem>Toronto</DropdownMenuItem>
                            <DropdownMenuItem>Email</DropdownMenuItem>
                            <DropdownMenuItem>Webhook</DropdownMenuItem>
                            <DropdownMenuItem>SMS</DropdownMenuItem>
                            <DropdownMenuItem>IRC</DropdownMenuItem>
                            <DropdownMenuItem>Twitter</DropdownMenuItem>
                            <DropdownMenuItem>Microsoft Teams</DropdownMenuItem>
                            <DropdownMenuItem>Slack</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Clear Filter</DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>



                <div className="relative border-l border-gray-300 mt-6">
                    {events.map((event, index) => (
                        <div key={index} className="mb-8 ml-6">
                            <div className="absolute w-5 border left-0 mt-6"></div>
                            <p className="text-[#dbd9d9] text-[2em] ml-1">{event.date}</p>
                            <div className="absolute w-3 border border-gray-400 left-0 mt-6"></div>

                            <h3
                                className="text-lg font-semibold text-[#999999] hover:text-black text-[20px] cursor-pointer"
                                onClick={() => toggleVisibility(index)}
                            >
                                {event.title}
                            </h3>
                            <p className='text-[12px] text-[#dbd9d9]'>{event.time}</p>


                            <div
                                className={`mt-4 transition-all duration-1000 transform overflow-hidden ease-out ${visibleEvent === index
                                    ? 'opacity-0 h-0 p-0 w-0'
                                    : 'opacity-100 h-auto p-6 w-full'
                                    }`}
                            >
                                <div className='card border-[#414142] border rounded-lg'>
                                    <div className='bg-[#00AAF0] rounded-t-lg rounded-t-r-lg rounded-b-none'>
                                        <div className='flex justify-between items-center p-4'>
                                            <p className='text-white text-base'>{event.title}</p>
                                            <p className='opacity-70 text-white'>{event.status}</p>
                                        </div>
                                    </div>
                                    <hr className='border-[#414142]' />
                                    <div className='p-4'>
                                        <div className='items-center grid grid-cols-12 mb-3'>
                                            <p className='text-[#dbd9d9] text-base col-span-2'>Schedule</p>
                                            <p className='text-sm opacity-70 col-span-8'>{event.schedule}</p>
                                        </div>
                                        <div className='items-center grid grid-cols-12 mb-3'>
                                            <p className='text-[#dbd9d9] text-base col-span-2'>Components</p>
                                            <p className='text-sm opacity-70 col-span-8'>{event.components}</p>
                                        </div>
                                        <div className='items-center grid grid-cols-12 mb-3'>
                                            <p className='text-[#dbd9d9] text-base col-span-2'>Data Centers</p>
                                            <p className='text-sm opacity-70 col-span-8'>{event.dataCenters}</p>
                                        </div>
                                        <div className='grid grid-cols-12'>
                                            <p className='text-[#dbd9d9] text-base col-span-2'>Description</p>
                                            <div className='col-span-8'>
                                                <p className='text-sm opacity-70 mb-4'>{event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HistoryPage


