import Navbar from "./Navbar";
import BlogCard from "./BlogCard";
import ScrollAnimation from "react-animate-on-scroll";

export const Blogs = () => {
	return (
		<div className="blogs">
		<section id="blogging" className="blogging section is-medium">
			<div className="blogging-container">
			<ScrollAnimation animateIn="animate__slideInDown" delay={3} animateOnce={true}>
				<h1>s7chak Blogs</h1>
				</ScrollAnimation>
				<br/>
				<p className="description"><b>
				A collection of my thoughts on technology, optimizations and the world of finance.
				</b></p><br/>
				<div style={{ display: 'flex', justifyContent: 'center', width: '60vw' }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						{/* <Link to="https://www.linkedin.com/subhayu.chakravarty"> */}
						<div className="button">
						<a href="/" rel="noopener noreferrer"> Home
						</a>
						</div>
					</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div className="button">
						<a href="https://medium.com/@subhayuchakravarty7" rel="noreferrer"> Medium
						</a>
						</div>
					</div>
				</div><br/><br/><br/><br/>
				<div className="columns">
					<div className="column is-multiline is-6">
						<ScrollAnimation animateIn="animate__slideInUp" delay={5} animateOnce={true}>
						<BlogCard id="Wildfire_Prediction"/><br/><br/>
						<BlogCard id="Adversarial_Attack"/><br/><br/>
						</ScrollAnimation>
					</div>
					{/* <div className="column is-multiline is-6">
						<BlogCard username="s7chak" repository="4DByD" />
						<BlogCard username="s7chak" repository="vision-api-app" />
					</div> */}
				</div>
			</div>
		</section>
		</div>
	);
};

export default Blogs;