import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card3 = ({ icons, title, text }) => {
    return (
        <>
            <div className='flex backdrop-blur-sm dark:bg-[#1E293B] dark:bg-opacity-50  shadow-lg bg-opacity-20c items-center justify-center text-center bg-[#eaeaea]  bg-opacity-10  rounded-[16px] p-[16px_20px] min-h-[170px]'>
                <div>
                    <div className='mb-[30px]'>
                        <FontAwesomeIcon className='dark:text-[white] text-[#192734] text-[28px]' icon={icons} />
                    </div>
                    <h3 className='mb-[3px] font-[700] leading-6 tablet:leading-5 text-[16px] text-[#192734] dark:text-trueGray100 dark:text-[white]'>{title}</h3>
                    <p className='font-[Montserrat-medium] text-[12px] dark:text-[#b6b6b6] text-neutral-500 dark:text-trueGray400'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Card3
