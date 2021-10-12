import { Controller, Get, Context } from 'aureolin'

@Controller('/hello')
export default class Hello {
    @Get('/')
    public index(): string {
        return 'Hello World!'
    }

    @Get('/:name')
    public hello({ params: { name } }: Context): string {
        return `Hello ${name}!`
    }

    @Get('/:name/:age')
    public helloWithAge({ params: { name, age } }: Context): string {
        return `Hello ${name}, You're Probably ${age} years old!`
    }
}
