import React from 'react';

const Story = ({ scenario, onChoice, onGameResult }) => {
	const scenarios = [
		{
			id: 0,
			text: 'You hear about a treasure existing in the nearby archipelago. What do you do?',
			choices: [
				{ text: 'Research about it', nextScenario: 1 },
				{ text: 'Do Nothing', nextScenario: 2 }
			]
		},
		{
			id: 1,
			text: 'You find the location of island. You now try to get a boat to go to it.',
			choices: [
				{ text: 'New Boat', nextScenario: 3 },
				{ text: 'Old Boat', nextScenario: 4 }
			]
		},
		{
			id: 2,
			text: 'You go about your mundane life.',
			choices: []
		},
		{
			id: 3,
			text: 'You encounterd a big wave in the sea. You thank yourself that you did not sting on money and bought the new boat.',
			choices: [
				{ text: 'Continue your sail.', nextScenario: 5 }
			]
		},
		{
			id: 4,
			text: 'You encountered a big wave in the sea. Your old boat could not withstand it. You have sunk.',
			choices: []
		},
		{
			id: 5,
			text: 'You reach the island marked on the map.',
			choices: [
				{ text: 'Explore the island.', nextScenario: 6 }
			]
		},
		{
			id: 6,
			text: 'You decide to find something to eat before continuing your search',
			choices: [
				{ text: 'Wild Berries', nextScenario: 7},
				{ text: 'Fancy-Looking Mushrooms', nextScenario: 8}
			]
		},
		{
			id: 7,
			text: 'You eat the berries and your hunger subsided.',
			choices: [ 
				{ text: 'Continue Searching', nextScenario: 9}
			]
		},
		{
			id: 8,
			text: 'You got poisoned. You were alone on the island with no one to treat you. You died.',
			choices: []
		}
	];

	const currentScenario = scenarios.find(s => s.id === scenario);
	const handleChoice = (choice) => {
		const nextScenario = choice.nextScenario;
		onChoice(choice);

		if (nextScenario === 9) {
			onGameResult('Treasure');
		} else if (nextScenario === 2) {
			onGameResult('Do Nothing'); 
		} else if (nextScenario === 4){
			onGameResult('Sink');
		} else if (nextScenario === 8){
			onGameResult('Death');
		}
	};
	if(currentScenario.id === 1){
		const boat = [
			require("./New Boat.jpg"),
			require("./Old Boat.jpg"),
		];
		const boatdata = [
			"A new boat. Able to withstand storms. Good for sea journeys.",
			"An old worn out boat. Will break on smallest impacts.",
			"Expensive",
			"Cheap",
		];
		return (
			<div className="card mx-auto mt-5" style={{maxWidth: '500px' }}>
				<div className="card-body">
					<p className="card-text">{currentScenario.text}</p>
					<ul className="list-group">
						{currentScenario.choices.map((choice, index) => (
							<li key={index} className="list-group-item">
								{boatdata[index]}<br />{boatdata[index+2]}<br /><br />
								<img src={boat[index]	}/><br /><br />
								<button className="btn btn-primary btn-block" onClick={() => handleChoice(choice)}>
								{choice.text}</button> 
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
	if(currentScenario.id === 6){
		const boat = [
			require("./Wild Berries.jpg"),
			require("./Mushroom.jpeg"),
		];
		const boatdata = [
			"Wild Berries. Sour, sometimes sweet.",
			"Bright White Mushroom. Might be Poisonous.",
		];
		return (
			<div className="card mx-auto mt-5" style={{maxWidth: '500px' }}>
				<div className="card-body">
					<p className="card-text">{currentScenario.text}</p>
					<ul className="list-group">
						{currentScenario.choices.map((choice, index) => (
							<li key={index} className="list-group-item">
								{boatdata[index]}<br />{boatdata[index+2]}<br /><br />
								<img src={boat[index]	}/><br /><br />
								<button className="btn btn-primary btn-block" onClick={() => handleChoice(choice)}>
								{choice.text}</button> 
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
	return (
		<div className="card mx-auto mt-5" style={{maxWidth: '500px' }}>
			<div className="card-body">
				<p className="card-text">{currentScenario.text}</p>
				<ul className="list-group">
					{currentScenario.choices.map((choice, index) => (
						<li key={index} className="list-group-item">
							<button className="btn btn-primary btn-block" onClick={() => handleChoice(choice)}>
							{choice.text}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Story;
