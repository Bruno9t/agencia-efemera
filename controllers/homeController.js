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
    }
}

module.exports=homeController;