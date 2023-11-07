<template>
  <v-container :fluid="$vuetify.display.smAndDown" style="margin-top: 2.5cm;">
    <v-row justify="center">
      <v-col align="center">
        <h1 class="text-info">Get in touch with me</h1>
      </v-col>
    </v-row>
    <br/><br/>
    <v-timeline 
      align="center" 
      line-color="primary" 
      line-thickness="3" 
      :side="$vuetify.display.smAndDown ? 'start' : ''" 
      :truncate-line="$vuetify.display.smAndDown ? 'end' : ''" 
      :style="$vuetify.display.smAndDown ? 'display: block;' : ''"
      >
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        dot-color="primary"
        :icon="item.icon"
        fill-dot
        width="100%"
        height="200"
        
      >
        <v-card elevation="0">
          <v-card-title class="bg-primary">
            <h3> {{ item.title }} </h3>
          </v-card-title>
          <v-card-text class="bg-white text--primary mt-4">
            <h4 class="mb-3">{{ item.text }}</h4>
            <a :href="item.link" style="font-size: 20px; text-decoration: none;" class="text-primary"> {{ item.text2 }} </a>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'Contact',
  
    data: () => ({
      items: [
        {
          icon: 'mdi-card-account-phone',
          title: 'Cell Number',
          text: 'Call or whatsapp me at this number below',
          text2: '0670315008',
          link: 'tel:+27670315008'
        },
        {
          icon: 'mdi-gmail',
          title: 'Email',
          text: 'Contact me via my email below',
          text2: 'joachimngabo@gmail.com',
          link: 'mailto:joachimngabo@gmail.com'
        }
      ],
    }),
  }
  </script>
  <style lang="scss">

  </style>
  