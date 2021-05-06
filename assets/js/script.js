const app = new Vue({
    el: '#root',
    data:{
      picture: '../img/logo.png',
      alarm_text: false,
      notes:[
        {
          nota:'Preparare da mangiare',
          check: false
        },
        {
          nota:'Studiare!',
          check: false
        },
        {
          nota:'fare i compiti Boolean',
          check: true
        },
        {
          nota:'Cucinare e mettere a lavare i vestiti',
          check: false
        },
        {
          nota:'Allenamento BodyMan!',
          check: false
        },
        {
          nota:'picchiare la peppa!',
          check: false
        }
      ]
    },
    methods:{

    }
});