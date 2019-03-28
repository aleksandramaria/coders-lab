import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class ShowMore extends React.Component {
        state = {
            hidden: false,
        }

        handleClick = () => {
            this.setState({
                hidden: true,
            })
        }

        render() {
            if(this.state.hidden === false) {
                return <a onClick={this.handleClick}>Pokaz wiecej</a>
            } else {
                return this.props.children
            }
        }
    }

    const App = () => (
        <div>
            <ShowMore>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
            </ShowMore>
            <p> </p>
            <ShowMore>
                <p>blalblabalbalblablabla</p>
            </ShowMore>
        </div>
    )

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});