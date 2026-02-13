function startConfetti(){
    for(let i=0;i<50;i++){
        const conf = document.createElement('div');
        conf.innerHTML = '🎉';
        conf.style.position='absolute';
        conf.style.left=Math.random()*100+'vw';
        conf.style.top='-50px';
        conf.style.fontSize=(20+Math.random()*20)+'px';
        conf.style.animation=`confettiFall ${3 + Math.random()*2}s linear infinite`;
        document.body.appendChild(conf);
    }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes confettiFall{
    0%{transform:translateY(0px) rotate(0deg);}
    100%{transform:translateY(100vh) rotate(360deg);}
}`;
document.head.appendChild(style);
