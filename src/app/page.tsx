"use client"
import Image from 'next/image';
import profilepic from '../../public/IMG_20231110_180107.jpg'
import prRealstate from '../../public/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg'
import express from '../../public/skills/icons8-express-js-50.png'
import nextjs from '../../public/skills/icons8-nextjs-48 (1).png'
import tailwind from '../../public/skills/icons8-tailwind-css-48.png'
import html from '../../public/skills/pngegg (1).png'
import css from '../../public/skills/pngegg (2).png'
import js from '../../public/skills/pngegg (3).png'
import ts from '../../public/skills/pngegg (4).png'
import react from '../../public/skills/pngegg (5).png'
import node from '../../public/skills/pngegg (6).png'
import mongo from '../../public/skills/pngegg (7).png'
import redux from '../../public/skills/pngegg (8).png'
import boot from '../../public/skills/pngegg (9).png'
import cpp from '../../public/skills/pngegg (10).png'
import java from '../../public/skills/pngegg (11).png'
import vite from '../../public/skills/icons8-vite-logo-48.png'
import inote from '../../public/Screenshot 2024-03-10 210612.png'
import p3 from '../../public/Screenshot 2024-03-10 212913.png'
import news from '../../public/Screenshot 2024-03-10 220922.png'
import insta from '../../public/icons8-instagram-50 (1).png'
import github from '../../public/icons8-github-30.png'
import tweet from '../../public/icons8-twitterx-50.png'
import linked from '../../public/icons8-linkedin-50.png'

import Link from 'next/link';


export default function Home() {
  


  return (



    <div className='select-none py-5'>

      {/*  logo */}

      {/* <Link href={'/'} className='z-50 text-red-600 logo px-10 text-3xl fixed top-10'>KANHA</Link> */}
      <div className='z-50 flex flex-col items-start  text-red-600 logo px-10 text-xl fixed bottom-10'>
        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }) }} className='hover:text-white'>HOME</button>
        <button onClick={() => { window.scrollTo({ top: 700, behavior: 'auto' }) }} className='hover:text-white'>ABOUT ME</button>
        <button onClick={() => { window.scrollTo({ top: 1400, behavior: 'auto' }) }} className='hover:text-white'>SKILLS</button>
        <button onClick={() => { window.scrollTo({ top: 2100, behavior: 'auto' }) }} className='hover:text-white'>PROJECTS</button>
        <Link href={'/resume'} className='hover:text-white'>RESUME</Link>

      </div>

      <div className='z-50 fixed bottom-10 right-10 flex items-center justify-center'>
        <div className='flex flex-col gap-5'>
          <div className='relative connL rounded-3xl'>
            <Link target="_blank" className='connL ' href={'https://www.instagram.com/all_this._its_not_me/'}><Image src={insta} alt='insta' width={50} /></Link>
            <div className='connN opacity-0 -z-10 text-white absolute top-[14px] uppercase -left-12 normal bg-red-600 px-2 rounded-3xl'>
              instagram
            </div>
            </div>
          <div className='relative connL rounded-3xl'>
            <Link target="_blank" href={'https://github.com/DuragaPrasadSwain'}><Image src={github} alt='git' width={50} /></Link>
            <div className='connN opacity-0 -z-10 text-white absolute top-[14px] uppercase -left-3 normal bg-red-600 px-2 rounded-3xl'>
              github
            </div>
            </div>
          <div className='relative connL rounded-3xl'>
            <Link target="_blank" href={'https://twitter.com/durgaswain931'}> <Image src={tweet} alt='tweet' width={50} /> </Link>
            <div className='connN opacity-0 -z-10 text-white absolute top-[14px] uppercase -left-5 normal bg-red-600 px-2 rounded-3xl'>
              twitter
            </div>
            </div>
          <div className='relative connL rounded-3xl'>
            <Link target="_blank" href={'https://www.linkedin.com/in/durga-prasad-swain-a9578b209/'}> <Image src={linked} alt='link' width={50} /> </Link>
            <div className='connN opacity-0 -z-10 text-white absolute top-[14px] uppercase -left-7 normal bg-red-600 px-2 rounded-3xl'>
              linkedin
            </div>
            </div>




        </div>
      </div>

      {/* WELCOME */}

      <div className='pointer-events-none bg-black overflow-hidden h-screen'>
        <div className=' text-neutral-900 logo text-9xl absolute right-0 top-0 '>
          WELCOME
        </div>
        {/* <div className='heading'> */}
        <div className=' headingentry1 text-8xl normal_900 fixed pl-48 top-[37%]'>
          <span className='heading text-neutral-100'>Hello This Is </span> <span className='heading text-red-600'>DURGA</span>
        </div>

        <div className='headingentry2 text-red-600 text-5xl normal_900 fixed pl-52 top-[50%]'>
          <span className='heading'>
            Web Developer
          </span>
        </div>
        {/* </div> */}
      </div>


      {/* ABOUT ME */}

      <div className='pointer-events-none h-screen bg-black relative flex items-center justify-center'>

        <div className='z-10 text-neutral-900 logo text-9xl absolute left-10 top-16  '>
          ABOUT <br /> ME
        </div>

        <div className='z-10 scrollimg rounded-full overflow-hidden size-96' >
          <Image src={profilepic} height={1000} width={1000} alt='profilepic' />
        </div>

        <div className=' normal text-justify scrolltext text-white size-96 pt-20 absolute'>
