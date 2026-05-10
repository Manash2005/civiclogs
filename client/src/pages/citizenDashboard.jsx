import Sidebar from "../components/Sidebar";
import GoogleMapComponent from "../components/GoogleMaps";

export default function CitizenDashboard() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
        <div className="hidden md:block">
            <Sidebar />
        </div>
        <div className="flex-1 w-full h-full overflow-hidden">
            <GoogleMapComponent />
        </div>
    </div>
  );
}