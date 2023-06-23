import Avatar from "@mui/material/Avatar";


function Header() {
    return (
        <div className="col-md-12 example-title">
            <div className="profile-text">
                <p>Im VINAYRAJ, from outskirts of Banglore, my father RajKumar is a mechanic and my mom Nirmala is a tailor. I completed my schooling till 10th in rural area and 
                    finished my 12th in RNS pu college and it was these days which actually shaped my life i can say where i was the first student to crack IIT-Jee in our college 
                    history, after this many teachers noted me and motivated me to take part in all coding and science fare and have also received standing ovation twice from whole 
                    college. considering my interests i wanted to explore more and to get a career in Computer Science field and got into PES university, my favourite subjects were 
                    computer networks, OS, algorithms and data structure and i dint just restrict myself to studies i also have done a few good projects in EC and mech fields. 
                    Considering my family’s financial background i started working as a Freelancer during my engineering days and worked for 2 start-ups, Paynav and kaka uniforms , 
                    thats where most of my free time is spent, i have also developed some games and put in play store adding some ads to it these used to be my pocket money, im a travel 
                    enthusiast and i travel a lot, Im a dedicated hard worker with extreme dedication to achieve my goals also loves moon shot thinking. by this i hope ill be best fit 
                    to GigSky, and will dedicate my complete intrest towards the growth of the company.</p>
            </div>
            <div className="profile-div" >
                <img
                    alt="Profile pic"
                    className={"profile-banner-photo"}
                    src={'./pic.jpeg'}
                />
            </div>
            
        </div>
    )
}

export default Header;