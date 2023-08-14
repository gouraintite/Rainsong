import React from 'react'
import logo from '../assets/logo.svg'
import me from '../assets/me.png'
import mouse from '../assets/mouse.png'
import arrow from '../assets/arrow.png'

const Welcome = () => {
  return (
    <>
        <div className='pt-2 px-16'>
            <div className='cursor-pointer' >
                <img src={logo} alt="logo rainsong" />
            </div>
            <div className='flex justify-between h-100 mt-6' >
                <div className='mt-36 w-2/5 h-full'>
                    <div className='absolute z-50 h-1/2'>
                        <p className='text-2xl font-bold'>
                            Hey, ✌🏽 I am...️    
                        </p><br />
                        <p className='text-[9.5rem] ml-4 -mt-16 font-extrabold'>
                            Rainsong
                        </p><br />
                        <p className='text-2xl -mt-12 mb-12'>
                            I mean, Rainsong NGOUTSOP.
                        </p>
                        <p className='text-2xl mt-4 leading-normal'>
                            Laughing in the Face of Browser <br /> Compatibility – The {' '}
                            <span className='text-primary'>Front-End</span> <br />
                             Developer's Battle Cry! 😄
                        </p>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center z-0' >
                    <div className='ml-4 w-full shadow-2xl shadow-primary rounded-full overflow-hidden border-[15px] border-primary '>
                        <img src={me} alt="my picture" className='w-full shadow-xl' />
                    </div>
                </div>
            </div>

            <div className='absolute -bottom-24 left-46 arrow'>
                <div className='flex justify-center pt-3'>
                <img src={mouse} alt="" className='w-3/4' /> 
                </div>
                <div className='flex justify-center pt-3'>
                    <img src={arrow} height={9} className='h-1/4' alt="" /> 
                </div>
            </div>
            <div className='' >
                this
            </div>
        </div>
    </>
  )
}

export default Welcome