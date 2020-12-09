module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db')

        db.read_products().then((product) => {
            res.status(200).send(product)
        })
            .catch((err) => {
                res.status(500).send(err)
                console.log(err)
            })
    },
    getOneProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.read_product([id]).then((product) => {
            res.status(200).send(product)
        })
            .catch((err) => {
                res.status(500).send(err)
                console.log(err)
            })

    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body

        db.create_product([name, description, price, image_url]).then((product) => {
            res.status(200).send(product)
        })
            .catch((err) => {
                res.status(500).send(err)
                console.log(err)
            })
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { name, description, price, image_url } = req.body

        db.update_product([name, description, price, image_url, id]).then((product) => {
            res.status(200).send(product)
        })
            .catch((err) => {
                res.status(500).send(err)
                console.log(err)
            })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.delete_product([id]).then(() => {
            res.sendStatus(200)
        })
            .catch((err) => {
                res.status(500).send(err)
                console.log(err)
            })
    },
}
