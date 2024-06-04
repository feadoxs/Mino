import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card1 = ({ icons, title }) => {
    return (
        <div className='card min-h-[181px] flex items-center justify-center dark:border-[#2c3a47] dark:hover:shadow-[1px_1px_20px_#2c3a47]'>
            <div>
                <div className='flex justify-center'>
                    <FontAwesomeIcon className='text-[40px] text-[#2d2e2f] dark:text-[white]' icon={icons} />
                </div>
                <p className='mt-[16px] font-[Montserrat-semiBold] text-[#2d2e2f] dark:text-[white] text-center'>{title}</p>
            </div>
        </div>
    )
}

export default Card1
