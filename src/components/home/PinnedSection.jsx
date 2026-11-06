import PinnedCard from "./PinnedCard";

export default function PinnedSection({items}) {
    if (items.length === 0) {
        return null
    }

    return(
        <div className="pinned-section">
            <h2>Pinned</h2>
            <PinnedCard media={items[2]} />
        </div>
    )
}