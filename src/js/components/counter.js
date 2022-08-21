export default () => ({
    init:function (){
        this.counter_display = document.getElementById('counter_display');
    },
    count:0,
    increment:function(){
        clearTimeout(this.anim_timeout);

        this.counter_display.classList.add('animate-spin');
        this.count++;
        this.anim_timeout = setTimeout(()=>{
            this.counter_display.classList.remove('animate-spin');
        },1000);

    }
})
