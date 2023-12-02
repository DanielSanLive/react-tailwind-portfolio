import React from 'react';
import Pro1 from '../Assets/portfolio imgs/pro1.jpg';
import Pro2 from '../Assets/portfolio imgs/pro2.jpg';
import Pro3 from '../Assets/portfolio imgs/pro3.jpg';

const Portfolio = () => {

    const portfolios = [
        {
        id: 1, 
        src: Pro1,
        href: 'https://github.com/DanielSanLive/Zillow-Web-Scraping-Project'
    },
    {
        id: 2, 
        src: Pro2,
        href: 'https://github.com/DanielSanLive/Personal-AI-Assistant-Project'
    },
    {
        id: 3, 
        src: Pro3,
        href: 'https://github.com/DanielSanLive/Automation-Time-Tracker'
    },
]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out my projects right here</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src, href}) => (
                    <div key={id }className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <a href={href} target='_blank' rel='noreferrer'><button className='w-1/2 px-6 py-3 m-4 duration-200'>Code</button>
                        </a>
                    </div>
                </div> 
                ))
            }
            </div>
        </div>

    </div>
  )
}

export default Portfolio;