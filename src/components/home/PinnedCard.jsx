import { getLatestTextLog } from "../../data/sampleMediaSelector";

export default function PinnedCard({media}) {
    const review_text = getLatestTextLog(media);

    return(
        <div className="pinned-card">
            <img className="pinned-cover"
                 src={media.cover}
                 alt={`${media.title} cover`} 
            />

            <div className="pinned-content">
                <h3>{media.title}</h3>
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