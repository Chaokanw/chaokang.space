export let greeting = "hello";

// export default greeting;


let graphiPy = {
    key: "GraphiPy",
    title: "GraphiPy",
    link: "https://pypi.org/project/GraphiPy/",
    subtitle: "<a href='https://pypi.org/project/GraphiPy/' target='new' class ='yellow highlight'>GraphiPy</a> is a Universal Social Data Extractor.",
    descriptions:[
            "It simplifies the <span class ='pink highlight'>data extraction</span> process from different social media websites. "+
            "Instead of having to study the different APIs of each website, just provide the API keys and use GraphiPy!",

            "Currently, GraphiPy provides support to 7 different websites: Reddit, Facebook, LinkedIn, Pinterest, Tumblr, Twitter, YouTube."

    ],
    video:"https://www.youtube.com/embed/I_86Q3LQvNQ",
    demos:[
    ]
}

let pixalsso = {
    key:"Pixalsso",
    title: "Pixalsso",
    subtitle:"<a href='https://pixalsso.herokuapp.com/' target='new' class ='yellow highlight'>Pixalsso</a> is a Pixelate World.",
    link:"https://pixalsso.herokuapp.com/",
    descriptions:[ "It is a full stack web application of an  <span class ='pink highlight'>image-sharing</span> social networking service that allows users to pixelate their images, share them on the gallery, search, explore, like and save the posts of other users around the world.",
    "The intended users are people who had wonderful childhood memories with video games of the late 20th century and the early 21st century."
    
    ],
    demos:[
        {
            src:"/images/demos/Pixalsso-gallery.png",
            description:"Gallery Page"
        },
        {
            src:"/images/demos/Pixalsso-login.png",
            description:"User Login Successfully"
        },
        {
            src:"/images/demos/Pixalsso-signup.png",
            description:"User Sign Up with Errors"
        },
        {
            src:"/images/demos/Pixalsso-post.png",
            description:"Post Page"
        },
        {
            src:"/images/demos/Pixalsso-makepost.png",
            description:"Make a new post with small pixel size, caption, and hashtags"
        },
        {
            src:"/images/demos/Pixalsso-user.png",
            description:"Profile page: users will see their own posts, and a private album of saved posts"
        },
        {
            src:"/images/demos/Pixalsso-search.png",
            description:"Search posts by hashtag '#Japan'"
        },
        {
            src:"/images/demos/Pixalsso-detail.png",
            description:"Detailed view on a post, user is able to like, save, and delete."
        },
        {
            src:"/images/demos/Pixalsso-01.png",
            description:"A post created by using Pixalsso"
        },
    ]
}

let weatherApp =  {
    key:"WeatherApp",
    title: "Weather App",
    subtitle:"",
    link:"http://csci571hw8-env.ybwvbvnvrs.us-east-2.elasticbeanstalk.com/",
    descriptions: ["This is Weather App"
    ],
    demos:[

    ]
}

let Gomoku =  {
    key:"Gomoku",
    title: "Gomoku",
    subtitle:"",
    descriptions: ["This is Gomoku "
    ],
    demos:[

    ]
}

export let projectList = [graphiPy, pixalsso, weatherApp, Gomoku]