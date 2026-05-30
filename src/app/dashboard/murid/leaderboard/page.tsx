'use client';

import { useStore } from '@/store/useStore';
import { LeaderboardCard, type LeaderboardRanking, type LeaderboardRankingItem } from '@/components/ui/leaderboard-card';

export default function MuridLeaderboardPage() {
  const users = useStore(state => state.users);
  
  // Get only murid and sort by points
  const leaderboard = users
    .filter(u => u.role === 'murid')
    .sort((a, b) => (b.points || 0) - (a.points || 0));

  // Determine current user for highlighting (we can mock it as the first one for demo purposes if not logged in, but let's assume we don't have a logged-in user context here since it's a demo, or we can just leave it undefined)
  const currentUserId = "murid-1"; // Assuming Budi is the logged in user for demo

  // Prepare podium rankings (top 3)
  const podiumRankings: LeaderboardRanking[] = leaderboard.slice(0, 3).map((user, index) => ({
    userId: user.id,
    userName: user.name,
    rank: index + 1,
    value: user.points || 0,
  }));

  // Prepare all rankings
  const rankings: LeaderboardRankingItem[] = leaderboard.map((user, index) => ({
    userId: user.id,
    userName: user.name,
    rank: index + 1,
    byline: `Level ${Math.floor((user.points || 0) / 100) + 1}`,
    value: user.points || 0,
    displayed: true,
  }));

  // Mock dates for the "Weekly" filter
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full">
      <LeaderboardCard
        title="Pemuda Paling Berbahaya"
        fromDate={lastWeek}
        toDate={today}
        currentUserId={currentUserId}
        podiumRankings={podiumRankings}
        rankings={rankings}
        runOptions={[
          { id: "weekly", label: "Minggu Ini" },
          { id: "monthly", label: "Bulan Ini" },
          { id: "all-time", label: "Sepanjang Masa" },
        ]}
      />
    </div>
  );
}
