import React, {useState, useEffect} from 'react'
import './HomeDetailsImg.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function HomeDetailsImg() {

    const {property_id} = useParams()
    const [images, setImages] = useState([])

    const changeImage = (num) => {
        let img = document.querySelector('#bannerImg')
        img?.setAttribute("src", images[num])
    }

    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
            .then(res => {
                console.log(res.data.images)
                //store data in state
                setImages(res.data.images)

            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className='home-details-img-container'>
        <div className='main-img'>
            <img id='bannerImg' src={images[0]} />
        </div>
        <div className="sub-img">
            <img onClick={()=>{changeImage(0)}} src={images[0]} />
            <img onClick={()=>{changeImage(1)}} src={images[1]} />
            <img onClick={()=>{changeImage(2)}} src={images[2]} />
            <img onClick={()=>{changeImage(3)}} src={images[3]} />
        </div>
        

    </div>
  )
}

export default HomeDetailsImg