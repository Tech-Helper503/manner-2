import React, { useState,FC,ReactElement, useEffect } from 'react';
import { 
    Card,
    CardHeader,
    CardContent, 
    CardActions,
    Typography, 
    Button,
    LinearProgress,  
    makeStyles
} from '@material-ui/core';


import { ThumbUp,ThumbDown } from '@material-ui/icons'
import { blue, grey } from '@material-ui/core/colors'


const groupStyles = makeStyles({
    classes: {
        hidden: {
            display:"none"
        },
        shown: {
            display: "block"
        }
    }
})

// For now...
type UiMember = {
    name: string;
};

export type UiGroup = {
    name:string;
    members: Array<UiMember>;
    description: string;
    likes: number;
    dislikes: number;
    membersnum: number;
    likeToDislikeRatio: number;
};

type Color = {
    50:string;
    100:string;
    200:string;
    300:string;
    400:string;
    500:string;
    600:string;
    700:string;
    800:string;
    900:string;
    A100:string;
    A200:string;
    A300:string;
    A400:string;
    A500:string;
    A600:string;
    A700:string;
}

interface GroupProps {
    group: UiGroup;
};


const Group:FC<GroupProps> = ({ group }):ReactElement => {
    const groupName:string = group.name;
    const groupMembers:Array<UiMember> = group.members;
    const groupDesc:string = group.description;
    const [hidden,setHidden] = useState(true);
    const [groupLikes,setGroupLikes] = useState(group.likes);
    const [groupDislikes,setGroupDislikes] = useState(group.dislikes);
    const [color,setColor] = useState(grey as Color)
    const [isLiked,setIsLiked] = useState(false)
    const [isDisliked,setIsDisLiked] = useState(false)
    const [ratio,setRatio] = useState(group.likeToDislikeRatio / 100)
    const styles = groupStyles({})


    const likeHandler:() => void = ():void => {
        setIsDisLiked(false)
        setIsLiked(true)
        setGroupLikes(prevGroupLikes => prevGroupLikes + 1)
        setColor(blue as Color)
    }

    const setRatioHandler = (prevRatio) => {
        prevRatio
    }

    const disLikeHandler = ():void => {
        setIsDisLiked(true)
        setIsLiked(false)
        setGroupDislikes(prevGroupDislikes => prevGroupDislikes + 1)
        setRatio(prevRatio => prevRatio + 1 / 100);
        setColor(blue as Color)
    }

    if(hidden === true) {

    } else {

    }


    return (
        <Card>
            <CardHeader>
                <Typography>{ group }</Typography>
            </CardHeader>

            <CardContent>
                <Typography 
                    paragraph
                >
                    { groupDesc.slice(0,32) } 
                    <div 
                        onClick={() => setHidden(prevHidden => !prevHidden)}
                    >...</div>
                    
                    <Typography 
                        paragraph 
                        className={''}
                    >
                        {  groupDesc.slice(31) }
                    </Typography>
                </Typography>
            </CardContent>

            <CardActions>
                <div
                    onClick={likeHandler}
                >
                    <ThumbUp></ThumbUp>
                </div>


                <Typography>{ groupLikes }</Typography>

                <div 
                    onClick={() => disLikeHandler}
                >
                    <ThumbDown></ThumbDown>
                </div>

                <Typography>{ groupDislikes }</Typography>

                <Button 
                    variant="outlined" 
                    color="primary"
                >Join Group</Button>
                <LinearProgress variant="determinate" value={ratio}></LinearProgress>
                <LinearProgress className={'name'}></LinearProgress>
            </CardActions>
        </Card>
    )
}

export default Group;