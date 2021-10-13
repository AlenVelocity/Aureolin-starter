import create from 'aureolin'

const main = async () => {
    const app = await create({
        port: 3000,
        root: __dirname
    })
    app.on('error', console.error)
}

main()
