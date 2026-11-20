import { formatShortDate } from "../../utils/formatDate";

export default function LogEntry({ log, verb, speaker }) {
    const paragraphs  = (log.text ?? "").split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    const colour_class = log.label ? "is-label" : (log.status ? `status-${log.status}` : "");
    const quiet_class = log.text ? "" : "is-quiet";

    const opener = (
        <span className="log-opener">
            {speaker}{paragraphs.length > 0 && " --"}
        </span>
    )

    const tags = (
        <>
            {log.label && verb && <span className="log-tag">[{verb}]</span>}
            {log.rating != null && <span className="log-tag">[Rated {log.rating} / 5]</span>}
        </>
    )

    return(
        <li className={`log-row ${colour_class} ${quiet_class}`}>
            <time className="log-date" dateTime={log.date}>{formatShortDate(log.date)}</time>
            <div className="log-body">
                {paragraphs.length === 0 ? (
                    <p>{opener}{tags}</p>
                ) : (
                    paragraphs.map((text, i) => (
                        <p key={i}>
                            {i === 0 && <>{opener} </>}
                            {text}
                            {i === paragraphs.length - 1 && tags}
                        </p>
                    ))
                )}
            </div>
        </li>
    )
}