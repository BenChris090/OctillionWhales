import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Transfer from './Transfer';
import AccountSummary from './AccuntSummary';
import AccountStatement from './AccountStatement';
import ChangePassword from './ChangePassword';
import LoanApplication from './LoanApplication';
import CustomerCare from './CustomerCare';
import Mobile from './Mobile';
import Card from './Card';
import Atm from './Atm';
import ConsumerLoans from './ConsumerLoans';
import DebitCard from './DebitCard';
import FCTeNS from './FCTeNS';
import EStatements from './EStatements';
import CorporateBanking from './CorporateBanking';
import PersonalBanking from './PersonalBanking';
import About from './About';
import Contact from './Contact';
import Four0Four from './404';


function App() {
  return (
    <Router>
      <div className="App h-full">
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/open-an-account' element={<SignUp/>}/>
            <Route path='/dashboard/:userID' element={<Dashboard/>}/>
            <Route path='/transfer/:userID' element={<Transfer/>}/>
            <Route path='/account-summary/:userID' element={<AccountSummary/>}/>
            <Route path='/account-statement/:userID' element={<AccountStatement/>}/>   
            <Route path='/change-password/:userID' element={<ChangePassword/>}/>   
            <Route path='/loan-application/:userID' element={<LoanApplication/>}/>    
            <Route path='/customer-care/:userID' element={<CustomerCare/>}/>        
            <Route path='/mobile' element={<Mobile/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/atm' element={<Atm/>}/>
            <Route path='/consumer-loans' element={<ConsumerLoans/>}/>
            <Route path='/debit-card' element={<DebitCard/>}/>
            <Route path='/fctens' element={<FCTeNS/>}/>
            <Route path='/estatements' element={<EStatements/>}/>
            <Route path='/corporate-banking' element={<CorporateBanking/>}/>
            <Route path='/personal-banking' element={<PersonalBanking/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/404' element={<Four0Four/>}/>
          	<Route path="*" element={<Navigate to="/404"/>}/>
          </Routes>
        </div>        
      </div>
    </Router>
  );
}

export default App;
