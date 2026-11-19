import { useParams, Link } from "react-router"
import { getMediaById } from "../data/sampleMediaSelector"

import "./MediaInfo.css"

export default function MediaInfo() {
    const {id} = useParams();
    const media = getMediaById(id);

    if (!media) {
        return(
            <div className="missing-media">
                <h1>Media Entry not Found</h1>
                <Link to="/">Back to Home</Link>
            </div>
        )
    }

    return(
        <>
        <h1>{media.title}</h1>
        <pre>{JSON.stringify(media, null, 2)}</pre>
        </>
    )
}