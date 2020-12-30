import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {

    public home({ view }: HttpContextContract) {
        return view.render('welcome')   
    }

    public about({ view }: HttpContextContract) {
        return view.render('about')
    }

    public contact({ view }) {
        return view.render('contact')
    }

}
