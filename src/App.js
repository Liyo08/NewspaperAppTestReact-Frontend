import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import SearchSubscribers from './components/SearchSubscribers';
import DeleteSubscriber from './components/DeleteSubscriber';

function App() {
  return (
    <div>
     <AddSubscribersPage/>
     <SearchSubscribers/>
     <DeleteSubscriber/>
     
    </div>
  );
}

export default App;
