// layout/AppLayout.tsx
import { Outlet, } from "react-router-dom";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="">
            <Outlet />
        </main>
      <Footer />
    </div>
  );
}
