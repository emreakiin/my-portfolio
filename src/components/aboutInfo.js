import React from 'react';

const AboutInfo = ({ onClose }) => {
    return (
        <div className='w-full h-full font-mono uppercase text-md text-black flex flex-col justify-center items-center'>
            <div className=' flex flex-col justify-center items-center w-[1000px] h-full overflow-auto scrollbar'>
                <div className=' text-2xl'> Hello! </div>
                <div className=' text-2xl'> I'am Emre. </div>
                <br />
                <div>I was born in İstanbul and on March 31, 1995. I used to work as a sales representative,
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
                <div className=' w-[500px] h-[50px] flex justify-center items-end'>
                    <button onClick={onClose}>KAPAT</button>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;
