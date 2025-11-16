import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Places from './components/Places'
import Monetization from './components/Monetization'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Places />
      <Monetization />

      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} VisitPazar – prototip</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/test" className="text-gray-600 hover:text-gray-900">Test konekcije</a>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Postani partner</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
