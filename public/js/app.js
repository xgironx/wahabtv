angular
  .module(      "wahabtv",    [ "ui.router",      "ngResource"                                                  ])
  .config(                    [ "$stateProvider", "$locationProvider",    "$urlRouterProvider",  Router         ])
  .factory(     "Video",      [ "$resource",                                                     Video          ])
  .controller(  "indexCtrl",  [ "$state",         "Video",                                       indexController])
  .controller(  "showCtrl",   [ "$state",         "$stateParams",         "Video",               showController ])

  function Router ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state("welcome", { url: "/",             templateUrl: "/assets/js/ng-views/welcome.html" })
      .state("index",   { url: "/videos",       templateUrl: "/assets/js/ng-views/index.html",     controller: "indexCtrl", controllerAs: "vm" })
      .state("show",    { url: "/videos/:name", templateUrl: "/assets/js/ng-views/show.html",      controller: "showCtrl", controllerAs: "vm" })
    $urlRouterProvider.otherwise("/")
  }

  function Video ($resource)
  { return $resource("/api/videos/:name", {}, { update: { method: "PUT" } });
  }

  function indexController ($state, Video)
  {
    this.videos     = Video.query()
                                    this.newVideo   = new Video()
    this.create     = function () { this.newVideo.$save().then(function(video){ $state.go("show", { name: video.name }) }) }
  }

  function showController ($state, $stateParams, Video)
  {
                                    this.video      = Video.get({name: $stateParams.name})
    this.update     = function () { this.video.$update({name: $stateParams.name}) }
    this.destroy    = function () { this.video.$delete({name: $stateParams.name}).then(function(){ $state.go("index") }) }
  }
