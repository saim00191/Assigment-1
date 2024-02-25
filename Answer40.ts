// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


interface album {
    artist: string;
    title: string;
    tracks?: number;
}

function Albums(artist: string, title: string, tracks?: number): album {
    const album: album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

const album1: album = Albums("Artist 1", "Album Title 1");
const album2: album = Albums("Artist 2", "Album Title 2");
const album3: album = Albums("Artist 3", "Album Title 3");

console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
const album4: album = Albums("Artist 4", "Album Title 4", 12);
console.log("Album 4:", album4);
