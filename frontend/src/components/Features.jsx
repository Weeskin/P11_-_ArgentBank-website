import FeaturesData from "../data/features.json";
import iconChat from "../assets/img/icon-chat.webp";
import iconMoney from "../assets/img/icon-money.webp";
import iconSecurity from "../assets/img/icon-security.webp";

export default function Features() {
	const featuresData = FeaturesData;
	const icons = {
		"icon-chat.webp": iconChat,
		"icon-money.webp": iconMoney,
		"icon-security.webp": iconSecurity
	};
	return (
		<section className="features">
			{featuresData.map((feature, index) => (
				<div
					className="feature-item"
					key={index}
				>
					<img
						src={icons[feature.icon]}
						alt={feature.alt}
						className="feature-icon"
					/>
					<h3 className="feature-item-title">{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			))}
		</section>
	);
}
