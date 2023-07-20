import React from 'react'
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi';


const About = () => {

    const handleClickAbout = () => {
        window.scroll({
            top: window.innerHeight * 2,
            left: 0,
            behavior: 'smooth',
        });
    };

    const handleClickHome = () => {
        window.scroll({
            top: -window.innerHeight,
            left: 0,
            behavior: 'smooth',
        });
    };


    return (
        <div className=' justify-center items-center flex flex-col w-full h-[961px] p-24 font-bold font-serif  '>
            <button onClick={handleClickHome} className='flex items-center text-orange-400 p-5 text-xl'> HOME <BiArrowToTop size={35} /> </button>
            <div className='flex flex-col justify-center p-10 text-4xl w-8/12 border-2 border-solid border-orange-400 text-orange-400 '>
                Hello! <br />I'am Emre.
                <br />
                <br />
                <br />
                <div className='text-lg'>I was born in İstanbul and on March 31, 1995. I used to work as a sales representative,
                    but I started getting interested in software about a year ago. With this new passion,
                    I am swiftly moving towards my future goals.
                    <br />
                    <br />
                    The boundless opportunities offered by the world of software enchant me. My past experiences
                    and customer-oriented approach also provide valuable skills in the software world. Focusing
                    on education and self-improvement, I am learning new programming languages, working on projects,
                    and becoming an expert in this field.
                    <br />
                    <br />
                    Of course, stepping into a new area comes with its challenges. However, I overcome these difficulties
                    with determination, growing stronger with every step.
                    <br />
                    <br />
                    I believe that my passion and dedication will leave a significant mark in the world of software.
                    I have full confidence that I will achieve the successes I dream of for the future.
                    <br />
                    <br />
                    With my passion, I continue to build my achievements in the software world.
                    I am eagerly progressing towards my future goals.
                </div>

            </div>
            <button onClick={handleClickAbout} className='flex items-center text-orange-400 p-5 text-xl'>CONTACT <BiArrowToBottom size={35} /> </button>
        </div>
    )
}

export default About