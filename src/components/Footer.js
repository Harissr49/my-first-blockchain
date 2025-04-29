import video from '../assets/proanime.mp4';
function Footer(){
return(

    <video
    src={video}
    width='350'
    height='400'
    controls
    autoPlay
    unmuted
    playsInline
    loop
/>


);

}

export default Footer;