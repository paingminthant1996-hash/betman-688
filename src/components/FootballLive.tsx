"use client";
import { useEffect, useState } from 'react';

export default function FootballPage() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('4328'); // Default ကို Premier League ထားမယ်

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                // Category အလိုက် API ဆွဲမယ်
                const res = await fetch(`/api/football?id=${category}`);
                const json = await res.json();
                if (json.events) setEvents(json.events);
                else setEvents([]);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [category]);

    return (
        <div className="p-8 bg-black min-h-screen text-white">
            <h1 className="text-3xl font-bold text-blue-400 mb-6 border-b border-gray-800 pb-4">
                Sports Data Center
            </h1>

            {/* ၁။ ပြိုင်ပွဲအမျိုးအစား ရွေးချယ်ရန် ခလုတ်များ */}
            <div className="flex flex-wrap gap-4 mb-10">
                <button
                    onClick={() => setCategory('4328')}
                    className={`px-6 py-2 rounded-full font-bold transition-all shadow-lg ${category === '4328' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                    🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League
                </button>
                <button
                    onClick={() => setCategory('4480')}
                    className={`px-6 py-2 rounded-full font-bold transition-all shadow-lg ${category === '4480' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                    ⭐ Champions League
                </button>
                <button
                    onClick={() => setCategory('4335')}
                    className={`px-6 py-2 rounded-full font-bold transition-all shadow-lg ${category === '4335' ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                    🇪🇸 La Liga
                </button>
            </div>

            {/* ၂။ ဒေတာပြသသည့်အပိုင်း */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                    <p className="text-gray-500 animate-pulse">Fetching Matches...</p>
                </div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.map((event: any) => (
                        <div key={event.idEvent} className="border border-gray-800 p-6 rounded-3xl bg-gray-900/50 shadow-2xl hover:border-blue-500/50 transition-all group backdrop-blur-sm">

                            {/* ပွဲချိန် (MST) */}
                            <div className="text-blue-500 text-[11px] font-bold mb-6 uppercase tracking-widest flex items-center bg-blue-500/10 w-fit px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse mr-2"></span>
                                {new Date(event.strTimestamp).toLocaleString('en-GB', {
                                    timeZone: 'Asia/Yangon',
                                    hour12: true,
                                    day: 'numeric',
                                    month: 'short',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })} (MST)
                            </div>

                            {/* အသင်း Logo နှင့် ပွဲစဉ်အမည် */}
                            <div className="mb-6">
                                <img
                                    src={`${event.strThumb}/preview`}
                                    alt="Match Poster"
                                    className="w-full h-32 object-cover rounded-2xl mb-4 border border-gray-800 group-hover:scale-[1.02] transition-transform"
                                    onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/300x150?text=Match+Day")}
                                />
                                <h2 className="text-lg font-bold text-white text-center group-hover:text-blue-400 transition-colors">
                                    {event.strEvent}
                                </h2>
                            </div>

                            {/* ကွင်းအမည် */}
                            <div className="flex items-center text-xs text-gray-400 bg-black/30 p-3 rounded-xl mb-4">
                                <span className="mr-2">📍</span>
                                <span className="truncate">{event.strVenue || "To Be Announced"}</span>
                            </div>

                            <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] text-gray-500">
                                <span>ID: #{event.idEvent}</span>
                                <span className="text-blue-500 font-bold cursor-pointer">DETAILS →</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && events.length === 0 && (
                <div className="text-center py-20 text-gray-500 border-2 border-dashed border-gray-800 rounded-3xl">
                    <p className="text-xl italic">No upcoming matches found for this league.</p>
                </div>
            )}
        </div>
    );
}