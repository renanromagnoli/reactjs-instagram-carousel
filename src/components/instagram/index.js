import axios from 'axios'

export async function instagramFeed() {
    const token = process.env.REACT_APP_INSTAGRAM_FEED // no react usa-se: process.env.NOMEDAVARIAVEL
    
    const fields = 'media_url,media_type,permalink,caption'
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`

    const {data} = await axios.get(url)
    // const data = fetch(url)
    //     .then(response => response.json())
    // console.log(data.data)
    return data.data
}

