const updateCount = (req, res) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries)
        })
        .catch(err => res.status(400).json("unable to get entries"))
}
export default updateCount;
