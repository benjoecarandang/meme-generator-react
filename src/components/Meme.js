import React, {useState, useEffect} from "react"

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "One does not simply",
            bottomText: "Walk into Mordor",
            customImageUrl: "",
            randomImage: 'https://i.imgflip.com/3oevdk.jpg'
        }
    )

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }

        getMemes()
    }, [])

    function getMemeImage() {
        const random = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[random].url

        setMeme(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: url,
            customImageUrl: ""
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        getMemeImage()
    }

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form--button">Get a new meme image</button>

                <input 
                    type="text"
                    placeholder="Paste custom image URL here"
                    className="form--input form--input-custom-url"
                    name="customImageUrl"
                    value={meme.customImageUrl}
                    onChange={handleChange}
                />
            </form>

            <div className="meme">
                <img src={meme.customImageUrl !== "" ? meme.customImageUrl : meme.randomImage} className="meme--image" alt="string" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}