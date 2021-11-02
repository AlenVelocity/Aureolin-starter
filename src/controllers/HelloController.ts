import { Controller, Get, Context, Ctx, Param } from 'aureolin'

@Controller('/hello')
export default class HelloController {
    @Get('/')
    public index(): string {
        return 'Hello World!'
    }

    /**
     *
     * @returns {string}
     * @memberof HelloController
     * @example http://localhost:3000/hello/John
     */
    @Get('/:name')
    public hello(@Ctx() ctx: Context): string {
        return `Hello ${ctx.params.name}!`
    }

    /**
     *
     * @returns {string}
     * @memberof HelloController
     * @example http://localhost:3000/hello/John/20
     */
    @Get('/:name/:age')
    public helloWithAge(@Param('name') name: string, @Param('age') age: string): string {
        return `Hello ${name}, You're Probably ${age} years old!`
    }

    /**
     *
     * @returns {string}
     * @memberof HelloController
     * @example http://localhost:3000/hello/John/20/New York
     */
    @Get('/:name/:age/:place')
    public helloWithAgeAndPlace(
        @Param('name') name: string,
        @Param('age') age: string,
        @Param('place') place: string
    ): string {
        return `Hello ${name}, You're Probably ${age} years old, and you live in ${place}!`
    }
}
