import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
            I am a self taught Software Engineer with experience in Python and other programming languages. Fluent in English with strong communication skills and a basic understanding of Spanish and Japanese. I am a team player, with great time management and a desire to learn and grow.
            </p>

            <br />
            
            <p className='text-xl'>
            I am also a flexible candidate who can relocate and adapt to new surroundings effectively and efficiently, depending on the needs of the employer.
            </p>
        </div>
    </div>
  )
}

export default About