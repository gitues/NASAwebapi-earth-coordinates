# nasa web api

https://api.nasa.gov/

A simple-to-use node.js client for NASA's data API.

The Web page application allows user to look at aerial photography of any location on Earth, user should be able to enter Latitude/Longitude coordinates.

# Earth - Imagery endpoint
This endpoint retrieves the Landsat 8 image for the supplied location and date. The response will include the date and URL to the image that is closest to the supplied date. The requested resource may not be available for the exact date in the request. You can retrieve a json that contains the inputs you provided and an url to the resulting image through the assets endpoint 
## The assets endpoint no longer returns a list of potential images within your date range due to a change on the google earth engine api side.

The cloud score was an optional calculation that returns the percentage of the queried image that is covered by clouds, but it is not available in current versio of the API. If False If HTTP Request.

# Requirements 
Need environments with node js version 14.17.6 LTS
Get generate API Key https://api.nasa.gov/

# Install
From source:
    git clone git://https://github.com/gitues/NASAwebapi-earth-coordinates.git 
    cd NASAwebapi-earth-coordinates
    npm install
    node src/app.js

# library
1- Set up a project using Node.js and NPM
2- Send JSON data using Express
3- hbs as the default view engine 

##example
