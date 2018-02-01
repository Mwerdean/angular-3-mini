angular.module('fourWheels').component('cars' , {
    templateUrl: '/app/cars/cars.template.html',
    controllerAs: 'carsCtrl',
    controller: function( carsSrvc ) {
        this.cars = carsSrvc.getCars()
        this.buyCar = function(id) {
            this.cars = carsSrvc.getCars()
            carsSrvc.buyCar(id)
        }
    }
})

