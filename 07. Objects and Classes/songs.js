function solve(input) {

    class Song {
        constructor(typelist, name, time) {
            this.typelist = typelist;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filtered = songs.filter((i) => i.typelist === typeSong);
        filtered.forEach((i) => console.log(i.name))
    }
}

solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])
solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])