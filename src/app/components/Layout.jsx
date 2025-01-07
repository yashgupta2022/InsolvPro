import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Layout({children}) {
  return (
    
    <div className="flex h-screen scroll-y-auto">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 max-h-[calc(100vh)] overflow-y-auto p-6 bg-gray-100">
            
          {children}
        </main>
      </div>
    </div>
  );
}
