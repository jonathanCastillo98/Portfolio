// IMAGES
import rappiClone from '../../assets/Portfolio/rappiClone.jpg';
import hms from '../../assets/Portfolio/hms.jpg';
import Work2 from '../../assets/Portfolio/Work2.jpg';
import Work3 from '../../assets/Portfolio/Work3.jpg';
import Work4 from '../../assets/Portfolio/Work4.jpg';
import Work5 from '../../assets/Portfolio/Work5.jpg';

// ICONS
import expressI from "../../assets/PortfolioIcons/expressJs.svg"
import nodeI from "../../assets/PortfolioIcons/nodeJs.svg"
import reactI from "../../assets/PortfolioIcons/react.svg"
import muiI from "../../assets/PortfolioIcons/materialUI.svg"
import socketioI from "../../assets/PortfolioIcons/socketIO.svg"
import postgreSQLI from "../../assets/PortfolioIcons/postgreSQL.svg"
import sequelizeI from "../../assets/PortfolioIcons/sequelize.svg"
import typescriptI from '../../assets/PortfolioIcons/typescript.svg'


export const projectsData = [
    {
        id: 1,
        image: rappiClone,
        title: "RappiClone",
        category: "WebDev",
        descriptions: [
            {
                id: 1,
                description: "Work with Agile methodologies, GIT and Microservices-based architecture to develop the role-based “Point of Sales” app."
            },
            {
                id: 2,
                description: "Use React and MUI for building a responsive SPA with reusable and scalable components that consumed our own API."
            },
            {
                id: 3,
                description: "Use Node js and Express js for building a restful API, and socket.io to manage the full-duplex connection between clients and the server."
            },
            {
                id: 4,
                description: "Use PostgreSQL as database and sequelize as ORM to store and manage the whole information."
            },
            {
                id: 5,
                description: "Create user authentication and authorization middlewares using Firebase Auth through tokens."
            },
            {
                id: 6,
                description: "Create routing using react-router-dom and authentication using the context hook and tokens."
            },
            {
                id: 7,
                description: "Implement best practices for clean coding"
            },


        ],
        isDemo: false,
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
            {
                id: 6,
                icon: postgreSQLI
            },
            {
                id: 7,
                icon: sequelizeI
            },
            {
                id: 8,
                icon: typescriptI
            },
        ],
    },
    {
        id: 2,
        image: hms,
        title: "Health Management System",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: [],
    },
    {
        id: 3,
        image: Work3,
        title: "PENDING",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: [],
    },
    {
        id: 4,
        image: Work4,
        title: "PENDING",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: [],
    },
    {
        id: 5,
        image: Work5,
        title: "PENDING",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: [],
    },
    {
        id: 6,
        image: Work5,
        title: "PENDING",
        category: "WebDev",
        descriptions: [],
        isDemo: false,
        linkDemo: "#",
        techIcons: [],
    },
]