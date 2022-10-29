import React from 'react'
import laptop from '../assets/images/laptop.png'
import phone from '../assets/images/phone.png'
import tablet from '../assets/images/tablet.png'
import PageSection from '../components/PageSection'

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
        <div className='left'>
          <div className='pre_title'>Tailored templates</div>
          <p className='sectionTitle text-dark-bg'>
            Amazing <span className='text-orange-bg2'>custom</span> UI <br />{' '}
            templates at your disposal
          </p>
          <p className='w-2/4 font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ut
            at ante elit ipsum a. Rhoncus malesuada sollicitudin vitae
            adipiscing sed non.
          </p>
          <div className='flex gap-8 items-center'>
            <div className='border border-black'>
              <div className='flex'>
                <div className='icon'></div>
                
              </div>
            </div>
          </div>
        </div>
        <div className='right'></div>
      </PageSection>
    </div>
  )
}

export default Home
