<template>
  <v-container 
  :fluid="$vuetify.display.smAndDown" 
 
  >
    <v-row justify="center">
      <v-col align="start" md="6" sm="12">
        <h1 style="font-weight: 500;">Here's a few of the projects I've developed</h1>
      </v-col>
    </v-row>
    <br/>
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
          v-if="!$vuetify.display.smAndDown"
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
            <v-col md="7">
              <v-img 
              class="bg-white"
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
            <v-col :class="$vuetify.display.smAndDown ? 'mb-6 mx-2 text-main' : 'my-3 text-main'">
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
        tech: 'HTML, CSS, JavaScript, TypeScript, Vue, Vuetify, Nodejs, Git, Google Cloud, Firebase, and PWA(Progressive Web App).',
        img: "img/picts/1.png",
        link: "https://dashwaste.co.za/"
      },
      {
        title: 'Virtual Edge Creatives',
        text: "I developed and currently maintaining Virtual Edge Creatives. It provides a variety of virtual services as shown in the picture below. Tech stack used include:",
        tech: 'HTML, CSS, JavaScript, Vue, Vuetify, Nodejs, Git, Google Cloud, and Firebase',
        img: "img/picts/8.png",
        link: "https://virtualedgecreatives.com/"
      },
      {
        title: 'Titchfield Tree Services',
        text: "I developed and currently maintaining Titchfield Tree Services. It provides a variety of tree removal services. CMS tools used include:",
        tech: 'Wordpress with Elementor Theme Builder other plugins',
        img: "img/picts/9.png",
        link: "https://titchfieldtreeservices.com/"
      },
      {
        title: 'Laaste Kamp',
        text: "I developed Laaste Kamp website with the following tech stack:",
        tech: 'HTML, CSS, JavaScript, Vue, Vuetify, Nodejs, and Git.',
        img: 'img/picts/3.png',
        link: "https://laastekamp.co.za/"
      },
      {
        title: 'ZeeGroup',
        text: "I redesigned and currently maintaining ZeeGroup website with the following CMS tools:",
        tech: 'Wordpress with Divi Theme Builder and other plugins.',
        img: 'img/picts/4.png',
        link: "https://zeegroup.co.za/home/"
      },
      {
        title: 'Umthi Initiatives',
        text: "Currently maintaining Umthi Initiatives website with the following CMS tools:",
        tech: 'Wordpress with Divi Theme Builder and other plugins.',
        img: 'img/picts/10.png',
        link: "https://umthi.africa/"
      },
      {
        title: 'Container Homes',
        text: "Currently maintaining Container Homes website with the following CMS tools:",
        tech: 'Wordpress with Divi Theme Builder and other plugins.',
        img: 'img/picts/11.png',
        link: "https://umthi.africa/"
      },
      {
        title: 'Shutter Boss Photography',
        text: "I developed Shutter Boss Photography website with the following tech stack:",
        tech: 'HTML, CSS, JavaScript, Vue, Vuetify, Nodejs, Git, and PWA(Progressive Web App).',
        img: 'img/picts/2.png',
        link: "https://shutter-bug-47f01.web.app/"
      },
      {
        title: 'Salary CRUD system',
        text: "I built a salary based CRUD system to manage companies' salaries. Tech-stack used include:",
        tech: 'HTML, CSS, Bootstrap 5, JavaScript, Typescript, Angular, Nodejs, and Git.',
        img: 'img/picts/6.jpg',
        link: "https://github.com/Joachim098/AngularDemo"
      },
      {
        title: 'Stock System',
        text: "I built a stock based CRUD system to manage products. Tech-stack used include:",
        tech: 'HTML, CSS, JavaScript, Vue, Vuetify, Git, and Nodejs.',
        img: 'img/picts/7.jpg',
        link: "https://github.com/Joachim098/stock-system"
      }
      
    ]
  }),
  methods: {
    next () {
      if(this.onboarding != this.items.length - 1){
        this.onboarding += 1;
      } else {
        this.onboarding = 0;
      }
    },
    prev () {
      if(this.onboarding != 0){
        this.onboarding -= 1;
      } else {
        this.onboarding = this.items.length - 1;
      }
    }
  }
}
</script>
