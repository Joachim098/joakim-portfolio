<template>
  <v-container 
  fluid 
  :style="$vuetify.display.smAndDown ? '' : 'margin-bottom: 2.5cm;'"
  >
    <v-row 
    justify="center" 
    :style="$vuetify.display.smAndDown ? 'display: block;' : ''" 
    :class="$vuetify.display.smAndDown ? '': ''"
    >
      <v-col 
      align="start" 
      md="6"
      :style="$vuetify.display.smAndDown ? 'margin-top: 1cm;' : 'margin-top: 2.5cm; margin-left: 2cm;'"
      >
        <v-row 
        justify="center"
        :style="$vuetify.display.width > 650 && $vuetify.display.width < 950 ? 'margin-top: 5cm;' : ''" 
        :class="$vuetify.display.smAndDown ? 'rowBg' : ''"
        >
          <v-col :class="$vuetify.display.smAndDown ? 'text-white colBg' : 'text-white'">
            <p 
            style="font-weight: 800; font-size: 35px; display: inline-flex;"
            > 
              Hi,<v-img class="ml-4" :width="$vuetify.display.smAndDown ? '40' : '50'" src="@/assets/hand-wave.svg"/> 
            </p>
            <br/><br/>
            <p 
            :style="$vuetify.display.smAndDown ? 'font-weight: 500; font-size: 26px; margin-top: 15px;' : 'font-weight: 500; font-size: 35px;'"
            > 
              I'm Aganze Joakim Ngabo.
              A full-stack web developer with<span class="text-primary"> 5<span style="font-size: 20px;">+</span> years</span> of professional work experience.
            </p>
            <br/>
            <p class="text-#BDBDBD" style="text-align: justify;">
              I design and develop web apps that make people's lives and businesses' processes 
              much simpler. Let me help you bring your ideas to life!
            </p>
          </v-col>
        </v-row>
        <br/>
        <v-row justify="center" :style="$vuetify.display.smAndDown ? 'display: block;' : ''">
          <v-col align="center">
            <v-btn 
            rounded 
            :block="$vuetify.display.width < 600"
            :width="$vuetify.display.width > 650 && $vuetify.display.width < 950 ? '300' : '100%'"
            height="60"
            elevation="0"
            href="#about"
            @click="showAboutView = true"
            style="border: 1px solid #FF6F00; background-color: transparent;"
            class="text-white"> About Me <v-icon class="ml-2">mdi-information-outline</v-icon> </v-btn>
          </v-col>
          <v-col align="center">
            <v-btn 
            rounded 
            :block="$vuetify.display.width < 650 "
            :width="$vuetify.display.width > 650 && $vuetify.display.width < 950 ? '300' : '100%'"
            height="60"
            elevation="24"
            href="#contact"
            @click="showContactView = true"
            style="border: 1px solid #FF6F00; background-color: transparent;"
            class="text-white"> Contact Me <v-icon class="ml-2">mdi-cellphone</v-icon> </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="!$vuetify.display.smAndDown">
        <v-img 
        contain
        width="550"
        lazy-src="../../public/16.png"
        src="../../public/16.png"
        style="position: absolute; right: 0;"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="info"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <div id="about"></div>
    <AboutView v-if="showAboutView"/>
    <Contact v-if="showContactView" id="contact"/>
  </v-container>
</template>

<script>
import AboutView from '@/views/AboutView.vue'
import Contact from '@/components//contact.vue';

export default {
  name: 'HelloWorld',
  components:{
    AboutView,
    Contact
  },
  data: () => ({
    showContactView: false,
    showAboutView: false
    
  }),
}
</script>
<style scoped>
.rowBg{
  background-image: url('../../public/16.png'); 
  background-size: 400px; 
  background-position: center; 
  background-attachment: scroll;
  padding-top: 3cm; 
}

</style>