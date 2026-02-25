import FootballLive from "@/components/FootballLive";

export default function LiveScoresPage() {
    return (
        <main className="min-h-screen bg-black p-10">
            <h1 className="text-3xl font-bold text-center text-white mb-10">
                Live Football Scores
            </h1>

            {/* မမတို့ အစောက ဆောက်ထားတဲ့ Component လေးပါ */}
            <FootballLive />
        </main>
    );
}