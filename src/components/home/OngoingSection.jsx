import OngoingCard from "./OngoingCard";

export default function OngoingSection({items}) {
    return(
        <div className="ongoing-section">
            <h2>Ongoing</h2>
            <div className="ongoing-gallery">
                {items.map(media => (
                    <OngoingCard key={media.id} media={media} />
                ))}
            </div>
        </div>
    )
}