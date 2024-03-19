import React from 'react';
import IntroBanner from '../components/IntroBanner.components';
import HottestFoods from '../components/HottestFoods.components';
import HowDoesItWork from '../components/HowDoesItWork.components';


function Home() {
    const howDoesItWorkRef = React.useRef(null)

    function scrollToHowDoesItWork() {
        howDoesItWorkRef.current.scrollIntoView({ behaviour: "smooth" })
    }

    return <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <main id="main" className="site-main">
                        <article id="post-21" className="post-21 page type-page status-publish hentry">
                            <div className="entry-content">
                                <IntroBanner scrollTo={scrollToHowDoesItWork}/>
                                <HottestFoods />
                                <div ref={howDoesItWorkRef}><HowDoesItWork/></div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
}


export default Home