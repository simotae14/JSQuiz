var vehicle = {
    type: 'sedan',
    logInfo: function() {
        var THIS = this;
        console.log('1. this.type', this.type);
        console.log('1. THIS.type', THIS.type);

        (function() {
            console.log('2. this.type', this.type);
            console.log('2. THIS.type', THIS.type);
        })();
    }
};

vehicle.logInfo();

// what is the output?