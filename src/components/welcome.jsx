import React from 'react'
import logo from '../assets/logo.svg'
import me from '../assets/me.png'
import mouse from '../assets/mouse.png'
import arrow from '../assets/arrow.png'
import a1 from '../assets/a1.png'

const Welcome = () => {
  return (
    <>
        <div className='lg:pt-2 pt-12 lg:px-16'>
            <div className='cursor-pointer' >
                <img src={logo} alt="logo rainsong" className='' />
            </div>
            <div className='flex justify-between h-100 lg:mt-6 mt-12 ' >
                <div className='lg:mt-36 mt-40 lg:w-2/5 h-full'>
                    <div className='absolute z-50 h-1/2'>
                        <p className='lg:text-2xl text-3xl font-bold'>
                            Hey, ✌🏽 I am...️    
                        </p><br />
                        <p className='lg:text-[9.5rem] text-[7rem] ml-4 lg:-mt-16 mt-12 font-extrabold'>
                            Rainsong<span className='text-6xl' >🌧️🎶</span>
                        </p><br />
                        <p className='lg:text-2xl text-3xl lg:-mt-12 mt-12 mb-12'>
                            I mean, Rainsong NGOUTSOP.
                        </p>
                        <p className='lg:text-2xl text-3xl lg:mt-4 mt-24 lg:leading-normal leading-relaxed w-full'>
                            Laughing in the Face of Browser <br /> Compatibility – The {' '}
                            <span className='text-primary'>Front-End</span> <br />
                             Developer's Battle Cry! 😄
                        </p>
                    </div>
                </div>
                <div className='lg:w-1/2 w-2/3 flex justify-center z-0' >
                    <div className='ml-4 w-full shadow-2xl shadow-primary rounded-full overflow-hidden lg:border-[15px] border-[5px] border-primary '>
                        <img src={me} alt="my picture" className='w-full shadow-xl' />
                    </div>
                    <div className='absolute bottom-9 rounded-l-3xl -right-0 shadow-2xl shadow-slate-700 border-l-2 border-y-2 border-primary overflow-hidden w-46 h-52 object-cover ring'>
                            <img src={a1} alt="" className='object-cover' />
                            <div className='bg-primary text-xl flex justify-center items-center h-1/5 w-1/3 absolute bottom-0 rounded-tr-xl' >
                                avendre
                            </div>
                    </div>
                </div>
            </div>

            <div className='absolute -bottom-24 left-46 arrow'>
                <div className='flex justify-center pt-3'>
                    <img src={mouse} alt="" className='w-3/4 drop-shadow-xl drop-shadow-white' /> 
                </div>
                <div className='flex justify-center pt-3'>
                    <img src={arrow} height={9} className='h-1/4' alt="" /> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Welcome