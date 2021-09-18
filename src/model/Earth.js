const Earth = function(data){
    this.data = data
    this.errors = []    
}

Earth.prototype.validateUserInput = function(){
    if(this.data == ""){
        this.errors.push("Please enter the Latitude/Longitude coordinates split by /")
    }
}

module.exports = Earth