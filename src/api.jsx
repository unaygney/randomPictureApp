import axios from 'axios';

const searchImages = async (text) => {
  const response = await axios.get('https://api.unsplash.com/search/photos' , {
        headers:{
            Authorization : 'Client-ID k0YNRFuy_d_gQhrMyT4cQqEYsG-P_HqTWDMZT7m4-BM'
        } , params: {
            query : text

        }
     })
     
     return response.data.results
}

export default searchImages;