export function formatDate(iso) {
    if (!iso) {
        return "--";
    }

    return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
        day: "numeric", month: "long", year: "numeric",
    });
}