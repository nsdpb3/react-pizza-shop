import React from "react";
const Tabs = () => {
	const [activeTab, setActiveTab] = React.useState(0);

	const onClickTab = (i) => {
		setActiveTab(i);
	};
	console.log(activeTab);
	return (
		<div className="categories">
			<ul>
				<li
					onClick={() => onClickTab(0)}
					className={activeTab === 0 ? "active" : ""}
				>
					Все
				</li>
				<li
					onClick={() => onClickTab(1)}
					className={activeTab === 1 ? "active" : ""}
				>
					Мясные
				</li>
				<li
					onClick={() => onClickTab(2)}
					className={activeTab === 2 ? "active" : ""}
				>
					Вегетарианская
				</li>
				<li
					onClick={() => onClickTab(3)}
					className={activeTab === 3 ? "active" : ""}
				>
					Гриль
				</li>
				<li
					onClick={() => onClickTab(4)}
					className={activeTab === 4 ? "active" : ""}
				>
					Острые
				</li>
				<li
					onClick={() => onClickTab(5)}
					className={activeTab === 5 ? "active" : ""}
				>
					Закрытые
				</li>
			</ul>
		</div>
	);
};
export default Tabs;
