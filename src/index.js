const express = require('express');
const pug = require('pug');
const port = 3000
const app = express();

function article(id, title, video, image, text, desc, date){
    return {id, title, video, image, text, desc, date};
}

const articles = [
    article(0, 'Mix And Match', 'https://www.youtube.com/embed/O3w1uUlgplE', 'mixand', 'En Roskilde installation med formål at bringe folk sammen over "up and comming" musik. Udover at være med at til projektet har jeg både animeret og produceret videoen. ', 'Lavet på Medialogy 3. semester', '13/8-2016'), 
    article(1, 'LUX - A videogame about darkness', 'https://www.youtube.com/embed/za5KZ1Ldn2g', 'lux', 'Opgaven havde som formål at udvikle et spil, der kunne variere i sværhedsgrader afhængig af spillerens eget niveau, kompetencer og formåen. \
Spillet skulle derfor kunne kalibrere sværhedsgraden for en ny spiller og ydermere proportionelt stige i sværhedsgrad i takt med, at spilleren selv blev bedre.\
Vi valgte derfor at bygge spillet op omkring, at en first-person skulle være placeret i et næsten-fuldstændig mørkt univers. Spilleren ville få en kugle med lys, hvilket muliggjorde, at spilleren kunne se spiluniverset, hvis den blev kastet. Omfanget af hvor oplyst, lyskuglen formåede at gøre spiluniverset, afhang derfor af spillernes evne til at navigere rundt i de forskellige mængder af lys.', 'Jeg arbejdede her især med:\
DDA - Dynamic Difficulty Adjustment - at kunne udvikle et spil med en dynamisk sværhedsgrad, der konsistent skal kunne udfordre spilleren. Programmering - fokus på (ud over basal programmering og kode) at sætte programmering i et selvlærende-perspektiv. \
Algoritmer - udvikle algoritmen bag sværhedgradsoptimering. \
Eksperimentdesign - samle kvantitativ data om spillerens formåen samt finde ud af, hvordan spillerne lader lyset påvirke spillerens evne til at udføre spillet.', '13/8-2017'), 
    article(2, 'Embodied Metaphors & Audio Effects', 'https://www.youtube.com/embed/TuVOLyqg7v4', 'embodied', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(3, 'DSI - A Small timelapse music video', 'https://www.youtube.com/embed/Q2h3qKUEP70', 'dsi', 'Tjek det ud', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(4, 'Simply Sketch', 'https://www.youtube.com/embed/IxLoqeQ_tRg', 'crowd', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(5, 'Destruc', 'https://www.youtube.com/embed/6B-Zgmvg', 'destruc', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
    article(6, 'Swirl shader', 'https://www.youtube.com/embed/gnI4QbHXy1I', 'swirl', 'I denne smag bruger vi sag.', 'DET RIGTIGT -Sivas 2017', '13/8-2017'), 
];

app.get('/iframe/:article', function (req, res) {
    res.send(pug.renderFile('src/iframe.pug', {articles, article: req.params.article}))
});

app.use("/", express.static(__dirname + '/'));


app.get('/', function(req, res){
    const options = {pretty: true}    
    res.send(pug.renderFile('src/index.pug', {articles}))
});

app.get('/:content/:id', function (req, res) {
    const options = {pretty: true}
    const urlInfo = {content: req.params.content, id: req.params.id};
    try{
        res.send(pug.renderFile('src/index.pug', {articles, urlInfo}))
    }catch(err){
        console.log(err)
    }
})


app.use(express.static('public'))
app.use(express.static('files'))

app.listen(port);
console.log('Server listening on port' + port)
