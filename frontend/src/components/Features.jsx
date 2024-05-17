import FeaturesData from "../data/features.json";

export default function Features() {
	const featuresData = FeaturesData;
	return (
		<section className="features">
			{featuresData.map((feature, index) => (
				<div
					className="feature-item"
					key={index}
				>
					<img
						src={"../../assets/img/" + feature.icon}
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
