import Featured from "./Featured";
import MatchesHome from "./Matches";
import MeetPlayers from "./meetPlayers";
import Promotion from "./promotion/index";

const Home = () => {
    return(
        <div className="container_width">
            <Featured/>
            <MatchesHome/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    )
}

export default Home;