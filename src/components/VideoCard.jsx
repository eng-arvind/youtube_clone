import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard =  ({ video :{id:{videoId}, snippet}}) =>{

    return (
    <Card sx={{width:{xs: '100%', sm: '358px', md: "320px",}, boxShadow: "none", borderRadius: 0,backgroundColor:'var(--backgroundColor)'}} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} 
            alt={snippet?.title} sx={{height: 180,borderRadius:3}} />
        </Link>
        <CardContent sx={{backgroundColor:'transparent',width:{xs: '100%', sm: '358px', md: "320px",},p:1,pb:1}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                <Typography variant='subtitle1' fontWeight='bold' color='var(--white)'>
                    {snippet?.title?.slice(0,60) || demoVideoTitle.slice(0.60) }
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography variant='subtitle2' fontWeight='bold' color='gray' sx={{display:'flex'}}>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSixe:12,color:'gray',ml:'5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard