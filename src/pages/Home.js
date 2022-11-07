import React from 'react'
import laptop from '../assets/images/laptop.png'
import phone from '../assets/images/phone.png'
import tablet from '../assets/images/tablet.png'
import platforms from '../assets/images/platforms.svg'
import chip from '../assets/images/chip.svg'
import chip_clear from '../assets/images/chip_clear.svg'
import nextGen from '../assets/images/nextGen.svg'
import PageSection from '../components/PageSection'
import Plaque from '../components/Plaque'
import { RiBrushLine, RiArtboard2Line, RiCodeFill } from 'react-icons/ri'
import SectionContent from '../components/SectionContent'
import Footer from '../components/Footer'

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
            header='Amazing custom UI templates at your disposal'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ut
            at ante elit ipsum a. Rhoncus malesuada sollicitudin vitae
            adipiscing sed non.'
            colored='custom'
            // cButton="What's happening?"
          />

          <div className='flex gap-4 items-center'>
            <Plaque
              icon={<RiBrushLine size={24} color={'#E96D13'} />}
              text='Aesthetic'
            />
            <Plaque
              icon={<RiArtboard2Line size={24} color={'#E96D13'} />}
              text='Simple'
            />
            <Plaque
              icon={<RiCodeFill size={24} color={'#E96D13'} />}
              text='Flexible'
            />
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
      <div className='h-max bg-dark-blue text-white relative'>
        <PageSection>
          <div className='left w-2/5 h-3/4'>
            <div className='h-full w-full'>
              <img
                src={tablet}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
          </div>
          <div className='right w-2/4'>
            <SectionContent
              preTitle='Custom Designs'
              header='Contemporary Bespoke Designs'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ut
            at ante elit ipsum a. Rhoncus malesuada sollicitudin vitae
            adipiscing sed non.'
              colored='Bespoke'
              cButton="What's happening?"
              twhite={true}
            />
          </div>
          <img
            src={chip_clear}
            className='absolute -right-44 w-[700px]'
            alt=''
          />
        </PageSection>
        <PageSection>
          <div className='left w-2/4'>
            <SectionContent
              preTitle='cross platform'
              header='We have templates for all platforms'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ut
            at ante elit ipsum a. Rhoncus malesuada sollicitudin vitae
            adipiscing sed non.'
              colored='all platforms'
              cButton="What's happening?"
              twhite={true}
            />
          </div>
          <div className='right w-2/4'>
            <div className='h-full w-full'>
              <img
                src={platforms}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
          </div>
          <img
            src={chip_clear}
            className='absolute -left-40 top-0 w-[500px] rotate-[25deg]'
            alt=''
          />
        </PageSection>
      </div>
      {/* big banner */}
      <div className='relative'>
        <PageSection flex={false}>
          <p className='text-8xl text-center'>
            We have templates for all platforms
          </p>
          {/* quotes */}
          {/* <img src={quote_left} className='absolute top-0 left-5' alt='' />
          <img src={quote_right} className='absolute bottom-0 right-5' alt='' /> */}
        </PageSection>
      </div>
      <div className='bg-dark-blue text-white'>
        <PageSection>
          <div className='left w-2/4'>
            <SectionContent
              preTitle='future of interface design'
              header='The next generation of user interface designs'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum ut
            at ante elit ipsum a. Rhoncus malesuada sollicitudin vitae
            adipiscing sed non.'
              colored='next generation'
              // cButton="What's happening?"
              twhite={true}
            />
          </div>
          <div className='right w-2/4'>
            <div className='h-full w-full'>
              <img
                src={nextGen}
                className='w-full h-full object-contain'
                alt=''
              />
            </div>
          </div>
        </PageSection>
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home
