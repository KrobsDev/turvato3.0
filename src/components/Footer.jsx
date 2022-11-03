import React from 'react'
import {
  RiArrowRightLine,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill
} from 'react-icons/ri'
import FooterLink from './FooterLink'
import PageSection from './PageSection'
import girl from '../assets/images/footerGirl.svg'

function Footer () {
  return (
    <div className='mt-16'>
      <PageSection height={'h-[40em]'}>
        <div className='left h-full'>
          <div className='flex flex-col'>
            <div className='top'>
              <p className='text-4xl text-dark-blue'>Turvato</p>
              <p className='py-4 opacity-60'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </p>
              <div className='socials flex items-center gap-3'>
                <RiLinkedinFill size={30} color={''} />
                <RiInstagramFill size={30} color={''} />
                <RiTwitterFill size={30} color={''} />
                <RiFacebookFill size={30} color={''} />
              </div>
            </div>
            {/* links */}
            <div className='links pt-20 flex gap-24'>
              <FooterLink
                heading={'Resources'}
                links={[
                  'Why Turvato?',
                  'Customer Stories',
                  'Blog',
                  'Guides',
                  'Webinars',
                  'Workplace Management'
                ]}
              />
              <div className='mr-10'>
                <FooterLink
                  heading={'Company'}
                  links={[
                    'About Us',
                    'Careers',
                    'Leadership',
                    'Partners',
                    'Press',
                    'Contact Us'
                  ]}
                />
              </div>
              <FooterLink
                heading={'Social'}
                links={['Instagram', 'Facebook', 'Twitter', 'LinkedIn']}
              />
            </div>
          </div>
        </div>
        <div className='right h-4/5'>
          {/* newsletter */}
          <p className='text-dark-blue text-xl ss'>
            Subscribe to our newsletter
          </p>
          <div className='relative outline-none w-96 shadow-xl mt-5 rounded-full'>
            <input
              type='text'
              placeholder='Enter your email'
              className='newsletter pl-14 py-4 w-full rounded-full'
            />
            <div className='w-[56px] h-[56px] bg-orange-bg absolute rounded-full  bottom-0 right-0 z-50 flex items-center justify-center'>
              <RiArrowRightLine color='white' size={24} />
            </div>

            {/* email icon */}
          </div>

          <img src={girl} className='mt-20' alt='' />
        </div>
      </PageSection>
      <div className='border-t border-gray-300 h-16 flex items-center justify-center'>
        <div className='w-4/5 mx-auto flex gap-6 text-sm opacity-60'>
          <span> 2022 Turvato Inc</span>
          <span className='opacity-40'>|</span>
          <span>Support</span>
          <span className='opacity-40'>|</span>
          <span>Privacy Policy</span>
          <span className='opacity-40'>|</span>
          <span>Terms of Use</span>
          <span className='opacity-40'>|</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
