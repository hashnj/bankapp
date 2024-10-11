import BalanceBox from '@/components/BalanceBox';
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {

  const loggedin = {firstName : 'Nikhilesh',lastName:'Joshi',email:'joshinikhilesh46@gmail.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedin?.firstName || 'Guest'}
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