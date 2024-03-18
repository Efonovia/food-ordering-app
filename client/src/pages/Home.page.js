import React from 'react';
import IntroBanner from '../components/IntroBanner.components';
import HottestFoods from '../components/HottestFoods.components';
import HowDoesItWork from '../components/HowDoesItWork.components';


function Home() {
    const howDoesItWorkRef = React.useRef(null)

    function scrollToHowDoesItWork() {
        howDoesItWorkRef.current.scrollIntoView({ behaviour: "smooth" })
    }

    return <div id="content" class="site-content">
                <div id="primary" class="content-area">
                    <main id="main" class="site-main">
                        <article id="post-21" class="post-21 page type-page status-publish hentry">
                            <div class="entry-content">
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