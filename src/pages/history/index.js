import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Logo from "../../../public/images/logo.png"
import SubScribeDialog from '@/components/SubScribeDialog'
import { FaArrowLeft } from 'react-icons/fa'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Footer from '@/components/Footer'
import { useData } from '../api/client'

const HistoryPage = () => {
    const router = useRouter()
    const { historyData } = useData()
    const [visibleEvent, setVisibleEvent] = useState(null);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [filterChanged, setFilterChanged] = useState(false);
    const [selectedCenter, setSelectedCenter] = useState('');
    const [selectedComponent, setSelectedComponent] = useState('');


    useEffect(() => {

        const timer = setTimeout(() => {
            setIsPageLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {

        if (selectedCenter || selectedComponent) {
            setFilterChanged(true);
        } else {
            setFilterChanged(false);
        }
    }, [selectedCenter, selectedComponent]);

    const handleFilterChange = () => {

        setFilterChanged(false);
        setTimeout(() => {
            setFilterChanged(true);
        }, 1500);
    };

    const filteredHistory = historyData?.filter(event => {
        const centerFilter = selectedCenter ? event.centers.includes(selectedCenter) : true;
        const componentFilter = selectedComponent ? event.components.includes(selectedComponent) : true;
        return centerFilter && componentFilter;
    });

    const toggleVisibility = (index) => {
        setVisibleEvent(visibleEvent === index ? null : index);
    };


    return (
        <div className='container px-5 md:mx-auto text-white pt-8 pb-10'>
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
                <button className='flex items-center justify-center text-[#dbd9d9]' onClick={() => router.back()}>
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
                        <DropdownMenuItem onClick={() => { setSelectedComponent('Hosted Status Pages'); handleFilterChange(); }}>Hosted Status Pages</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedComponent('Status Notifications'); handleFilterChange(); }}>Status Notifications</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedComponent('Developer API'); handleFilterChange(); }}>Developer API</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedComponent('Status API'); handleFilterChange(); }}>Status API</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedComponent('Dashboard'); handleFilterChange(); }}>Dashboard</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedComponent('Website'); handleFilterChange(); }}>Website</DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem onClick={() => { setSelectedCenter('US-East'); handleFilterChange(); }}>US-East</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('US-West'); handleFilterChange(); }}>US-West</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('Ireland'); handleFilterChange(); }}>Ireland</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('Toronto'); handleFilterChange(); }}>Toronto</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('Email'); handleFilterChange(); }}>Email</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('Webhook'); handleFilterChange(); }}>Webhook</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('SMS'); handleFilterChange(); }}>SMS</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('IRC'); handleFilterChange(); }}>IRC</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('Twitter'); handleFilterChange(); }}>Twitter</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('Microsoft Teams'); handleFilterChange(); }}>Microsoft Teams</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { setSelectedCenter('Slack'); handleFilterChange(); }}>Slack</DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem onClick={() => { setSelectedCenter(''); setSelectedComponent(''); handleFilterChange(); }}>Clear Filter</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="relative border-l border-gray-300 mt-6">
                {filteredHistory?.map((event, index) => (
                    <div key={index} className="mb-8 ml-6">
                        <div className="absolute w-5 border left-0 mt-6"></div>
                        <p className="text-[#dbd9d9] text-[2em] ml-1">{event?.date}</p>
                        <div className="absolute w-3 border border-gray-400 left-0 mt-6"></div>
                        <div>
                            <h3
                                className="text-lg font-semibold text-[#999999] hover:text-black text-[20px] cursor-pointer"
                                onClick={() => toggleVisibility(index)}
                            >
                                {event?.title}
                            </h3>
                        </div>
                        <p className='text-[12px] text-[#dbd9d9]'>{event?.time}</p>


                        <div
                            className={`mt-4 transition-all duration-1000 transform overflow-hidden ease-out ${isPageLoaded || filterChanged
                                ? 'opacity-100 h-auto p-6 w-full'
                                : 'opacity-0 h-0 p-0 w-0'
                                }`}
                        >
                            <div className='card border-[#414142] border rounded-lg'>
                                <div className={`${event.status === 1 ? "bg-[#00AAF0]" : event.status === 2 ? "bg-[#ffa837]" : "bg-[#27ae60]"} rounded-t-lg rounded-t-r-lg rounded-b-none`}>
                                    <div className='flex justify-between items-center p-4'>
                                        <p className='text-white text-base'>{event?.title}</p>
                                        <p className='opacity-70 text-white'>{event?.status === 1 ? "Planned Maintenance" : event.status === 2 ? "Degraded Performance" : "Operational"}</p>
                                    </div>
                                </div>
                                <hr className='border-[#414142]' />
                                <div className='p-4'>
                                    <div className='grid grid-cols-12'>
                                        <p className='text-[#dbd9d9] text-base col-span-2'>Description</p>
                                        <div className='col-span-8'>
                                            <p className='text-sm opacity-70 mb-4'>
                                                {event?.description?.map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        {index < event?.description?.length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='items-center grid grid-cols-12 mb-6'>
                                        <p className='text-[#dbd9d9] text-base col-span-2'>Components</p>
                                        <p className='text-sm opacity-70 col-span-8'>{event?.components?.join(" , ")}</p>
                                    </div>
                                    <div className='items-center grid grid-cols-12 mb-6'>
                                        <p className='text-[#dbd9d9] text-base col-span-2'>Data Centers</p>
                                        <p className='text-sm opacity-70 col-span-8'>{event?.centers?.join(" , ")}</p>
                                    </div>
                                    <div className='items-center grid grid-cols-12 mb-6'>
                                        <p className='text-[#dbd9d9] text-base col-span-2'>Schedule</p>
                                        <p className='text-sm opacity-70 col-span-8'>{event?.schedule}</p>
                                    </div>
                                </div>

                                <div className="border-t border-[#414142] mx-3">
                                    <div className="mt-5">
                                        {event.history.map((data) => {
                                            return (
                                                <div className='items-center flex  mb-6'>
                                                    <p className='text-[#5f5f5f] text-sm font-bold '>{data.time}</p>
                                                    <p className='text-sm opacity-70  ml-12'>{event?.description?.join(" , ")}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="">
                <button className='flex items-center justify-center text-[#dbd9d9]' onClick={() => router.back()}>
                    <FaArrowLeft />
                    <b className='ml-2'>Back to current status</b>
                </button>
            </div>
            <div className='mt-12'>
                <div className=' border-[#414142] border rounded'>
                    <div className='p-4'>
                        <div className='flex justify-center items-center'>
                            <SubScribeDialog />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default HistoryPage


