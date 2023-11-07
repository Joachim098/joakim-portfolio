<template>
  <div>
    <div v-if="$vuetify.display.smAndDown" style="margin-top: 1cm;">
      <v-row justify="center">
        <v-col align="center">
          <v-card class="bg-info" elevation="10">
            <v-row style="display: block;">
              <v-col md="5">
                <v-img 
                contain 
                lazy-src="@/assets/17.jpg"
                src="@/assets/17.jpg"
                class="bg-main"
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
              <v-col>
                <v-card-title class="mt-2 text-black"> 
                  <h2> About Me </h2> 
                </v-card-title>
                <v-card-subtitle class="text-#0b2b39"> <p>Fun fact about me: - I'm a foodie!
                  <v-icon class="text-primary">mdi-emoticon-wink</v-icon> </p>
                </v-card-subtitle>
                <br/>
                <v-card-text>
                  <v-row justify="center">
                    <v-row>
                      <v-col align="justify" style="font-size: 18px; line-height: 30px; font-weight: 500;">
                        I am an ambitious problem solver with a passion for technology and, 3 years of professional work experience. As 
                        someone who takes responsibility for his own personal development, I am continually evaluating and upgrading my skills 
                        so that I stay at the cutting edge of technology. 
                      </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-primary">
                          <h2> Hobbies </h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col align="justify">
                          For someone who's both an introvert and extrovert, I'm quite an adventurous person too! haha <br/>
                          <br/>Here's a few of my hobbies: <br/> <br/>
                          <ul class="ml-4">
                            <li> 
                              I love exploxing new places, chasing sunsets, and of course, trying out restaurant places 
                              beacuse you know... a typical foodie trait.
                            </li> <br/>
                            <li>
                              I enjoy spending my free time either by being 
                              at home watchin my anime or by going out with friends when possible.
                            </li> <br/>
                            <Li>
                              I quite enjoy playing guitar as well. Music is good for my soul.
                            </Li> <br/>
                            <li>
                              Some regular exercises to stay in good shape are very 
                              much needed every weekend!
                            </li>
                          </ul>  
                        </v-col>
                      </v-row>
                  </v-row>
                </v-card-text> 
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-container v-if="!$vuetify.display.smAndDown" style="margin-top: 2.5cm;">
      <v-row justify="center">
        <v-col>
          <v-card class="bg-info pr-4" elevation="10">
            <v-row>
              <v-col md="5">
                <v-img 
                contain 
                lazy-src="@/assets/17.jpg"
                src="@/assets/17.jpg"
                class="bg-main"
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
              <v-col>
                <v-card-title class="mt-2 text-black"> 
                  <h2> About Me </h2> 
                </v-card-title>
                <v-card-subtitle class="text-#0b2b39"> Here's a fun fact about me... I'm a foodie! <v-icon class="text-primary">mdi-emoticon-wink</v-icon> </v-card-subtitle>
                <br/>
                <v-card-text>
                  <v-row justify="center">
                    <v-row>
                      <v-col align="justify" style="font-size: 18px; line-height: 30px; font-weight: 500;">
                        I am an ambitious problem solver with a passion for technology and, 3 years of professional work experience. As 
                        someone who takes responsibility for his own personal development, I am continually evaluating and upgrading my skills 
                        so that I stay at the cutting edge of technology. 
                      </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-primary">
                          <h2> Hobbies </h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col align="justify">
                          For someone who's both an introvert and extrovert, I'm quite an adventurous person too! haha <br/>
                          <br/>Here's a few of my hobbies: <br/> <br/>
                          <ul class="ml-4">
                            <li> 
                              I love exploxing new places, chasing sunsets, and of course, trying out restaurant places 
                              beacuse you know... a typical foodie trait.
                            </li> <br/>
                            <li>
                              I enjoy spending my free time either by being 
                              at home watchin my anime or by going out with friends when possible.
                            </li> <br/>
                            <Li>
                              I quite enjoy playing guitar as well. Music is good for my soul.
                            </Li> <br/>
                            <li>
                              Some regular exercises to stay in good shape are very 
                              much needed every weekend!
                            </li>
                          </ul>  
                        </v-col>
                      </v-row>
                  </v-row>
                </v-card-text> 
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>