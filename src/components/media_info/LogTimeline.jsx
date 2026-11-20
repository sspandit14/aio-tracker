import { getSortedLogs } from "../../data/sampleMediaSelector";
import LogEntry from "./LogEntry";

const STATUS_MAPPING = { finished: "Finished", completed: "Completed", dropped: "Dropped" };

function getStatusMapping(status, prev_status) {
    if (status === "in_progress") {
        return prev_status ? "Picked up again" : "Started";
    }

    return STATUS_MAPPING[status];
}

export default function LogTimeline({media}) {
    const sortedEntries = [];
    let prev_status = null;
    for (const log of getSortedLogs(media)) {
        const verb = log.status ? getStatusMapping(log.status, prev_status) : null;

        if (log.status) {
            prev_status = log.status;
        }

        sortedEntries.push({ log, verb, speaker: log.label ?? verb ?? "Logged" });
    }

    const has_text = sortedEntries.some(row => row.log.text);
    const latest_text_idx = sortedEntries.findLastIndex(row => row.log.text);

    return(
        <div className="log-timeline">
            {!has_text && <p className="log-empty">No thoughts written yet.</p>}
            <ol className="log-list">
                {sortedEntries.map((row, index) => (
                    <LogEntry
                        key={`${row.log.date}-${index}`}
                        log={row.log}
                        verb={row.verb}
                        speaker={row.speaker}
                        is_latest_text={index === latest_text_idx}
                    />
                ))}
            </ol>
        </div>
    )
}