import Routes from './routes';
import './App.css';
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
  <AuthProvider>
  <Routes />;
  </AuthProvider>
  );
};


export default App;
