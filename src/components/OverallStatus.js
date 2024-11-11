
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { fetchApiStatus } from '../lib/api';
import { FaCheck } from "react-icons/fa";
import status_page from "../../public/status_page.json"
import LineChart from './LineChart';
import services from "../../public/services.json"
import Logo from "../../public/images/logo.png"
import Image from 'next/image';
const VectorMap = dynamic(
    async () => {
        const { VectorMap } = await import('@react-jvectormap/core');
        const { worldMill } = await import('@react-jvectormap/world');
        return (props) => <VectorMap {...props} map={worldMill} />;
    },
    { ssr: false }
);
const OverallStatus = () => {
    const [apiStatuses, setApiStatuses] = useState([
        { name: 'API 1', status: null },
        { name: 'API 2', status: null },
    ]);
    const [activeButton, setActiveButton] = useState('Today');  // Default set to "Today"
    const [filteredData, setFilteredData] = useState([]);

    // Default "Today" data filter
    useEffect(() => {
        const defaultData = status_page?.metrics?.metrics_chart.filter(item => item.time === 'Today');
        setFilteredData(defaultData);
    }, []);



    useEffect(() => {
        const fetchStatuses = async () => {
            const statuses = await Promise.all(apiStatuses.map(api => fetchApiStatus(api.name)));
            setApiStatuses(apiStatuses.map((api, index) => ({ ...api, status: statuses[index] })));
        };

        fetchStatuses();
    }, []);

    const markers = [
        { latLng: [37.7749, -122.4194], name: 'US-West' },
        { latLng: [43.65107, -79.347015], name: 'Toronto' },
        { latLng: [40.712776, -74.005974], name: 'US-East' },
        { latLng: [53.349805, -6.26031], name: 'Ireland' }
    ];

    const handleTimeChange = (timePeriod) => {
        setActiveButton(timePeriod);
        const filtered = status_page?.metrics?.metrics_chart.filter((item) => item.time === timePeriod);
        setFilteredData(filtered);
    };

    return (
        // <div className="space-y-4">
        //     {apiStatuses.map((api, index) => (
        //         <ApiStatus key={index} name={api.name} status={api.status} />
        //     ))}
        // </div>
        <div className='container mx-auto text-white pt-8'>
            <div className="flex justify-between mb-5">
                <Image src={Logo} height={150} width={300} style={{ maxWidth: "300px", maxHeight: "150px" }} />
                <div>

                    <div className='bg-white text-black px-[10px] py-[10px] rounded'>
                        <p className='text-sm'>SUBSCRIBE</p>
                    </div>
                </div>
            </div>
            <div className='pb-7'>
                <div className='bg-[#27AE60] rounded'>
                    <div className='flex justify-between items-center h-[52px] p-[15px] '>
                        <div className='text-white text-base font-bold'>All Systems Operational</div>
                        <div className='text-white text-base'>Updated a few seconds ago</div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className=' border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='flex justify-center items-center gap-40'>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>0</p>
                                    <p className='text-center mt-3'>Active Incidents</p>
                                </div>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>0</p>
                                    <p className='text-center mt-3'>Active Maintenances</p>
                                </div>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>55</p>
                                    <p className='text-center mt-3'>Days Since Last Incident</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className=' border-[#414142] border rounded'>
                        {services?.map((data) => {
                            return (
                                <>
                                    <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                                        <div>
                                            <p className='text-lg pb-2'>{data?.name}</p>
                                            <div className='flex gap-3'>
                                                {data.regions.map((items) => {
                                                    return (

                                                        <span className="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">{items.name}</span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-[#27AE60]'>{data.status}</p>
                                        </div>
                                    </div>
                                    <hr className='border-[#414142]' />
                                </>
                            )
                        })}

                    </div>
                </div>
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60 mb-3'>External Services</h3>
                    <div className=' border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='grid grid-cols-4 text-center flex-wrap gap-4'>
                                {status_page?.external_service?.map((item) => (
                                    <div className='relative flex items-center gap-2 justify-center group'>
                                        <FaCheck className='text-green-600' />
                                        <a
                                            className='text-[#dbd9d9] text-base font-bold'
                                            href={item.link}
                                            target='_blank'
                                        >
                                            {item.name}
                                        </a>
                                        <div className='absolute bottom-4 mb-2 text-white bg-black rounded px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity'>
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60 mb-3'>Locations</h3>
                    <div className='border-[#414142] border rounded'>
                        <div className='p-4'>
                            <VectorMap
                                backgroundColor="#2b2b2b"
                                style={{ height: 400 }}
                                regionStyle={{
                                    initial: {
                                        fill: '#dbd9d9',
                                    },
                                }}
                                markers={markers}
                                markerStyle={{
                                    initial: {
                                        fill: '#4CAF50',
                                        stroke: '#383f47',
                                        r: 6.5,
                                    },

                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-xl opacity-60'>Metrics</h3>
                        <div className='flex items-center gap-3'>
                            {status_page?.metrics?.metrics_time?.map((item) => (
                                <div
                                    className={`${activeButton === item ? "text-black bg-white" : "text-[#BFC6C6] bg-[#5A6465]"} rounded pt-1 pb-1 px-[14px] hover:bg-white hover:text-black cursor-pointer`}
                                    onClick={() => handleTimeChange(item)}
                                >
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {filteredData?.map((item) => (
                        <div key={item.title} className='border-[#414142] border rounded mb-4'>
                            <div className='p-4'>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <p>{item?.title}</p>
                                        <p>{item?.average}</p>
                                    </div>
                                    <div>
                                        <LineChart data={item?.data} categories={item?.category} series={item?.series} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className=' border-[#414142] border rounded mb-4'>
                        <div className='p-4'>
                            <div className='flex justify-between items-center'>
                                <p>Hosted Status Pages Response Time</p>
                                <p>100%</p>
                            </div>
                        </div>
                    </div>
                    <div className=' border-[#414142] border rounded mb-4'>
                        <div className='p-4'>
                            <div className='flex justify-between items-center'>
                                <p>API Response Time</p>
                                <p>100%</p>
                            </div>
                        </div>
                    </div> */}
                </div >
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60 mb-3'>Scheduled Maintenance</h3>
                    <div className=' border-[#414142] border rounded-lg'>
                        <div className='bg-[#00AAF0] rounded-t-lg rounded-r-lg rounded-b-none'>
                            <div className='flex justify-between items-center p-4'>
                                <p className='text-white text-base'>Deploy Version 1.7.3</p>
                                <p className='opacity-70 text-white'>Planned Maintenance</p>
                            </div>
                        </div>
                        <hr className='border-[#414142]' />
                        <div className='p-4'>
                            <div className='items-center grid grid-cols-12 mb-3'>
                                <p className='text-[#dbd9d9] text-base col-span-2'>Schedule</p>
                                <p className='text-sm opacity-70 col-span-8'>November 11, 2024 23:00 - 23:15 UTC</p>
                            </div>
                            <div className='items-center grid grid-cols-12 mb-3'>
                                <p className='text-[#dbd9d9] text-base col-span-2'>Components</p>
                                <p className='text-sm opacity-70 col-span-8'>Hosted Status Pages, Developer API, Status API, Dashboard, Website</p>
                            </div>
                            <div className='items-center grid grid-cols-12 mb-3'>
                                <p className='text-[#dbd9d9] text-base col-span-2'>Data Centers</p>
                                <p className='text-sm opacity-70 col-span-8'>US-East, US-West, Ireland, Toronto</p>
                            </div>
                            <div className='grid grid-cols-12'>
                                <p className='text-[#dbd9d9] text-base col-span-2'>Description</p>
                                <div className='col-span-8'>
                                    <p className='text-sm opacity-70 mb-4'>We will be deploying the next version of Status.io.</p>
                                    <p className='text-sm opacity-70 '>There will be no downtime during this maintenance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className=' border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='flex justify-center items-center'>
                                <div className='bg-white text-black px-[10px] py-[10px] rounded'>
                                    <p className='text-sm'>SUBSCRIBE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <ul className='flex items-center gap-3'>
                                <li className='text-[#dbd9d9] decoration-0 no-underline'>Status</li>
                                <li className='text-[#dbd9d9] decoration-0 no-underline'>History</li>
                                <li className='text-[#dbd9d9] decoration-0 no-underline'>Report issue</li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-[#dbd9d9] decoration-0 no-underline'>Powered by Status.io</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default OverallStatus