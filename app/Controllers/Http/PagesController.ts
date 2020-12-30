import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {

    public home({ view }: HttpContextContract) {
        return view.render('welcome')   
    }

    public about({ view, params }: HttpContextContract) {
        const name = params.name; 
        return view.render('about', { name })
    }

    public contact({ view }) {
        return view.render('contact')
    }

}
