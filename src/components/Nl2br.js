import React, {Component} from 'react';

/**
 * Nl2br
 * @extends Component
 */
class Nl2br extends Component {

	constructor(props) {
		super(props);
		this.nl2br = this.nl2br.bind(this);
	}

	nl2br(text) {
		const regex = /(\n)/g
		return text.split(regex).map((line,i,a) => {
			if (line.match(regex)) {
				return React.createElement('br',{ key: i });
			} else {
				return line;
			}
		});
	}

	render() {
		return (<p>{this.nl2br(this.props.text)}</p>);
	}
}

export default Nl2br;
