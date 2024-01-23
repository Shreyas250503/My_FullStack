import Stories from "../../components/stories_/stories";
import Posts from '../../components/posts/Posts';
import './home.scss'
import React from 'react';


const Home = () => {
    return(
    <div className='home'>
     <Stories/>
     <Posts/>
    </div>
    )
};

export default Home;