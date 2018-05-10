define(['vue', 'api','datetime','chart','login'], function(Vue, api,date,chart,login) {

    new Vue({
        el: '#app',

        data: {

            popup:false,
             date:'2017-09-10',
             time:'09:00'
        },
        created: function() {
         
        },
        watch: {
         date:function(val){
          
         }
        },
        computed: {
            
        },
        mounted:function(){
            var that=this;
            login.then(function(res){
                // that.login.show();
            });

            var ctx=that.$refs.myChart;

              ctx.width=document.documentElement.clientWidth
                ctx.height="250";

             this.gradient =ctx.getContext('2d').createLinearGradient(0, 0, 0, 450);
       this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
       this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
       this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)'); 


       this.gradient2 =ctx.getContext('2d').createLinearGradient(0, 0, 0, 450);
       this.gradient2.addColorStop(0, 'rgba(0, 0,255, 0.7)')
       this.gradient2.addColorStop(0.5, 'rgba(0, 0, 255, 0.55)');
       this.gradient2.addColorStop(1, 'rgba(0, 0, 255, 0.2)');  

            
           
           
        
        
            var myBarChart = new chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "名字特别", "Green", "Purple", "Orange"],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            // backgroundColor: this.gradient,
            borderColor:this.gradient,
            borderWidth:1,
            fill: false,
        },{
            label: '',
            data: [2, 9, 13, 15, 12, 23],
            // backgroundColor: this.gradient2,
            borderColor:this.gradient2,
            borderWidth:1,
            fill: false,
        }]
    },
    options: {
        legend:{
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                gridLines:{
                    lineWidth:.5,
                  color:'rgba(0,0,0,.1)',
                  zeroLineColor:'rgba(0,0,0,.1)',
                  zeroLineWidth:.5
                }
            }],
            xAxes:[{
              ticks: {
                    autoSkip:false
                },

                gridLines:{
                    lineWidth:.5,
               color:'rgba(0,0,0,.1)',
              zeroLineColor:'rgba(0,0,0,.1)',
                  zeroLineWidth:.5
                }
            }]
        },
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
         
            mode: 'index',
            intersect: false,
            callbacks:{
              label:function(tooltipItem, data){
                return (data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]+'厉害')
                
              },
              labelColor:function(tooltipItem, chart){
                var colors=['rgba(255, 0,0, 0.7)','rgba(0, 0,255, 0.7)'];
            
                 return {
                        borderColor: colors[tooltipItem.datasetIndex],
                        backgroundColor: colors[tooltipItem.datasetIndex]
                    }
              }
            }
          }
       
       
    }
})
    
        },
        methods: {
           getdate:function(){
            this.date=''
            this.login.show();
           }
        }
    });
})