import React, {Component} from 'react';
import NavTemplate from './NavTemplate'
import FooterTemplate from './FooterTemplate'

class PageTemplate extends Component {
	render() {
		return (<div>
			<NavTemplate></NavTemplate>
			<main className='container'>{this.props.children}</main>
			<FooterTemplate></FooterTemplate>
		</div>);
	}
}

export default PageTemplate;
