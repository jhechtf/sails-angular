var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app/components/app/app.component", ['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Dildos';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.css']
                    }),
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
System.register("app/hero", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                return Hero;
            }());
            exports_2("Hero", Hero);
        }
    }
});
System.register("app/mock-heroes", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var HEROES;
    return {
        setters:[],
        execute: function() {
            exports_3("HEROES", HEROES = [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
            ]);
        }
    }
});
System.register("app/services/hero/hero.service", ['@angular/core', "app/mock-heroes"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, mock_heroes_1;
    var HeroService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                HeroService.prototype.getHero = function (id) {
                    return this.getHeroes()
                        .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
                };
                HeroService = __decorate([
                    core_2.Injectable(),
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            }());
            exports_4("HeroService", HeroService);
        }
    }
});
System.register("app/components/dashboard/dashboard.component", ['@angular/core', "app/services/hero/hero.service"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, hero_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(heroService) {
                    this.heroService = heroService;
                    this.heroes = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
                };
                DashboardComponent = __decorate([
                    core_3.Component({
                        selector: 'my-dashboard',
                        moduleId: module.id,
                        templateUrl: './dashboard.component.html',
                        styleUrls: ['./dashboard.component.css']
                    }),
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_5("DashboardComponent", DashboardComponent);
        }
    }
});
System.register("app/components/hero-detail/hero-detail.component", ['@angular/core', '@angular/router', '@angular/common', "app/hero", "app/services/hero/hero.service", 'rxjs/add/operator/switchMap'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, router_1, common_1, hero_1, hero_service_2;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_2_1) {
                hero_service_2 = hero_service_2_1;
            },
            function (_1) {}],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService, route, location) {
                    this.heroService = heroService;
                    this.route = route;
                    this.location = location;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params
                        .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
                        .subscribe(function (hero) { return _this.hero = hero; });
                };
                HeroDetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                __decorate([
                    core_4.Input(),
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetailComponent.prototype, "hero");
                HeroDetailComponent = __decorate([
                    core_4.Component({
                        moduleId: module.id,
                        selector: 'my-hero-detail',
                        templateUrl: './hero-detail.component.html'
                    }),
                    __metadata('design:paramtypes', [hero_service_2.HeroService, router_1.ActivatedRoute, common_1.Location])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_6("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
System.register("app/components/heroes/heroes.component", ['@angular/core', "app/services/hero/hero.service", '@angular/router'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, hero_service_3, router_2;
    var HeroesComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (hero_service_3_1) {
                hero_service_3 = hero_service_3_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(heroService, router) {
                    this.heroService = heroService;
                    this.router = router;
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['/detail', this.selectedHero.id]);
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroesComponent = __decorate([
                    core_5.Component({
                        selector: 'my-heroes',
                        templateUrl: './heroes.component.html',
                        styleUrls: ['./heroes.component.css'],
                        providers: [hero_service_3.HeroService]
                    }),
                    __metadata('design:paramtypes', [hero_service_3.HeroService, router_2.Router])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_7("HeroesComponent", HeroesComponent);
        }
    }
});
System.register("app/modules/app-routing/app-routing.module", ['@angular/core', '@angular/router', "app/components/dashboard/dashboard.component", "app/components/heroes/heroes.component", "app/components/hero-detail/hero-detail.component"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, router_3, dashboard_component_1, heroes_component_1, hero_detail_component_1;
    var routes, AppRoutingModule;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
                { path: 'heroes', component: heroes_component_1.HeroesComponent }
            ];
            AppRoutingModule = (function () {
                function AppRoutingModule() {
                }
                AppRoutingModule = __decorate([
                    core_6.NgModule({
                        imports: [router_3.RouterModule.forRoot(routes)],
                        exports: [router_3.RouterModule]
                    }),
                    __metadata('design:paramtypes', [])
                ], AppRoutingModule);
                return AppRoutingModule;
            }());
            exports_8("AppRoutingModule", AppRoutingModule);
        }
    }
});
System.register("app/app.module", ['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', "app/components/app/app.component", "app/components/dashboard/dashboard.component", "app/components/hero-detail/hero-detail.component", "app/components/heroes/heroes.component", "app/services/hero/hero.service", "app/modules/app-routing/app-routing.module"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, platform_browser_1, forms_1, http_1, app_component_1, dashboard_component_2, hero_detail_component_2, heroes_component_2, hero_service_4, app_routing_module_1;
    var AppModule;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (dashboard_component_2_1) {
                dashboard_component_2 = dashboard_component_2_1;
            },
            function (hero_detail_component_2_1) {
                hero_detail_component_2 = hero_detail_component_2_1;
            },
            function (heroes_component_2_1) {
                heroes_component_2 = heroes_component_2_1;
            },
            function (hero_service_4_1) {
                hero_service_4 = hero_service_4_1;
            },
            function (app_routing_module_1_1) {
                app_routing_module_1 = app_routing_module_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_7.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            app_routing_module_1.AppRoutingModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            dashboard_component_2.DashboardComponent,
                            hero_detail_component_2.HeroDetailComponent,
                            heroes_component_2.HeroesComponent
                        ],
                        providers: [hero_service_4.HeroService],
                        bootstrap: [app_component_1.AppComponent]
                    }),
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_9("AppModule", AppModule);
        }
    }
});
System.register("environment/environment.prod", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var environment;
    return {
        setters:[],
        execute: function() {
            exports_10("environment", environment = {
                production: true
            });
        }
    }
});
System.register("environment/environment", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var environment;
    return {
        setters:[],
        execute: function() {
            exports_11("environment", environment = {
                production: false
            });
        }
    }
});
System.register("main", ['@angular/core', '@angular/platform-browser-dynamic', "app/app.module", './environments/environment'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_8, platform_browser_dynamic_1, app_module_1, environment_1;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            if (environment_1.environment.production) {
                core_8.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
System.register("polyfill", ['core-js/es6/reflect', 'core-js/es7/reflect', 'zone.js/dist/zone'], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters:[
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
        }
    }
});
//# sourceMappingURL=angular.js.map
