import { sampleMedia } from "./sampleMediaDataMovies"

export const pinnedMedia = sampleMedia.filter(media => media.pinned).sort((a, b) => Number(Boolean(b.review)) - Number(Boolean(a.review)))
export const ongoingMedia = sampleMedia.filter(media => media.status === "in_progress")
export const recentMedia = [...sampleMedia]
                            .filter(media => media.lastLoggedOn !== null)
                            .sort((a,b) => b.lastLoggedOn.localeCompare(a.lastLoggedOn))
                            .slice(0,10)