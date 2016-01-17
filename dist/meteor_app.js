var angular2_meteor_client_1 = require("angular2-meteor-client");
var ionic_1 = require("ionic-framework/ionic");
/**
 * @name MeteorApp
 * @description
 * MeteorApp is an Ionic decorator that bootstraps an application.
 * After being bootstrapped with meteor, Meteor.Collections can be used as usual.
 * See docs for angular2-meteor for more information.
 * It can be passed a number of arguments, that act as global config variables for the app.
 * App can accept a `template` property that has an inline template or a `templateUrl` property that points to an external html template.
 *
 * @usage
 * ```ts
 * import {MeteorApp} from 'ionic2-meteor';
 *
 * @MeteorApp({
*   templateUrl: 'app/app.html'
* })
 *
 * export class MyApp{
*   // Anything we would want to do at the root of our app
* }
 * ```
 *
 * @param {Object} [config] - the app's [../Config](Config) object
 * @param {String} [template] - the template to use for the app root
 * @param {String} [templateUrl] - a relative URL pointing to the template to use for the app root
 *
 */
function MeteorApp(args) {
    if (args === void 0) { args = {}; }
    return function (cls) {
        if (!args.providers) {
            args.providers = [];
        }
        args.providers = args.providers.concat(angular2_meteor_client_1.MeteorProviders);
        return ionic_1.App(args)(cls);
    };
}
exports.MeteorApp = MeteorApp;
