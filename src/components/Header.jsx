import { Leaf, Bell, CloudSun } from "lucide-react";

function Header({ onNotifyClick }) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-green-100 text-green-700 grid place-items-center">
            <Leaf className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">AgriYield AI</h1>
            <p className="text-xs text-gray-500">AI-powered crop yield insights</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
            <CloudSun className="h-4 w-4" />
            <span className="text-xs font-medium">Weather synced</span>
          </div>
          <button
            onClick={onNotifyClick}
            className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
