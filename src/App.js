
import {Card,Box,Typography} from "@mui/material";

function App() {
  return (
    <Card sx={{
      width: '100%',
      height: '100vh',
      borderRadius: '0',
      backgroundColor: '#1C1F47',
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
            width:'230px',
            height:'220px',
            borderRadius:'22px',
            backgroundColor:'#748CAB',
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
          }}>

          </Box>
          <Box sx={{
            width:'230px',
            height:'220px',
            borderRadius:'22px',
            backgroundColor:'#748CAB',
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
          }}>

          </Box>
          <Box sx={{
            width:'230px',
            height:'220px',
            borderRadius:'22px',
            backgroundColor:'#748CAB',
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
          }}>

          </Box>
          <Box sx={{
            width:'230px',
            height:'220px',
            borderRadius:'22px',
            backgroundColor:'#748CAB',
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
          }}>
              
          </Box>
          <Box sx={{
            width:'230px',
            height:'220px',
            borderRadius:'22px',
            backgroundColor:'#748CAB',
            m:{xs:3,sm:0},
            p:{xs:3,sm:0}
          }}>
            
          </Box>
      </Box>
    </Card>
  );
}

export default App;
