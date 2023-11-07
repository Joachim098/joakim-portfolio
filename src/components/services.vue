<template>
<v-container 
:fluid="$vuetify.display.smAndDown" 
:style="$vuetify.display.width > 650 
  && $vuetify.display.width < 950 ? 'margin-top: 7cm;' 
  : $vuetify.display.width < 650 ? 'margin-top: 3.5cm;' : 'margin-top: 2cm;'"
>
  <v-row justify="center">
    <v-col md="4">
      <h2>Let me help you bring your ideas to life!</h2>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col>
      <v-card elevation="10" :height="$vuetify.display.smAndDown ? '100%' : '520'" :variant="$vuetify.display.smAndDown ? 'outlined' : 'elevated'">
        <v-img cover height="215" lazy-src="@/assets/webdev.jpg" src="@/assets/webdev.jpg">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="info"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
        <v-card-title class="text-p"> Web Developement </v-card-title>
        <v-card-text>
          Let's bring all your ideas to life and make your online presence more efficient with a professional website that will facilitate your life or your business.
          <br/><br/> Like Paul Cookson said, <br/> <br/> "Websites promote you 24/7: No employee will do that." <br/> <br/> I second that!
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="10" :height="$vuetify.display.smAndDown ? '100%' : '520'" :variant="$vuetify.display.smAndDown ? 'outlined' : 'elevated'">
        <v-img cover height="215" lazy-src="@/assets/pwa.jpg" src="@/assets/pwa.jpg">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="info"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
        <v-card-title> {{ $vuetify.display.smAndDown ? 'PWA Developement' : 'Progressive Web App Developement (PWA)' }} </v-card-title>
        <v-card-text>
          Progressive Web App is a website that acts as a native application. It can be installed in every device and can used by any operating system
          like Android, IOS, Windows, etc. <br/><br/>
          The most coolest part why you need a PWA is that unlike a native app, you don't need to pay any ASP with PWA. Complete free installation and easy to share.
          <br/> <br/>
          <span style="font-weight: bold;">Guess what?</span> -with PWA, you can access your web app even while offline! Pretty cool yeah? Let's get you your own PWA!
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="10" :height="$vuetify.display.smAndDown ? '100%' : '520'" :variant="$vuetify.display.smAndDown ? 'outlined' : 'elevated'">
        <v-img cover height="215" lazy-src="@/assets/maintainance.jpg" src="@/assets/maintainance.jpg">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="info"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
        <v-card-title> Web maintainance </v-card-title>
        <v-card-text>
          <ul class="ml-4">
            <li> Scheduled backups</li>
            <li> Clean coding practices</li>
            <li> Web redesign</li>
            <li> SEO improvements </li>
            <li> Web features improvements </li>
          </ul>
          <br/>
          "Your website is the window of your business. Kepp it fresh, keep it exciting!" <br/><br/>
          -Jay Conrad Levinson
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col>
      <v-card elevation="10" :height="$vuetify.display.smAndDown ? '100%' : '520'" :variant="$vuetify.display.smAndDown ? 'outlined' : 'elevated'">
        <v-img cover height="250" lazy-src="@/assets/hosting.jpg" src="@/assets/hosting.jpg">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="info"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
        <v-card-title> Web Hosting </v-card-title>
        <v-card-text>
          You have a webiste and need to host it online? Say less. Let's get you online ASAP! <br/><br/>
          You want to change, migrate or connect your domain name server to another? <br/><br/>
          You want to configure your web mail server? <br/><br/>
          <h2>I got you!</h2>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="10" :height="$vuetify.display.smAndDown ? '100%' : '520'" :variant="$vuetify.display.smAndDown ? 'outlined' : 'elevated'">
        <v-img cover height="250" lazy-src="@/assets/backend.webp" src="@/assets/backend.webp">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="info"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
        <v-card-title> Back-end Implementation </v-card-title>
        <v-card-text>
          Say you have your website's font-end ready and in need to implement the back-end? - Say less. <br/> <br/>
          Back-end is literally the back bone, the core of any website that handles all of your processes... or, as a geek would say, - all client's requests. 
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container> 
</template>

<script>

export default {
  name: 'Services',

  data: () => ({
    //
  }),
}
</script>
