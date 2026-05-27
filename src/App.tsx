import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Closing from './components/Closing';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Hero />
      <FeaturedWork />
      <Closing />
    </div>
  );
}
