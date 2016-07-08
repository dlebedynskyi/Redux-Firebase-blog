import React from 'react';
import styles from './about.scss';
import {Card, CardTitle, CardText} from 'react-toolbox/lib/card';

const About = () => (
	<div className={styles.container}>
		<Card>
			<CardTitle title="What is this?"/>
			<CardText>
				<p>This is a really simple app used to practice with firebase and sharpen redux
					and realated.</p>
				<p>
					In this app following stuff was used. give credit to authors.
					<ul>
						<li>
							<a href="https://facebook.github.io/react/">
								React</a>
						</li>
						<li>
							<a href="https://github.com/reactjs/redux">
								Redux</a>
						</li>
						<li>
							<a href="https://console.firebase.google.com/">
								Firebase</a>
						</li>
						<li>
							<a href="https://facebook.github.io/immutable-js/">
								Immutable js</a>
						</li>
						<li>
							<a href="https://github.com/acdlite/recompose">
								Recompose</a>
						</li>
					</ul>

					and a lot of other stuff. Please just open &nbsp;
					<a
						href="https://github.com/dlebedynskyi/Redux-Firebase-blog/blob/master/package.json">package.json</a>&nbsp;
					and try those yourself.
				</p>
				<p> Home Repo is <a href="https://github.com/dlebedynskyi/Redux-Firebase-blog">here</a></p>
			</CardText>
		</Card>
	</div>
);
export default About;
