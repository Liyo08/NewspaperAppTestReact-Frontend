import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import SearchSubscribers from './components/SearchSubscribers';
import DeleteSubscriber from './components/DeleteSubscriber';
import ViewAllSubscribers from './components/ViewAllSubscribers';

function App() {
  return (
    <div>
     <AddSubscribersPage/>
     <SearchSubscribers/>
     <DeleteSubscriber/>
     <ViewAllSubscribers/>
     
    </div>
  );
}

export default App;
