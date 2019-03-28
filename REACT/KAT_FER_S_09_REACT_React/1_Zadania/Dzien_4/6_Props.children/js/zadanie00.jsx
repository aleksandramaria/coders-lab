import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ParentComponent extends React.Component {
        render() {
            return (
                <ChildComponent>
                    {this.props.children}
                </ChildComponent>
            )
        }
    }

    class ChildComponent extends React.Component {
        render() {
            return (
                <GrandchildComponent>
                    {this.props.children}
                </GrandchildComponent>
            )
        }
    }

    class GrandchildComponent extends React.Component {
        render() {
            return this.props.children;
        }
    }

    const App = () => (
        <ParentComponent>
            <h1>To działa!</h1>
        </ParentComponent>
    )

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});