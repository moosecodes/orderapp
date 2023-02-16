import dummyResults from "./dummyResults";

const saveArticle = ({article_id, api_source, props}) => {
    axios.put('/api/save', { article_id, api_source })
        .then(function (response) {
            const article = props[api_source].filter(a =>  a.id === response.data.id)
            console.log(article)
            // article[0].favs = response.data.favs
        })
        .catch(function (error) {
            console.log(error);
        })
}

const likeArticle = ({article_id, api_source, props}) => {
    axios.put('/api/like', { article_id, api_source })
        .then(function (response) {
            const article = props[api_source].filter(a =>  a.id === response.data.id)
            article[0].favs = response.data.favs
        })
        .catch(function (error) {
            console.log(error);
        })
}

const track = ({article_id, api_source, props}) => {
    axios.post('/api/articleViewed', { article_id, api_source })
        .then(function (response) {
            const article = props[api_source].filter(a =>  a.id === response.data.id)
            article[0].views = response.data.views
        })
        .catch(function (error) {
            console.log(error);
        })
}

export { likeArticle, saveArticle, track }
