const API_KEY = "0vZo8kVUx2Q19lwz3QiZIASeML1u62iX60fStDuz"

const Earth = require("../model/Earth")

const imgdefault = "https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"

exports.renderHomePage = (req, res) =>{
    res.render("index",{
        imagefromearth: `https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg`,        
    })
}

exports.renderAboutPage = (req, res) =>{
    res.render("about")
}

exports.getEarth = (req, res) =>{
   const coordinates = req.body.coordinates
   var lonlatcoordenates = coordinates.split('/');
   var datetime = new Date();

   var lat = lonlatcoordenates[0]
   var lon = lonlatcoordenates[1]

   const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2020-01-01&api_key=${API_KEY}&dim=0.5`

   const earth = new Earth(req.body.coordinates)

   earth.validateUserInput()
   if(earth.errors.length){
       res.render("index",{
           error: earth.errors.toString(),
           imagefromearth: `${imgdefault}`,             
       })
   }else{
    res.render("index",{
        imagefromearth: url, 
        coordinatesloaded: `${lat} / ${lon}`,       
        latitude: lat,
        longitude: lon,  
    })    
   }  
} 