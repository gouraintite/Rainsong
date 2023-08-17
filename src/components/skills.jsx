import next from '../assets/next.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import sass from '../assets/sass.png'
import tailwind from '../assets/tc.png'
import recoil from '../assets/recoil.png'
import vite from '../assets/vite.png'

//deploiement skills
import netlify from '../assets/netlify.png'
import vercel from '../assets/vercel.png'

//others skills

import git from '../assets/git.png'
import figma from '../assets/figma.png'

const Skills = () => {

    const skills = [
        {
            name: 'HTML',
            img: html
        },
        {
            name: 'CSS',
            img: css
        },
        {
            name: 'JavaScript',
            img: js
        },
        {
            name: 'React js',
            img: react
        },
        {
            name: 'Sass',
            img: sass
        },
        {
            name: 'Next js',
            img: next
        },
        {
            name: 'Tailwind css',
            img: tailwind
        },
        {
            name: 'Recoil js',
            img: recoil
        },
        {
            name: 'Vite js',
            img: vite
        },
    ]

    const deploiements = [
        {
            name: 'Netlify',
            img: netlify
        },
        {
            name: 'Vercel',
            img: vercel
        },
    ]

    const others = [
        {
            name: 'Git',
            img: git
        },
        {
            name: 'Figma',
            img: figma
        },
    ]

  return (
    <>
        <section className='lg:-mt-24 mt-24 overflow-hidden'>
            <h1 className='lg:text-8xl text-5xl font-bold' >Skill set
                <div class="absolute z-0 bg-gradient-to-tr right-12 ring from-primary/25 to-dark/90 lg:w-[520px] w-[200px] h-[400px] blur-3xl -mt-28">
                </div>
            </h1>
            <p className='font-bold text-primary text-[1.3rem] -mt-4'> Just the tools</p>
            <div class="absolute z-0 bg-gradient-to-tr right-12 ring from-primary/25 to-dark/90 lg:w-[520px] w-[200px] h-[400px] blur-3xl mt-32">
            </div>

            <div className='lg:mt-12 mt-6' >
                <p className='font-bold text-primary text-[1.3rem] ml-8 pb-2'> Front-end Stack</p>
                <hr className='w-full bg-slate-300'/>
                <div className='flex flex-wrap w-full mt-4'>
                    {skills.map((skill, index) => (
                        <div className='lg:w-1/3 xl:w-1/3 w-full p-3' key={index}>
                            <div className='w-full duration-200 ease-in-out delay-75 border-2 hover:hue-rotate-15 hover:border-primary rounded-xl border-dashed p-4 flex justify-start space-x-9 items-center'>
                                <div className='w-12 h-12'>
                                <img src={skill.img} alt="" />
                            </div>
                            <div className='text-xl font-black' >
                                {skill.name}
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>

            <div className='flex flex-wrap w-full lg:mt-4  mt-12 lg:space-y-0 space-y-12'>
                <div className='lg:w-1/2 xl:w-1/2 w-full'>
                    <div className={`${css} w-full mx-1`}>
                        <p className='font-bold text-primary text-[1.3rem] ml-8 pb-2'> Deploiement</p>
                        <hr className='w-full bg-slate-300'/>
                        <div className='flex flex-wrap w-full mt-4'>
                        {deploiements.slice(0, 2).map((deploiement, index) => (
                                <div className='lg:w-1/2 xl:w-1/2 w-full p-3' key={index}>
                                    <div className='w-full duration-200 ease-in-out delay-75 border-2 hover:hue-rotate-15 hover:border-primary rounded-xl border-dashed p-4 flex justify-start space-x-3 items-center'>
                                        <div className='w-12 h-12'>
                                        <img src={deploiement.img} alt="no" />
                                    </div>
                                    <div className='text-xl font-black' >
                                        {deploiement.name}
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 xl:w-1/2 w-full'>
                    <div className={`${css} w-full mx-1`}>
                        <p className='font-bold text-primary text-[1.3rem] ml-8 pb-2'> Others</p>
                        <hr className='w-full bg-slate-300'/>
                        <div className='flex flex-wrap w-full mt-4'>
                        {others.slice(0, 2).map((other , index) => (
                                <div className='lg:w-1/2 xl:w-1/2 w-full p-3' key={index}>
                                    <div className='w-full duration-200 ease-in-out delay-75 border-2 hover:hue-rotate-15 hover:border-primary rounded-xl border-dashed p-4 flex justify-start space-x-3 items-center'>
                                        <div className='w-12 h-12'>
                                        <img src={other .img} alt="no" />
                                    </div>
                                    <div className='text-xl font-black' >
                                        {other .name}
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Skills