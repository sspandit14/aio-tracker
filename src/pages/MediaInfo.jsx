import { useParams, Link, useNavigate, useLocation } from "react-router"
import { getLastLoggedOn, getMediaById, getCurrentStatus, getStatusSince } from "../data/sampleMediaSelector"
import { formatDate } from "../utils/formatDate";
import RelatedWorks from "../components/media_info/RelatedWorks.jsx"

const STATUS_LABELS = {
    in_progress: "In Progress",
    finished: "Finished",
    completed: "Completed",
    dropped: "Dropped",
}

import "./MediaInfo.css"

export default function MediaInfo() {
    const {id} = useParams();
    const navigation = useNavigate();
    const location = useLocation();
    const media = getMediaById(id);

    function goBack() {
        if (location.key === "default") {
            navigation("/");
        } else {
            navigation(-1);
        }
    }

    if (!media) {
        return(
            <div className="missing-media">
                <h1>Media Entry not Found</h1>
                <Link to="/">Back to Home</Link>
            </div>
        )
    }

    const lastLogged = getLastLoggedOn(media);
    const status = getCurrentStatus(media);
    const statusSince = getStatusSince(media);
    const label = STATUS_LABELS[status] ?? "Not Started";
    const rating = media.rating;

    return(
        <>
        <div className="media-topbar">
            <div className="media-topbar-content">
                <button type="button" onClick={goBack}> Go Back</button>
            </div>
        </div>

        <div className="media-body">
            <div className="media-art">
                <img src={media.cover} alt={media.title} />
            </div>

            <div className="media-info">
                <div className="media-details">
                    <p>Last Logged {formatDate(lastLogged)}</p>
                    <p>{media.type} | {media.year}</p>
                </div>

                <h1 id="media-title">{media.title}</h1>

                <div className="media-glance">
                    {/* <h2>Info</h2> */}
                    <ul>
                        <li>Status: <b className={`status status-${status}`}>{label}</b> {status && ` since ${formatDate(statusSince)}`}</li>
                        <li>Rating: <b>{rating != null ? `${rating} / 5` : "Not rated"}</b></li>
                    </ul>
                </div>

                <RelatedWorks works={media.relatedWorks} />

                <pre>{JSON.stringify(media, null, 2)}</pre>

                {media.coverSource && (<p className="media-credit">Cover via {media.coverSource}</p> )}
            </div>
        </div>
        </>
    )
}