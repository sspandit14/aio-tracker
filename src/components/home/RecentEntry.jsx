import { getCurrentStatus, getLastLoggedOn } from "../../data/sampleMediaSelector";

export default function RecentEntry({media}) {
    return (
        <tr className="recent-entry">
            <td>
                <div className="recent-media">
                    <img src={media.cover} alt="" className="recent-cover" />

                    <div>
                        <b>{media.title}</b>
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