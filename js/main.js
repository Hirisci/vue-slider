let app = new Vue({
    el: '#app',
    data: {
        animation: null,
        currentIndex : 0,
        images : [
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ]
    },
    methods: {
        nextImg(){
            this.currentIndex === this.images.length-1 ? this.currentIndex = 0 : this.currentIndex++            
        },
        beforeImg(){
            this.currentIndex === 0 ? this.currentIndex = this.images.length-1 : this.currentIndex--          
        },
        selectIndex(i){
            this.currentIndex = i 
        },
        startAnimation(){
            this.animation = setInterval(()=>{this.nextImg()}, 3000)   
        },
        stopAnimation(){
            clearInterval(this.animation)
            console.log("mouse entrato");
        }
       
    },
    mounted() {
        this.startAnimation();
    },
    beforeDestroy() {
        this.stopAnimation();
    },
    });
    
