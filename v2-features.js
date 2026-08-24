// Jackson Metronome V2 upgrade module
// Speed training, gap click and practice tracking foundation
const JacksonV2={
  practice:{seconds:0,running:false},
  speed:{start:80,target:140,step:2,bars:4,current:80},
  gap:{enabled:false,silentBars:1,active:false},
  startSpeedTraining(){this.speed.current=this.speed.start;},
  nextSpeed(){if(this.speed.current<this.speed.target)this.speed.current=Math.min(this.speed.target,this.speed.current+this.speed.step);return this.speed.current;},
  toggleGap(){this.gap.enabled=!this.gap.enabled;return this.gap.enabled;},
  save(){localStorage.setItem('jackson-v2',JSON.stringify(this));}
};
window.JacksonV2=JacksonV2;