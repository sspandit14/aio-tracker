import { pinnedMedia, ongoingMedia, recentMedia } from "../data/sampleMediaSelector"

import PinnedSection from "../components/home/PinnedSection"
import OngoingSection from "../components/home/OngoingSection"
import RecentSection from "../components/home/RecentSection"

export default function Home() {
    return(
        <div className="home">
            <PinnedSection items={pinnedMedia} />
            <OngoingSection items={ongoingMedia} />
            <RecentSection items={recentMedia} />
        </div>
    )
}