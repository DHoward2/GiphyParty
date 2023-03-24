const form = document.querySelector("#searchform");
const input = document.querySelector('input');
const searchbtn = document.querySelector('#searchbtn');
const removebtn = document.querySelector('#removebtn');
const gifbox = document.querySelector('#gifcontainer');


async function getGif(search){
    let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=FPgXuXypL71dl9VSazHpM8uXre7yvmA3&q=${search}t&limit=1&offset=0&rating=g&lang=en`);
    let data = await res.data;
    let datapoint = await data.data[0];
    let url = await datapoint.images.original.url;
    return url;
    
}

form.addEventListener('click',async function(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id === 'searchbtn'){
        const newIMG = document.createElement('img');
        const gif = await getGif(input.value);
        newIMG.src = gif;
        gifbox.append(newIMG);
        input.value = '';
    } if(e.target.id === 'removebtn'){
        console.log(gifbox.childNodes);
        while(gifbox.hasChildNodes()){
            gifbox.removeChild(gifbox.firstChild);
        }
    }
    
})