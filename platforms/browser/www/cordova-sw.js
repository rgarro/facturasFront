/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
'License'); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Note, these will be updated automatically at build time
var CACHE_VERSION = '1507853208480';
var CACHE_LIST = [
    "/LICENSE",
    "/README.md",
    "/blank.html",
    "/cards.html",
    "/charts.html",
    "/config.xml",
    "/cordova-sw.js",
    "/cordova.js",
    "/cordova_plugins.js",
    "/css/index.css",
    "/css/sb-admin.css",
    "/css/sb-admin.min.css",
    "/facturasjs/config.js",
    "/favicon.ico",
    "/forgot-password.html",
    "/gulpfile.js",
    "/img/logo.png",
    "/index.html",
    "/indexb.html",
    "/js/index.js",
    "/js/sb-admin-charts.js",
    "/js/sb-admin-charts.min.js",
    "/js/sb-admin-datatables.js",
    "/js/sb-admin-datatables.min.js",
    "/js/sb-admin.js",
    "/js/sb-admin.min.js",
    "/login.html",
    "/manifest.json",
    "/navbar.html",
    "/package.json",
    "/pug/blank.pug",
    "/pug/cards.pug",
    "/pug/charts.pug",
    "/pug/forgot-password.pug",
    "/pug/includes/css/core.pug",
    "/pug/includes/css/custom.pug",
    "/pug/includes/footer.pug",
    "/pug/includes/js/core.pug",
    "/pug/includes/js/custom.pug",
    "/pug/includes/modals/logout.pug",
    "/pug/includes/navbar.pug",
    "/pug/includes/scroll-to-top.pug",
    "/pug/index.pug",
    "/pug/login.pug",
    "/pug/navbar.pug",
    "/pug/register.pug",
    "/pug/tables.pug",
    "/register.html",
    "/scss/_cards.scss",
    "/scss/_footer.scss",
    "/scss/_global.scss",
    "/scss/_login.scss",
    "/scss/_mixins.scss",
    "/scss/_utilities.scss",
    "/scss/_variables.scss",
    "/scss/navbar/_navbar_colors.scss",
    "/scss/navbar/_navbar_fixed.scss",
    "/scss/navbar/_navbar_global.scss",
    "/scss/navbar/_navbar_static.scss",
    "/scss/navbar/_navbar_toggle.scss",
    "/scss/sb-admin.scss",
    "/tables.html",
    "/vendor/bootstrap/css/bootstrap-grid.css",
    "/vendor/bootstrap/css/bootstrap-grid.min.css",
    "/vendor/bootstrap/css/bootstrap-reboot.css",
    "/vendor/bootstrap/css/bootstrap-reboot.min.css",
    "/vendor/bootstrap/css/bootstrap.css",
    "/vendor/bootstrap/css/bootstrap.min.css",
    "/vendor/bootstrap/js/bootstrap.js",
    "/vendor/bootstrap/js/bootstrap.min.js",
    "/vendor/chart.js/Chart.bundle.js",
    "/vendor/chart.js/Chart.bundle.min.js",
    "/vendor/chart.js/Chart.js",
    "/vendor/chart.js/Chart.min.js",
    "/vendor/datatables/dataTables.bootstrap4.css",
    "/vendor/datatables/dataTables.bootstrap4.js",
    "/vendor/datatables/jquery.dataTables.js",
    "/vendor/font-awesome/css/font-awesome.css",
    "/vendor/font-awesome/css/font-awesome.min.css",
    "/vendor/font-awesome/fonts/FontAwesome.otf",
    "/vendor/font-awesome/fonts/fontawesome-webfont.eot",
    "/vendor/font-awesome/fonts/fontawesome-webfont.svg",
    "/vendor/font-awesome/fonts/fontawesome-webfont.ttf",
    "/vendor/font-awesome/fonts/fontawesome-webfont.woff",
    "/vendor/font-awesome/fonts/fontawesome-webfont.woff2",
    "/vendor/font-awesome/less/animated.less",
    "/vendor/font-awesome/less/bordered-pulled.less",
    "/vendor/font-awesome/less/core.less",
    "/vendor/font-awesome/less/fixed-width.less",
    "/vendor/font-awesome/less/font-awesome.less",
    "/vendor/font-awesome/less/icons.less",
    "/vendor/font-awesome/less/larger.less",
    "/vendor/font-awesome/less/list.less",
    "/vendor/font-awesome/less/mixins.less",
    "/vendor/font-awesome/less/path.less",
    "/vendor/font-awesome/less/rotated-flipped.less",
    "/vendor/font-awesome/less/screen-reader.less",
    "/vendor/font-awesome/less/stacked.less",
    "/vendor/font-awesome/less/variables.less",
    "/vendor/font-awesome/scss/_animated.scss",
    "/vendor/font-awesome/scss/_bordered-pulled.scss",
    "/vendor/font-awesome/scss/_core.scss",
    "/vendor/font-awesome/scss/_fixed-width.scss",
    "/vendor/font-awesome/scss/_icons.scss",
    "/vendor/font-awesome/scss/_larger.scss",
    "/vendor/font-awesome/scss/_list.scss",
    "/vendor/font-awesome/scss/_mixins.scss",
    "/vendor/font-awesome/scss/_path.scss",
    "/vendor/font-awesome/scss/_rotated-flipped.scss",
    "/vendor/font-awesome/scss/_screen-reader.scss",
    "/vendor/font-awesome/scss/_stacked.scss",
    "/vendor/font-awesome/scss/_variables.scss",
    "/vendor/font-awesome/scss/font-awesome.scss",
    "/vendor/jquery/jquery.js",
    "/vendor/jquery/jquery.min.js",
    "/vendor/jquery-easing/jquery.easing.compatibility.js",
    "/vendor/jquery-easing/jquery.easing.js",
    "/vendor/jquery-easing/jquery.easing.min.js",
    "/vendor/popper/popper.js",
    "/vendor/popper/popper.min.js"
];

this.addEventListener('install', function (event) {
    // Perform install steps
    console.log('cordova service worker is installing.');
    event.waitUntil(caches.open(CACHE_VERSION) /* eslint no-undef : 0 */
        .then(function (cache) {
            return cache.addAll(CACHE_LIST);
        }));
});

this.addEventListener('activate', function (event) {
    // Perform activate steps
    console.log('cordova service worker is activated.');
});

this.addEventListener('fetch', function (event) {
    console.log('cordova service worker : fetch : ' + event.request.url);

    event.respondWith(caches.match(event.request).then(function (response) { /* eslint no-undef : 0 */
        // Cache hit? return response else fetch it
        return response || fetch(event.request); /* eslint no-undef : 0 */
    }));
});
