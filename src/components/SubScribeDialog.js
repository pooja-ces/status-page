import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { FaCalendar, FaCode, FaComment, FaEnvelope, FaRss, FaSlack, FaTwitter, FaWindows } from "react-icons/fa";

const SubScribeDialog = () => {
    const [buttonType, setbottonType] = useState("email")
    const type = [
        {
            name: "email",
            icon: <FaEnvelope />
        },
        {
            name: "comment",
            icon: <FaComment />
        },
        {
            name: "code",
            icon: <FaCode />
        },
        {
            name: "rss",
            icon: <FaRss />
        },
        {
            name: "window",
            icon: <FaWindows />
        },
        {
            name: "slack",
            icon: <FaSlack />
        },
        {
            name: "twitter",
            icon: <FaTwitter />
        },
        {
            name: "calender",
            icon: <FaCalendar />
        }

    ]
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <button className='bg-white text-black px-[10px] py-[10px] rounded text-sm'>SUBSCRIBE</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {type.map((item) => {
                                return (
                                    <button
                                        className={`bg-[#5A6465] text-[#BFC6C6] px-4 py-3 rounded-sm text-[14px] hover:bg-[#F2F3F4] hover:text-[#2C3E50] ml-2 ${buttonType === item.name ? "bg-[#F2F3F4] text-[#2C3E50]" : ""}`}
                                        onClick={() => setbottonType(item.name)}
                                    >
                                        {item.icon}
                                    </button>
                                )
                            })}

                        </DialogTitle>
                    </DialogHeader>
                    <div className='mx-auto my-6'>
                        {buttonType === "email" && (
                            <>
                                <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates by email</h4>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 mt-2 mb-4 border rounded-md focus:shadow-blue-400 focus:border-none"
                                />
                            </>
                        )}
                        {buttonType === "comment" && (
                            <>
                                <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates by text message</h4>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none"
                                />
                                <p className='text-[#737373] mt-2'>Example: 201-555-1717</p>
                            </>
                        )}
                        {buttonType === "code" && (
                            <>
                                <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates by webhook</h4>
                                <div className='my-4'>
                                    <input
                                        type="text"
                                        placeholder="http://example.com/hook"
                                        className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none"
                                    />
                                    <p className='text-[#737373] mt-2'>Each status update will POST a JSON payload to this URL</p>
                                </div>
                                <div className='my-4'>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none"
                                    />
                                    <p className='text-[#737373] mt-2'>Email address for managing webhook</p>
                                </div>
                            </>
                        )}
                        {buttonType === "rss" && (
                            <div className='text-center'>
                                <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates via RSS</h4>

                                <button className='py-4 px-5 text-xl bg-white border border-gray-300 hover:bg-gray-200 rounded'>
                                    RSS Feed
                                </button>
                            </div>
                        )}
                        {buttonType === "window" && (
                            <>
                                <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates in Microsoft Teams</h4>
                                <div className='my-4'>
                                    <input
                                        type="text"
                                        placeholder="https://example.webhook.office.com/webhook-id"
                                        className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none"
                                    />
                                    <p className='text-[#737373] mt-1'>Enter your Microsoft Teams webhook. <a className='text-[#dbd9d9]' target='_blank' href="https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet#add-an-incoming-webhook-to-a-teams-channel">View Instructions</a> </p>
                                </div>
                                <div className='my-4'>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-2 mt-2 border rounded-md focus:shadow-blue-400 focus:border-none"
                                    />
                                    <p className='text-[#737373] mt-1'>Email address for managing subscription</p>
                                </div>
                            </>
                        )}
                        {buttonType === "slack" && (
                            <div className='text-center'>
                                <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates in Slack</h4>

                                <button>
                                    <img src="https://platform.slack-edge.com/img/add_to_slack.png" height={39} width={139} alt="" />
                                </button>
                            </div>
                        )}
                        {buttonType === "twitter" && (
                            <div className='text-center'>
                                <h4 className="text-center mb-8 text-lg">Follow our status updates on Twitter</h4>

                                <button className='py-2 px-4 text-xl bg-white border border-gray-300 hover:bg-gray-200 rounded'>
                                    @statusio
                                </button>
                            </div>
                        )}
                        {buttonType === "calender" && (
                            <div className='text-center'>
                                <h4 className="text-center mb-8 text-lg">Subscribe to receive status updates via iCalendar</h4>

                                <button className='py-2 px-4 text-xl bg-white border border-gray-300 hover:bg-gray-200 rounded'>
                                    iCalendar Feed
                                </button>
                            </div>
                        )}
                    </div>
                    <DialogFooter className="border-t pt-6">
                        {buttonType === "email" && (
                            <>
                                <DialogClose asChild>
                                    <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Close</button>
                                </DialogClose>
                                <button className="bg-white border border-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-200">Subscribe</button>
                            </>
                        )}
                        {buttonType === "comment" && (
                            <>
                                <DialogClose asChild>
                                    <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Close</button>
                                </DialogClose>
                                <button className="bg-white border border-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-200">Manage Subscription</button>
                            </>
                        )}
                        {buttonType === "code" && (
                            <>
                                <DialogClose asChild>
                                    <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Close</button>
                                </DialogClose>
                                <button className="bg-white border border-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-200">Subscribe</button>
                            </>
                        )}
                        {(buttonType === "rss" || buttonType === "slack" || buttonType === "twitter" || buttonType === "calender") && (
                            <>
                                <DialogClose asChild>
                                    <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Close</button>
                                </DialogClose>

                            </>
                        )}
                        {buttonType === "window" && (
                            <>
                                <DialogClose asChild>
                                    <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Close</button>
                                </DialogClose>
                                <button className="bg-white border border-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-200">Subscribe</button>
                            </>
                        )}
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SubScribeDialog