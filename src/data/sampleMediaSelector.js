import { sampleMedia as moviesMedia } from "./sampleMediaDataMovies"
import { sampleMedia as gamesBooksMedia } from "./sampleMediaDataGamesBooks"

export const allMedia = [...moviesMedia, ...gamesBooksMedia]

// ---------- derived fields (computed from media.logs) ----------

// Logs oldest -> newest. Same-day logs keep their written order.
export function getSortedLogs(media) {
    return [...media.logs].sort((a, b) => a.date.localeCompare(b.date))
}

// Current status = the newest log that set one. null if nothing has been logged.
export function getCurrentStatus(media) {
    return getSortedLogs(media).findLast(log => log.status)?.status ?? null
}

// Date the current status was set.
export function getStatusSince(media) {
    return getSortedLogs(media).findLast(log => log.status)?.date ?? null
}

export function getLastLoggedOn(media) {
    return getSortedLogs(media).at(-1)?.date ?? null
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
