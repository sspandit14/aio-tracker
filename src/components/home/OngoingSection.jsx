import OngoingCard from "./OngoingCard";
import "./OngoingSection.css"

export default function OngoingSection({items}) {
    return(
        <div className="ongoing-section">
            <h2 className="section-heading">Ongoing</h2>
            <div className="ongoing-gallery">
                {items.map(media => (
                    <OngoingCard key={media.id} media={media} />
                ))}
            </div>
        </div>
    )
}