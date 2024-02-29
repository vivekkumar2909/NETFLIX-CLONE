import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

import React from "react";

interface AccountMenuProps {
    visible: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {

    if (!visible) {
        return null;
    }

    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 w-full items-center">
                    <img className="w-8 rounded-md" src="/images/default-green.png" alt="/"/>
                    <p className="text-white text-sm group-hover/item:underline">
                        Username
                    </p>
                </div>

            </div>
            <hr className="bg-gray-600 border-0 h-px my-4"/>
            <div onClick={()=> signOut()} className="px-3 text-center text-center text-white text-sm hover:underline">
                <div className="flex flex-row gap-3 items-center">
                <FaSignOutAlt className="ml-2 text-xl"/>Sign Out of Netflix
                </div>
            </div>
        </div>

    )
}

export default AccountMenu;