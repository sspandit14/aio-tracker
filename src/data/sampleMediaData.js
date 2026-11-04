import lostHighwayCover from "../assets/mediaCovers/lostHighwayCover"
import metaphorRefantazioCover from "../assets/mediaCovers/metaphor-refantazio"
import discoElysiumCover from "../assets/mediaCovers/disco-elysium.jpg"

export const mockMedia = [
    {
        id: "lost-highway",
        title: "Lost Highway",
        type: "movie",
        year: 1997,
        cover: lostHighwayCover,

        status: "completed",
        rating: 4.5,
        updatedAt: "2026-08-19",

        featured: true,
        summary: "insert something here"
    },
    {
        id: "metaphor-refantazio",
        title: "Metaphor ReFantazio",
        type: "game",
        year: 2024,
        cover: metaphorRefantazioCover,

        status: "in_progress",
        rating: null,
        updatedAt: "2026-07-02",

        featured: false,
        summary: "insert something here"
    }
]