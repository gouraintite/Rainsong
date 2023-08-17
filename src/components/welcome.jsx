import React from 'react'
import logo from '../assets/logo.svg'
import me from '../assets/me.png'
import mouse from '../assets/mouse.png'
import arrow from '../assets/arrow.png'
import a1 from '../assets/a1.png'

const Welcome = () => {
  return (
    <>
        <div className='pt-2 h-fit'>
            <div className='cursor-pointer' >
                <img src={logo} alt="logo rainsong" className='' />
            </div>
            <div className='flex lg:flex-row flex-row-reverse justify-between h-auto lg:h-100 mt-6'>
                <div className='lg:mt-36 mt-4 lg:w-2/5 w-full h-full z-50'>
                    <div className='lg:absolute z-50 h-1/2 '>
                        <p className='lg:text-2xl text-3xl font-bold'>
                            Hey, ✌🏽 I am...️    
                        </p><br />
                        <p className='md:text-[9.2rem] sm:text-[2rem] text-[4.2rem] ml-4 lg:-mt-16 font-extrabold'>
                            Rainsong
                        </p><br />
                        <p className='lg:text-2xl text-xl lg:font-normal font-bold lg:-mt-12 mt-2 mb-12'>
                            {'{{'} I mean, Rainsong NGOUTSOP.{'}}'}
                        </p>
                        <p className='lg:text-2xl text-xl lg:mt-4 mt-24 lg:leading-normal leading-relaxed w-full'>
                            Laughing in the Face of Browser <br /> Compatibility – The {' '}
                            <span className='text-primary font-bold'>Front-End</span> <br />
                             Developer's Battle Cry! 😄
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/2 w-2/3 flex justify-center z-0 lg:relative  absolute'>
                    <div className='lg:ml-4 w-full shadow-2xl shadow-primary rounded-full overflow-hidden lg:border-[15px] border-[5px] border-primary '>
                        <img src={me} alt="my picture" className='w-full shadow-xl' />
                    </div>
                    <div className='lg:absolute lg:block hidden bottom-72 rounded-l-3xl -right-44 shadow-2xl shadow-slate-700 border-l-2 border-y-2 border-primary overflow-hidden  w-46 h-52 object-cover ring'>
                            <img src={a1} alt="" className='object-cover' />
                            <div className='bg-primary text-xl flex justify-center items-center h-1/5 w-1/3 absolute bottom-0 rounded-tr-xl' >
                                avendre
                            </div>
                    </div>
                </div>
            </div>

            <div className='absolute -bottom-24 left-1 lg:left-48 arrow'>
                <div className='flex justify-center pt-3'>
                    <img src={mouse} alt="" className='w-3/4 drop-shadow-xl drop-shadow-white' /> 
                </div>
                <div className='flex justify-center pt-3'>
                    <img src={arrow} height={9} className='h-1/8' alt="" /> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Welcome