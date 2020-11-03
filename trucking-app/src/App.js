import React, {useState, useEffect} from 'react';
import NavbarContainer from './components/NavbarContainer';
import LoadingScreen from './pages/LoadingScreen'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])
  return (
    <>
    {loading === false ? (
      <NavbarContainer>
      </NavbarContainer>
    ) : (
      <LoadingScreen />
    )}
    </>
  );
}

export default App;