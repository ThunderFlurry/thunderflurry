/**
 *	ThunderFlurry (https://thunderflurry.github.io/)
 *
 * Copyright © 2015 - 2016 Cinecove Digital, LLC. All rights reserved
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import config from '../../../../../package.json';

class App extends Component {

	static propTypes = {
		context: PropTypes.shape({
			insertCss: PropTypes.func,
			onSetTitle: PropTypes.func,
			onSetMeta: PropTypes.func,
			onPageNotFound: PropTypes.func
		}),
		children: PropTypes.element.isRequired,
		error: PropTypes.object
	};

	static childContextTypes = {
		insertCss: PropTypes.func.isRequired,
		onSetTitle: PropTypes.func.isRequired,
		onSetMeta: PropTypes.func.isRequired,
		onPageNotFound: PropTypes.func.isRequired
	};

	getChildContext() {
		const context = this.props.context;
		return {
			insertCss: context.insertCss || emptyFunction,
			onSetTitle: context.onSetTitle || emptyFunction,
			onSetMeta: context.onSetMeta || emptyFunction,
			onPageNotFound: context.onPageNotFound || emptyFunction
		};
	}

	componentWillMount() {
		const { insertCss } = this.props.context;
		this.removeCss = insertCss(s);
	}

	componentWillUnmount() {
		this.removeCss();
	}

	render() {
		return !this.props.error ? (
			<div className={s['splash-begin']}>
				<div className={s.container}>
					<div className={s['image-container']}></div>
					<div className={s['image-caption']}>I wish I knew how to quit you.</div>
				</div>
				<div className={s['version-label']}>
					<div><a href="https://thunderflurry.github.io/">ThunderFlurry</a> build <a href="https://github.com/thunderflurry/thunderflurry">v.{config.version}</a></div>
				</div>
			</div>
		) : this.props.children;
	}

};

export default App;
