import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './components/Timeline';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-white text-gray-900 dark:bg-[#0f172a] dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <Timeline />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
