import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//saveVideo api-ADD component,reqest:post
export const saveVideoAPI = async (videoDetails)=>{
  return  await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)

}

// getAllVideoAPI -get (use effect hook)
export const getAllVideoAPI = async ()=>{
  return  await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")

}

// saveHistoryAPI -post
export const saveHistoryAPI = async (historyDetails)=>{
  return  await commonAPI("POST",`${SERVERURL}/history`,historyDetails)

}

// getAllHistoryAPI -get
export const getAllHistoryAPI = async ()=>{
  return  await commonAPI("GET",`${SERVERURL}/history`,"")

}

// deleteHistoryAPI
export const deleteHistoryAPI = async (id)=>{
  return  await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})

}
// getAllCategoryAPI -get 
export const getAllCategoryAPI = async ()=>{
  return  await commonAPI("GET",`${SERVERURL}/categories`,{})

}

// deleteCategoryAPI
export const deleteCategoryAPI = async (id)=>{
  return  await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})

}

// updateCategoryAPI -get 
export const updateCategoryAPI = async (categoryDetails)=>{
  return  await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)

}

// removeVideoAPI -delete

export const removeVideoAPI = async (id)=>{
  return  await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})

}

// saveCategoryDetails -post

export const saveCategoryAPI = async (categoryDetails)=>{
  return  await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)

}



