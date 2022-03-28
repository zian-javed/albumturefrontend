import { useState } from "react";
import './userDefault.css';

const Default = (props) =>{
    return(
        <div>
                <h1>Hi there, {user}!</h1>

                <div>
                    <h2>Your Album Collcetion</h2>
                    <span>Recently Added</span>
                    <button>Edit Collection</button>
                    {/* edit collection should link to 'Edit Collection' page */}
                    {/* button should be greyed out if user has no collection */}

                    <p>(Album Collection images go here)</p>
                    {/* map of collection list goes here but limit quantity */}
                    {/* or "Your collection is empty.. Please Add to your collection" */}
                    <span>See all</span>
                    {/* see all should link to 'View All Collection' Page */}
                </div>

                <div>
                    <h3>Suggested Albums</h3>

                    <p>(Album Collection images go here)</p>
                    {/* map of suggested albums goes here - hard coded for demo? */}
                </div>

                <div>
                    <h2>Add more albums to your collection</h2>
                    <button>Let's add more</button>
                    {/* Both above need options for if the user has no collection */}
                </div>
        </div>
    )
};

export default Default