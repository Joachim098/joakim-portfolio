<template>
  <v-container 
  :fluid="$vuetify.display.smAndDown" 
  :style="$vuetify.display.width > 650 
  && $vuetify.display.width < 950 ? 'margin-top: 7cm;' 
  : $vuetify.display.width < 650 ? 'margin-top: 3.5cm;' : 'margin-top: 2cm;'"
  >
    <v-row justify="center">
      <v-col align="start" md="6">
        <h2>I've developed a lot of projects using a variety of tech stack. Here's a few of them:</h2>
      </v-col>
    </v-row>
    <v-card
      flat
      class="text-info"
      style="background-color: transparent;"
      rounded="0"
    >
    <v-card-actions class="justify-space-between">
        <v-btn
          variant="plain"
          icon="mdi-chevron-left"
          @click="prev"
          class="text-primary"
        ></v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="item in items"
            :key="`btn-${item.title}`"
            v-slot="{ isSelected, toggle }"
          >
            <v-btn
              :density="$vuetify.display.smAndDown ? 'compact' : 'comfortable'"
              :variant="isSelected ? 'outlined' : 'text'"
              icon="mdi-record"
              @click="toggle"
              class="text-primary"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          variant="plain"
          icon="mdi-chevron-right"
          @click="next"
          class="text-primary"
        ></v-btn>
      </v-card-actions>
      <v-window v-model="onboarding">
        <v-window-item
          v-for="item in items"
          :key="item.title"
        >
          <v-card
            class="d-flex justify-center align-center"
          >
          <v-row justify="center" :style="$vuetify.display.smAndDown ? 'display: block;' : ''">
            <v-col md="5">
              <v-img 
              height="380px" 
              :class="$vuetify.display.smAndDown ? 'bg-main' : 'ma-2 bg-main'" 
              contain 
              :lazy-src="item.src"
              :src="item.img"
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
            <v-col :class="$vuetify.display.smAndDown ? 'mb-6 mx-2 text-main' : 'mt-16 text-main'">
              <h2>{{ item.title }}</h2>
              <br/>
              <p> {{ item.text }}</p>
              <br/>
              <p>{{ item.tech }}</p>
              <br/> 
              <a :href="item.link" target="_blank" style="text-decoration: none;">
                <v-btn height="60" elevation="24" class="bg-main text-primary"> 
                  <span style="font-size: 20px;"> {{ item.title == 'Salary CRUD system' || item.title == 'Stock System' ? 'Visit Git Repo' : 'Vist page' }}</span> 
                  <v-icon class="text-primary mx-8" size="x-large">mdi-chevron-triple-right</v-icon>
                </v-btn>
              </a>
            </v-col>
          </v-row>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
    
</template>

<script>

export default {
  name: 'Projects',

  data: () => ({
    onboarding: 0,
    items: [
      {
        title: 'Dash Waste',
        text: "I developed and currently maintaining Dash Waste web app. It provides waste management services, pretty much like uber services. Tech stack used include:",
        tech: 'Vue, Vuetify, JavaScript, TypeScript, Nodejs, Git, Google Cloud, Firebase, and PWA(Progressive Web App).',
        img: "img/picts/1.jpg",
        link: "https://dashwaste.co.za/"
      },
      {
        title: 'Shutter Boss Photography',
        text: "I developed Shutter Boss Photography website with the following tech stack:",
        tech: 'Vue, Vuetify, JavaScript, Nodejs, Git, and PWA(Progressive Web App).',
        img: 'img/picts/2.jpg',
        link: "https://shutterboss.co.za/"
      },
      {
        title: 'Laaste Kamp',
        text: "I developed Laaste Kamp website with the following tech stack:",
        tech: 'Vue, Vuetify, JavaScript, Nodejs, and Git.',
        img: 'img/picts/3.jpg',
        link: "https://laastekamp.co.za/"
      },
      {
        title: 'ZeeGroup',
        text: "I redesigned and currently maintaining ZeeGroup website with the following tech stack:",
        tech: 'Wordpress with Divi Theme Builder.',
        img: 'img/picts/4.jpg',
        link: "https://zeegroup.co.za/home/"
      },
      {
        title: 'Salary CRUD system',
        text: "I built a salary based CRUD system to manage companies' salaries. Tech-stack used include:",
        tech: 'Angular, Typescript, Nodejs, Git, and Bootstrap 5.',
        img: 'img/picts/6.jpg',
        link: "https://github.com/Joachim098/AngularDemo"
      },
      {
        title: 'Stock System',
        text: "I built a stock based CRUD system to manage products. Tech-stack used include:",
        tech: 'Vue, Vuetify, JavaScript, Git, and Nodejs.',
        img: 'img/picts/7.jpg',
        link: "https://github.com/Joachim098/stock-system"
      }
      
    ]
  }),
  methods: {
    next () {
      if(this.onboarding < 5){
        this.onboarding += 1;
      }
    },
    prev () {
      if(this.onboarding != 0){
        this.onboarding -= 1;
      }
    }
  }
}
</script>
