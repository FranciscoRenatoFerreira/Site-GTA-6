let nome = document.querySelector(".nome")
let personagem=document.querySelector(".personagem")

function mudarpersonagem(nomepersonagem,imagempersonagem,corpersonagem) {
    nome.innerHTML = nomepersonagem
    personagem.src = imagempersonagem
    nome.style.color=corpersonagem
    
    
}
/* function lerFoto(foto) {

    let leitor =new FileReader()
    leitor.readAsDataURL(foto.files[0])
    leitor.onload = async function() {
        
        let desenho = await PictureInPictureWindow.ai.txt2img("transforme a pessoa desta foto em um personagem de videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombra.", 
        {
            model:"replicate:openai/gpt-image-2.5-flare",
            provider:"openai",
            input_image:leitor.result,
            quality:"medium",
            providerOptions:{ background: "transparent"}

        })
        mudarpersonagem("você",desenho,'rgb(23, 0, 233)')
    }
    
}
*/