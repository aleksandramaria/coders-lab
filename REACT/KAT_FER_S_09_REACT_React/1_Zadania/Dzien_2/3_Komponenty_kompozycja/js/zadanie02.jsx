import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    // function Chat(props){
    //     return <div className="chat">
    //         <header>
    //             <h1>Chat prywatny</h1>
    //         </header>
    //         <div>
    //             <ul>
    //                 <li>Wpis z chatu 1</li>
    //                 <li>Wpis z chatu 2</li>
    //                 <li>Wpis z chatu 3</li>
    //             </ul>
    //         </div>
    //         <footer>
    //             <input type="text"/>
    //             <button>Wyślij</button>
    //         </footer>
    //     </div>
    // }



    // function App(props){
    //     return <div>
    //         <Chat />
    //     </div>;
    // }

    class Chat extends React.Component{
        render(){
            return <div className="chat">
                <ChatHeader title={this.props.title} />
                <ChatMessages message={this.props.message}/>
                <ChatFooter />
            </div>
        }
    }

    class ChatHeader extends React.Component {
        render() {
            return (
                    <h1>{this.props.title}</h1>
            )
        }
    }

    class ChatMessages extends React.Component {
        render() {
            return (
                <ul>
                    <ChatMessage message={'message'}/>
                    <ChatMessage message={'message 1'}/>
                    <ChatMessage message={'message 2'}/>
                </ul>
            )
        }
    }

    class ChatMessage extends React.Component {
        render() {
            return (
                <li>{this.props.message}</li>
            )
        }
    }

    class ChatFooter extends React.Component {
        render() {
            return (
                <footer>
                    <input type="text"/>
                    <button>Wyślij</button>
                </footer>
            )
        }
    }

    const App = () => <Chat title={'title'} message={'message'} />

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});