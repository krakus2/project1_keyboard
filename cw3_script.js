function random(){
  let table = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  return table[(Math.floor(Math.random()*table.length))];
}
let num = 0;
console.log(num.toPrecision(3));

window.onload = function(){
  let randomVar = random();
  let counter0 = 0;
  let counter1 = 0;
  document.getElementById('text').innerHTML = "Wciśnij "+ randomVar;
  let handle = document.getElementsByClassName('tablet');

  function trans(k){
      for(let i=0; i<handle.length;i++){
        if (k.key == handle[i].classList[1]){
          handle[i].classList.toggle('podswietlenie')
        }
      }

      if(k.key == randomVar.toLowerCase()){
        document.getElementById('result').innerHTML = "Bardzo dobrze. Spróbuj ponownie"
        counter1++;
        randomVar = random();
        document.getElementById('text').innerHTML = "Wciśnij "+ randomVar;
        /*setTimeout(function () {
          location.reload();
        }, 700);*/
      }
      else {
        document.getElementById('result').innerHTML = "Przypatrz się lepiej"
        counter0++;
        console.log(counter0);
      }
      /* //mozna i tak usuwac przejscie
      setTimeout(function(){
        for(let i=0; i<handle.length;i++){
          console.log(handle[i].classList)
            handle[i].classList.remove('podswietlenie')
          }
        },700);*/
  }

  function transOver(){
      for(let key of handle){
        key.classList.remove('podswietlenie');
      }
  }
  function result(counter0, counter1){
    let score;
    //console.log(counter0, counter1)
    if(counter0 == 0 && counter1 == 0){
      return 0 + "%";
    }
    score = counter1/(counter1+counter0);
    return score.toPrecision(3)*100+"%"
  }

  this.addEventListener( 'keydown', trans);
  this.addEventListener('transitionend', transOver);
  window.addEventListener('keydown', function(click){
    const audio = document.getElementById('audioClick');
    audio.currentTime = 0;
    audio.play();
  })
  button.addEventListener('click', function(){
    document.getElementById('equal').innerHTML = result(counter0, counter1);
    setTimeout(function(){
      document.getElementById('equal').innerHTML = "";
    },2000);
  });


}
