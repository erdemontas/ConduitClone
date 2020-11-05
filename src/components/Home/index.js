//React
import React from "react";

//Components
import Banner from "./Banner"
import MainView from "./MainView";

//Material



const Home = () => {
    return (
        <div>
            <Banner/>      
            <p>This is Home index</p>
            <MainView/>
        </div>
    );
}

export default Home