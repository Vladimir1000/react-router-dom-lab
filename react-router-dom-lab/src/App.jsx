import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import MailboxForm from './Components/MailboxForm';
import MailboxList from './Components/MailboxList';
import MailboxDetails from './Components/MailboxDetails';
import './App.css';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [newMailbox, setNewMailbox] = useState({ boxholder: '', boxSize: 'Small' });

  const addBox = (box) => {
      const newBox = { ...box, _id: mailboxes.length + 1 };
      setMailboxes([...mailboxes, newBox]);
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setNewMailbox((prevMailbox) => (
        {
          ...prevMailbox, [name]: value,
        }
    ));
  };

  return (
      <div className="App">
          <header>
              <NavBar />
          </header>
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
                  <Route
                      path="/new-mailbox"
                      element={<MailboxForm addBox={addBox} newMailbox={newMailbox} handleChange={handleChange} />}
                  />
                  <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
              </Routes>
          </main>
      </div>
  );
}

export default App;
