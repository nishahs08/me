import {Grid,Box} from '@mui/material'
import { Project } from "./Project"
import todo from '../images/todo.png';
import covid from '../images/covid.png';


const projects = [{
    id:1,
    src:todo,
    title :'TODO',
    github:'',
    appLink:''
},
{
    id:2,
    src:covid,
    title :'COVID TRACKER',
    github:'',
    appLink:''
},
{
    id:3,
    src:covid,
    title :'COVID TRACKER',
    github:'',
    appLink:''

}]

export const Projects = () =>{
    return(
       
        <Grid container spacing={4} justifyContent='center' alignItems='center'>
        {
            projects.map(project=><Grid item><Project key={project.id} project={project}/></Grid>)
        }
        </Grid>
    
    )
}