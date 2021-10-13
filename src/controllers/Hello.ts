import { Controller, Get, Context, Ctx, Param } from 'aureolin'

@Controller('/hello')
export default class Hello {
    @Get('/')
    public index(): string {
        return 'Hello World!'
    }

    @Get('/:name')
    public hello(@Ctx() { params: { name } }: Context): string {
        return `Hello ${name}!`
    }

    @Get('/:name/:age')
    public helloWithAge(@Param('name') name: string, @Param('age') age: string): string {
        return `Hello ${name}, You're Probably ${age} years old!`
    }
}
