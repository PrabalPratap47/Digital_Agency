import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'Creating compelling ad campaigns that drive engagement and conversions across digital platforms.',
            icon: assets.ads_icon
        },
        {
            title: 'Content Creation',
            description: 'Producing high-quality, engaging content that resonates with your target audience and supports your marketing objectives.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media Management',
            description: 'Managing and growing your social media presence to build brand awareness and foster community engagement.',
            icon: assets.social_icon                             
        },
        {
            title: 'Digital Marketing Strategy',
            description: 'Developing comprehensive digital marketing strategies that align with your business goals and drive measurable results.',
            icon: assets.marketing_icon
        },
    ]

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.1}}
    viewport={{once:true}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

    <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark-hidden'/>
    
    <Title title='How can we help?' description={'From strategy to execution, we craft digital solutions that move your business forward'} />

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service,index) => (
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Services
