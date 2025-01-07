import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Home from '../components/Home';

export default function Dashboard() {
  return (
    
    <div className="flex h-screen scroll-y-auto">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 h-full p-6 bg-gray-100">
          <Home />
        </main>
      </div>
    </div>
  );
}
