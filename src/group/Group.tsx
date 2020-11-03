import React, { useState,FC,ReactElement } from 'react';
import { 
    Card,
    CardHeader,
    CardContent, 
    CardActions,
    Typography, 
    Button,  
} from '@material-ui/core';


import { ThumbUp,ThumbDown } from '@material-ui/icons'
import { blue, grey } from '@material-ui/core/colors'


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

    const likeHandler = ():void => {
        setIsDisLiked(false)
        setIsLiked(true)
        setGroupLikes(prevGroupLikes => prevGroupLikes + 1)
        setColor(blue as Color)
    }

    const disLikeHandler = ():void => {
        setIsDisLiked(true)
        setIsLiked(false)
        setGroupDislikes(prevGroupDislikes => prevGroupDislikes + 1)
        setColor(blue as Color)
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
                        style={{ display:hidden ? 'none' : 'block' }}
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
            </CardActions>
        </Card>
    )
}

export default Group;