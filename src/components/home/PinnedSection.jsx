import { useState } from "react";
import PinnedCard from "./PinnedCard";

export default function PinnedSection({items}) {
    const [displayIdx, setDisplayIdx] = useState(0)

    if (items.length === 0) {
        return null
    }

    function nextCard() {
        setDisplayIdx(curr => (curr + 1) % items.length)
    }

    function previousCard() {
        setDisplayIdx(curr => (curr - 1 + items.length) % items.length)
    }

    return(
        <div className="pinned-section">
            <h2>Pinned</h2>
            <div className="pinned-carousel">
                <div className="pinned-carousel-view">
                    <div className="pinned-carousel-track" style= {{transform: `translateX(-${displayIdx*100}%)`}}>
                        {items.map(media => (
                            <div className="pinned-carousel-slide" key={media.id}>
                                <PinnedCard media={media} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {items.length > 1 && (
                <div className="pinned-carousel-buttons">
                    <button type="button" onClick={previousCard}>
                        Previous
                    </button>

                    <span>
                        {displayIdx + 1} / {items.length}
                    </span>

                    <button type="button" onClick={nextCard}>
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}