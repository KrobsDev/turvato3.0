import React from 'react'
import laptop from '../assets/images/laptop.png'
import phone from '../assets/images/phone.png'
import tablet from '../assets/images/tablet.png'
import chip from '../assets/images/chip.svg'
import PageSection from '../components/PageSection'
import Plaque from '../components/Plaque'
import { RiBrushLine, RiArtboard2Line, RiCodeFill } from 'react-icons/ri'
import SectionContent from '../components/SectionContent'

function Home () {
  return (
    <div>
      <div className='w-full h-screen overflow-hidden flex items-center justify-center flex-col relative'>
        <div className='absolute text-center top-48'>
          <div className='pre_title'>ui reimagined</div>
          <h1 className='text-5xl py-2 font-medium'>Quality UI Kits</h1>
        </div>
        <div className='w-[1200px] h-[480px] absolute bottom-0 z-10'>
          <img src={laptop} alt='' />
        </div>
        <div className='w-[400px] h-[480px] absolute -bottom-24 left-24 overflow-hidden'>
          <img src={tablet} alt='' />
        </div>
        <div className='w-[400px] h-[480px] absolute -bottom-24 right-24 overflow-hidden'>
          <img src={phone} alt='' />
        </div>
      </div>
      {/* section 2 --> Tailored templates */}
      <PageSection>
        <div className='left w-full'>
          <SectionContent
            preTitle='Tailored templates'
            header='Amazing custom templates at your disposal'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ut
            at ante elit ipsum a. Rhoncus malesuada sollicitudin vitae
            adipiscing sed non.'
            colored='custom'
          />

          <div className='flex gap-4 items-center'>
            <Plaque icon={<RiBrushLine size={24} />} text='Aesthetic' />
            <Plaque icon={<RiArtboard2Line size={24} />} text='Simple' />
            <Plaque icon={<RiCodeFill size={24} />} text='Flexible' />
          </div>
        </div>
        {/* <div className='right w-full relative flex items-center justify-end'> */}
        <div className='w-[900px] '>
          <img
            src={chip}
            alt=''
            className='absolute top-0 right-0 bottom-0 my-auto -z-10 object-cover w-[800px]'
          />
        </div>
        <img src={phone} alt='' className='w-64 absolute right-40' />
        {/* </div> */}
      </PageSection>
      {/* custom designs section */}
      <PageSection>
        <div className='left w-2/5 h-3/4'>
          {/* <div className='border border-black h-full w-full'></div> */}
          <img src={tablet} className='w-full h-full object-contain' alt='' />
        </div>
        <div className='right w-2/4'>
          <div className='border border-black h-full w-full'></div>
        </div>
      </PageSection>
    </div>
  )
}

export default Home
