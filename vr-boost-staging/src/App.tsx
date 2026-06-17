import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import VirtualMeeting from "./pages/VirtualMeeting";
import StagingEditor from "./pages/StagingEditor";
import { VirtualVisits, FurnitureCatalog, Team } from "./pages/OtherPages";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ 
      background: "linear-gradient(135deg, #589fef 0%, #bbb0e7 45%, #daacc6 100%)",
      minHeight: "100vh",
      width: "100%"
    }}>
      <Header />
      <Sidebar />
      <main className="md:ml-64 pt-20 md:pt-24 px-4 md:pr-4 pb-4 min-h-screen">
  <div className="bg-white/40 backdrop-blur-sm rounded-3xl min-h-full p-4 md:p-5">
    {children}
  </div>
</main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/virtual-visits" element={<Layout><VirtualVisits /></Layout>} />
        <Route path="/furniture" element={<Layout><FurnitureCatalog /></Layout>} />
        <Route path="/meetings" element={<Layout><VirtualMeeting /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/staging" element={<StagingEditor />} />
      </Routes>
    </BrowserRouter>
  );
}