<p>
          Hi, I am Durga Prasad Swain I completed my Bachelor of Technology from Gandhi Institute of Engineering and Technology in the domain of Computer Science and Engineering. I have a deep interest in web development and I have made many projects. My strength and weakness are the same that is never give up, yes never give up can be a weakness sometime we have to give up on the roads which is stoping us from getting our main goal. And I play outdoor games to make myself healthy and stress-free.
          </p>

        </div>

      </div>

      {/* SKILLS */}

      <div className='select-none h-screen px-20 bg-black'>

        <div className='pointer-events-none -z-10 text-neutral-900 logo text-9xl text-center'>
          SKILLS
        </div>

        <div className='flex justify-center items-center flex-wrap gap-5 rounded-3xl px-20 py-10'>

          <div className='relative'>

            <div className=' absolute  top-1 b left-1 w-full h-full text-white normal_900 text-9xl'>
              <div className='text-center'>MERN</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='mongo' width={100} src={mongo} />
              <Image className='rounded-3xl' alt='express' width={100} src={express} />
              <Image className='rounded-3xl' alt='react' width={100} src={react} />
              <Image className='rounded-3xl' alt='node' width={100} src={node} />
            </div>

          </div>


          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-5xl'>
              <div className='text-center uppercase'>html</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='htnl' width={100} src={html} />
            </div>

          </div>



          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-6xl'>
              <div className='text-center uppercase'>css</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='css' width={100} src={css} />
            </div>

          </div>



          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-4xl'>
              <div className='text-center uppercase'>java script</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='js' width={100} src={js} />
            </div>

          </div>







          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-4xl'>
              <div className='text-center uppercase'>type script</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='ts' width={140} src={ts} />
            </div>

          </div>






          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-5xl'>
              <div className='text-center uppercase'>Next js.</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='nextjs' width={100} src={nextjs} />
            </div>

          </div>




          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-5xl'>
              <div className='text-center uppercase'>vite</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='vite' width={100} src={vite} />
            </div>

          </div>





          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-4xl'>
              <div className='text-center uppercase'>redux</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='vite' width={100} src={redux} />
            </div>

          </div>




          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-4xl'>
              <div className='text-center uppercase'>boot strap</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='vite' width={100} src={boot} />
            </div>

          </div>







          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-2xl'>
              <div className='text-center uppercase'>tailwind css</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='vite' width={100} src={tailwind} />
            </div>

          </div>






          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-7xl'>
              <div className='text-center uppercase'>java</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='vite' width={160} src={java} />
            </div>

          </div>






          <div className='relative flex items-center justify-center'>

            <div className=' absolute text-white normal_900 text-6xl'>
              <div className='text-center uppercase'>c++</div>
            </div>

            <div className='transition ease-in-out duration-500 relative hover:opacity-0 rounded-3xl shadow-2xl shadow-neutral-900 border-neutral-800 border-2 flex gap-5 bg-neutral-900 p-5' >

              <Image className='rounded-3xl' alt='vite' width={100} src={cpp} />
            </div>

          </div>







        </div>





      </div>

      {/* PROJECTS */}

      <div className='relative'>

        <div className='pointer-events-none -z-10 -top-20 bottom-0 ml-[87rem] origin-bottom-left rotate-90 sticky text-neutral-800 logo text-9xl'>
        {/* <div className='pointer-events-none -z-10 top-60 rotate-90 -right-64 absolute text-neutral-800 logo text-9xl'> */}
          PROJECTS
        </div>

        <div className=' h-[170vh] px-52'>

          <div className='z-30 ml-72 hover:scale-105  rounded-3xl bg-black w-[34rem] sticky top-20 bottom-0 hover:z-50 transition ease-in-out duration-500 lampsh'>
            <div className=' h-80 w-[34rem]  overflow-hidden rounded-3xl lamp lampsh'  >
              <Image src={prRealstate} width={600} alt='ralstate' className='lampsh lampimg' />

            </div>
            <div className='uppercase px-5 gap-5 absolute opacity-0 flex items-center -translate-y-11 lamptext text-white'>
              <span className='normal text-5xl'>dream home</span>
              <Link href={"https://reliable-tapioca-83ab56.netlify.app"} className='bg-black hover:scale-105 shadow-sm hover:shadow-md transition duration-500 ease-in-out  hover:shadow-red-600 shadow-red-600 border-red-500 border rounded-3xl text-red-600 uppercase normal font-extrabold text-lg py-2 px-5 h-10'>check</Link>
            </div>

          </div>


          <div className='z-30 rounded-3xl hover:scale-105 bg-black absolute  top-56 hover:z-50 transition ease-in-out duration-500 lampsh'>
            <div className=' h-60 w-[28rem] overflow-hidden rounded-3xl lamp lampsh'  >
              <Image src={inote} width={700} alt='ralstate' className='lampsh  lampimg' />

            </div>
            <div className='uppercase px-5 gap-5 absolute opacity-0 flex items-center -translate-y-11 lamptext text-white'>
              <span className='normal text-5xl'>inotebook</span>
              <Link href={"https://inotebook-dps.netlify.app/"} className='bg-black hover:scale-105 shadow-sm hover:shadow-md transition duration-500 ease-in-out  hover:shadow-red-600 shadow-red-600 border-red-500 border rounded-3xl text-red-500 uppercase normal font-extrabold text-lg py-2 px-5 h-10'>check</Link>
            </div>

          </div>




          <div className='z-30 right-36 rounded-3xl hover:scale-105 bg-black absolute top-[34rem] hover:z-50 transition ease-in-out duration-500 lampsh'>
            <div className=' h-64 w-[30rem] overflow-hidden rounded-3xl lamp lampsh'>
              <Image src={p3} width={500} alt='ralstate' className='lampsh  lampimg' />

            </div>
            <div className='uppercase px-5 gap-5 absolute opacity-0 flex items-center -translate-y-11 lamptext text-white'>
              <span className='normal text-5xl'>blog</span>
              <Link href={""} className='bg-black hover:scale-105 shadow-sm hover:shadow-md transition duration-500 ease-in-out  hover:shadow-red-600 shadow-red-600 border-red-500 border rounded-3xl text-red-500 uppercase normal font-extrabold text-lg py-2 px-5 h-10'>check</Link>
            </div>

          </div>


          <div className='z-30 left-56 rounded-3xl hover:scale-105 bg-black absolute top-[44rem] hover:z-50 transition ease-in-out duration-500 lampsh'>
            <div className=' h-60 w-[30rem] overflow-hidden rounded-3xl lamp lampsh'>
              <Image src={news} width={500} alt='ralstate' className='lampsh  lampimg' />

            </div>
            <div className='uppercase px-5 gap-5 absolute opacity-0 flex items-center -translate-y-11 lamptext text-white'>
              <span className='normal text-5xl'>Daily news</span>
              <Link href={"https://github.com/DuragaPrasadSwain/newsapp"} className='bg-black hover:scale-105 shadow-sm hover:shadow-md transition duration-500 ease-in-out  hover:shadow-red-600 shadow-red-600 border-red-500 border rounded-3xl text-red-500 uppercase normal font-extrabold text-lg py-2 px-5 h-10'>check</Link>
            </div>

          </div>

        </div>


      </div>


    </div>


  );
}
