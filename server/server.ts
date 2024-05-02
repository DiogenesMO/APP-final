import express from 'express';
const app = express();

app.use(express.json());

const data: Array<{}> = [


    {
        id: "1",
        profilePicture:
            "https://social-links-profile-main-henna.vercel.app/_next/image?url=%2Fassets%2Fimages%2Favatar-jessica.jpeg&w=3840&q=75",
        userName: "Jessica Randall ",
        address: "London, United Kingdom",
        description: "Front-enddeveloper and avid reader"
    },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

app.get('/', async (req, res) => {
    await wait(3001);
    res.json(data);
});

app.post('/posts', (req, res) => {
    const { profilePicture = "", profileName = "" } = req.body;

    console.log('saving new data: ', { profilePicture, profileName });

    data.push({
        id: data.length.toString(),
        profilePicture,
        profileName,
    });

    res.json(data);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});