const BasicDetails = () => {
    let name = "Chirag Goel";
    let detail = "Engineer at Microsoft | ex-Flipkart | Teacher | Mentor | YouTuber 🚀";
    let imageSrc = "https://media.licdn.com/dms/image/D5603AQGR_C2oAwVRBQ/profile-displayphoto-shrink_400_400/0/1673037498537?e=1714003200&v=beta&t=lZYqudu3k6tTfkA5_yNXQgSdUPISJnslY9O6xUHTw-M";
    return (
      <div>
        <h1>{name}</h1>
        <img src={imageSrc} />
        <p>{detail}</p>
      </div>
    )
  }


  export default BasicDetails;