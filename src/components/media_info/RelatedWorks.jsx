export default function RelatedWorks({ works }) {
    if (!works || works.length === 0) {
        return null;
    }

    return(
        <div className="related-works">
            <h2>Related Works</h2>
            <ul>
                {works.map(work => (
                    <li key={work.url}>
                        <a href={work.url} target="_blank" rel="noreferrer">
                            {work.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}