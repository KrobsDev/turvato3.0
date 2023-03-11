import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import AdminRight from '../../components/AdminRight'
import AdminInfoCard from '../../components/AdminInfoCard'
import { FaHtml5, FaReact, FaUsers } from 'react-icons/fa'
import { BsBoxSeam, BsClipboardCheck } from 'react-icons/bs'
import {
  MdDashboardCustomize,
  MdDesignServices,
  MdOutlinePendingActions
} from 'react-icons/md'
import Table from '../../components/Table'
import { HiOutlineCog } from 'react-icons/hi'
import InventoryItem from '../../components/InventoryItem'
import { CiMobile1 } from 'react-icons/ci'
import { GrShop } from 'react-icons/gr'
import { BiMobileAlt } from 'react-icons/bi'

function Index () {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      {/* content */}
      <AdminRight>
        <p className='font-extralight text-xl pt-4 pb-2'>
          Good evening, Akwasi
        </p>

        <div className='grid grid-cols-4 items-center h-[170px] gap-4'>
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

        {/* manage orders table */}
        <p className='pt-8 pb-4 font-light'>Manage Orders</p>

        <div className='grid grid-cols-4 gap-4'>
          <div className='col-span-3'>
            <Table
              id='Order ID'
              theads={['Product', 'User', 'Invoice Number', 'Date', 'Status']}
              action={false}
            >
              <tr>
                <td>23</td>
                <td>E-commerce Template</td>
                <td>General Aladeen</td>
                <td>20220928-023</td>
                <td>2023-03-05</td>
                <td>
                  <span className='pending'>Pending</span>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>E-commerce Template</td>
                <td>General Aladeen</td>
                <td>20220928-023</td>
                <td>2023-03-05</td>
                <td>
                  <span className='completed'>Complete</span>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>E-commerce Template</td>
                <td>General Aladeen</td>
                <td>20220928-023</td>
                <td>2023-03-05</td>
                <td>
                  <span className='pending'>Pending</span>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>E-commerce Template</td>
                <td>General Aladeen</td>
                <td>20220928-023</td>
                <td>2023-03-05</td>
                <td>
                  <span className='failed'>Failed</span>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>E-commerce Template</td>
                <td>General Aladeen</td>
                <td>20220928-023</td>
                <td>2023-03-05</td>
                <td>
                  <span className='pending'>Pending</span>
                </td>
              </tr>
              <tr>
                <td>23</td>
                <td>E-commerce Template</td>
                <td>General Aladeen</td>
                <td>20220928-023</td>
                <td>2023-03-05</td>
                <td>
                  <span className='pending'>Pending</span>
                </td>
              </tr>
            </Table>
          </div>
          {/* right container */}
          <div className='h-full col-span-1 c_shadow '>
            <div className='w-full bg-light-blue py-4 px-4 flex items-center justify-between'>
              <p className='font-light text-sm'>Inventory Summary</p>
              <HiOutlineCog />
            </div>

            <div className='px-4 flex flex-col'>
              <InventoryItem
                icon={<FaHtml5 size={24} color='hsla(181, 100%, 20%, 1)' />}
                name='HTML 5 Templates'
                count={80}
              />
              <InventoryItem
                icon={<BiMobileAlt size={24} color='hsla(181, 100%, 20%, 1)' />}
                name='Mobile UI Kits'
                count={70}
              />
              <InventoryItem
                icon={<FaReact size={24} color='hsla(181, 100%, 20%, 1)' />}
                name='React Templates'
                count={97}
              />
              <InventoryItem
                icon={
                  <MdDesignServices size={24} color='hsla(181, 100%, 20%, 1)' />
                }
                name='UI Design'
                count={89}
              />
              <InventoryItem
                icon={
                  <MdDashboardCustomize
                    size={24}
                    color='hsla(181, 100%, 20%, 1)'
                  />
                }
                name='Admin Dashboard'
                count={51}
              />
              <InventoryItem
                icon={<GrShop size={24} color='hsla(181, 100%, 20%, 1)' />}
                name='E-commerce'
                count={34}
              />
            </div>
          </div>
        </div>
      </AdminRight>
    </div>
  )
}

export default Index
