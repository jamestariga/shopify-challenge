const nasaTitle = document.querySelector(".nasa-title")
const nasaDesc = document.querySelector(".nasa-description")
const nasaImg = document.querySelector(".nasa-image")
const dateDesc = document.querySelector(".date")
const imgDesc = document.querySelector(".image-description")

const getData = async () => {

    try {
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=XvD36hfK37UmCdSYeEgh7ic2WdTrVXgY51pJCXxL')
        console.log(res)

        const { title, explanation, date, url } = res.data

        nasaTitle.innerHTML = title
        nasaDesc.innerHTML = explanation
        nasaImg.innerHTML = `<img src="${url}">`
        dateDesc.innerHTML = date

    } catch (err) {
        console.error(err)
    }
}

getData()