import React from 'react';
import ReactDOM from 'react-dom';

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

document.addEventListener('DOMContentLoaded', function(){

    class Timer extends React.Component {
        state = {
            counter: 10,
        }

        componentDidMount() {
            this.id = setInterval(() => {
                if(this.state.counter === 1) {
                    clearInterval(this.id);
                    this.props.onGameOver();
                }
                this.setState({
                    counter: this.state.counter - 1,
                })
            }, 1000)
        }

        componentWillUnmount() {
            clearInterval(this.id);
        }

        render() {
            return (
                <div className="game-time">
                    Czas: <span id="points"> { this.state.counter }s. </span>
                </div>
            )
        }
    }

    class Points extends React.Component {
        render() {
            return (
                <div className="game-points">
                    Punkty: <span id="points">{ this.props.points }</span>
                </div>
            )
        }
    }

    class OnePuzzleImage extends React.Component {
        state = {
            input: '',
            hintOpen: false,
        }

        handleSubmit = e => {
            e.preventDefault();
            if(this.state.input !== this.props.answer) {
                 this.props.onWrongAnsw();
                 this.setState({
                     input: ''
                 })
            } else {
                this.props.onGoodAnsw();
                this.setState({
                    input: ''
                })
            }
        }

        handleChangeInput = e => {
            this.setState({
                input: e.target.value,
            })
        }

        handleHintClick = e => {
            this.setState({
                hintOpen: !this.state.hintOpen,
            })
        }

        render() {
            return (
                <div className="game-main-container">
                    <div className="image-container">
                        <img className="img" src={ this.props.imgSrc }/>
                    </div>
                    <div className="game-container">
                        <div>
                            <form onSubmit={ this.handleSubmit } className="answer-sheet">
                                wpisz swoją odpowiedź: <br/>
                                <input onChange={ this.handleChangeInput } value={ this.state.input } id="answer-input" type="text" name="fname"/><br/>
                                <input id="button-submit" type="submit" value="SPRAWDŹ "/>
                            </form>
                            <div className='hint-show-container'> { this.state.hintOpen ? this.props.podpowiedz : '?' } </div>
                            <button onClick={ this.handleHintClick } id="button-hint">PODPOWIEDŹ</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    class Game extends React.Component {
        state = {
            points: 0,
            gameOver: false,
        }

        componentDidMount() {

        }

        handleGoodAnswer = () => {
            console.log('ok');
            alert('brawo Ty! Punkt dla Ciebie');
            this.setState({
                points: this.state.points + 1,
            })
        }

        handleWrongAnswer = () => {
            console.log('not ok');
            alert('niestety to nie jest poprawna odpowiedź - ale pamietaj zawsze możesz skorzystać z podpowiedzi :)');
        }

        handleGameOver = () => {
            console.log('game over');
            this.setState({
                gameOver: true,
            })
        }

        render() {
            const imagesComponents = [
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/straszna-chala.jpg" answer="straszna chała" podpowiedz="Na obrazku widzimy pieczywo - chałkę -  i jaka ona jest?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/zer-dla-skner.jpg" answer="żer dla skner" podpowiedz="taka wyżerka dla ludzi którzy nie lubią wydawać pieniędzy"/>,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/zycie-na-walizkach.jpg" answer="życie na walizkach" podpowiedz="jak żyć? przeprowadzki przeprowadzki" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/wymiar-sprawiedliwosci.jpg" answer="wymiar sprawiedliwosci" podpowiedz="inny wymiar..." />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/wojna-kokosza.jpg" answer="wojna kokosza" podpowiedz="dla fanów historii, 1537, nazwa rokoszu szlachty polskiej, zawiązanego w celu zahamowania dążeń Zygmunta Starego i królowej Bony. Był to pierwszy sejm rokoszowy szlachty polskiej" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/widzimisie.jpg" answer="widzimisie" podpowiedz="co on widzi?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/tom-i-jerry.jpg" answer="Tom i Jerry" podpowiedz="popularna kreskówka, popularny kot, popularna mysz" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/ryba-po-zydowsku.jpg" answer="ryba po żydowsku" podpowiedz="Przepis jest bardzo prosty, a danie świetnie nadaje się na spotkania rodzinne" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/ray-bany.jpg" answer="ray bany" podpowiedz="pan Rej i Bytomski Tramwaj Bluesowy również marka modnych okularów przeciwsłonecznych" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/prince-polo.jpg" answer="princepolo" podpowiedz="wafel w czekoladzie" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/predkosc-swiatla.jpg" answer="prędkość światła" podpowiedz="s/t to wzór na v inaczej prędkość :)" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/praca-na-czarno.jpg" answer="praca na czarno" podpowiedz="jak żyć? Przeciwieństwo pracy legalnej" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/podlozyc-swinie.jpg" answer="podłożyć świnię" podpowiedz="nie rób drugiemu co Tobie niemiłe :)" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/pchli-targ.jpg" answer="pchli targ" podpowiedz="targ + pchły" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/pantofelek-kopciuszka.jpg" answer="pantofelek Kopciuszka" podpowiedz="Co zgubił Kopciuszek na balu?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/palenie-mostow.jpg" answer="palenie mostów" podpowiedz="kiedy już nie ma powrotu..." />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/paczek-w-masle.jpg" answer="pączek w maśle" podpowiedz="jestem pączek i dobrze mi tu?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/nocny-marek.jpg" answer="nocny marek" podpowiedz="kolega nie śpi?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/noc-dlugich-nozy.jpg" answer="noc długich noży" podpowiedz="historia naszych sąsiadów..." />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/niezly-kwas.jpg" answer="niezły kwas" podpowiedz="ten kwas nie jest zły" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/niedzwiedzia-przysluga.jpg" answer="niedźwiedzia przysługa" podpowiedz="Zwykle bywa na odwrót: chcemy jak najlepiej, wychodzi źle, albo co najmniej jak zwykle, czyli też nie najlepiej" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/nieczysta-gra.jpg" answer="nieczysta gra" podpowiedz="brudna inaczej?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/nie-ma-lipy.jpg" answer="nie ma lipy" podpowiedz="czy brakuje jednego drzewa?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/mala-czarna.jpg" answer="mała czarna" podpowiedz="np rano kawka, żeby się obudzić" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/konowal.jpg" answer="konował" podpowiedz="koń + wał" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/kompleks-edypa.jpg" answer="kompleks Edypa" podpowiedz="pojęcie wprowadzone do psychoanalizy przez Zygmunta Freuda (na ilustracji Edyp)" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/komando-foki.jpg" answer="komando foki" podpowiedz="kategoria - klasyka kina (obsada m.in Charlie Sheen)" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/koktajl-molotowa.jpg" answer="koktajl Mołotowa" podpowiedz="Sowietsk, Rosja - pan na zdjęciu to Wiaczesław Mołotow" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/jajka-sadzone.jpg" answer="jajka sadzone" podpowiedz="zazwyczaj jemy takie smażone na patelni..." />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/jajecznica-na-boczku.jpg" answer="jajecznica na boczku" podpowiedz="kiepskie zdjęcie ale to jajecznica..." />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/hugoboss.jpg" answer="Hugo Boss" podpowiedz="rebus dla dzieci lat 90 - na zdjeciu Hugo w garniturze" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/gra-warta-swieczki.jpg" answer="gra warta świeczki" podpowiedz="czy gra była warta pierwszej nagrody?" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/dostac-wilka.jpg" answer="dostać wilka" podpowiedz="nie siedź na kamieniu, bo możesz..." />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/doktor-queen.jpg" answer="doktor Quinn" podpowiedz="popularna w latach 90 - pani doktor na Dzikim Zachodzie" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/czlowiek-z-marginesu.jpg" answer="człowiek z marginesu" podpowiedz="osoba zagrożona lub dotknięta patologią społeczną" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/czarny-rynek.jpg" answer="czarny rynek" podpowiedz="w centrum miasta... i czarny" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/brudny-harry.jpg" answer="brudny Harry" podpowiedz="Zły nieczysty Harry... :)" />,
                <OnePuzzleImage onWrongAnsw={ this.handleWrongAnswer } onGoodAnsw={ this.handleGoodAnswer } imgSrc="images/brac-prochy.jpg" answer="brać prochy" podpowiedz="narkotyki są złe" />,
            ];
            if(!this.state.gameOver) {
                shuffle(imagesComponents)
                return (
                    <div className="max-width">
                        <h1 className="game-title"><i className="fas fa-puzzle-piece"></i>
                            REBUS - JAKIE MASZ SKOJARZENIA?
                        </h1>
                        <hr/>
                        <div className="game-information">
                            { imagesComponents[this.state.points] }
                            <Timer onGameOver={this.handleGameOver}/>
                            <Points points={this.state.points}/>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="game-over-container">
                        <p className='game-over-text'>KONIEC GRY</p>
                    </div>
                )
            }
        }
    }

    const App = () => <Game />

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
