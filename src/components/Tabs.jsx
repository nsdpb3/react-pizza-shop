import React from "react";
const Tabs = () => {
	const [activeTab, setActiveTab] = React.useState(0);
	const tabs = [
		"Все",
		"Мясные",
		"Вегетарианская",
		"Гриль",
		"Острые",
		"Закрытые",
	];

	const onClickTab = (i) => {
		setActiveTab(i);
	};
	console.log(activeTab);
	return (
		<div className="categories">
			<ul>
				{tabs.map((value, i) => (
					<li
						key={i}
						onClick={() => onClickTab(i)}
						className={activeTab === i ? "active" : ""}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Tabs;
