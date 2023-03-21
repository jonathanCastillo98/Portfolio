// IMAGES
import Work1 from '../../assets/Work1.jpg';
import Work2 from '../../assets/Work2.jpg';
import Work3 from '../../assets/Work3.jpg';
import Work4 from '../../assets/Work4.jpg';
import Work5 from '../../assets/Work5.jpg';

// ICONS
import expressI from "../../assets/icons8-express-js.svg"
import nodeI from "../../assets/icons8-node-js.svg"
import reactI from "../../assets/icons8-react-native.svg"
import muiI from "../../assets/icons8-material-ui.svg"
import socketioI from "../../assets/socketio.svg"


export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "RappiClone",
        category: "WebDev",
        descriptions: [
            {
                id: 1,
                description: "Work with Agile methodologies, GIT and Microservices architecture in which I was part of the Ponit of Sales team"
            },
            {
                id: 2,
                description: "Use React and MUI for building a responsive SPA with reusable and scalable components that consumed our own API"
            },
            {
                id: 3,
                description: "Use Node js and Express js for bulding a restful API, and socket.io to manage the full-duplex connection between clients and the server"
            },
            {
                id: 4,
                description: "Use PostgreSQL as database and sequelize as ORM to store and manage the whole information"
            },
            {
                id: 5,
                description: "Create user authentication and authorizarion by using Firebase Auth and own middlewares through tokens"
            },
            {
                id: 6,
                description: "Create routing using react-router-dom and authentication using the context hook and tokens"
            },
            {
                id: 7,
                description: "Implement best practices for clean coding"
            },


        ],
        isDemo: true,
        linkDemo: "#",
        techIcons: [
            {
                id: 1,
                icon: reactI
            },
            {
                id: 2,
                icon: nodeI
            },
            {
                id: 3,
                icon: expressI
            },
            {
                id: 4,
                icon: muiI
            },
            {
                id: 5,
                icon: socketioI
            },
        ]
    },
    {
        id: 2,
        image: Work2,
        title: "Health Management System",
        category: "WebDev",
        descriptions: [],
        isDemo: true,
        linkDemo: "#",
        techIcons: []
    },
    {
        id: 3,
        image: Work3,
        title: "In-process",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: []
    },
    {
        id: 4,
        image: Work4,
        title: "In-process",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: []
    },
    {
        id: 5,
        image: Work5,
        title: "In-process",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: []
    },
    {
        id: 6,
        image: Work5,
        title: "In-process",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: []
    },
]