// entrypoints/popup/App.tsx

import BoostControls from "@/components/BoostControls";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <main className="flex-1 min-h-0 flex flex-col gap-4 px-5 py-4">
          <BoostControls />
        </main>
        <Footer />
      </div>
    </>
  );
}
