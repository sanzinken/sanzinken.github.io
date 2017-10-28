define(function() {

    return function() {
        const self = this;
        let dataStorage = [];

        self.addItem = function(data) {
            dataStorage.push(data);
        }

        self.removeItem = function(index) {
            dataStorage.splice(index, 1);
        }

        self.clean = function() {
            dataStorage.splice(dataStorage.length);
        }

        self.getData = function() {
            return dataStorage;
        }
    };
})