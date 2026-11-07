import RecentEntry from "./RecentEntry";

export default function RecentSection({items}) {
    return(
        <div className="recent-section">
            <h2>Recents</h2>
            <div className="recent-table-container">
                <table className="recent-table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Last Logged</th>
                            <th scope="col">Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map(media => (
                            <RecentEntry key={media.id} media={media} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}