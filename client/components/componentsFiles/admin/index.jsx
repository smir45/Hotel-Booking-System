import React from 'react'
import UserDataTable from '../admin/components/cards/userTable';
import DestinationTableGrid from '../admin/components/cards/destinationTable';
import Cards from './components/cards/cards';
const Index = () => {
  return (
    <div>
        <Cards />
        <div className='my-5'>
        <DestinationTableGrid />
        </div>
        <UserDataTable />
    </div>
    
  )
}

export default Index