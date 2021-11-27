import rockerImage from './klayrocker.png';
import './App.css';
import { useState } from 'react';

function App() {
	const [onMouse, setOnMouse] = useState(false);
	const handleOnMouse = () => {
		setOnMouse(!onMouse);
	};
	return (
		<div className='App' onMouseEnter={() => handleOnMouse()}>
			<a
				className='App-link'
				href='https://open.kakao.com/o/gqoLHcKd'
				target='_blank'
				rel='noopener noreferrer'
				style={{ color: onMouse ? 'rosybrown' : 'whitesmoke' }}>
				<header className='App-header'>
					<p style={{ color: onMouse ? 'lightsalmon' : 'whitesmoke' }}>
						KLAYRock Experiments with Rockers
					</p>
					<button
						style={{ color: onMouse ? 'lightsalmon' : 'whitesmoke' }}
						onMouseEnter={() => handleOnMouse()}>
						Click to open kakaotalk
					</button>
					<img src={rockerImage} alt='logo' width='100%' />
				</header>
			</a>
		</div>
	);
}

export default App;
