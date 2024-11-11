import React, { useState, useEffect } from 'react';
import ApiStatus from './ApiStatus';
import { fetchApiStatus } from '../lib/api';
import { FaCheck } from "react-icons/fa";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import status_page from "../../public/status_page.json"
import LineChart from './LineChart';

const OverallStatus = () => {
    const [apiStatuses, setApiStatuses] = useState([
        { name: 'API 1', status: null },
        { name: 'API 2', status: null },
    ]);
    const [activeButton, setActiveButton] = useState('')

    useEffect(() => {
        const fetchStatuses = async () => {
            const statuses = await Promise.all(apiStatuses.map(api => fetchApiStatus(api.name)));
            setApiStatuses(apiStatuses.map((api, index) => ({ ...api, status: statuses[index] })));
        };

        fetchStatuses();
    }, []);

    return (
        // <div className="space-y-4">
        //     {apiStatuses.map((api, index) => (
        //         <ApiStatus key={index} name={api.name} status={api.status} />
        //     ))}
        // </div>
        <div className='container mx-auto text-white pt-8'>
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
                                    <p className='text-center'>Active Incidents</p>
                                </div>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>0</p>
                                    <p className='text-center'>Active Maintenances</p>
                                </div>
                                <div>
                                    <p></p>
                                    <p className='text-6xl text-center block'>0</p>
                                    <p className='text-center'>Days Since Last Incident</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className=' border-[#414142] border rounded'>
                        <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                            <div>
                                <p className='text-lg pb-2'>Hosted Status Pages</p>
                                <div className='flex gap-3'>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-East</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-West</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Ireland</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Toronto</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#27AE60]'>Operational</p>
                            </div>
                        </div>
                        <hr className='border-[#414142]' />
                        <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                            <div>
                                <p className='text-lg pb-2'>Status Notifications</p>
                                <div className='flex gap-3'>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Email</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Webhook</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">SMS</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">IRC</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Twitter</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Microsoft Teams</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Slack</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#27AE60]'>Operational</p>
                            </div>
                        </div>
                        <hr className='border-[#414142]' />
                        <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                            <div>
                                <p className='text-lg pb-2'>Developer API </p>
                                <div className='flex gap-3'>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-East</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-West</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Ireland</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Toronto</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#27AE60]'>Operational</p>
                            </div>
                        </div>
                        <hr className='border-[#414142]' />
                        <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                            <div>
                                <p className='text-lg pb-2'>Status API </p>
                                <div className='flex gap-3'>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-East</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-West</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Ireland</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Toronto</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#27AE60]'>Operational</p>
                            </div>
                        </div>
                        <hr className='border-[#414142]' />
                        <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                            <div>
                                <p className='text-lg pb-2'>Dashboard </p>
                                <div className='flex gap-3'>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-East</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-West</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Ireland</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Toronto</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#27AE60]'>Operational</p>
                            </div>
                        </div>
                        <hr className='border-[#414142]' />
                        <div className='flex justify-between items-center pt-2 px-4 pb-[15px]'>
                            <div>
                                <p className='text-lg pb-2'>Website </p>
                                <div className='flex gap-3'>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-East</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">US-West</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Ireland</span>
                                    <span class="inline-flex items-center rounded bg-green-600 px-1 py-0.5 text-[12px] font-medium text-white ring-1 ring-inset ring-gray-500/10">Toronto</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#27AE60]'>Operational</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60'>External Services</h3>
                    <div className=' border-[#414142] border rounded'>
                        <div className='p-4'>
                            <div className='grid grid-cols-4 text-center flex-wrap gap-4'>
                                {status_page?.external_service?.map((item) => (
                                    <div className='flex items-center gap-2 justify-center'>
                                        <FaCheck className='text-green-600' />
                                        <p className='text-[#dbd9d9] text-xs font-bold'>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <h3 className='text-xl opacity-60'>Location</h3>
                    <div className=' border-[#414142] border rounded'>
                        <div className='p-4'></div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-xl opacity-60'>Metrics</h3>
                        <div className='flex items-center gap-3'>
                            {status_page?.metrics?.metrics_time?.map((item) => (
                                <div
                                    className={`${activeButton === item ? "text-black bg-white" : "text-[#BFC6C6] bg-[#5A6465]"} rounded pt-1 pb-1 px-[14px] hover:bg-white hover:text-black cursor-pointer`}
                                    onClick={() => setActiveButton(item)}
                                >
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {status_page?.metrics?.metrics_chart?.map((item) => {
                        return (
                            <>
                                <div className=' border-[#414142] border rounded mb-4'>
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
                            </>
                        )
                    })}
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
                    <h3 className='text-xl opacity-60'>Scheduled Maintenance</h3>
                    <div className=' border-[#414142] border rounded'>
                        <div className='bg-[#00AAF0]'>
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