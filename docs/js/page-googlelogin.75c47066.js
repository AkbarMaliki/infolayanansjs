(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['page-googlelogin'], { f533: function (t, e, a) { 'use strict'; a.r(e); var s = function () { var t = this; var e = t.$createElement; var a = t._self._c || e; return a('div', { staticStyle: { margin: '0', padding: '0' } }, [a('svg', { staticClass: 'animated fadeInDown delay-1s', attrs: { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1440 320' } }, [a('path', { attrs: { fill: '#0099ff', 'fill-opacity': '1', d: 'M0,256L60,256C120,256,240,256,360,229.3C480,203,600,149,720,106.7C840,64,960,32,1080,69.3C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z' } })]), a('div', { staticClass: 'row justify-content-center ', staticStyle: { height: '75vh' } }, [a('div', { staticClass: 'col-md-8' }, [a('button', { directives: [{ name: 'show', rawName: 'v-show', value: t.idToken.length > 0, expression: 'idToken.length>0' }], staticClass: 'btn btn-sm btn-primary  ', attrs: { type: 'button' }, on: { click: t.getToken } }, [t._v(' get id token to react native ')]), t._v(' ' + t._s(t.idToken) + ' '), a('div', { staticClass: 'card animate__animated animate__backInDown' }, [t._m(0), a('div', { staticClass: 'card-body' }, [t.error ? a('div', { staticClass: 'alert alert-danger' }, [t._v(t._s(t.error))]) : t._e(), a('form', { staticClass: 'font-times', attrs: { action: '#' }, on: { submit: function (e) { return e.preventDefault(), t.loginAuth(e) } } }, [a('div', { staticClass: 'form-group row' }, [a('label', { staticClass: 'col-md-4 col-form-label text-md-right', attrs: { for: 'email' } }, [t._v('Username')]), a('div', { staticClass: 'col-md-6' }, [a('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.vdata.email, expression: 'vdata.email' }], staticClass: 'form-control', attrs: { id: 'email', type: 'text', name: 'email', value: '', required: '', autofocus: '' }, domProps: { value: t.vdata.email }, on: { input: function (e) { e.target.composing || t.$set(t.vdata, 'email', e.target.value) } } })])]), a('div', { staticClass: 'form-group row' }, [a('label', { staticClass: 'col-md-4 col-form-label text-md-right', attrs: { for: 'password' } }, [t._v('Password')]), a('div', { staticClass: 'col-md-6' }, [a('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.vdata.password, expression: 'vdata.password' }], staticClass: 'form-control', attrs: { id: 'password', type: 'password', name: 'password', required: '' }, domProps: { value: t.vdata.password }, on: { input: function (e) { e.target.composing || t.$set(t.vdata, 'password', e.target.value) } } })])]), t._m(1), a('br'), a('p', { staticClass: 'text-center font-times' }, [t._v('Atau login menggunakan')]), a('br'), t.cordova ? a('div', [a('div', { staticClass: 'col-md-12', on: { click: t.cordovaGoogleAuth } }, [t._m(2)])]) : a('div', [a('div', { staticClass: 'col-md-12', on: { click: t.googleAuth } }, [t._m(3)])])]), a('br'), a('p', { staticClass: 'text-center font-times font-bold', on: { click: function (e) { return t.$router.push('/auth/register') } } }, [t._v('Daftar')])])])])]), a('svg', { attrs: { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1440 320' } }, [a('path', { attrs: { fill: '#0099ff', 'fill-opacity': '1', d: 'M0,256L48,261.3C96,267,192,277,288,277.3C384,277,480,267,576,250.7C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z' } })])]) }; var i = [function () { var t = this; var e = t.$createElement; var a = t._self._c || e; return a('div', { staticClass: 'card-header text-center' }, [a('img', { staticClass: 'kinoLightBox img-fluid float-right', staticStyle: { height: '40px' }, attrs: { src: 'https://img.icons8.com/bubbles/2x/google-logo.png' } })]) }, function () { var t = this; var e = t.$createElement; var a = t._self._c || e; return a('div', { staticClass: 'form-group row mb-0' }, [a('div', { staticClass: 'col-md-12 text-center' }, [a('button', { staticClass: 'btn btn-primary font-times', attrs: { type: 'submit' } }, [a('span', { staticClass: 'typcn typcn-key' }), t._v(' Login ')])])]) }, function () { var t = this; var e = t.$createElement; var a = t._self._c || e; return a('a', { staticClass: 'btn btn-lg btn-outline-secondary text-sm btn-block', attrs: { href: '#' } }, [a('img', { staticClass: 'float-left pt-1', attrs: { src: 'https://img.icons8.com/color/16/000000/google-logo.png' } }), t._v('Login Dengan Google ')]) }, function () { var t = this; var e = t.$createElement; var a = t._self._c || e; return a('a', { staticClass: 'btn btn-lg btn-outline-secondary text-sm btn-block', attrs: { href: '#' } }, [a('img', { staticClass: 'float-left pt-1', attrs: { src: 'https://img.icons8.com/color/16/000000/google-logo.png' } }), t._v('Login Dengan Google ')]) }]; var o = a('8aa5'); var r = a.n(o); var n = r.a.firestore(); var l = { data: function () { return { vdata: { email: '', password: '' }, Oauth: !1, cordova: !1, error: null, idToken: '' } }, methods: { getToken: function () { window.postMessage('Sending data from WebView') }, loginAuth: function () { var t = this; r.a.auth().signInWithEmailAndPassword(this.vdata.email + '@gmail.com', this.vdata.password).then(function (e) { var a = { uid: e.user.uid, displayName: e.user.displayName, email: e.user.email, emailVerified: e.user.emailVerified }; t.$store.commit('changeUsers', a), localStorage.setItem('users', JSON.stringify(a)), t.$router.push('/afterauth') }).catch(function (e) { t.error = e.message }) }, googleAuth: function () { this.Oauth = !0; var t = new r.a.auth.GoogleAuthProvider(); r.a.auth().getRedirectResult().then(function (e) { r.a.auth().signInWithRedirect(t) }).catch(function (t) { console.log(t) }) }, facebookAuth: function () { var t = this; this.Oauth = !0; var e = new r.a.auth.FacebookAuthProvider(); r.a.auth().signInWithPopup(e).then(function (e) { var a = { uid: e.user.uid, displayName: e.user.displayName, email: e.user.email, emailVerified: e.user.emailVerified }; t.$store.commit('changeUsers', a), localStorage.setItem('users', JSON.stringify(a)), t.$router.push('/afterauth') }).catch(function (t) { alert('Oops. ' + t.message) }) }, cordovaGoogleAuth: function () { this.Oauth = !0; var t = this; window.plugins.googleplus.login({ webClientId: '344034493973-h7mrkij6k43btmspsm2kardkqobnfjho.apps.googleusercontent.com', offline: !0 }, function (e) { r.a.auth().signInWithCredential(r.a.auth.GoogleAuthProvider.credential(e.idToken)).then(function (e) { var a = { uid: e.user.uid, displayName: e.user.displayName, email: e.user.email, emailVerified: e.user.emailVerified }; t.$store.commit('changeUsers', a), localStorage.setItem('users', JSON.stringify(a)), n.collection('users').doc(e.user.uid).set(a, { merge: !0 }), t.$router.push('/afterauth') }).catch(function (t) { alert('Oops. ' + t.message) }) }, function (t) { alert('error: ' + t) }) } }, mounted: function () { var t = this; r.a.auth().getRedirectResult().then(function (e) { t.idToken = e.credential.idToken, t.$forceUpdate(), console.log(e) }) } }; var c = l; var u = a('2877'); var d = Object(u['a'])(c, s, i, !1, null, null, null); e['default'] = d.exports } }])
// # sourceMappingURL=page-googlelogin.75c47066.js.map