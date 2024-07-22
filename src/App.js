import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import SearchSubscribers from './components/SearchSubscribers';
import DeleteSubscriber from './components/DeleteSubscriber';
import ViewAllSubscribers from './components/ViewAllSubscribers';
import SubscriberNavbar from './components/SubscriberNavbar';

function App() {
  return (
    <div>
     <AddSubscribersPage/>
     <SearchSubscribers/>
     <DeleteSubscriber/>
     <ViewAllSubscribers/>
     <SubscriberNavbar/>
     
    </div>
  );
}

export default App;
