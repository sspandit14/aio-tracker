import { Link } from "react-router"

export default function OngoingCard({media}) {
    return (
        <div className="ongoing-card">
            <div className="ongoing-cover-frame">
                <Link to={`/media/${media.id}`}> <img className="ongoing-cover" src={media.cover} alt={`${media.title} cover`} /> </Link>
            </div>

            <h3>
                <Link to={`/media/${media.id}`} className="ongoing-link"> {media.title} </Link>
            </h3>
            <p>{media.type} | {media.year}</p>
        </div>
    )
}