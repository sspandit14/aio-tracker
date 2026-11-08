import { pinnedMedia, ongoingMedia, recentMedia } from "../data/sampleMediaSelector"

import PinnedSection from "../components/home/PinnedSection"
import OngoingSection from "../components/home/OngoingSection"
import RecentSection from "../components/home/RecentSection"

import "./Home.css"

export default function Home() {
    return(
        <div className="home">
            <div className="home-header">
                <h1>The All-in-One Tracker</h1>
                <p>who (asked?)</p>
            </div>
            <PinnedSection items={pinnedMedia} />
            <OngoingSection items={ongoingMedia} />
            <RecentSection items={recentMedia} />
        </div>
    )
}
