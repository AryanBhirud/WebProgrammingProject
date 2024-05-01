import React, { useState } from 'react';
import Story from './Story';

const Game = () => {
	const [scenario, setScenario] = useState(0);
	const [gameResult, setGameResult] = useState(null);

	const handleChoice = (choice) => {
		if (choice.nextScenario !== undefined) {
			setScenario(choice.nextScenario);
		} else {
			console.error('Invalid choice!');
		}
	};

	const restartGame = () => {
		setScenario(0);
		setGameResult(null);
	};

	const handleGameResult = (result) => {
		setGameResult(result);
	};

	return (
		<div>
			{gameResult === 'Treasure' && 
				<div className="card mx-auto mt-5" style={{maxWidth: '500px' }}>
					<div className="card-body">
						<p className="card-text">You found the Treasure.</p>
						<img src = {require("./Treasure chest.jpeg")} alt="You win" />
				</div>
			</div>
			}
			{gameResult === 'Do Nothing' && 
				<div className="card mx-auto mt-5" style={{maxWidth: '500px' }}>
					<div className="card-body">
						<p className="card-text">You go about your mundane life.</p>
						<img src={require("./Boring.jpeg")} alt="You lose" />
					</div>
				</div>
			}
			{gameResult === 'Sink' && 
				<div className="card mx-auto mt-5" style={{maxWidth: '500px' }}>
					<div className="card-body">
						<p className="card-text">You encountered a big wave in the sea. Your old boat could not withstand it. You have sunk.</p>
						<img src={require("./Sink.jpeg")} alt="You lose" />
					</div>
				</div>
			}
			{gameResult === 'Death' && 
				<div className="card mx-auto mt-5" style={{maxWidth: '500px' }}>
					<div className="card-body">
						<p className="card-text">You got poisoned. You were alone on the island with no one to treat you.</p>
						<img src={require("./You Died.png")} alt="You lose" />
					</div>
				</div>
			}
			{gameResult ? (
				<center>
					<br />
					<button className="btn btn-primary btn-block" onClick={restartGame}>Restart Game</button>
				</center>
			) : (
				<Story scenario={scenario} onChoice={handleChoice} onGameResult={handleGameResult} />
			)}
		</div>
	);
};

export default Game;
