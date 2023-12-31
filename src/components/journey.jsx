import Uy1 from '../assets/uy1.png'
import location from '../assets/location.png'
import note2 from '../assets/note-2.png'
import watch from '../assets/watch.png'
import tour from '../assets/tour.png'
import Uy1_black from '../assets/uy1_black.png'
import lohce from '../assets/lohce.png'
import yak from '../assets/yak.png'
import acesy from '../assets/acesy.png'

const Journey = () => {
  return (
    <>
        <section className='lg:-mt-24 mt-24 overflow-hidden'>
            <h1 className='lg:text-8xl text-5xl font-bold' >Journey
                <div class="absolute z-0 bg-gradient-to-tr from-primary/25 to-dark/10 lg:w-[1120px] w-[200px] h-[400px] blur-3xl -mt-40">
                </div>
            </h1>
            <p className='font-bold text-primary text-[1.3rem] -mt-4'> Challenging but worth it!</p>

            <div class="absolute z-0 bg-gradient-to-tr from-primary/25 to-dark/10 lg:w-[1120px] w-[200px] h-[400px] blur-3xl mt-12">
                    </div>
            <div className='rounded border-[3.5px] border-primary mt-9 lg:p-4 lg:px-6 p-3'>
                <div className='flex lg:flex-row flex-row-reverse flex-wrap-reverse w-auto items-center'>
                    <div className='flex justify-start lg:w-1/2 w-full lg:mt-0 mt-3'>
                        <img src={Uy1} 
                            className='w-[75px] h-[100px]'
                            alt="" 
                        />
                        <div className='flex ml-3 h-auto items-center text-2xl font-black'>
                            University of <br />Yaounde 1
                        </div>
                    </div>
                    <div className='flex lg:w-1/2 w-full lg:ml-auto mx-auto lg:justify-end justify-center text-black lg:-space-x-12 space-x-0 lg:mb-0 mb-4'>
                        <div className='group w-1/4 rounded-xl text-center space-y-2 boxes-journey bg-primary opacity-20'>
                            <div className='w-full flex justify-center pt-2 pb-0'>
                                <img 
                                className='lg:h-20 h-12 w-20 object-contain'
                                src={Uy1_black} alt="" />
                            </div>
                            <p className='w-full text-black text-center pb-2 font-bold'>
                                University
                            </p>
                        </div>
                        <div className='group w-1/4 bg-slate-200 rounded-xl text-center space-y-2 boxes-journey'>
                            <div className='w-full flex justify-center pt-2 pb-0'>
                                <img 
                                className='lg:h-20 h-12 w-20 object-contain'
                                src={yak} alt="" />
                            </div>
                            <p className='w-full text-black text-center pb-2 font-bold'>
                                YAKNEMA
                            </p>
                        </div>
                        <div className='group w-1/4 bg-slate-200 rounded-xl text-center space-y-2 boxes-journey'>
                            <div className='w-full flex justify-center pt-2 pb-0'>
                                <img 
                                className='lg:h-20 h-12 w-20 object-contain'
                                src={lohce} alt="" />
                            </div>
                            <p className='w-full text-black text-center pb-2 font-bold'>
                                LOHCE
                            </p>
                        </div>
                        <div className='group w-1/4 bg-slate-200 rounded-xl text-center space-y-2 boxes-journey'>
                            <div className='w-full flex justify-center pt-2 pb-0'>
                                <img 
                                className='lg:h-20 h-12 w-20 object-contain'
                                src={acesy} alt="" />
                            </div>
                            <p className='w-full text-black text-center pb-2 font-bold'>
                                ACESY
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-between lg:mt-16 mt-8'>
                    <div className='lg:w-1/2 w-full text-center font-semibold text-xl'>
                        <div className='flex my-2'>
                            <img src={location} alt="" className='h-6' />
                            <div className='ml-3 lg:text-xl text-sm'>
                                Yaoundé, Cameroon
                            </div>
                        </div>
                        <div className='flex my-2'>
                            <img src={watch} alt="" className='h-6' />
                            <div className='ml-3 lg:text-xl text-sm'>
                                05 Years
                            </div>
                        </div>
                        <div className='flex my-2'>
                            <img src={note2} alt="" className='h-6' />
                            <div className='ml-3 lg:text-xl text-sm'>
                            Master Computer Science
                            </div>
                        </div>
                        <div className='flex bg-primary/20 backdrop-blur-2xl w-fit lg:mt-20 mb-6 lg:p-3 p-2 rounded-xl cursor-pointer transition-all hover:scale-95 duration-200 ease-in-out'>
                            <img src={tour} alt="" className='h-6' />
                            <div className='ml-3 lg:text-xl text-sm'>
                                Take tour
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 lg:text-xl pb-6 text-justify'>
                        The Software Enginee Master's program at the University of Yaounde I in Cameroon is a great option for students who want to pursue a career in software enginee. The program is well-respected and offers a rigorous curriculum that covers all aspects of software enginee, from design and development to testing and deployment.
                        Concerning me it continue to be a great experience full all nkowledge and discovery.
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Journey