import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import AdminRight from '../../components/AdminRight'
import AdminInfoCard from '../../components/AdminInfoCard'
import { FaUsers } from 'react-icons/fa'
import { BsBoxSeam, BsClipboardCheck } from 'react-icons/bs'
import { MdOutlinePendingActions } from 'react-icons/md'

function Index () {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      {/* content */}
      <AdminRight>
        <p className='font-extralight text-xl pt-4 pb-2'>
          Good evening, Akwasi
        </p>

        <div className='flex flex-wrap md:flex-nowrap items-center h-[170px] ju gap-4'>
          <AdminInfoCard
            title='Users'
            number='250'
            icon={<FaUsers size={24} />}
          />
          <AdminInfoCard
            title='Products'
            number='89'
            icon={<BsBoxSeam size={24} />}
          />
          <AdminInfoCard
            title='Orders Completed'
            number={<p className='text-green-500'>12</p>}
            icon={<BsClipboardCheck size={24} />}
            status={1}
          />
          <AdminInfoCard
            title='Orders Pending'
            number={<p className='text-yellow-500'>48</p>}
            icon={<MdOutlinePendingActions size={24} />}
            status={2}
          />
        </div>
      </AdminRight>
    </div>
  )
}

export default Index
