import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import {ApiServise} from "../apiservise/apiservise";
import ChannelCard from "../ channel/channnel";
import Videos from "../vidios/vidio";
import {useParams} from "react-router";

const ChannelSd = () => {
    const {id} = useParams()
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);
 console.log(videos)
 console.log(channelDetail)
    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelDetail = await ApiServise.fetching(`channels?part=snippet&id=${id}`)
                setChannelDetail(dataChannelDetail.items[0]);
                const dataVideo = await ApiServise.fetching(`search?&part=snippet%2Cid&order=date&channelId=${id}`);
                setVideos(dataVideo.items);
            } catch (error) {
                console.log('error:', error);
            }
        };

        getData();
    }, [id]);
    return (
        <Box minHeight={'95vh'} mt={'1vh'}>
            <Box>

                <Box
                    width={'100%'}
                    height={'200px'}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.bannerExternalUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <ChannelCard video={channelDetail} marginTop={'-100px'} marginAuto={'0 auto'}/>


            </Box>
            <Container maxWidth={'90%'} sx={{marginTop: '30px'}}>
                <Videos videos={videos}/>
            </Container>
        </Box>
    );
};
export default ChannelSd;

// import React, { useEffect, useState } from 'react';
// import Box from "@mui/material/Box";
// import {CardContent, CardMedia, Stack} from "@mui/material";
// import {useParams} from "react-router";
// import { ApiServise } from "../apiservise/apiservise";
// import Videos from "../vidios/vidio";
//
// const ChanelSd = () => {
//     const { id } = useParams();
//     const [channell, setChannell] = useState();
//         const [videos, setVideos] = useState([]);
//
//
//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const data = await ApiServise.fetching(`channels?part=snippet&id=${id}`);
//                 setChannell(data.items[0]);
//
//                 const relateData = await ApiServise.fetching(`search?part=snippet%2Cid&channelId=${id}&order=date`);
//                 setVideos(relateData.items);
//
//
//             } catch (error) {
//                 console.log('error:', error);
//             }
//         };
//
//         getData();
//     }, [id]);
//     return (
//         <Box style={{ paddingTop: '7px' ,position: 'relative' }}>
//             <Stack>
//
//                     <CardMedia
//                         image={channell?.brandingSettings?.image?.BannerExternalUrl}
//                         alt={channell?.snippet?.title}
//                         sx={{
//                             width: '100%',
//                             height: '200px', objectFit:'cover',
//                         backgroundRepeat:'no-repeat'}}
//                     />
//                 <Box
//
//                     sx={{
//                         className:"margin 0 auto",
//                         marginLeft:'750px',
//                         position: 'absolute',
//                         marginTop:'100px',
//                         marginBottom:'100px',
//                         boxShadow: 'none',
//                         borderRadius: '30px',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         width: { xs: '356px', md: '310px' },
//                         height: '326px',
//                         background: 'linear-gradient(190deg, rgba(152,3,142,1) 5%, rgba(53,41,201,1) 76%)',
//                         paddingTop:"7px"
//                     }}
//                 >
//                     <CardContent
//                         sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             justifyContent: 'center',
//                             textAlign: 'center',
//                             color: 'white'
//                         }}
//                     >
//                             <CardMedia
//                                 image={channell?.snippet?.thumbnails?.high?.url}
//                                 alt={channell?.snippet?.title}
//                                 sx={{
//                                     borderRadius: '50%',
//                                     height: '180px',
//                                     width: '180px',
//                                     mb: 2,
//                                 }}
//                             />
//                     </CardContent>
//                 </Box>
//                 <Box mt={5}  sx={{ paddingLeft: '16px', paddingRight: '16px' , marginTop: '260px'}}>
//                     <Stack gap={2}>
//                         <Videos videos={videos}/>
//                     </Stack>
//                 </Box>
//             </Stack>
//         </Box>
//     );
// };
//
// export default ChanelSd;
//