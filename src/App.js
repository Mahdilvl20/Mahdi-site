
import {Card,Box,Typography} from "@mui/material";
import Fab from '@mui/material/Fab';


/// import icon
import reactIcon from './assets/icon/reactIcon.svg';
import GitIcon from './assets/icon/GitIcon.png';



function App() {
  return (
    <Card sx={{
      width: '100%',
      height: '100vh',
      borderRadius: '0',
      backgroundColor: '#1C1F47',
      overflow:'auto',
    }}>
      <Box sx={{display:'row',alignItems:'center',justifyContent:'center',p:10,}}>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:{xs:55,sm:75},fontFamily:'Monoton',color:'#fff'}}>Mahdi</Typography>
        </Box>
        <Box>
          <Typography sx={{textAlign:'center',fontSize:{xs:55,sm:75},fontFamily:'Monoton',color:'#fff'}}>Ahmadi</Typography>
        </Box>
      </Box >
      <Box sx={{display:{xs:'row',sm:'flex'},overflowY:'auto',alignItems:'center',justifyContent:'center',backgroundColor:'#F1FAEE',m:5,p:2,borderRadius:'12px',gap:10,boxShadow:'10px 14px 1px rgba(0,0,0)'}}>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'230px',
            height:'220px',
            borderRadius:'22px',
            alignItems:'center',
            backgroundColor:'#748CAB',
            justifyContent:'center',
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
          }}>
            <Fab sx={{width:'100px',height:'100px',borderRadius:'50%',backgroundImage:`url(${reactIcon})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',overflow:'none'}}>
              
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
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
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
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
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
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
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
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
          }}>
            <Fab sx={{width:'100px',height:'100px'}}>
              
            </Fab>
          </Box>
      </Box>
    </Card>
  );
}

export default App;
