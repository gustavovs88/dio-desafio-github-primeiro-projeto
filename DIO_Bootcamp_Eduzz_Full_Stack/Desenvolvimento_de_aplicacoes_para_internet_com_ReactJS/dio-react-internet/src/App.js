import './App.css';
import styled from 'styled-components'
import Form from './components/Form';
import FileInput from './components/FileInput';
import ReduxCounter from './components/ReduxCounter';

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (  
    <DivStyle>
      <h1 className='text-header'>Hello World</h1>
      <Button>MyButton</Button>
      <Form/>
      <FileInput/>
      <ReduxCounter/>
    </DivStyle>
  );
}

export default App;
