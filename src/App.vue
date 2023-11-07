<template>
  <v-app class="bg-main" style="background: linear-gradient(to right, black, #05081e, black); font-family: Verdana;">
    <v-app-bar 
      :height="$vuetify.display.smAndDown ? '100%' : '80'"
      flat
      absolute
      :class="$vuetify.display.smAndDown ? 'mt-10' : ''"
      style="background: linear-gradient(to right, black, #05081e, black);"
      >
      <v-app-bar-title app class="" :style="$vuetify.display.smAndDown ? '' : 'margin-left: 2.5cm;'"> 
        <v-row>
          <v-col md="2">
            <router-link to="/" style="text-decoration: none;">
              <v-img contain src="@/assets/aj.png"></v-img>
            </router-link>
          </v-col>
          <v-col align="left" md="2" class="mt-7 text-primary">
            <router-link to="/" style="text-decoration: none;" class="text-primary">
              <p style="font-size: 24px; line-height: 20px; margin-left: -0.5cm;">Portfolio</p>
            </router-link>
          </v-col>
        </v-row>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-row justify="center" no-gutters v-if="!$vuetify.display.smAndDown">
        <v-col align="center" md="8" no-gutters>
          <v-row justify="space-around" class="" no-gutters>
            <v-col>
              <router-link to="/" :class="getRoute === 'home' ? 'text-primary' : 'text-secondary'" style="text-decoration: none;">
                <v-icon size="small" >mdi-home</v-icon>  <br/>
                  <p class="p"> Home </p>
              </router-link>
            </v-col>
            <v-col>
              <router-link to="/projects" :class="getRoute === 'projects' ? 'text-primary' : 'text-secondary'" style="text-decoration: none;">
                <v-icon size="small">mdi-xml</v-icon> <br/>
                  <p class="p"> Projects </p>
                </router-link>
            </v-col>
            <v-col>
              <router-link to="/services" :class="getRoute === 'services' ? 'text-primary' : 'text-secondary'" style="text-decoration: none;">
                <v-icon size="small">mdi-laptop</v-icon> <br/>
                  <p class="p"> Services </p>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-menu v-if="$vuetify.display.smAndDown">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props" class="text-info"></v-btn>
        </template>

        <v-list class="bg-white text-justify justify-space-around">
          <v-list-item
            class="text-primary"
            variant="flat"
            v-for="(item, i) in items"
            :key="i"
            :append-icon="item.icon"
            :to="item.to"
          >
            <v-list-item-title class="text-h5 text-primary">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer elevation="0" :height="$vuetify.display.smAndDown ? '100%' : '80'" absolute style="background: linear-gradient(to right, black, #05081e, black);">
     <v-container fluid>
      <v-row :justify="$vuetify.display.smAndDown ? 'center' : 'end'" :style="$vuetify.display.smAndDown ? 'display: block;' : ''">
        <v-col :align="$vuetify.display.smAndDown ? 'center' : 'end'" :cols="$vuetify.display.smAndDown ? '' : '8'">
          <p class="text-info" style="font-size: 20px;"> Social links </p>
        </v-col>
        <v-col :class="$vuetify.display.smAndDown ? 'mt-n2': ''" :align="$vuetify.display.smAndDown ? 'center' : 'start'" :cols="$vuetify.display.smAndDown ? '' : '3'">
          <a style="text-decoration: none;" href="https://www.linkedin.com/in/aganze-joakim-ngabo-609299175/" target="_blank">
            <v-icon size="30" class="text-primary mr-2">mdi-linkedin</v-icon>
          </a>
          <a style="text-decoration: none;" href="https://api.whatsapp.com/send/?phone=27670315008" target="_blank">
            <v-icon size="30" class="text-primary mr-2">mdi-whatsapp</v-icon>
          </a>
          <a style="text-decoration: none;" href="https://www.instagram.com/wasup_jo/" target="_blank">
            <v-icon size="30" class="text-primary mr-2">mdi-instagram</v-icon>
          </a>
          <a style="text-decoration: none;" href="https://www.facebook.com/joachimjs.ngabo" target="_blank">
            <v-icon size="30" class="text-primary">mdi-facebook</v-icon>
          </a>
        </v-col>
      </v-row>
     </v-container>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  computed: {
    getRoute(){
      let route = this.$router.currentRoute.value.name;
      return route;
    }
  },

  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/'},
      { title: 'Projects', icon: 'mdi-xml', to: '/projects'},
      { title: 'Services', icon: 'mdi-laptop', to: '/services'}
    ],
  }),
  mounted(){

  }
}
</script>
<style scoped>
.redirect{
  cursor: pointer;
}
</style>
