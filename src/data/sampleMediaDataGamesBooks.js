import hadesCover from "../assets/mediaCovers/big/game-hades.jpg";
import hollowKnightCover from "../assets/mediaCovers/big/game-hollow-knight.jpg";
import persona5RoyalCover from "../assets/mediaCovers/big/game-persona-5-royal.jpg";
import eldenRingCover from "../assets/mediaCovers/big/game-elden-ring.jpg";
import baldursGate3Cover from "../assets/mediaCovers/big/game-baldurs-gate-3.jpg";
import clairObscurExpedition33Cover from "../assets/mediaCovers/big/game-clair-obscur-expedition-33.jpg";
import outerWildsCover from "../assets/mediaCovers/big/game-outer-wilds.jpg";
import celesteCover from "../assets/mediaCovers/big/game-celeste.jpg";
import piranesiCover from "../assets/mediaCovers/big/book-piranesi.jpg";
import theNameOfTheWindCover from "../assets/mediaCovers/big/book-the-name-of-the-wind.jpg";
import duneNovelCover from "../assets/mediaCovers/big/book-dune.jpg";
import kafkaOnTheShoreCover from "../assets/mediaCovers/big/book-kafka-on-the-shore.jpg";
import projectHailMaryCover from "../assets/mediaCovers/big/book-project-hail-mary.jpg";
import klaraAndTheSunCover from "../assets/mediaCovers/big/book-klara-and-the-sun.jpg";
import bloodMeridianCover from "../assets/mediaCovers/big/book-blood-meridian.jpg";

