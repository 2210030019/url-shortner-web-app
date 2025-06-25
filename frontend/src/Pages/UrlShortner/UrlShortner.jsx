import { Center, TextInput, Button } from '@mantine/core'
import React, {useState} from 'react'
import { useMutation } from '@tanstack/react-query'
import Service from '../../utils/http'
import { SHORTEN_URL } from '../../utils/urls'
import { useClipboard } from '@mantine/hooks'
import { IconCheck, IconCopy } from '@tabler/icons-react'

const UrlShortner = () => {
    const [title, setTitle] = useState("")
    const [originalURL, setOriginalURL] = useState("")
    const [Date, setDate] = useState("")
    const [shortURL, setShortURL] = useState("")

    const service = new Service()
    const clipboard = useClipboard({ timeout: 500 })

    const sendData = async () => {
        const response=service.post(SHORTEN_URL,{originalUrl:originalURL, expiresat:Date, title:title})
        return response
    }
    const {mutate} = useMutation({mutationFn: sendData, onSuccess(data) {
        setShortURL(`${service.getBaseURL()}/api/s/${data.shortCode}`)
    }})

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleOriginalURLChange = (e) => {
        setOriginalURL(e.target.value)
    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

  return (
    <Center style={{ height: '90vh', flexDirection:"column"}}>

      <h1 style={{fontWeight:'lighter', fontSize:"50px", margin:"20px", textShadow:"2px 2px 10px gray"}}>Shorten Your URL here</h1>
      <>
      {shortURL}
      {shortURL && shortURL.length > 0 && <TextInput value={shortURL} rightSection={
          <Button variant='outline' onClick={() => clipboard.copy(shortURL)}>
            {clipboard.copied ? <IconCheck color='black' size={16}/> : <IconCopy color='black' size={16}/>}
          </Button>
      }/>}

      <TextInput  onChange={handleTitleChange} value={title} type="text" label="Title" placeholder='Enter the Title' labelProps={{style:{fontWeight:'bold', width:400}}} mb={20}/>

      <TextInput  onChange={handleOriginalURLChange} value={originalURL} type="text" label="OriginalURL" placeholder='Enter the Original URL' labelProps={{style:{fontWeight:'bold', width:400}}} mb={20}/>

      <TextInput  onChange={handleDateChange} value={Date} type="date" label="Expiry Date" placeholder='Enter the Date of expiry' labelProps={{style:{fontWeight:'bold', width:400}}} mb={20}/>

      <Button onClick={ ()=>mutate() }w={400} variant='outline' m={30}>ShortURL</Button>
      </>

    </Center>
  )
}

export default UrlShortner
