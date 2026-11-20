import { Link } from "react-router";
import { getCurrentStatus, getLastLoggedOn } from "../../data/sampleMediaSelector";

export default function RecentEntry({media}) {
    return (
        <tr className="recent-entry">
            <td>
                <div className="recent-media">
                    <Link to={`/media/${media.id}`}>
                        <img src={media.cover} alt="" className="recent-cover" />
                    </Link>

                    <div>
                        <Link to={`/media/${media.id}`} className="recent-link"> <b>{media.title}</b> </Link>
                        <small>{media.type}</small>
                    </div>
                </div>
            </td>

            <td>
                {getCurrentStatus(media).replaceAll("_", " ")}
            </td>

            <td>
                {getLastLoggedOn(media) ?? "--"}
            </td>

            <td>
                {media.rating != null ? `${media.rating}/5` : "--"}
            </td>
        </tr>
    )
}