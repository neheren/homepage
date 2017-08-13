const express = require('express');
const pug = require('pug');

const app = express();

function article(id, title, video, image, text, desc, date){
    return {id, title, video, image, text, desc, date};
}


const articles = [
    article(0, 'Simply Sketch', 'https://www.youtube.com/embed/6B-zRNrCrA8', 'flyy', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(1, 'Noget andet', 'https://www.youtube.com/embed/6B-Zgmvg-zzctI', 'ep', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(2, 'Lækkert', 'https://www.youtube.com/embed/1N25RG_TuOI', 'crowd', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(3, 'Svært projekt', 'https://www.youtube.com/embed/6B-zRNrCrA8', 'flyy', 'Tjek det ud', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(4, 'Simply Sketch', 'https://www.youtube.com/embed/6B-zRNrCrA8', 'flyy', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(5, 'Noget andet', 'https://www.youtube.com/embed/6B-Zgmvg-zzctI', 'ep', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(6, 'Lækkert', 'https://www.youtube.com/embed/1N25RG_TuOI', 'crowd', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(7, 'Svært projekt', 'https://www.youtube.com/embed/6B-zRNrCrA8', 'flyy', 'Tjek det ud', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
]



app.get('/', function (req, res) {
    const options = {pretty: true}
    res.send(pug.renderFile('src/index.pug', {articles}))
})

app.get('/iframe/:article', function (req, res) {
    res.send(pug.renderFile('src/iframe.pug', {articles, article: req.params.article}))
})

app.use("/", express.static(__dirname + '/'));

app.use(express.static('public'))
app.use(express.static('files'))

app.listen(3002);
