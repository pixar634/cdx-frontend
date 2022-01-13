import React , {useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from '../config/axiosConfig';
import { useSelector, useDispatch } from 'react-redux';
import { setProjects } from '../redux/projectSlice';

function Home() {
  
  const [data , setData] = useState([{}])
  const allprojects = useSelector(state => state.project.items);
  const dispatch = useDispatch();

  const fetchProjects = async () => {
    const res = await api.get(
        '/projects',      
    );

    console.log(res.data);

    dispatch(setProjects({ projects: res.data }));
    
};

  useEffect(() =>{
   
    fetchProjects()

  },[])
 
    return (
        <div>
          <h1 className="bg-purple-700 rounded-md p-2 text-bold text-white">PROJECTS</h1>
          <div className="p-2">
            {allprojects.length > 0 &&
            allprojects.map((data,key) =>
             <div key={key} className="pb-2">
             <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{data.project_name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {data.project_description}
          </Typography>
        </AccordionDetails>
          </Accordion>
         </div>
            )}
                   
          
          </div>
          
     
        </div>
    )
}

export default Home
