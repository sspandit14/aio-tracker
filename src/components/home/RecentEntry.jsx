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
                {media.status.replaceAll("_", " ")}
            </td>

            <td>
                {media.updatedOn ?? "--"}
            </td>

            <td>
                {media.rating != null ? `${media.rating}/5` : "--"}
            </td>
        </tr>
    )
}