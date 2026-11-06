export default function PinnedCard({media}) {
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
                {media.review && (
                    <p className="review-preview">{media.review}</p>
                )}
            </div>
        </div>
    )
}