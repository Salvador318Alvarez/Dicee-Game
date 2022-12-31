import { Box, Button, Container, Paper } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useState } from "react";
import "../public/assets/dice6.png"

function App() {

  const [ranNum, setRanNum] = useState(6)
  const [oppRanNum, setOppRanNum] = useState(6)
  const [display, setDisplay] = useState(0)
  
  function handleClick() {
    setRanNum(Math.ceil(Math.random()*6))
    setOppRanNum(Math.ceil(Math.random()*6))

    setDisplay(1)
  }


     


  return (
    <>
    
    <Typography 
        variant='h3' 
        align='center'
        component='h1'
        color="primary.dark"
        gutterBottom>
      Dicee Game
    </Typography>

    <Container 
      sx={{display:'flex', 
      justifyContent:'space-evenly', 
      flexWrap:'wrap'}}> 

      <Box> 
        <Typography 
          variant='h5' 
          align="center"
          gutterBottom>
          Player 1
        </Typography>

        <Paper 
          elevation={5}
          sx={{display:'flex', 
            justifyContent:'center'}}>
          <img src={"./assets/dice" + ranNum + ".png"} />
        </Paper>
      </Box>

      <Box sx={{marginBottom:'5vh'}}> 
        <Typography
          variant='h5' 
          align="center"
          gutterBottom>
          Player 2
        </Typography>
        <Paper 
          elevation={5} 
          sx={{display:'flex',
            justifyContent:'center'}}>
          <img src={"./assets/dice" + oppRanNum + ".png"} />
        </Paper>
      </Box>

    </Container>

    <Button 
      variant="contained"
      fullWidth
      color="primary"
      onClick={() => handleClick()}
      sx={{marginBottom:'3vh'}}
      >
      Click to Play
    </Button>
 
    <Typography 
        variant='h5' 
        align='center'
        component='h1'
        color="primary.dark"
        gutterBottom>
      {display? (ranNum > oppRanNum ? "🚩 You Win! 🚩" : 
      ranNum < oppRanNum ? "You Lose!" :
      "It's a Draw!") :null }
      { }
     
    </Typography>
    </>
  )
}

export default App
