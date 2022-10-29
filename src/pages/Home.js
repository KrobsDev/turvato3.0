import React from 'react'
import laptop from '../assets/images/laptop.png'
import phone from '../assets/images/phone.png'
import tablet from '../assets/images/tablet.png'
import PageSection from '../components/PageSection'

function Home () {
  return (
    <div>
      <div className='w-full h-screen flex items-center justify-center flex-col relative'>
        <div className='absolute text-center top-48'>
          <div className='pre_title'>ui reimagined</div>
          <h1 className='text-5xl py-4 font-medium'>Quality UI Kits</h1>
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
        <div className='left'>
          <div className='pre_title'>Tailored templates</div>
          <h2 className='sectionTitle'>
            Amazing custom UI <br /> templates at your disposal
          </h2>
        </div>
        <div className='right'></div>
      </PageSection>
    </div>
  )
}

export default Home
