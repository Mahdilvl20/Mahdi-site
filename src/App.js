
import {Card} from "@mui/material";
import NameBox from "./views/namebox/index";
import CenterNavbar from "./views/center-navbar";



const App=()=> {
  return (
    <Card sx={{
      width: '100%',
      height: '100vh',
      borderRadius: '0',
      backgroundColor: '#1C1F47',
      overflow:'auto',
    }}>
      <NameBox/>
      <CenterNavbar/>
    </Card>
  );
}

export default App;
