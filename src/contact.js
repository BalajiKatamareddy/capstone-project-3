import image from './image/K&M.jpg'
function Contact(){
    let css={
        fontSize:'20px'
    }
    return(
        <div style={css}>
            <h1>Contact</h1>
            <p>For any regardings don't hesitate to Contact</p>
            <img src={image} alt='image'/>
            <p>EmailUS:</p>
            <p>K&MGroups@gmail.com</p>
        </div>
    )
}
export default Contact;