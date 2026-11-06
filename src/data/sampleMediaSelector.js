import { sampleMedia } from "./sampleMediaData"

export const pinnedMedia = sampleMedia.filter(media => media.pinned)
export const ongoingMedia = sampleMedia.filter(media => media.status === "in_progress")
export const recentMedia = [...sampleMedia]
                            .filter(media => media.updatedOn !== null)
                            .sort((a,b) => b.updatedOn.localeCompare(a.updatedOn))
                            .slice(0,5)