import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') || '4328'; // ID မပါရင် Premier League (4328) အဖြစ် သတ်မှတ်မယ်

    try {
        const url = `https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=${id}`;
        const response = await fetch(url, { cache: 'no-store' });
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}