import { sampleMedia } from "./sampleMediaData"

export const pinnedMedia = sampleMedia.filter(media => media.pinned)
export const ongoingMedia = sampleMedia.filter(media => media.status === "in_progress")
export const recentMedia = [...sampleMedia]
                            .filter(media => media.updatedAt !== null)
                            .sort((a,b) => b.updatedAt.localeCompare(a.updatedAt))
                            .slice(0,5)