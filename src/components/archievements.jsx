import a2 from '../assets/a2.png'
import note2 from '../assets/note-2.png'
import github from '../assets/gh.png'

const Archievments = () => {


  return (
    <>
        <section className='lg:-mt-24 mt-12 overflow-hidden'>
            <h1 className='lg:text-8xl text-5xl font-bold' >Achievements
                <div class="absolute z-0 bg-gradient-to-tr right-12 ring from-primary/25 to-dark/90 lg:w-[520px] w-[200px] h-[400px] blur-3xl -mt-28">
                </div>
            </h1>
            <p className='font-bold text-primary lg:text-[1.3rem] text-[1.1rem] -mt-4'> Because the leasts steps matter too.</p>
            <div class="absolute z-0 bg-gradient-to-tr right-12 ring from-primary/25 to-dark/90 lg:w-[520px] w-[200px] h-[400px] blur-3xl mt-32">
            </div>

            <div className="w-full rounded-3xl lg:mt-16 mt-12 mb-24" >
                <img src={a2} alt="avendre" className="object-cover" />
                <div className='w-full bg-none flex justify-between lg:px-9 px-1 lg:-mt-6 -mt-3' >
                    <div className='flex justify-center bg-none rounded-xl '>
                        <div className='bg-primary lg:p-3 p-1 rounded-xl h-auto' >
                            <img src={note2} className='w-6' alt="" />
                        </div>
                        <div className='bg-primary rounded-xl xl:px-8 px-2 py-0 lg:mx-3 mx-1' > 
                            <h1 className='xl:text-xl text-sm font-bold lg:pt-2 pt-[4px]'>Avendre</h1>
                        </div>
                        <div className='bg-primary lg:p-3 p-1 rounded-xl h-auto' >
                            <img src={note2} className='w-6' alt="" />
                        </div>
                    </div>
                    
                    <div className='flex justify-center bg-none rounded-xl '>
                        <div className='bg-black border-2 border-primary rounded-xl lg:px-8 px-3 py-0 mx-3' > 
                            <h1 className='ls:text-xl text-sm font-bold lg:pt-2 pt-[4px]'>Avendre</h1>
                        </div>
                        <div className='bg-black border-2 border-primary lg:p-3 p-1 rounded-xl' >
                            <img src={github} className='w-6' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Archievments