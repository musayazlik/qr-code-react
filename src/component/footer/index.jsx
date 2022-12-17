import React from "react";
import Icon from "../../assets/image/heart_icon.png";

const Footer = () => {
	return (
		<>
			<footer>
				<p>Designer By</p>
				<div className="icon">
					<img src={Icon} alt="" width={22} height={22} />
				</div>
				<a href="https://musayazlik.com">Musa Yazlık</a>
			</footer>
		</>
	);
};

export default Footer;
