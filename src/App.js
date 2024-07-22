import logo from './logo.svg';
import './App.css';
import AddSubscribersPage from './components/AddSubscribersPage';
import SearchSubscribers from './components/SearchSubscribers';
import DeleteSubscriber from './components/DeleteSubscriber';
import ViewAllSubscribers from './components/ViewAllSubscribers';
import SubscriberNavbar from './components/SubscriberNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<AddSubscribersPage/>}/>
<Route path='/search' element={<SearchSubscribers/>}/>
<Route path='/delete' element={<DeleteSubscriber/>}/>
<Route path='/view' element={<ViewAllSubscribers/>}/>

    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
