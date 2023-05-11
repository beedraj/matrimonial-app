import React from 'react';
import { Config } from '@/Config';
import axios from 'axios';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { setLoader } from '@/Store/Loader';
import { useDispatch } from 'react-redux'
// const dispatch = useDispatch()

export const ApiRequest = axios.create({
  baseURL: Config.API_URL

})

export const fetchRequest = (endpoints, requestBody) => {
  console.log(`${endpoints + ' API PARAMS'}`, requestBody)
  return new Promise((resolve) => {
    fetch(Config.API_BASE_URL + endpoints, requestBody)
      .then(response => response.text())
      .then(result => {
        console.log(endpoints, result)
        resolve(JSON.parse(result))
      })
      .catch(error => {
        console.log(endpoints, error)
        resolve(error)
      }
      );
  })
}

export const upLoadFile = (file, access_token) => {
  console.warn("resolve",file)
  return new Promise((resolve) => {
    var myHeaders = new Headers()
    myHeaders.append('Authorization', `${'Bearer ' + access_token}`)
    myHeaders.append('Content-Type', 'multipart/form-data')
    myHeaders.append('Accept', 'application/json')
    var formdata = new FormData()

    formdata.append('file', {
      
      name: file?.fileCopyUri.split('/').pop(),
      type: file.type,
      uri:
        Platform.OS === 'android'
          ? file.fileCopyUri
          : file.fileCopyUri.replace('file://', ''),
    })
    
    formdata.append("file_type", "candidate_resume")
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }
    // setLoader(true)

    fetch(Config.API_BASE_URL + Config.END_POINTS.FILE_UPLOAD, requestOptions)
      .then(response => response.text())
      .then(result => {
    //  setLoader(false)

        console.log("result",result)
        resolve(JSON.parse(result))
      })
      .catch(error => {
        console.log('error', error)
        resolve(error)
      }
      );
  })
 
}
