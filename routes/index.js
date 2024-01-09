const { ZingMp3 } = require("zingmp3-api-full"),
    zing = ZingMp3;

function route(app) {
    // [GET] /home - Get the home page
    app.get("/home", (req, res, next) => {
        zing.getHome()
            .then((home) => res.json(home))
            .catch((err) => res.json(err));
    });

    // [GET] /song/:id - Get song by id
    app.get("/song/:id", (req, res, next) => {
        const id = req.params.id;
        zing.getSong(id)
            .then((song) => res.json(song))
            .catch((err) => res.json(err));
    });

    // [GET] /song-info/:id - Get song info by id
    app.get("/song-info/:id", (req, res, next) => {
        const id = req.params.id;
        zing.getInfoSong(id)
            .then((info) => res.json(info))
            .catch((err) => res.json(err));
    });

    // [GET] /play-list/:id - get details of a playlist
    app.get("/play-list/:id", (req, res, next) => {
        const id = req.params.id;
        zing.getDetailPlaylist(id)
            .then((details) => res.json(details))
            .catch((err) => res.json(err));
    });

    // [GET] /top-100 - get top 100 album
    app.get("/top-100", (req, res, next) => {
        zing.getTop100()
            .then((top100) => res.json(top100))
            .catch((err) => res.json(err));
    });

    // [GET] /artist/:name - get artist
    app.get("/artist", (req, res, next) => {
        const name = req.params.name;
        zing.getArtist(name)
            .then((artist) => res.json(artist))
            .catch((err) => res.json(err));
    });

    app.use("/", (req, res, next) => {
        res.send(`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <div class='container'>
            <h1>Welcome to API Server!</h1>
            <h5>- By anh minh dev lỏ!</h5>
        </div>
        `);
    });
}

module.exports = route;
