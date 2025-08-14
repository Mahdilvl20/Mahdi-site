import { Box } from "@mui/material";


// import icon
import LOGO from '../assets/icon/LOGO.png';




const Header=()=>{

    
    return(
        <Box sx={{display:'flex',justifyContent:'center'}}>
             <Box sx={{
                width:{sm:'100%'},
                display:'flex',
                p:1,
                position:'fixed',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderBottomLeftRadius:'20px',
                borderBottomRightRadius:'20px',
                justifyContent:'center',
                zIndex:1000,
            }}>
                <img src={LOGO} alt="test" width='80px'/>
            </Box>
        </Box> 
    )
}

export default Header;