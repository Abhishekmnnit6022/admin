import React, { useState } from 'react';
import './App.css';

function App() {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleAddClasses = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="Appheader">
        <h1>Admin Panel</h1>
        <img src={`${process.env.PUBLIC_URL}/images/R.png`} className="image" />
        <form onSubmit={handleAddClasses}>
          <div>
            <select value={dropdown1} onChange={(sem) => setDropdown1(sem.target.value)}>
              <option value="">Select Semester</option>
              <option value="sem1">Sem 1</option>
              <option value="sem2">Sem 2</option>
              <option value="sem3">Sem 3</option>
              <option value="sem4">Sem 4</option>
              <option value="sem5">Sem 5</option>
              <option value="sem6">Sem 6</option>
              <option value="sem7">Sem 7</option>
              <option value="sem8">Sem 8</option>
            </select>
            <select value={dropdown2} onChange={(group) => setDropdown2(group.target.value)}>
              <option value="">Select Group</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
              <option value="D1">D1</option>
              <option value="D2">D2</option>
              <option value="E1">E1</option>
              <option value="E2">E2</option>
              <option value="F1">F1</option>
              <option value="F2">F2</option>
              <option value="G1">G1</option>
              <option value="G2">G2</option>
              <option value="H1">H1</option>
              <option value="H2">H2</option>
              <option value="I">I</option>
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="O">O</option>
            </select>
          </div>
          <div>
            <input type="text" value={input1} onChange={(sub) => setInput1(sub.target.value)} placeholder="SUBJECT" />
            <input type="time" value={input2} onChange={(t) => setInput2(t.target.value)} placeholder="TIME" />
            <input type="text" value={input3} onChange={(v) => setInput3(v.target.value)} placeholder="VENUE" />
          </div>
          <button type="submit">Add Classes</button>
        </form>
      </header>
    </div>
  );
}

export default App;
