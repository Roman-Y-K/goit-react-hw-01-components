import React from 'react';
import Profile from './components/Profile/Profile';
import StatisticList from './components/StatisticList/StatisticList';
import Container from './components/Container/Conainer';

import FriendsList from './components/Friends-list/FriendsList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticList title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};

export default App;
