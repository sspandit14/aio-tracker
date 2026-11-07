import { pinnedMedia, ongoingMedia, recentMedia } from "../data/sampleMediaSelector"

import Header from "../components/home/Header"
import PinnedSection from "../components/home/PinnedSection"
import OngoingSection from "../components/home/OngoingSection"
import RecentSection from "../components/home/RecentSection"

export default function Home() {
    return(
        <div className="home">
            <Header />
            <PinnedSection items={pinnedMedia} />
            <OngoingSection items={ongoingMedia} />
            <RecentSection items={recentMedia} />
        </div>
    )
}