const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {
    this.websites.forEach(
        el => {
          this.links.push('http://' + el + '.com');
        }
    )
}

let app = new App();
app.generateLinks();
console.log(app.links)

let a = $('.menu').find('a');

app.links.forEach(
    (el, index) => {
      a.eq(index).attr('href', el);
    }
)