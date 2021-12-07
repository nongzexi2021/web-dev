
import TweetListItem from "./TweetListItem";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTweets} from "./service";



const selectAllTweets = (state) => state.tweets.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => findAllTweets(dispatch), [])
    // const tweets = useSelector(selectAllTweets);
    // const dispatch = useDispatch();
    // useEffect(() => fetchAllTweets(dispatch), [])


    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>

                    <TweetListItem tweet={tweet}/>,



                )
            }
        </ul>
    )
};

export default TweetList;