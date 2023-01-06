import React from "react";
import RobotCard from "./robotCard";

const robotCardList = ({ robots }) => {
   /* When we do a loop, it's recommended to provide a unique key in order to
    render only the changed component instead of
    all the components of the react virtual DOM */
    const robotArray = robots.map((user, i) => {
        return (
            <RobotCard
                key={i}
                name={robots[i].name}
                username={robots[i].username}
                email={robots[i].email}
                url={robots[i].url}
                description={robots[i].desc}
            />
        );
    });
     return (
         <div>
             {robotArray}
         </div>
    );
};

export default robotCardList