import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI } from '../services/allAPI'

const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard] = useState("")
  const [allVideos,setAllVideo] = useState([])

  useEffect(()=>{
    getAllVideos()
  },[addResponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory,setDeleteResponseFromView])

  console.log(allVideos);

  const getAllVideos = async ()=>{
    try{
      const result = await getAllVideoAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVideo(result.data)
      }
      

    }catch(err){
      console.log(err);
      

    }
  }
  
  const dragOverView =(e)=>{
    e.preventDefault()
  }
  const categoryVideoDropOverView =(e)=>{
    console.log("inside categoryVideoDropOverView");
    const {video,categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);
    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item?.id!=video?.id)
    const updatedCategory ={...categoryDetails,allVideos:updatedCategoryVideoList}
    console.log(updatedCategory);
    

    
    
  }
  
  return (
    <>
    <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}>
      {
        allVideos?.length>0?
        allVideos?.map(video=>(
          <Col key={video?.id} className='mb-2' sm={12} md={6} lg={3}>
           <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video} />
          </Col>
          
        ))
        :
        <div className='fw-bolder text-danger fs-5'>No videos are uploaded yet!!!</div>
      }
    </Row>
 
    </>
  )
}

export default View