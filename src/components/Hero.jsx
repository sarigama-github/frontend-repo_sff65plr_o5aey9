import { Sparkles, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"/>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
              <Sparkles size={14}/> Nova AR iskustva
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Otkrij Novi Pazar kroz interaktivnu stvarnost
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Usmeri kameru i otkrij istoriju, legende i preporuke u realnom vremenu. Pronađi najbolje restorane, kafiće i vodiče.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#ar" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
                Probaj AR vodiča
              </a>
              <a href="#places" className="px-5 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold">
                Preporučena mesta
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-2xl bg-white grid place-items-center text-center p-8">
                <div>
                  <div className="text-6xl">📱</div>
                  <p className="mt-3 text-gray-700 font-semibold">AR demo dolazi uskoro</p>
                  <p className="text-gray-500 text-sm">Prototip za prikaz u pregledaču</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
