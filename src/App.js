
import {Card} from "@mui/material";
import NameBox from "./views/namebox/index";
import CenterNavbar from "./views/center-navbar";
import Header from "./header";



const App=()=> {
  return (
    <Card sx={{
      width: '100%',
      height: '100vh',
      borderRadius: '0',
      backgroundColor: '#1C1F47',
      overflow:'auto',
    }}>
      <Header/>
      <NameBox/>
      <CenterNavbar/>
    </Card>
  );
}

export default App;
