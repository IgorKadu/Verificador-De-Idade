function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){

        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')

                if(fsex[0].checked){

                    gênero = 'Homem'
                    
                        if(idade >=0 && idade < 12){

                            img.setAttribute('src','assets/Criança-Masculino.jpg' || 'src','assets/Criança-Masculino(2).jpg')

                    }else if (idade < 22) {

                        img.setAttribute('src','assets/Pré-Adolescente-Masculino.jpg' || 'assets/Pré-Adolescente-Masculino(2).jpg')

                    }
                    
                    else if (idade < 35) {

                        img.setAttribute('src','assets/Adolescente-Masculino.jpg' || 'assets/Adolescente-Masculino(2).jpg')

                    }

                    else if (idade < 60) {

                        img.setAttribute('src','assets/Adulto-Masculino.jpg' || 'assets/Adulto-Masculino(2).jpg')

                    }

                    else {

                        img.setAttribute('src','assets/Idoso-Masculino.jpg' || 'assets/Idoso-Masculino(2).jpg')

                    }

                }else if(fsex[1].checked){

                        gênero = 'Mulher'

                            if(idade >=0 && idade < 12){

                                img.setAttribute('src','assets/Criança-Feminino.jpg' || 'src','assets/Criança-Feminino(2).jpg')

                        }else if (idade < 22) {

                            img.setAttribute('src','assets/Pré-Adolescente-Feminino.jpg' || 'assets/Pré-Adolescente-Feminino(2).jpg')

                        }
                        
                        else if (idade < 35) {

                            img.setAttribute('src','assets/Adolescente-Feminino.jpg' || 'assets/Adolescente-Feminino(2).jpg')

                        }

                        else if (idade < 60) {

                            img.setAttribute('src','assets/Adulta-Feminino.jpg' || 'assets/Adulta-Feminino(2).jpg')

                        }

                        else {

                            img.setAttribute('src','assets/Idosa-Feminino.jpg' || 'assets/Idosa-Feminino(2).jpg')

                        }



                    
                }

            

            

        }

        img.style.objectFit=`cover`
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

}
