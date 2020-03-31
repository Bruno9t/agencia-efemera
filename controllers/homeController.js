const path = require('path')

const fs = require('fs')

const homeController={
    index: (req,res)=>{
        let servicos = [
            {nome:'Desenvolvimento web',imagem:'/imagens/undraw_dev_focus.svg'},
            {nome:'Consultoria UX',imagem:'/imagens/undraw_mobile_apps.svg'},
            {nome:'Marketing Digital',imagem:'/imagens/undraw_social_dashboard.svg'},
            {nome:'Suporte técnico',imagem:'/imagens/undraw_dev_focus.svg'},
            {nome:'Suporte técnico',imagem:'/imagens/undraw_mobile_apps.svg'}
        ]

        let banners=[
            'imagens/banner.jpg',
            '/imagens/imagem1.jpg',
            '/imagens/imagem2.jpg',
            '/imagens/imagem3.jpg'
        ]
        res.render('index',{title:'Home',listaServicos:servicos,listaBanners:banners})
    },
    contato(req,res){
        let {nome,email,mensagem} = req.body

        let infoContato = {nome, email,mensagem}
        

        let fileContato = path.join('db','contatos.json')

        let listaContato = []

       

        if(fs.existsSync(fileContato)){
            // trazer informações do arquivo
            //adicionar nova posição/conteúdo

            listaContato = fs.readFileSync(fileContato,{encoding:'utf-8'})
            listaContato = JSON.parse(listaContato)

        }

        listaContato.push(infoContato)

        listaContato = JSON.stringify(listaContato)
        fs.writeFileSync(fileContato,listaContato)

        res.render('contato',{nome, email,title:'contato'})
    },
    newsletter(req,res){
        let {nome,email}=req.body

        let infoNewsletter = {email,date:new Date()}
        

        let fileNewsletter = path.join('db','newsletter.json')

        let listaNewsletter = []

       
        if(fs.existsSync(fileNewsletter)){
            // trazer informações do arquivo
            //adicionar nova posição/conteúdo


            listaNewsletter = fs.readFileSync(fileNewsletter,{encoding:'utf-8'})
            listaNewsletter = JSON.parse(listaNewsletter)

            let user = listaNewsletter.find(e=>{
                return e.email == email
            })
    
            if(user){
                res.render('resNewsExist',{nome,email,title:'Já existe'})
            }

        }


        listaNewsletter.push(infoNewsletter)

        listaNewsletter = JSON.stringify(listaNewsletter)
        fs.writeFileSync(fileNewsletter,listaNewsletter)


        res.render('resNew',{nome,email,title:'newsletter'})
    },
    list(req,res){

        let fileNewsletter = path.join('db','newsletter.json')
        let listaNewsletter = fs.readFileSync(fileNewsletter,{encoding:'utf-8'})
        listaNewsletter = JSON.parse(listaNewsletter)

        let fileContato = path.join('db','contatos.json')
        listaContato = fs.readFileSync(fileContato,{encoding:'utf-8'})
        listaContato = JSON.parse(listaContato)


        res.render('subscribers',{contatos:listaContato,newsletter:listaNewsletter, title:'Subscribers'})


    }

}

module.exports=homeController;