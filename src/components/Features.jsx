import { MapPin, Building2, Mic2, Calendar, MessageCircle, WifiOff, Camera } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: MapPin, title: 'Mapa i AR vodič', desc: 'Skeniraj znamenitosti i vidi istorijske informacije i stare fotografije.' },
    { icon: Building2, title: 'Preporučena mesta', desc: 'Restorani, hoteli, zanatlije, muzeji – sve na jednom mestu.' },
    { icon: Mic2, title: 'Audio vodiči', desc: 'Mini priče i legende – poslušaj lokalne legende o Pazaru.' },
    { icon: MessageCircle, title: 'Chat sa vodičima', desc: 'Rezerviši ture direktno kroz aplikaciju i postavi pitanja.' },
    { icon: Calendar, title: 'Događaji i kalendar', desc: 'Prati kulturna dešavanja i festivalske programe.' },
    { icon: WifiOff, title: 'Offline mod', desc: 'Ključne informacije dostupne i bez interneta.' },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900">Funkcionalnosti</h3>
        <p className="text-gray-600 mt-2">Osnovni set funkcija u prototipu</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-gray-100 hover:shadow transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
                <f.icon size={20} />
              </div>
              <h4 className="mt-3 font-semibold text-gray-900">{f.title}</h4>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
