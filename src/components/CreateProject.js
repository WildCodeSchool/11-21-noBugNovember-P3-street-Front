import React, { useState, useEffect, useRef } from 'react'
import '../styles/CreateProject.css'
import 'react-calendar/dist/Calendar.css'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import axios from 'axios'

const CreateProject = () => {
  const [domaines, setDomaine] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [regions, setRegions] = useState([])
  const [startDate, setStartDate] = useState([])
  const [endDate, setEndDate] = useState([])
  const [data, setData] = useState('')
  const [photos, setPhotos] = useState()
  const [image, setImage] = useState({ data: '' })
  const [status, setStatus] = useState('')
  const [idrRegions, setIdrRegions] = useState(0)
  const [imgProfile, setImgProfile] = useState('')

  const mySelect = useRef()
  const secondSelect = useRef()

  const [newProject, setNewProject] = useState({
    name: '',
    domaines: '',
    description: '',
    regions: '',
    startDate: '',
    endDate: '',
  })
  useEffect(() => {
    axios
      .get('http://localhost:3030/all/domain')
      .then((res) => console.log(res) || setDomaine(res.data))
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:3030/all/regions')
      .then((res) => setRegions(res.data))
  }, [])

  const postProject = async (e) => {
    console.log('postEnter')
    await setNewProject({
      ...newProject,
      domaines: mySelect.current.value,
      regions: secondSelect.current.value,
    })
    createProject(e)
    console.log('leaveEnter')
  }

  let idDomaine
  let idRegions

  const createProject = (e) => {
    e.preventDefault()
    console.log('createProject', mySelect.current.value.toLowerCase())
    switch (mySelect.current.value.toLowerCase()) {
      case 'arts-visuels':
        idDomaine = 1
        break
      case 'musique':
        idDomaine = 2
        break
      case 'littérature et poésie':
        idDomaine = 3
        break
      case 'arts de la scène':
        idDomaine = 4
        break
      case 'cinéma':
        idDomaine = 5
        break
      case 'arts médiatiques':
        idDomaine = 6
        break
      default:
        console.log('domaine not found')
    }
    switch (secondSelect.current.value.toLowerCase()) {
      case 'auvergne-rhône-alpes':
        idRegions = 1
        break
      case 'bourgogne-franche-comté':
        idRegions = 2
        break
      case 'bretagne':
        console.log('login')
        // setIdrRegions(3);
        idRegions = 3
        break
      case 'centre-val de loire':
        idRegions = 4
        break
      case 'corse':
        idRegions = 5
        break
      case 'grand est':
        idRegions = 6
        break
      case 'hauts-de-france':
        idRegions = 7
        break
      case 'ile-de-france':
        idRegions = 8
        break
      case 'normandie':
        idRegions = 9
        break

      case 'nouvelle-aquitaine':
        idRegions = 10
        break
      case 'occitanie':
        idRegions = 11
        break
      case 'pays de la loire':
        idRegions = 12
        break
      case 'provence-alpes-côte d’azur':
        idRegions = 13
        break
      default:
        console.log('region not found')
    }
    axios
      .post('http://localhost:3030/users/createproject', {
        name: newProject.name,
        estimated_start_date: newProject.startDate,
        estimated_end_date: newProject.endDate,
        description: newProject.description,
        team_completed: 0,
        status: 0,
        domain_id: idDomaine,
        users_id: 1,
        blocked: 1,
        region_id: idRegions,
        logo: imgProfile,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log('leaveProject')
  }

  const handleSubmit = async (e) => {
    console.log('chcoken')
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    console.log(formData)
    await fetch('http://localhost:3030/all/image', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res) || setImgProfile(res.data)
      })
  }

  const handleFileChange = (e) => {
    const img = {
      data: e.target.files[0],
    }
    setImage(img)
  }

  return (
    <>
      {console.log(imgProfile)}
      <div className='titleContainer'>
        <h2>Créez votre projet</h2>
      </div>
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Upload profile picture</label>
          <input
            type="file"
            name="file"
            onChange={(e) => handleFileChange(e)}
            required
          />
        </div> */}

      <div className='firstContainer'>
        <div className='secondContainer'>
          <div className='thirdContainer'>
            <p>Nom du projet</p>
            <input
              className='name'
              type='text'
              placeholder='Streetzer'
              onChange={(e) => {
                const { value } = e.target
                setNewProject({ ...newProject, name: value })

                // console.log(value)
              }}
            ></input>

            <p>Domaine</p>
            <select className='selectDomaine' name='Domaine' ref={mySelect}>
              <option value=''>Choisissez votre domaine</option>
              {domaines !== [] &&
                domaines.map((domaine) => (
                  <option key={domaine.id} value={domaine.domain}>
                    {domaine.domain}
                  </option>
                ))}
            </select>
            <p>Description</p>
            <textarea
              className='descriptionProject'
              type='text'
              onChange={(e) => {
                const { value } = e.target
                setNewProject({ ...newProject, description: value })

                // console.log(setDescription)
              }}
            ></textarea>
          </div>
          <div className='fourthContainer'>
            <div className='photoContainer'>
              <img
                src={imgProfile}
                alt='profile'
                width='115px'
                height='115px'
              />
            </div>
            <div className='buttonContainer'>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label>Upload profile picture</label>
                  <input
                    type='file'
                    name='file'
                    onChange={(e) => handleFileChange(e)}
                    required
                  />
                </div>
                <input type='submit' value='upload' />
              </form>
            </div>
          </div>
          <div className='fifthContainer'>
            <div className='sixthContainer'>
              <p>Région</p>
              <select
                className='selectRegion'
                name='regions'
                ref={secondSelect}
              >
                <option value=''>Choisissez votre région</option>
                {regions !== [] &&
                  regions.map((region) => (
                    <option key={region.id} value={region.region_name}>
                      {region.region_name}
                    </option>
                  ))}
              </select>
              <Stack
                className='calendar'
                component='form'
                noValidate
                spacing={3}
                onChange={(e) => {
                  const { value } = e.target
                  setNewProject({ ...newProject, startDate: value })
                }}
              >
                <TextField
                  id='date'
                  label='Date de début'
                  type='date'
                  defaultValue='2022-02-28'
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
              <Stack
                className='calendar'
                component='form'
                noValidate
                spacing={3}
                onChange={(e) => {
                  const { value } = e.target
                  setNewProject({ ...newProject, endDate: value })
                }}
              >
                <TextField
                  id='date'
                  label='Date de fin'
                  type='date'
                  defaultValue='2022-02-28'
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Stack>
            </div>
            <div className='seventhContainer'>
              <div className='holderButton'>
                <div className='holderButton'>
                  <button
                    className='secondButton'
                    onClick={(e) => postProject(e)}
                  >
                    Publier le projet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </>
  )
}

export default CreateProject