export const sampleMedia = [
    {
        id: "hades",
        title: "Hades",
        type: "Game",
        year: 2020,
        cover: hadesCover,
        coverSource: "Steam",
        rating: 5,
        createdOn: "2026-01-03",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-01-03",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-02-14",
                status: "completed",
                label: null,
                text: "Every run felt like a conversation instead of a reset. Dying is supposed to be the punishment in a roguelike, but here it's the reward: you go home, someone has something new to say, and the house gets a little warmer.\n\nGot every weapon aspect, maxed the mirror, finished the epilogue. Zagreus and his dad finally having a real conversation hit harder than it had any right to."
            }
        ]
    },
    {
        id: "hollow-knight",
        title: "Hollow Knight",
        type: "Game",
        year: 2017,
        cover: hollowKnightCover,
        coverSource: "Steam",
        rating: 4.5,
        createdOn: "2026-03-02",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-03-02",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-04-20",
                status: "completed",
                label: null,
                text: "112%. Path of Pain almost broke me. Hallownest is one of the best-realized dead kingdoms in anything I've played."
            }
        ]
    },
    {
        id: "persona-5-royal",
        title: "Persona 5 Royal",
        type: "Game",
        year: 2020,
        cover: persona5RoyalCover,
        coverSource: "Steam",
        rating: null,
        createdOn: "2026-10-28",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-10-28",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-11-15",
                status: null,
                label: null,
                text: null
            }
        ]
    },
    {
        id: "elden-ring",
        title: "Elden Ring",
        type: "Game",
        year: 2022,
        cover: eldenRingCover,
        coverSource: "Steam",
        rating: 4.5,
        createdOn: "2026-04-25",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-04-25",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-06-30",
                status: "finished",
                label: null,
                text: "Rolled credits on the Age of the Stars ending. Not going back for the rest; I'm content leaving the Lands Between a little bit unexplored."
            }
        ]
    },
    {
        id: "baldurs-gate-3",
        title: "Baldur's Gate 3",
        type: "Game",
        year: 2023,
        cover: baldursGate3Cover,
        coverSource: "Steam",
        rating: 3.5,
        createdOn: "2026-07-05",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-07-05",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-08-02",
                status: "dropped",
                label: null,
                text: "Stalled out in Act 3. Not the game's fault, it's just enormous and I ran out of steam. Will probably come back with a fresh character."
            }
        ]
    },
    {
        id: "clair-obscur-expedition-33",
        title: "Clair Obscur: Expedition 33",
        type: "Game",
        year: 2025,
        cover: clairObscurExpedition33Cover,
        coverSource: "Steam",
        rating: 5,
        createdOn: "2026-08-10",
        pinned: true,
        relatedWorks: [
            {
                title: "Painting Over Grief: Expedition 33",
                url: "https://www.google.com/search?q=Painting+Over+Grief%3A+Expedition+33"
            },
            {
                title: "The Gommage and the Grammar of Loss",
                url: "https://www.google.com/search?q=The+Gommage+and+the+Grammar+of+Loss"
            }
        ],
        logs: [
            {
                date: "2026-08-10",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-09-14",
                status: "finished",
                label: "First Playthrough",
                text: "The prologue alone is better than most whole games. The festival, the goodbye on the docks, the Gommage. By the time the expedition actually leaves you already understand exactly what is at stake and exactly how little time anyone has.\n\nThe parry system turned turn-based combat into something closer to a rhythm game, and I mean that as the highest compliment. Every enemy has a tell, every tell is a little song you learn, and by the end I was dodging bosses I would have been flattened by at the start without leveling up at all.\n\nThe Act 2 turn is the kind of thing that only works because the game is so patient with you before it. I won't spoil it here but I put the controller down for a good minute."
            },
            {
                date: "2026-09-14",
                status: null,
                label: "After Credits",
                text: "I keep thinking about which ending I picked and whether it was the right one. I think the game wants you to be unsure. A story about grief that refuses to tell you the correct way to grieve.\n\nAlso the soundtrack. I have had Lumière on repeat for a week."
            }
        ]
    },
    {
        id: "outer-wilds",
        title: "Outer Wilds",
        type: "Game",
        year: 2019,
        cover: outerWildsCover,
        coverSource: "Steam",
        rating: 5,
        createdOn: "2026-05-11",
        pinned: true,
        relatedWorks: [],
        logs: [
            {
                date: "2026-05-11",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-05-24",
                status: "finished",
                label: null,
                text: "The only upgrade in this game is what you know. That's it. Your ship never gets faster and your suit never gets stronger; you just understand the solar system a little better every twenty-two minutes.\n\nThere's a specific feeling of standing on a planet, looking up, and suddenly realizing why something you saw five loops ago worked the way it did. I don't think any other game has given me that so many times in a row.\n\nGo in blind. Please go in blind."
            }
        ]
    },
    {
        id: "celeste",
        title: "Celeste",
        type: "Game",
        year: 2018,
        cover: celesteCover,
        coverSource: "Wikipedia",
        rating: null,
        createdOn: "2026-11-02",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-11-02",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-11-12",
                status: null,
                label: null,
                text: null
            }
        ]
    },
    {
        id: "piranesi",
        title: "Piranesi",
        type: "Book",
        year: 2020,
        cover: piranesiCover,
        coverSource: "Open Library",
        rating: 5,
        createdOn: "2026-02-20",
        pinned: true,
        relatedWorks: [],
        logs: [
            {
                date: "2026-02-20",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-03-01",
                status: "finished",
                label: null,
                text: "The House is infinite and the narrator is perfectly content in it, and the slow horror of the book is realizing that his contentment was done to him.\n\nWhat surprised me is that the book never punishes him for it. The ending lets both versions of him be real.\n\nThe Beauty of the House is immeasurable; its Kindness infinite.\n\nShort, strange, and kind. Read it in two sittings."
            }
        ]
    },
    {
        id: "the-name-of-the-wind",
        title: "The Name of the Wind",
        type: "Book",
        year: 2007,
        cover: theNameOfTheWindCover,
        coverSource: "Open Library",
        rating: 3.5,
        createdOn: "2026-06-01",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-06-01",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-07-08",
                status: "finished",
                label: null,
                text: "Beautiful prose, a frame story I loved, and a protagonist I wanted to shake by the shoulders roughly once per chapter. Not picking up the sequel knowing the third one may never come."
            }
        ]
    },
    {
        id: "dune-novel",
        title: "Dune",
        type: "Book",
        year: 1965,
        cover: duneNovelCover,
        coverSource: "Open Library",
        rating: 4,
        createdOn: "2026-01-10",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-01-10",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-02-08",
                status: "finished",
                label: null,
                text: null
            }
        ]
    },
    {
        id: "kafka-on-the-shore",
        title: "Kafka on the Shore",
        type: "Book",
        year: 2002,
        cover: kafkaOnTheShoreCover,
        coverSource: "Wikipedia",
        rating: null,
        createdOn: "2026-11-09",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-11-09",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-11-16",
                status: null,
                label: null,
                text: null
            }
        ]
    },
    {
        id: "project-hail-mary-novel",
        title: "Project Hail Mary",
        type: "Book",
        year: 2021,
        cover: projectHailMaryCover,
        coverSource: "Open Library",
        rating: 4,
        createdOn: "2026-09-01",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-09-01",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-09-09",
                status: "finished",
                label: null,
                text: "Fist my bump. That's the review."
            }
        ]
    },
    {
        id: "klara-and-the-sun",
        title: "Klara and the Sun",
        type: "Book",
        year: 2021,
        cover: klaraAndTheSunCover,
        coverSource: "Open Library",
        rating: 2.5,
        createdOn: "2026-10-01",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-10-01",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-10-20",
                status: "dropped",
                label: null,
                text: "I can see what it's doing but the flat narration just wasn't holding me this time. Might be a wrong-time-wrong-book situation."
            }
        ]
    },
    {
        id: "blood-meridian",
        title: "Blood Meridian",
        type: "Book",
        year: 1985,
        cover: bloodMeridianCover,
        coverSource: "Open Library",
        rating: null,
        createdOn: "2026-10-22",
        pinned: false,
        relatedWorks: [],
        logs: [
            {
                date: "2026-10-22",
                status: "in_progress",
                label: null,
                text: null
            },
            {
                date: "2026-11-10",
                status: null,
                label: null,
                text: null
            }
        ]
    },
];
