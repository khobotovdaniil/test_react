import React, { Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';
import {Form, Container} from 'react-bootstrap';

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'black'};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;

const Header = styled.h2`
	font-size: 22px;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0,0,0, .2);
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	border-radius: 5px;
`;

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
			position: '',
		}
	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	commitInputChanges = (e, color) => {
		console.log(color);
		
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;
		const {position, years, text} = this.state;

		return (
			<EmpItem active>	
				<Header>My name is {name}, surname - {surname},
					age - {years},
					position - {position}</Header>
				<Button onClick={this.nextYear}>{text}</Button>
				<br/>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
				</form>

			</EmpItem>
		)
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;

`;

const DynamicGreeting = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{
				React.Children.map(props.children, child => {
					return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
				})
			}
		</div>
	)
}

const HelloGreeting = () => {
	return (
		<div style={{'width': '600px', 'margin': '0 auto'}}>
			<DynamicGreeting color={'primary'}>
				<h2>Hello World!</h2>
			</DynamicGreeting>
		</div>
	)
}

const Message = (props) => {
	return (
		<h2>The counter is {props.counter}</h2>
	)
}

class Counter extends Component {
	state = {
		counter: 0
	}

	changeCounter = () => {
		this.setState(({counter}) => ({
			counter: counter + 1
		}))
	}

	render() {
		return (
			<>
				<button
					className={'btn btn-primary'}
					onClick={this.changeCounter}>
					Click me
				</button>
				{this.props.render(this.state.counter)}
			</>
		)
	}
}

class NewForm extends Component {
	// myRef = React.createRef();


	// componentDidMount() {
	// 	this.myRef.current.focus();
	// }

	setInputRef = (elem) => {
		this.myRef = elem;
	}

	focusFirstTI = () => {
		if (this.myRef) {
			this.myRef.focus();
		}
	}

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

function App() {
	return (
		<>
			<NewForm/>
			<Wrapper>
				<Counter render={counter => (
					<Message counter={counter}/>
				)}/>

				<HelloGreeting/>
				<BootstrapTest
					left = {
						<DynamicGreeting color={'primary'}>
							<h2>This weel was hard</h2>
							<h2>Hello!</h2>
						</DynamicGreeting>
					}
					right = {
						<DynamicGreeting color={'shadow'}>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" />
									<Form.Text className="text-muted">
									We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Check me out" />
								</Form.Group>
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</DynamicGreeting>
					}
				/>

				<WhoAmI name='John' surname="Smith" link="fb.com"/>
				<WhoAmI name='Alex' surname="Shepard" link="vk.com"/>
			</Wrapper>
		</>
	);
}

export default App;
