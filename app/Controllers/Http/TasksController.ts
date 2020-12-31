import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class TasksController {
    public index ({ view }: HttpContextContract) {
        return view.render('tasks/index')
    }

    public async store ({ request, response, session }: HttpContextContract) {
        const validationSchema = schema.create({
            title: schema.string({ trim: true }, [
                rules.maxLength(255), 
            ])
        })

        const validatedData = await request.validate({
            schema: validationSchema, 
            messages: {
                'title.required': 'Enter task title',
                'title.maxLength': 'Task title cannot exceed 255 characters'
            }, 
        })

        await Task.create({
           title: validatedData.title
        })

        session.flash('notification', 'Task Added!')

        return response.redirect('back')

    }
}
