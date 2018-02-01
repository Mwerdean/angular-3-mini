angular.module('fourWheels').component('footer', {
    templateUrl: '/app/footer/footer.template.html',
    controllerAs: 'footerCtrl',
    controller: function() {
        this.contacted = false
        this.contact = function() {
            this.name = ''
            this.email = ''
            this.contacted = true
        }
    }
})