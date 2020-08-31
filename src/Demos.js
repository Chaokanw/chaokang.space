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
            description:"Detailed view on a post, and the user is able to like, save, or delete."
        },
        {
            src:"/images/demos/Pixalsso-01.png",
            description:"A post created by using Pixalsso"
        }
    ]
}

let weatherApp =  {
    key:"WeatherApp",
    title: "Weather App",
    subtitle:"<span class='highlight yellow'>Weather</span> Search Web Application",
    link:"http://csci571hw8-env.ybwvbvnvrs.us-east-2.elasticbeanstalk.com/",
    descriptions: [
        "It is a full-stack web application for users to <span class='highlight pink'>search&nbsp;weather</span> information based on geolocation input or IP address."
    ],
    demos:[
        {
            src:"/images/demos/WeatherApp-landing.png",
            description:"Landing Page: Users can manually enter the address or use current location"
        },
        {
            src:"/images/demos/WeatherApp-autocomplete.png",
            description:"Auto-complete for the city input"
        },
        {
            src:"/images/demos/WeatherApp-current.png",
            description:"Search Result for New York's current weather"
        },
        {
            src:"/images/demos/WeatherApp-twitter.png",
            description:"Users are able to post a tweet about current weather"
        },
        {
            src:"/images/demos/WeatherApp-hourly.png",
            description:"Hourly humidity of New York City"
        },
        {
            src:"/images/demos/WeatherApp-weekly.png",
            description:"Weekly weather of New York City"
        },
        {
            src:"/images/demos/WeatherApp-detail.png",
            description:"Weather Forecast of New York City on 08/01/2020"
        },
        {
            src:"/images/demos/WeatherApp-favorite.png",
            description:"Users are able to save location into the favorite list"
        }


    ]
}

let Gomoku =  {
    key:"Gomoku",
    title: "Gomoku",
    subtitle:"<span class='yellow highlight'>Gomoku</span> - Five in a Row",
    // download:,
    descriptions: [
        "It is an abstract strategy <span class='pink highlight'>board game</span>. "+
        "It is played with black and white stones on a 15×15 grid intersections board. "+
        "Two players alternate turns placing a stone of their color on an empty intersection. The winner is the first player to form an unbroken chain of five stones horizontally, vertically, or diagonally.  "
    ],
    demos:[
        {
            src:"/images/demos/Gomoku-main.png",
            description:"Main scene"
        },
        {
            src:"/images/demos/Gomoku-user.png",
            description:"User need to sign in to start the game"
        },
        {
            src:"/images/demos/Gomoku-start.png",
            description:"Game scene: users' records will be displayed on the upper-right"
        },
        {
            src:"/images/demos/Gomoku-game.png",
            description:"Game in progress"
        },
        {
            src:"/images/demos/Gomoku-instruction.png",
            description:"Instruction about the game"
        },
        {
            src:"/images/demos/Gomoku-history.png",
            description:"History records"
        },
        {
            src:"/images/demos/Gomoku-setting.png",
            description:"Settings: users are able to turn on/off the sound and switch the language"
        },
        {
            src:"/images/demos/Gomoku-language.png",
            description:"Change the Language to Chinese"
        }
        

    ]
}

export let projectList = [graphiPy, pixalsso, weatherApp, Gomoku]