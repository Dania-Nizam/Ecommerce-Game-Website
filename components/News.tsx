import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-800'>
        <h1 className='w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white'>Latest News</h1>
        <div className='mt-[2rem]'>
            <div className='grid grid-cols-1 md:grid-col-6 gap-[3rem] w-[80%] mx-auto'>
                <NewsCard image='/g2.jpg' title='News Update news'/>
                <NewsCard image='/g4.jpg' title='Check whats new'/>
                <NewsCard image='/g7.jpg' title='New Tournament'/>
            </div>
        </div>
    </div>
  )
}

export default News