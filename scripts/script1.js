let arrA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let vetor = [ 5 * 9, 7 * 3, 9 * 8, 9 * 3, 24 / 3, 45 / 5,
       30 / 6, 24 / 6, 7 * 4, 7 * 7, 5 * 5, 3 * 4, 
       21 / 3, 12 / 2, 27 / 9, 18 / 9];

vetor.forEach(function(e){
    num = arrA[Math.floor(Math.random()*arrA.length)];
    arrA.splice(arrA.indexOf(num), 1);
    let img = document.getElementById('ele' + num);
    img.ondragstart = iniciardrag;
    divreceb = document.getElementById('receb' + num);
    divreceb.ondrop = receberImagem;
    divreceb.ondragover = permitirSoltar;
    divreceb.ondragleave = soltarNum;
});

arrA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function iniciardrag(ev){
ev.dataTransfer.setData("text", ev.target.id);
}


arrA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let arrB = ['5 x 9 = 45', '7 x 3 = 21', '9 x 8 = 72', '9 x 3 = 27', '24 : 3 = 8', '45 : 5 = 9',
'30 : 6 = 5', '24 : 6 = 4', '7 x 4 = 28', '7 x 7 = 49', '5 x 5 = 25', '3 x 4 = 12', 
'21 : 3 = 7', '12 : 2 = 6', '27 : 9 = 3', '18 : 9 = 2']; 

function receberImagem(ev){
        ev.preventDefault();
        const ca = document.getElementById(ev.target.id);
        var dados = ev.dataTransfer.getData("text");
        let imagem = document.getElementById(dados);
        ev.target.classList.remove('certo'); 
        document.getElementById('c').style.backgroundColor = 'white';
        document.getElementById('c').innerHTML = '   *Resultado Incorreto   ';
        y = 1;   
        for (y = 0;y<16;y++) {
        if(arrB[y] == ((ca.textContent +' = '+(imagem.textContent)))){
            arrA.splice(arrA.indexOf(0), 1);
            let ba = ('   =   ' + imagem.textContent + ' ');
            console.log(ba);
            ev.target.append(ba);             
            ev.target.classList.add('certo');                                         
            ev.target.classList.add('bg-success');    
            ev.target.classList.add('text-light'); 
            ev.target.classList.remove('certo');             
            imagem.setAttribute('draggable', false); 
            imagem.innerHTML = '';
            document.getElementById('c').innerHTML = ''; 
            document.getElementById('c').style.backgroundColor = 'transparent';             
            if (arrA.length === 0){
                document.getElementById("table2").remove();
                document.getElementById('c').classList.add('bg-success');    
                document.getElementById('c').classList.add('text-light');
                document.getElementById('c').innerHTML = '<br><br>VOCÊ ACERTOU TUDO, MEUS PARABÉNS!!!';       
            }else{
                //pass
            }
        }else{ 
                  
        }        
}
}

function permitirSoltar(ev){
ev.preventDefault();
console.log('soltei');
ev.target.classList.add('certo'); 

}

function soltarNum(ev) {
    ev.preventDefault();
    ev.target.classList.remove('certo'); 
    console.log('denovo');
}
