import { Link } from "react-router";
import { getLatestTextLog } from "../../data/sampleMediaSelector";

export default function PinnedCard({media}) {
    const review_text = getLatestTextLog(media);

    return(
        <div className="pinned-card">
            <Link to={`/media/${media.id}`} className="pinned-cover-link">
                <img className="pinned-cover"
                    src={media.cover}
                    alt={`${media.title} cover`} 
                />
            </Link>

            <div className="pinned-content">
                <h3>
                    <Link to={`/media/${media.id}`} className="pinned-content-link"> {media.title} </Link>
                </h3>
                <p>{media.type} | {media.year}</p>
                {media.rating != null && (
                    <p>Rating: {media.rating}/5</p>
                )}
                {review_text && (
                    <p className="review-preview">{review_text.text}</p>
                )}
            </div>
        </div>
    )
}