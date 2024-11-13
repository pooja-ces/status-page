import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const router = useRouter()
    return (
        <div className='mt-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <ul className='flex items-center gap-3'>
                        <li className='text-[#dbd9d9] decoration-0 no-underline'>Status</li>
                        <li className='text-[#dbd9d9] decoration-0 no-underline' onClick={() => router.push("/history")}>History</li>
                        <li className='text-[#dbd9d9] decoration-0 no-underline'>Report issue</li>
                    </ul>
                </div>
                <div>
                    <p className='text-[#dbd9d9] decoration-0 no-underline'>Powered by Status.io</p>
                </div>
            </div>
        </div>
    )
}

export default Footer