function aboutController() {
        var model = this;
        model.message = "Hello from about component";
}

const ABOUT_COMPONENT = {
    controller: aboutController,
    template: '{{$ctrl.message}}'
}

export const ABOUT_MODULE = angular.module('about.module', [])
    .component('aboutComponent', ABOUT_COMPONENT);