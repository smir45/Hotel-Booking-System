import React from 'react'
import UserDataTable from '../admin/components/cards/userTable';
import DestinationTableGrid from '../admin/components/cards/destinationTable';
import HotelsTable from '../admin/components/cards/hotelsTable';
import Cards from './components/cards/cards';
const Index = () => {
  return (
    <div>
        <Cards />
        <div className='my-5'>
        <DestinationTableGrid />
        </div>
        <HotelsTable />
    </div>
    
  )
}

export default Index