import React, { useState, useEffect, useRef } from 'react';
import "./CreateProject.css";
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from 'axios'


const CreateProject = () => {
    const [name, setName] = useState("")
    const [domaines, setDomaine] = useState([])
    const [description, setDescription] = useState("")
    const [regions, setRegions] = useState([])
    const [data, setData] = useState("")
    const [photos, setPhotos] = useState()
    const [image, setImage] = useState({ data: '' })
    const [status, setStatus] = useState('')


    useEffect(() => {
        axios.get("http://localhost:3030/all/domain")
        .then(res => console.log(res) || setDomaine(res.data))}, [])

    useEffect(() => {
    axios.get("http://localhost:3030/all/regions")
    .then(res => setRegions(res.data))}, [])
    
    const handleClick = () => {
        console.log("koko", name, description)
        axios.post("http://localhost:3030/users/create_project",
        {name, description})
        .then(res => setData(!data) )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', image.data)
        const response = await fetch('http://localhost:3030/all/image', {
          method: 'POST',
          body: formData,
        })
        if (response) setStatus(response.statusText)
      }

      const handleFileChange = (e) => {
        const img = {
          data: e.target.files[0],
        }
        setImage(img)
      }

  return (
    <>
        <div className="titleContainer" >
            <h2>Créez votre projet</h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Upload profile picture</label>
                <input type="file" name="file" onChange={(e) => handleFileChange(e)} required/>
            </div>
            <div>
                <button type="submit">Upload</button>
            </div>
        </form>
        {status && <h4>{status}</h4>}
        <div className="firstContainer">
            <div className="secondContainer" >
                <div className="thirdContainer">
                    <p>Nom du projet</p>
                    <input className="name" type="text" placeholder="Streetzer"></input>
                    <p>Domaine</p>
                    <select className="selectDomaine" name="Domaine">
                    <option value="">Choisissez votre domaine</option>
                        {domaines.map((domaine)=> (
                                <option>{domaine.domain}</option>
                                ))}
                    </select>
                    <p>Description</p>
                    <input className="descriptionProject" type="text" onChange={e =>{
                        const {value} = e.target;
                        setPhotos(value)
                    }} ></input>
                </div>
                <div className="fourthContainer" >
                    <div className="photoContainer"></div>
                    <div className="buttonContainer">
                        <input  type="file" id="file" accept=".jpg" onChange={e => {
                            const file = e.target.files[0]}} />
                    </div>
                </div>
                <div className="fifthContainer">
                    <div className="sixthContainer">
                        <p>Région</p>
                        <select className="selectRegion" name="regions">
                            <option value="">Choisissez votre région</option>
                            {regions.map((region)=> (
                                <option>{region.region_name}</option>
                            ))}
                        </select>
                        <Stack className="calendar" component="form" noValidate spacing={3}>
                        <TextField
                            id="date"
                            label="Date de début"
                            type="date"
                            defaultValue="2022-02-28"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            />  
                        </Stack>
                        <Stack  component="form" noValidate spacing={3}>
                        <TextField
                            id="date"
                            label="Date de fin"
                            type="date"
                            defaultValue="2022-02-28"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            />
                        </Stack>
                    </div>
                    <div className="seventhContainer">
                        <div className="holderButton">
                            <div className="holderButton"><button className="secondButton" onClick={handleClick} >Publier le projet</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>    

  );
};

export default CreateProject;












