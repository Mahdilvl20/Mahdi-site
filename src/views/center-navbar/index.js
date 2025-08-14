import React from "react";
import { Box,Typography } from "@mui/material";
import Fab from "@mui/material/Fab";

/// import icon
import reactIcon from '../../assets/icon/reactIcon.svg';
import GitIcon from '../../assets/icon/GitIcon.png';


function CenterNavbar(){
    return(
        <Box sx={{
            display:'flex',
            flexDirection:{xs:'column',sm:'column',lg:'row'},
            overflowY:'hidden',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#F1FAEE',
            m:5,
            p:2,
            borderRadius:'12px',
            gap:10,
            boxShadow:'10px 14px 1px rgba(0,0,0)',
            transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
            ":hover":{
              
              backgroundColor:'#626366',
              boxShadow:'0px 0px 0px rgba(0,0,0),0px 0px 0px rgba(0,0,0),0px 0px 300px rgba(0,0,0)'
            }
            }}>
              <Box sx={{
                display:'flex',
                flexDirection:'column',
                minWidth:'130',
                minHeight:'120',
                width:'230px',
                height:'220px',
                borderRadius:'22px',
                alignItems:'center',
                backgroundColor:'#748CAB',
                justifyContent:'center',
                
              }}>
                <Fab sx={{width:'100px',height:'100px',borderRadius:'50%',backgroundImage:`url(${reactIcon})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',overflow:'none'}}>
                  
                </Fab>
                <Box>
                  <Typography>test</Typography>
                </Box>
              </Box>
              <Box sx={{
                display:'flex',
                flexDirection:'row',
                width:'230px',
                height:'220px',
                borderRadius:'22px',
                alignItems:'center',
                backgroundColor:'#748CAB',
                justifyContent:'center',
                
              }}>
                <Fab sx={{width:'100px',height:'100px',borderRadius:'50%',backgroundImage:`url(${GitIcon})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',overflow:'none'}}>
                  
                </Fab>
              </Box>
              <Box sx={{
                display:'flex',
                flexDirection:'row',
                width:'230px',
                height:'220px',
                borderRadius:'22px',
                alignItems:'center',
                backgroundColor:'#748CAB',
                justifyContent:'center',
              }}>
                <Fab sx={{width:'100px',height:'100px'}}>
                  
                </Fab>
              </Box>
              <Box sx={{
                display:'flex',
                flexDirection:'row',
                width:'230px',
                height:'220px',
                borderRadius:'22px',
                alignItems:'center',
                backgroundColor:'#748CAB',
                justifyContent:'center',
              }}>
                <Fab sx={{width:'100px',height:'100px'}}>
                  
                </Fab>
              </Box>
              <Box sx={{
                display:'flex',
                flexDirection:'row',
                width:'230px',
                height:'220px',
                borderRadius:'22px',
                alignItems:'center',
                backgroundColor:'#748CAB',
                justifyContent:'center',
              }}>
                <Fab sx={{width:'100px',height:'100px'}}>
                  
                </Fab>
              </Box>
          </Box>
    )
}
export default CenterNavbar;