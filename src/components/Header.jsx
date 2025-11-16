import { MapPin, Camera, Crown } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full py-6 bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-bold">VP</div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">VisitPazar</h1>
            <p className="text-xs text-gray-500 -mt-1">AR turistički vodič Novog Pazara</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#places" className="hover:text-gray-900 flex items-center gap-1"><MapPin size={16}/> Mesta</a>
          <a href="#ar" className="hover:text-gray-900 flex items-center gap-1"><Camera size={16}/> AR</a>
          <a href="#premium" className="hover:text-gray-900 flex items-center gap-1"><Crown size={16}/> Premium</a>
        </nav>
      </div>
    </header>
  )
}
