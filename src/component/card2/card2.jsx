import React from 'react'

const Card2 = ({ title, text }) => {
    return (
        <>
            <div>
                <h1 className='text-[#5fb9ff] font-[Montserrat-bold] text-[28px] md:text-xl xl:text-[32px] leading-7 '>{title}</h1>
                <p className='md:w-[142px] text-[12px] xl:text-[16px] font-[Montserrat-medium] leading-[16px] xl:leading-[20px] text-trueGray800 dark:text-trueGray100 pt-[10px] dark:text-[white]'>{text}</p>
            </div>
        </>
    )
}

export default Card2
