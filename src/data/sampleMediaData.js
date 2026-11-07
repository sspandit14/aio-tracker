import lostHighwayCover from "../assets/mediaCovers/lost-highway.jpg"
import metaphorRefantazioCover from "../assets/mediaCovers/metaphor-refantazio.jpeg"
import discoElysiumCover from "../assets/mediaCovers/disco-elysium.jpg"
import invisibleLifeCover from "../assets/mediaCovers/invisible-life-of-addie-la-rue.jpg"
import silentHill2Cover from "../assets/mediaCovers/silent-hill-2-remake.jpg"
import residentEvilMovieCover from "../assets/mediaCovers/resident-evil-movie.jpg"
import mansSearchForMeaningCover from "../assets/mediaCovers/mans-search-for-meaning.jpg"

export const sampleMedia = [
    {
        id: "lost-highway",
        title: "Lost Highway",
        type: "movie",
        year: 1997,
        cover: lostHighwayCover,

        status: "finished",
        rating: 4.5,
        createdOn: "2026-08-19",
        lastLoggedOn: "2026-08-19",
        updatedOn: "2026-08-19",
        review: null,
        pinned: true,

        relatedWork: null
    },
    {
        id: "metaphor-refantazio",
        title: "Metaphor ReFantazio",
        type: "game",
        year: 2024,
        cover: metaphorRefantazioCover,

        status: "in_progress",
        rating: null,
        createdOn: "2026-06-26",
        lastLoggedOn: "2026-06-26",
        updatedOn: "2026-06-26",
        review: null,
        pinned: false,

        relatedWork: null
    },
    {
        id: "disco-elysium",
        title: "Disco Elysium",
        type: "game",
        year: 2019,
        cover: discoElysiumCover,

        status: "finished",
        rating: 4.5,
        createdOn: "2026-01-24",
        lastLoggedOn: "2026-06-04",
        updatedOn: "2026-06-04",
        review: null,
        pinned: true,

        relatedWork: null
    },
    {
        id: "invisible-life-of-addie-la-rue",
        title: "The Invisible Life of Addie La Rue",
        type: "book",
        year: 2020,
        cover: invisibleLifeCover,

        status: "dropped",
        rating: 2.5,
        createdOn: "2026-09-22",
        lastLoggedOn: "2026-10-18",
        updatedOn: "2026-10-18",
        review: "not bad, will come back to it, kind of slow though and I don't have the time for this particular book right now...",
        pinned: false,

        relatedWork: null
    },
    {
        id: "silent-hill-2-remake",
        title: "Silent Hill 2 Remake",
        type: "game",
        year: 2024,
        cover: silentHill2Cover,

        status: "completed",
        rating: 5,
        createdOn: "2026-02-01",
        lastLoggedOn: "2026-03-28",
        updatedOn: "2026-03-28",
        review: "In my restless dreams, I see that town. I can never leave it.",
        pinned: true,

        relatedWork: {
            title: "I Think About That Town, Silent Hill (2 Remake)",
            url: "https://www.google.com/search?q=I+Think+About+That+Town%2C+Silent+Hill+(2+Remake)"
        }
    },
    {
        id: "resident-evil-movie",
        title: "Resident Evil Movie",
        type: "movie",
        year: 2026,
        cover: residentEvilMovieCover,

        status: "finished",
        rating: 3.5,
        createdOn: "2026-09-22",
        lastLoggedOn: "2026-10-11",
        updatedOn: "2026-10-11",
        review: "Initial Watch:\n\nSees electrified fence, knows its electrified, tries and prepares with all his might to jump over it and not get shocked, and gets shocked anyways; in that moment, it truly felt like it did playing Resident Evil (in the best way) lmao.\n\nThat being said I feel kind of mixed on the movie as a whole. I really liked watching it and it was highly entertaining and visually looked awesome-- but there's something about the tone that didn't really jibe with my understanding of Resident Evil (at least having only played the first 3 games-- but even then I feel like an argument can be made from even just my understanding of the other entries in the series). I can get what Cregger was going for, and again as a movie on its own I liked it, but I really do feel like my issues with the movie come down to it feeling like I was watching someone playing Resident Evil instead of getting the feeling of playing Resident Evil.\n\nBryan for the most part took the actions of and was \"controlled\" like a normal dude if they were a character in a Resident Evil game--as opposed to certified badasses like Jill, Leon, and Chris or Ethan \"just a flesh wound\" Winters--but it felt like... the humor and entertainment was being injected by some invisible let's player or streamer. It works for me during the first third and half of the movie because it really did feel like it made sense given who Bryan is, the situation he finds himself in, how he was presented up to that point, but after a while it's felt like that humour and entertainment forward nature never really left even as things progressed and Bryan goes through more and more stuff. It's not even to say that Bryan himself couldn't be funny or bring comedic relief it's that it felt like the movie itself never stopped trying to inject a bit of heeheehaha (the car call scene for example kind of bugs me).\n\nAgain I keep coming back to it but the movie itself felt like it was a let's player or streamer that couldn't let the \"game\" itself breathe and felt like they had a duty to keep chat entertained. But man, it was entertaining I will say that.\n\nSecond Watch:\nEnjoyed it more on a second watch. For some reason most of the problems I had with the tone kind of melted away on a rewatch and the entire ride is just generally a great time. I also think watching the movie and leaning towards a reading its events through a representational lens (i.e. as representative of Bryan's refusal to grow up, fear of fatherhood and commitment, trailing baggage, and the catching up of consequences) made the movie far more engaging than I thought it was on a first watch; it feels more cohesive that way and less like mainly just a(n entertaining) rollercoaster of events I felt during the first watch.\n\nAlso man, I just really like Bryan...",
        pinned: true,

        relatedWork: {
            title: "But What *Is* Resident Evil, Really?",
            url: "https://www.google.com/search?q=But+What+*Is*+Resident+Evil%2C+Really%3F"
        }
    },
    {
        id: "mans-search-for-meaning",
        title: "Man's Search for Meaning",
        type: "book",
        year: 1946,
        cover: mansSearchForMeaningCover,

        status: "in_progress",
        rating: null,
        createdOn: "2026-11-07",
        lastLoggedOn: "2026-11-07",
        updatedOn: "2026-11-07",
        review: null,
        pinned: false,

        relatedWork: null
    },
]