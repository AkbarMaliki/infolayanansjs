<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="loginAuth">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="vdata.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="vdata.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
              <br>
              <p class="text-center font-times">Atau login menggunakan</p>
              <br>
              <button type="button" @click="googleAuth" class="btn btn-sm btn-outline-dark text-red btn-block  "><span class="typcn typcn-social-google-plus-circular"></span> Google</button>
             <br>
              <button type="button" @click="facebookAuth" class="btn btn-sm btn-outline-dark text-green btn-block  "><span class="typcn typcn-social-facebook-circular"></span> Facebook</button>
           <br>
              <button type="button" @click="cordovaGoogleAuth" class="btn btn-sm btn-outline-dark text-yellow btn-block  "><span class="typcn typcn-social-google-plus-circular"></span> Google</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      vdata: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    loginAuth() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.vdata.email, this.vdata.password)
        .then(data => {
          let user = {
            uid:data.user.uid,
            displayName:data.user.displayName,
            email:data.user.email,
            emailVerified:data.user.emailVerified
          }
          this.$store.commit('changeUsers', user)
            localStorage.setItem('users', JSON.stringify(user))
          this.$router.push('/auth/dashboard')
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    googleAuth(){
      const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((data) => {
            let user = {
            uid:data.user.uid,
            displayName:data.user.displayName,
            email:data.user.email,
            emailVerified:data.user.emailVerified
          }
          this.$store.commit('changeUsers', user)
            localStorage.setItem('users', JSON.stringify(user))
          this.$router.push('/auth/dashboard')
        }).catch((err) => {
          alert('Oops. ' + err.message)
        });
    },
    facebookAuth(){
      const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then((data) => {
            let user = {
            uid:data.user.uid,
            displayName:data.user.displayName,
            email:data.user.email,
            emailVerified:data.user.emailVerified
          }
          this.$store.commit('changeUsers', user)
            localStorage.setItem('users', JSON.stringify(user))
          this.$router.push('/auth/dashboard')
        }).catch((err) => {
          alert('Oops. ' + err.message)
        });
    },
    cordovaGoogleAuth(){
       let that = this;
      window.plugins.googleplus.login(
        {},
        function(datanya) {
          alert(JSON.stringify(datanya))
          firebase
            .auth()
            .signInWithEmailAndPassword(datanya.email, 'kinonotabi')
            .then(data => {
              let user = {
                uid:data.user.uid,
                displayName:data.user.displayName,
                email:data.user.email,
                emailVerified:data.user.emailVerified
              }
              that.$store.commit('changeUsers', user)
                localStorage.setItem('users', JSON.stringify(user))
              that.$router.push('/auth/dashboard')
            })
            .catch(err => {
              firebase
                .auth()
                .createUserWithEmailAndPassword(datanya.email, 'kinonotabi')
                .then(data => {
                  data.user
                    .updateProfile({
                      displayName: 'Tanpa Nama'
                    })
                    .then(() => {
                      console.log('Login Berhasil')
                      that.$router.push('/auth/login')
                    });
                })
                .catch(err => {
                  that.error = err.message;
                });
            });
        },
        function(error) {
          alert(JSON.stringify(error));
        }
      );
    },
  },
  mounted() {
      this.$store.dispatch('ceklogin',{true:'/auth/dashboard',false:'/auth/login'})
        document.addEventListener('deviceready', function(){
          const fbAuth = new FirebaseAuth({
              allowDomains: ['blakgeek.com'] // optionally restrict the domains that can used to log into the app.
          })
          // on succesful sign in this event will be fired on the window (fancy name huh?)
            window.addEventListener('signinsuccess', function (event) {

                alert('login berhasil');
                // the detail property of the event will contain the information about the user 
                // ("token", "id", "name", "email", "id",  "photoUrl")
                console.dir(event.detail);
            }, false);

            // on an error during sign in this even will raised
            window.addEventListener('signinfailure', function (event) {

                alert('login gagal');
                // the detail property will contain the error details 
                // (code, message and optionally the domain)
                // domain is included if the domain of user's email was not in the allowDomain list
                console.error(event.detail)
            }, false);
          fbAuth.signIn();
        })
  },
};
</script>