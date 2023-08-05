import React from "react";
import './Counter.css'

function Counter(){
    return(
    <section className="counter-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="counter-item-wrapper">
					    <h2 className="counter-number">
					    	<span className="counter">1200</span>
					    	<span>+</span>
					    </h2>
					    <h3 className="counter-title">Running Project</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="counter-item-wrapper">
					    <h2 className="counter-number">
					    	<span className="counter">1200</span>
					    	<span>+</span>
					    </h2>
					    <h3 className="counter-title">Completed Project</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="counter-item-wrapper">
					    <h2 className="counter-number">
					    	<span className="counter">1200</span>
					    	<span>+</span>
					    </h2>
					    <h3 className="counter-title">Upcomming Project</h3>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="counter-item-wrapper">
					    <h2 className="counter-number">
					    	<span className="counter">1200</span>
					    	<span>+</span>
					    </h2>
					    <h3 className="counter-title">Total Client</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Counter