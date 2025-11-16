export default function Monetization() {
  const items = [
    { title: 'Istaknuta mesta (50-100€ / mesec)', desc: 'Hoteli, restorani, kafići i suvenirnice plaćaju za prikaz u sekciji preporuka.' },
    { title: 'Provizija na rezervacije (10%)', desc: 'Naplaćujemo procenat za rezervacije tura, vodiča i smeštaja.' },
    { title: 'Premium vodiči i AR ture (1-3€)', desc: 'Detaljni audio vodiči, 3D rekonstrukcije i virtuelne ture.' },
    { title: 'Sponzorisani događaji', desc: 'Festivali i kulturni programi plaćaju za istaknuti prikaz.' },
  ]

  return (
    <section id="premium" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900">Model zarade</h3>
        <p className="text-gray-600 mt-2">Održiv rast i partnerstva</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-100 bg-white">
              <h4 className="font-semibold text-gray-900">{it.title}</h4>
              <p className="text-gray-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-xl bg-blue-50 border border-blue-100">
          <p className="text-blue-800 text-sm">
            Uz rast aplikacije, plan je da brend preuzmeš kao lice digitalne transformacije Novog Pazara – sa saradnjama, sponzorstvima i sopstvenom linijom suvenira.
          </p>
        </div>
      </div>
    </section>
  )
}
