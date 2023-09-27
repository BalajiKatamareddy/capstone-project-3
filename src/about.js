import image from './image/M&B.jpg'
function About(){
    let css={
        fontSize:'25px'
    }
    return(
        <div style={css}>
            <h1>About Page</h1>
            <img src={image} alt='image'/>
            <p align="justify">One of the significant expenses in e-commerce is maintaining inventory. Keeping too much stock ties up capital and storage space, while keeping too little can lead to lost sales. Effective inventory management through data analysis and demand forecasting can help strike the right balance. Employing just-in-time inventory practices can reduce storage costs and minimize the risk of overstocking.</p>
            <p align="justify">Rather than investing heavily in broad marketing campaigns, consider targeted marketing efforts that focus on the most promising customer segments. Use analytics to identify high-conversion channels and allocate resources accordingly. Social media and influencer marketing can also be cost-effective methods to reach your target audience.</p>
            <p align="justify">Leverage data analytics to gain insights into customer behavior, market trends, and the effectiveness of marketing campaigns. This information can help refine strategies, reduce marketing waste, and allocate resources more efficiently.</p>
            <footer>&copy; 2023-K&M Groups of Company</footer>
        </div>
    );
}
export default About;