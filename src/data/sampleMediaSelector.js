import { sampleMedia as moviesMedia } from "./sampleMediaDataMovies"
import { sampleMedia as gamesBooksMedia } from "./sampleMediaDataGamesBooks"

export const allMedia = [...moviesMedia, ...gamesBooksMedia]

// Logs oldest -> newest. Same-day logs keep their written order.
export function getSortedLogs(media) {
    return [...media.logs].sort((a, b) => a.date.localeCompare(b.date))
}

// How each ending ranks. A later, lower outcome (e.g. dropping a replay)
// doesn't replace a higher one already reached.
const OUTCOME_RANK = { dropped: 1, finished: 2, completed: 3 }

// The one log that decides the current status:
// - newest status is in_progress -> that log (first time or replay, you're on it now)
// - otherwise -> the newest log holding the best outcome ever reached
// null if no log has set a status.
function getStatusLog(media) {
    const statusLogs = getSortedLogs(media).filter(log => log.status)
    const newest = statusLogs.at(-1)
    if (!newest || newest.status === "in_progress") return newest ?? null

    const best = Math.max(...statusLogs.map(log => OUTCOME_RANK[log.status] ?? 0))
    return statusLogs.findLast(log => OUTCOME_RANK[log.status] === best) ?? newest
}

export function getCurrentStatus(media) {
    return getStatusLog(media)?.status ?? null
}

// Date the current status was set.
export function getStatusSince(media) {
    return getStatusLog(media)?.date ?? null
}

export function getLastLoggedOn(media) {
    return getSortedLogs(media).at(-1)?.date ?? null
}

// Current rating = the newest log that (re)rated it. null if never rated.
export function getRating(media) {
    return getSortedLogs(media).findLast(log => log.rating != null)?.rating ?? null
}

// Newest log that has written thoughts, or null.
export function getLatestTextLog(media) {
    return getSortedLogs(media).findLast(log => log.text) ?? null
}

export function getMediaById(id) {
    return allMedia.find(media => media.id === id) ?? null
}

// ---------- home page sections ----------
const byLastLoggedDesc = (a, b) => (getLastLoggedOn(b) ?? "").localeCompare(getLastLoggedOn(a) ?? "")

export const pinnedMedia = allMedia
                            .filter(media => media.pinned)
                            .sort((a, b) => Number(Boolean(getLatestTextLog(b))) - Number(Boolean(getLatestTextLog(a))))
export const ongoingMedia = allMedia
                            .filter(media => getCurrentStatus(media) === "in_progress")
                            .sort(byLastLoggedDesc)
                            .slice(0, 6)
export const recentMedia = allMedia
                            .filter(media => getLastLoggedOn(media) !== null)
                            .sort(byLastLoggedDesc)
                            .slice(0, 10)
