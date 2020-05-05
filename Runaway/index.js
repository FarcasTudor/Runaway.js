let check = [];
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const screen = document.querySelector('.app');
  const header = document.querySelector('#hed')
  const song = document.querySelector('#song');
  screen.classList.add('bgn');
  const colors = ['#000000', '#ffffff'];
  

  pads.forEach((pad, index) => {
    pad.addEventListener('click', function(e) {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  window.addEventListener('keypress', (e) => {
    sounds[e.keyCode - 49].currentTime = 0;
    sounds[e.keyCode - 49].play();
    check.push(e.keyCode - 49);
    createBubble((e.keyCode - 49)%2);
    if(check.join('') === '0001222344456670') 
      setTimeout(()=>{
        screen.classList.add('wonder');
        screen.classList.remove('bgn');
        header.classList.add('hide');
        pads.forEach(p => p.classList.add('hide'));
        song.play();        
      }, 1000);  
  })

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});