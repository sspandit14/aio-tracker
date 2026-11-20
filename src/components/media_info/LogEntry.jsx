import { formatShortDate } from "../../utils/formatDate";
import { useState } from "react";

export default function LogEntry({ log, verb, speaker, is_latest_text}) {
    const paragraphs  = (log.text ?? "").split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    const colour_class = log.label ? "is-label" : (log.status ? `status-${log.status}` : "");
    const quiet_class = log.text ? "" : "is-quiet";

    const [is_open, setOpen] = useState(false);
    const collapsible = !is_latest_text && (log.text?.length ?? 0) > 240;
    const is_clipped = collapsible && !is_open;

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
                    <>
                        <div className={`log-text ${is_clipped ? "is-clipped" : ""}`}>
                            {paragraphs.map((text, i) => (
                                <p key={i}>
                                    {i === 0 && <>{opener} </>}
                                    {text}
                                    {i === paragraphs.length - 1 && tags}
                                </p>
                            ))}
                        </div>

                        {collapsible && (
                            <button
                                type="button"
                                className="log-toggle"
                                aria-expanded={is_open}
                                onClick={() => setOpen(!is_open)}
                            >
                                {is_open ? "[CLOSE]" : "[READ MORE]"}
                            </button>
                        )}
                    </>
                )}
            </div>
        </li>
    )
}