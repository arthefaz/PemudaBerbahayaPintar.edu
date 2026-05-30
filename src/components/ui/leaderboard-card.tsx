"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Trophy, Medal, Award } from "lucide-react"

// --- Inline Subcomponents for Podium and Rankings ---

export interface LeaderboardRanking {
  userId: string
  userName: string
  rank: number
  value: number
}

export interface LeaderboardRankingItem {
  userId: string
  rank: number
  userName: string
  byline?: string
  value: number
  displayed?: boolean
}

export const LeaderboardPodium = ({ rankings, className }: { rankings: LeaderboardRanking[], className?: string }) => {
  // Sort to ensure rank 1 is in middle, rank 2 on left, rank 3 on right
  const rank1 = rankings.find(r => r.rank === 1)
  const rank2 = rankings.find(r => r.rank === 2)
  const rank3 = rankings.find(r => r.rank === 3)

  return (
    <div className={cn("flex items-end justify-center gap-2 sm:gap-4 h-64 mt-8", className)}>
      {/* Rank 2 */}
      {rank2 && (
        <div className="flex flex-col items-center justify-end h-full w-1/3">
          <div className="text-center mb-2">
            <p className="font-bold text-sm truncate w-full px-2">{rank2.userName}</p>
            <p className="text-xs text-muted-foreground">{rank2.value.toLocaleString()} pts</p>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-t-lg h-3/5 flex flex-col items-center justify-start pt-4 border-t-4 border-slate-400">
            <Medal className="w-8 h-8 text-slate-400 mb-1" />
            <span className="font-display font-bold text-2xl text-slate-500">2</span>
          </div>
        </div>
      )}

      {/* Rank 1 */}
      {rank1 && (
        <div className="flex flex-col items-center justify-end h-full w-1/3 z-10">
          <div className="text-center mb-2">
            <p className="font-bold text-sm sm:text-base truncate w-full px-2">{rank1.userName}</p>
            <p className="text-xs text-primary font-bold">{rank1.value.toLocaleString()} pts</p>
          </div>
          <div className="w-full bg-accent/20 dark:bg-accent/10 rounded-t-lg h-4/5 flex flex-col items-center justify-start pt-4 border-t-4 border-accent shadow-lg">
            <Trophy className="w-10 h-10 text-accent mb-1" />
            <span className="font-display font-bold text-3xl text-accent">1</span>
          </div>
        </div>
      )}

      {/* Rank 3 */}
      {rank3 && (
        <div className="flex flex-col items-center justify-end h-full w-1/3">
          <div className="text-center mb-2">
            <p className="font-bold text-sm truncate w-full px-2">{rank3.userName}</p>
            <p className="text-xs text-muted-foreground">{rank3.value.toLocaleString()} pts</p>
          </div>
          <div className="w-full bg-amber-700/10 dark:bg-amber-900/20 rounded-t-lg h-2/5 flex flex-col items-center justify-start pt-4 border-t-4 border-amber-600">
            <Award className="w-8 h-8 text-amber-600 mb-1" />
            <span className="font-display font-bold text-2xl text-amber-600">3</span>
          </div>
        </div>
      )}
    </div>
  )
}

export const LeaderboardRankings = ({ rankings, currentUserId, showPagination, defaultPageSize }: { rankings: LeaderboardRankingItem[], currentUserId?: string, showPagination?: boolean, defaultPageSize?: number }) => {
  return (
    <div className="flex flex-col gap-2 mt-8">
      {rankings.map((item) => {
        const isMe = item.userId === currentUserId;
        return (
          <div key={item.userId} className={cn("flex items-center justify-between p-4 rounded-xl border transition-colors", isMe ? "bg-primary/5 border-primary/20 shadow-sm" : "bg-card hover:bg-muted/50 border-border")}>
            <div className="flex items-center gap-4">
              <div className="w-8 text-center font-bold text-muted-foreground">
                #{item.rank}
              </div>
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-white", isMe ? "bg-primary" : "bg-muted-foreground")}>
                {item.userName.charAt(0)}
              </div>
              <div>
                <p className={cn("font-bold", isMe && "text-primary")}>{item.userName} {isMe && "(Anda)"}</p>
                <p className="text-xs text-muted-foreground">{item.byline}</p>
              </div>
            </div>
            <div className="font-bold font-display tracking-wider text-lg">
              {item.value.toLocaleString()}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// --- Main Leaderboard Card Component ---

export interface LeaderboardRunOption {
  id: string
  label: string
}

export interface LeaderboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  fromDate: string | Date
  toDate: string | Date
  podiumRankings: LeaderboardRanking[]
  rankings: LeaderboardRankingItem[]
  currentUserId?: string
  runOptions?: LeaderboardRunOption[]
  selectedRunId?: string
  onRunChange?: (runId: string) => void
}

function formatRangeDate(date: string | Date) {
  const parsed = date instanceof Date ? date : new Date(date)
  if (Number.isNaN(parsed.getTime())) return ""

  return parsed.toLocaleDateString('id-ID', {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const LeaderboardCard = React.forwardRef<HTMLDivElement, LeaderboardCardProps>(
  (
    {
      className,
      title = "Leaderboard",
      fromDate,
      toDate,
      podiumRankings,
      rankings,
      currentUserId,
      runOptions,
      selectedRunId,
      onRunChange,
      ...props
    },
    ref
  ) => {
    const fromLabel = formatRangeDate(fromDate)
    const toLabel = formatRangeDate(toDate)
    const resolvedRunId = selectedRunId ?? runOptions?.[0]?.id ?? ""
    const hasOnRunChange = Boolean(onRunChange)
    const [localRunId, setLocalRunId] = React.useState(resolvedRunId)

    React.useEffect(() => {
      if (hasOnRunChange) return
      setLocalRunId(resolvedRunId)
    }, [hasOnRunChange, resolvedRunId])

    const activeRunId = hasOnRunChange ? resolvedRunId : localRunId

    return (
      <div
        ref={ref}
        className={cn("bg-card rounded-2xl border p-6 md:p-8 shadow-sm", className)}
        {...props}
      >
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-primary">{title}</h3>
            <p className="text-muted-foreground text-sm font-medium">
              {fromLabel} - {toLabel}
            </p>
          </div>

          {runOptions && runOptions.length > 0 ? (
            <select
              aria-label="Select leaderboard run"
              value={activeRunId}
              onChange={(e) => {
                if (onRunChange) {
                  onRunChange(e.target.value)
                  return
                }
                setLocalRunId(e.target.value)
              }}
              className="bg-muted text-foreground rounded-lg border-none px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-primary outline-none cursor-pointer"
            >
              {runOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
        </div>

        <LeaderboardPodium rankings={podiumRankings} className="mb-6" />

        <LeaderboardRankings
          rankings={rankings}
          currentUserId={currentUserId}
          showPagination
          defaultPageSize={10}
        />
      </div>
    )
  }
)

LeaderboardCard.displayName = "LeaderboardCard"

export { LeaderboardCard }
