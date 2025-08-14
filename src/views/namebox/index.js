import React from "react";

import { Box,Typography} from "@mui/material";

const NameBox=()=>{
    return(
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',p:10,}}>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:{xs:55,sm:75},fontFamily:'Monoton',color:'#fff'}}>Mahdi</Typography>
        </Box>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:{xs:55,sm:75},fontFamily:'Monoton',color:'#fff'}}>Ahmadi</Typography>
        </Box>
      </Box >
    )
}
export default NameBox;