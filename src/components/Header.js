import Image from 'next/image'
import React from 'react'
import SubScribeDialog from './SubScribeDialog'
import Logo from "../../public/images/logo.png"

const Header = () => {
    return (
        <div className="flex justify-between mb-5">
            <Image src={Logo} height={150} width={300} style={{ maxWidth: "300px", maxHeight: "150px" }} />
            <div>
                <SubScribeDialog />
            </div>
        </div>
    )
}

export default Header