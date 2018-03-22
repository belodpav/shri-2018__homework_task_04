module.exports = function(tempName, res, data) {
    res.render(tempName, data, (err, html) => {
        res.send(html);
    });
};
