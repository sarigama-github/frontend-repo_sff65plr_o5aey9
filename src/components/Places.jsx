import { useEffect, useState } from 'react'
import { Star, MapPin } from 'lucide-react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Places() {
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BACKEND}/api/places?featured=true`)
      .then(r => r.json())
      .then(data => setPlaces(data.items || []))
      .catch(() => setPlaces([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="places" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Preporučena mesta</h3>
            <p className="text-gray-600 mt-2">Partneri koji se ističu u aplikaciji</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">Postani partner →</a>
        </div>

        {loading ? (
          <p className="mt-8 text-gray-500">Učitavanje...</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.length === 0 ? (
              <EmptyState />
            ) : (
              places.map(p => <PlaceCard key={p._id} place={p} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full p-8 border border-dashed border-gray-200 rounded-xl bg-white text-center">
      <p className="text-gray-700 font-medium">Još uvek nema istaknutih partnera.</p>
      <p className="text-gray-500 text-sm">Dodaj svoje mesto preko admina – podržavamo restorane, kafiće, hotele i suvenirnice.</p>
    </div>
  )
}

function PlaceCard({ place }) {
  return (
    <div className="p-4 rounded-xl border border-gray-100 bg-white hover:shadow transition">
      <div className="aspect-video rounded-lg bg-gray-100 overflow-hidden grid place-items-center text-4xl">📍</div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-gray-900">{place.name}</h4>
          <p className="text-xs text-gray-500 capitalize">{place.category}</p>
          {place.location?.address && (
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1"><MapPin size={14}/> {place.location.address}</p>
          )}
        </div>
        <div className="flex items-center gap-1 text-amber-500">
          <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
          <span className="text-sm font-semibold">{place.rating ?? 4.6}</span>
        </div>
      </div>
    </div>
  )
}
