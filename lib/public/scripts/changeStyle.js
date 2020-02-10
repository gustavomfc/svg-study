var evtSource = new EventSource('http://35.202.3.243:3000/updates');

            evtSource.onmessage = function(e) {
                let data=JSON.parse(e.data);
                console.log(e.data);
                console.log(data);
                console.log('Classe Alarme: ' + data.alarme)
                if (data.alarme == 1){
                    document.getElementById("teste").setAttribute("class", "st4");
                    console.log('trocou de cor aaahahhhhh');
                }
                else if (data.alarme == 2){
                    document.getElementById("teste").setAttribute("class", "st5");
                    console.log('trocou de cor pro 5');
                }
                else{
                    console.log('hoje não, patrão');
                }
            }