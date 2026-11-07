export default function OngoingCard({media}) {
    return (
        <div className="ongoing-card">
            <div className="ongoing-cover-frame">
                <img className="ongoing-cover" src={media.cover} alt={`${media.title} cover`} />
            </div>

            <h3>{media.title}</h3>
            <p>{media.type} | {media.year}</p>
        </div>
    )
}