var express = require('express')
var tbp = require('thepiratebay')

var query="spider"
var obj={}

var app= express()

app.get('/movies/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:201
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/moviesdvd/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:202
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/musicvideos/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:203
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/movieClips/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:204
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/tv/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:205
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/handheld/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:206
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/HdMovies/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:207
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/HdTv/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:208
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/3d/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:209
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

app.get('/oteher/:name',(req,res) =>
{
  tbp.search(req.params.name,{
    category:299
  }).then(results => console.log(obj = results))
  .catch(err => console.log(err))

  res.send("{'results':"+JSON.stringify(obj)+"}")
})

var port=process.env.PORT || 8060
app.listen(port,()=> console.log(`im listneing at   ${port}`));
