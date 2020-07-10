/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
          // ? ================================================
        } else {
          console.warn('Push messaging is not supported');
        }
    },
    registered (sw) {
      console.log('Service worker has been registered.')
      window.swReg = sw 
      // console.log(window.swReg)
      sw.addEventListener('push', function (event) {
        console.log('push muncul 1')
        event.waitUntil(self.registration.showNotification(data.title, opt))
      })
      // swReg = sw
    },
    cached () {
      console.log('Content has been cached for offline use.')
      console.log('self',self)
      self.addEventListener('push', function (event) {
        if (event.data) {
          data = JSON.parse(event.data.text())
        }
        console.log('push',data)
        let opt = {
          body: data.content, // adalah text dari notifikasi yang lebih jelas dari title
          icon: 'https://infolayanans.space/api/icon.png', // bisa url ke luar atau local image
          // image: './static/icon.png', // memunculkan image di notifikasi
          dir: 'ltr', // left to right (ltr) atau right to left (rtl)
          lang: 'en-US', // standard
          vibrate: [100, 50, 200], // device bergetar apabila ada notifikasi
          badge: 'https://infolayanans.space/api/icon.png', // icon kecil di drawer
          // sound: '../notif.mp3', // sound saat notifikasi masuk (belum semua support)
          //! advance option
          // tag: 'confirm-notification', // kita men set tag agar notifikasi tidak menstack di device
          // renotify: true, // apabila tag sama di dalam beberapa notifikasi, maka status notifikasi akan dianggap baru dan device akan bergetar, jadi apabila false maka tag sama device tidak akan bergetar
          data: {
            url: data.url.link // digunakan untuk menyimpan data env di dalam service worker
            // bisa diakses var notif = event.notification ; notif.data.url
          },
          // actions: [
          //   //! aksi saat notifikasi di pilih
          //   {
          //     action: 'confirm',
          //     title: 'Yes',
          //     icon: './static/icon.png'
          //   },
          //   {
          //     action: 'cancel',
          //     title: 'No',
          //     icon: './static/icon.png'
          //   }
          // ]
        }
        event.waitUntil(self.registration.showNotification(data.title, opt))
      })
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
