import BalanceBox from '@/components/BalanceBox';
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {

  const loggedin = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedin?.name || 'Guest'}
          subtext='Access and manage your Account and Transactions efficiently'
          />
          <BalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.5}
          />
          </header>
          RECENT TRANSACTIONS

          
      </div>
      <RightSidebar 
          user={loggedin} 
          transactions={[]}
          banks={[{currentBalance:1234.5},{currentBalance:234.6}]} />
    </section>
  )
}

export default Home