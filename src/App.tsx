import BoxContent from './components/BoxContent/BoxContent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const AppStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  } as const;

  const SpaceStyle = {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  } as const;

  return (
    <div style={AppStyle}>
      <Header />
      <div style={SpaceStyle}>
        <Sidebar />
        <BoxContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
