import Hero from './components/Hero';
import Features from './components/Features';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Hero />
      <Features />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
