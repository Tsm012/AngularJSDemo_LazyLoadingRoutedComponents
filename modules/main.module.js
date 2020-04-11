import HOME_COMPONENT from "../components/home-component";

export const MAIN_MODULE = angular.module("main.module", [])
    .component("homeComponent", HOME_COMPONENT)

    MAIN_MODULE.config(function($stateProvider) {
    var helloState = {
        name: 'home',
        url: '/',
        component: 'homeComponent'
    }
    
    var aboutState = {
        name: 'about',
        url: '/about',
        component: 'aboutComponent',
        lazyLoad: async ($transition$) => {
            const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
            const mod = await import(/* webpackChunkName: "about" */ '../components/about-component');
            $ocLazyLoad.load(mod.ABOUT_MODULE);
          }
    }
    
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    });
    