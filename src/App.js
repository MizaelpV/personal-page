import React from 'react';
import frontPage from './assets/frontPagePortfolio.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css';

const App = () => {
	return (
		<>
			<div className='App'>
				<div className='container-text'>
					<h1>Hello, I´m building this site to show my work</h1>
					<p>
						Stay tune please{' '}
						<span role='img' aria-label='fire'>
							🔥
						</span>
					</p>
				</div>
				<img src={frontPage} alt='Front page' />
			</div>
			<footer>
				<div className='social-media'>
					<a
						href='https://instagram.com/mizaelpvielma'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href='https://github.com/mizaelpv'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a
						href='https://twitter.com/mizaelpvielma'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</footer>
		</>
	);
};

export default App;
